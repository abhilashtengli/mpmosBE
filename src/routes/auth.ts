import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { prisma } from "@lib/prisma";
import validator from "validator";
import TokenService from "@services/tokenservice";
import {
  forgetPasswordLimiter,
  loginLimiter,
  passwordResetLimiter,
  resendCodeLimiter,
  signupLimiter,
  verifyEmailLimiter
} from "@services/ratelimiter";
import { RequestVerification } from "@services/requestCode/requestCodeToVerify";
import { createSessionId } from "@utils/session";
import { userAuth } from "@middleware/auth";
import { signupValidation } from "@utils/validation";
import { sseService } from "@services/sseService";

const authRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

authRouter.post(
  "/signup",
  // userAuth,
  signupLimiter,
  async (req: Request, res: Response) => {
    try {
      // await signupValidation(req);
      const result = await signupValidation.safeParse(req.body);
      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }
      const { name, email, password, role } = req.body;
      const existingUser = await prisma.user.findUnique({
        where: { email },
        select: { id: true }
      });

      if (existingUser) {
        res.status(409).json({
          message: `User already exists with this email : ${email}`,
          code: "INVALID"
        });
      }
      const passwordHash = await bcrypt.hash(password, 10);
      const verificationCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      const user = await prisma.user.create({
        data: {
          name: name,
          password: passwordHash,
          email: email,
          role: role,
          verificationCode,
          verificationExpires: new Date(Date.now() + 10 * 60 * 1000)
        },
        select: {
          id: true,
          name: true,
          email: true,
          role: true
        }
      });
      try {
        const serviceFor = "emailService";
        const emailResult = await RequestVerification(
          email,
          name,
          verificationCode,
          serviceFor
        );

        res.status(201).json({
          message:
            "Please verify your account by entering the code sent to you email : " +
            email,
          success: true,
          data: user
        });
        return;
      } catch (emailError) {
        console.error("Email verification error:", emailError);
        res.status(201).json({
          success: true,
          message:
            "Account created successfully, but verification email could not be sent. Please contact support.",
          code: "EMAIL_SEND_FAILED",
          data: user
        });
        return;
      }
    } catch (err) {
      console.error("ERROR :", err);
      res.status(500).json({
        message: "Error Sign up, Please try again later",
        code: "SIGNUP_FAILED",
        success: false
      });
    }
  }
);

authRouter.post(
  "/signin",
  loginLimiter,
  async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      if (!validator.isEmail(email)) {
        res.status(401).json({
          success: false,
          message: "Invalid Credentials",
          code: "INVALID_CREDENTIALS"
        });
        return;
      }
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          name: true,
          email: true,
          password: true,
          id: true,
          isVerified: true,
          role: true
        }
      });
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Invalid Credentials",
          code: "INVALID_CREDENTIALS"
        });
        return;
      }

      if (!user.isVerified) {
        res.status(403).json({
          success: false,
          message: "Please verify your email address before Signing In",
          code: "USER_NOT_VERIFIED"
        });
        return;
      }
      const isValidPassword = await bcrypt.compare(password, user?.password);
      if (!isValidPassword) {
        res.status(401).json({
          success: false,
          message: "Invalid Credentials",
          code: "INVALID_CREDENTIALS"
        });
        return;
      }

      const existingSessions = await prisma.session.findMany({
        where: {
          userId: user.id,
          expiresAt: { gt: new Date() } // Only active sessions
        }
      });

      if (existingSessions.length > 0) {
        console.log(
          `User ${user.email} logging in from new device. Terminating ${existingSessions.length} existing session(s).`
        );
        // IMPORTANT: Send logout message to other devices BEFORE deleting sessions
        const logoutMessage = {
          type: "force-logout" as const,
          reason: "new-device-login",
          timestamp: new Date().toISOString()
        };

        // Send logout message to all existing sessions
        existingSessions.forEach((session) => {
          sseService.sendToUserExceptSession(
            user.id,
            session.id,
            logoutMessage
          );
        });

        // Small delay to ensure message is sent before deleting sessions
        await new Promise((resolve) => setTimeout(resolve, 100));
        // Delete all existing sessions
        await prisma.session.deleteMany({
          where: { userId: user.id }
        });
      }

      // await prisma.session.deleteMany({ where: { userId: user.id } });
      const sessionId = createSessionId();
      const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 12);

      await prisma.session.create({
        data: {
          id: sessionId,
          userId: user.id,
          userAgent: req.headers["user-agent"] || "Unknown",
          ipAddress: req.ip || "Unknown",
          expiresAt
        }
      });
      const token = TokenService.generateToken({
        id: user.id,
        sessionId: sessionId
      });
      // console.log("Token : ", token);
      res.cookie("token", token, {
        maxAge: 12 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "strict"
      });

      res.status(200).json({
        success: true,
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          isVerified: user.isVerified,
          role: user.role,
          sessionId
        },
        message: "Signin successful",
        code: "SIGNIN_SUCCESSFULL"
      });

      return;
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Sign In Failed, Internal server error",
        code: "SIGNIN_FAILED"
      });
    }
  }
);

