import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userAuth } from "../middleware/auth";
import { prisma } from "@lib/prisma";
import { signupValidation } from "../utils/validation";
import validator from "validator";
import TokenService from "../services/tokenservice";
import rateLimit from "express-rate-limit";

const authRouter = express.Router();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
  message: "Too many authentication attempts, please try again later"
});
authRouter.use(authLimiter);
authRouter.post("/signup", userAuth, async (req: Request, res: Response) => {
  try {
    await signupValidation(req);
    const { name, email, password, role } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true }
    });

    if (existingUser) {
      res.status(409).json({
        message: "User already exists"
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
      //   const emailResult = await SendVerification(
      //     email,
      //     name,
      //     verificationCode,
      //     serviceFor
      //   );

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
});

authRouter.post("/signin", authRouter, async (req: Request, res: Response) => {
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
        isVerified: true
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
    const isValidPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!isValidPassword) {
      res.status(401).json({
        success: false,
        message: "Invalid Credentials",
        code: "INVALID_CREDENTIALS"
      });
      return;
    }
    if (isValidPassword) {
      const token = TokenService.generateToken({ id: user.id });
      // console.log("Token : ", token);
      res.cookie("token", token, {
        maxAge: 12 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,
        sameSite: "lax"
      });

      res.status(200).json({
        success: true,
        data: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        message: "Signin successful",
        code: "SIGNIN_SUCCESSFULL"
      });

      return;
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Sign In Failed, Internal server error",
      code: "SIGNIN_FAILED"
    });
  }
});