//verify email
authRouter.post(
  "/verify-email",
  verifyEmailLimiter,
  async (req: Request, res: Response) => {
    const { email, code } = req.body;

    if (!email || !code) {
      res.status(400).json({
        message: "Email and code are required",
        code: "EMAIL&CODE_REQUIRED"
      });
      return;
    }

    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          isVerified: true,
          verificationCode: true,
          verificationExpires: true,
          name: true
        }
      });

      if (!user) {
        res.status(404).json({
          message: "User not found",
          code: "USER_NOT_FOUND"
        });
        return;
      }
      if (user.isVerified) {
        res.status(200).json({
          message: "Email is already verified",
          code: "EMAIL_ALREADY_VERIFIED"
        });
        return;
      }
      if (!user.verificationCode) {
        res.status(400).json({
          message:
            "Verification code is missing, Try again requesting code to verify email",
          code: "VERIFICATION_CODE_MISSING"
        });
        return;
      }

      if (!user.verificationExpires) {
        res.status(400).json({
          message:
            "Verification expiry time is missing, please go to verify email page to request code again",
          code: "VERIFICATION_EXPIRY_MISSING"
        });
        return;
      }

      if (user.verificationExpires < new Date()) {
        res.status(400).json({
          message: "Verification code has expired",
          code: "VERIFICATION_CODE_EXPIRED"
        });
        return;
      }

      if (user.verificationCode !== code) {
        res.status(400).json({
          message: "Invalid verification code",
          code: "INVALID_VERIFICATION_CODE"
        });
        return;
      }
      await prisma.user.update({
        where: { email },
        data: {
          isVerified: true,
          verificationCode: null,
          verificationExpires: null
        }
      });
      res.status(200).json({
        message: "Email verified successfully",
        code: "EMAIL_VERIFIED"
      });
      return;
    } catch (err) {
      // console.log("Verification err : ", err);
      res.status(500).json({
        message: "Email Verification Failed due to internal server error",
        success: false,
        code: "EMAIL_VERIFICATION_FAILED"
      });
    }
  }
);

//resend-code
authRouter.post(
  "/resend-code",
  resendCodeLimiter,
  async (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      if (!email || typeof email !== "string") {
        res.status(400).json({
          message: "Email is required",
          code: "EMAIL_MISSING_FIELD"
        });
        return;
      }
      if (!validator.isEmail(email)) {
        res.status(400).json({
          success: false,
          message: "Please enter a valid email address",
          code: "INVALID_EMAIL"
        });
        return;
      }

      // Find the user
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          isVerified: true
        }
      });

      if (!user) {
        res.status(200).json({
          success: true,
          message:
            "If your email exists in our system, a verification code has been sent.",
          code: "VERIFICATION_CODE_REQUESTED"
        });
        return;
      }

      if (user.isVerified) {
        res.status(400).json({
          success: false,
          message: "Email is already verified",
          code: "EMAIL_ALREADY_VERIFIED"
        });
        return;
      }

      // Generate a new verification code
      const verificationCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      // Update the user with new verification code
      await prisma.user.update({
        where: { email },
        data: {
          verificationCode,
          verificationExpires: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
        }
      });

      try {
        // Send the email
        const serviceFor = "emailService";
        // SendVerification function need to be implemented
        const emailResult = await RequestVerification(
          email,
          user.name,
          verificationCode,
          serviceFor
        );
        if (!emailResult.success) {
          console.error(
            "Failed to send verification email:",
            emailResult.message
          );
          res.status(500).json({
            success: false,
            message:
              "Failed to send verification email. Please try again later.",
            code: "EMAIL_SEND_FAILED"
          });
          return;
        }
        res.status(200).json({
          message: "Verification code has been sent to your email",
          success: true,
          code: "VERIFICATION_CODE_SENT"
        });
        return;
      } catch (emailError) {
        console.error("Email service error:", emailError);
        res.status(500).json({
          success: false,
          message: "Failed to send verification email. Please try again later.",
          code: "EMAIL_SEND_FAILED"
        });
        return;
      }
    } catch (err) {
      const errorId = Math.random().toString(36).substring(2, 9);
      res.status(500).json({
        message: "Internal server error",
        success: false,
        code: "INTERNAL_SERVER_ERROR",
        errorId,
        ...(process.env.NODE_ENV !== "production" && {
          details: err instanceof Error ? err.message : "Unknown error"
        })
      });
      return;
    }
  }
);

//forgot-password-request-code
authRouter.post(
  "/forgot-password",
  forgetPasswordLimiter,
  async (req: Request, res: Response) => {
    const { email } = req.body;
    console.log("email : ", email);
    try {
      if (!email || typeof email !== "string") {
        res.status(400).json({
          message: "Email is required",
          code: "EMAIL_MISSING_FIELD",
          success: false
        });
        return;
      }
      if (!validator.isEmail(email)) {
        res.status(400).json({
          message: "Invalid email address",
          code: "INVALID_EMAIL",
          success: false
        });
        return;
      }

      const user = await prisma.user.findUnique({
        where: { email },
        select: { isVerified: true, name: true }
      });
      if (!user) {
        res.status(200).json({
          success: true,
          message:
            "If your email exists in our system, a verification code has been sent.",
          code: "VERIFICATION_CODE_REQUESTED"
        });
        return;
      }
      if (!user.isVerified) {
        res.json({
          message:
            "Please verify your email address before resetting your password",
          code: "EMAIL_NOT_VERIFIED",
          success: false
        });
        return;
      }
      const verificationCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      await prisma.user.update({
        where: { email },
        data: {
          verificationCode: verificationCode,
          verificationExpires: new Date(Date.now() + 10 * 60 * 1000)
        }
      });

      try {
        const serviceFor = "passwordService";
        const emailResult = await RequestVerification(
          email,
          user.name,
          verificationCode,
          serviceFor
        );

        console.log("EMAIL RESULT : ", emailResult);

        if (!emailResult.success) {
          res.status(500).json({
            message:
              "Failed to send forgot password code to your email, Please try again later",
            code: "EMAIL_SEND_FAILED",
            success: false
          });
          return;
        }

        res.status(200).json({
          message: "A password reset code has been sent to your email",
          success: true,
          code: "RESET_CODE_SENT"
        });
        return;
      } catch (emailError) {
        console.error("Email service error:", emailError);
        res.status(500).json({
          success: false,
          message:
            "Failed to send password reset email. Please try again later.",
          code: "EMAIL_SEND_FAILED"
        });
        return;
      }
    } catch (err) {
      res.status(500).json({
        message: "Internal server error, please try again later",
        success: false,
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

authRouter.post(
  "/forget-password-verify-code",
  passwordResetLimiter,
  async (req: Request, res: Response) => {
    const { email, code, newPassword } = req.body;

    try {
      if (!email) {
        res.status(400).json({
          message: "Email is required",
          success: false,
          code: "EMAIL_REQUIRED"
        });
        return;
      } else if (!code) {
        res.status(400).json({
          message: "Code is required",
          success: false,
          code: "CODE_REQUIRED"
        });
        return;
      } else if (!newPassword) {
        res.status(400).json({
          message: "New password is missing",
          success: false,
          code: "NEW_PASSWORD_REQUIRED"
        });
      }

      if (!validator.isEmail(email)) {
        res.status(400).json({
          message: "Invalid Credentials",
          success: false,
          code: "INVALID_CREDENTIALS"
        });
        return;
      }
      const user = await prisma.user.findUnique({
        where: { email },
        select: { verificationCode: true, verificationExpires: true }
      });

      if (!user) {
        res.status(400).json({
          success: false,
          message:
            "If your email exists in our system, a verification code has been sent.",
          code: "VERIFICATION_CODE_REQUESTED"
        });
        return;
      }

      if (!user.verificationCode) {
        res.status(400).json({
          message: "Verification code is missing",
          code: "VERIFICATION_CODE_MISSING"
        });
        return;
      }

      if (!user.verificationExpires) {
        res.status(400).json({
          message: "Verification expiry time is missing",
          code: "VERIFICATION_EXPIRY_MISSING"
        });
        return;
      }

      if (user.verificationExpires < new Date()) {
        console.log("Expires At:", user.verificationExpires);
        console.log("Current Time:", new Date());
        console.log("Has Expired:", user.verificationExpires < new Date());
        res.status(400).json({
          message: "Verification code has expired",
          code: "VERIFICATION_CODE_EXPIRED"
        });
        return;
      }

      if (user.verificationCode !== code) {
        res.status(400).json({
          message: "Invalid verification code",
          code: "INVALID_VERIFICATION_CODE"
        });
        return;
      }

      if (!validator.isStrongPassword(newPassword)) {
        res.json({
          message: "Enter a strong password",
          success: false,
          code: "WEAK_REQUIRED"
        });
        return;
      }
      const passwordHash = await bcrypt.hash(newPassword, 10);
      await prisma.user.update({
        where: { email },
        data: {
          password: passwordHash,
          verificationCode: null,
          verificationExpires: null
        }
      });
      res.status(200).json({
        success: true,
        message: "Password updated successfully, you can sign in now.",
        code: "PASSWORD_UPDATED"
      });
      return;
    } catch (err) {
      res.status(500).json({
        message: "Internal server error, please try again later",
        success: false,
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

authRouter.get("/get-me", userAuth, async (req: Request, res: Response) => {
  try {
    // The userAuth middleware should have attached the user info to req
    // Assuming it adds req.user with at least the user ID
    const user = (req as RequestWithUser).user;

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Unauthorized",
        code: "UNAUTHORIZED"
      });
      return;
    }

    const loggedInuser = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        id: true,
        name: true,
        email: true,
        isVerified: true,
        role: true
      }
    });

    if (!loggedInuser) {
      res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: {
        id: loggedInuser.id,
        name: loggedInuser.name,
        email: loggedInuser.email,
        isVerified: loggedInuser.isVerified,
        role: loggedInuser.role
      },
      message: "User retrieved successfully",
      code: "USER_RETRIEVED"
    });
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve user, Internal server error",
      code: "GET_USER_FAILED"
    });
  }
});

export default authRouter;
