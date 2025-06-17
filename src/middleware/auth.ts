import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { prisma } from "@lib/prisma";
import { CustomJwtPayload } from "../types/jwt";

dotenv.config();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

export const userAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    // console.log("Token : ", token);
    if (!token) {
      res.status(401).json({
        message: "Missing authentication token",
        code: "UNAUTHORIZED"
      });
      return;
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res
        .status(500)
        .json({ message: "Internal server error", code: "SERVER_ERROR" });
      return;
    }

    const decodeObject = (await jwt.verify(token, secret)) as CustomJwtPayload;
    const { id, sessionId } = decodeObject;

    const session = await prisma.session.findUnique({
      where: {
        id: sessionId
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isVerified: true
          }
        }
      }
    });

    if (!session?.user) {
      res.status(404).json({
        success: false,
        message: "User not found",
        code: "USER_NOT_FOUND"
      });
      return;
    }
    if (!session || session.userId !== id) {
      res.status(401).json({
        success: false,
        error: "Session not found or expired",
        code: "SESSION_NOT_FOUND"
      });
      return;
    }
    if (new Date() > session.expiresAt) {
      await prisma.session.delete({ where: { id: sessionId } }); // Cleanup expired session
      res.status(401).json({
        success: false,
        error: "Session expired",
        code: "SESSION_EXPIRED"
      });
      return;
    }

    // Enhanced security checks
    const currentIP = req.ip || "unknown";
    const currentUserAgent = req.headers["user-agent"] || "unknown";

    // IP address check (with some flexibility for internal networks)
    if (session.ipAddress && session.ipAddress !== currentIP) {
      // For internal apps, you might want to be less strict
      // Only log as warning instead of blocking
      // console.warn(
      //   `IP change detected for user ${session.userId}: ${session.ipAddress} → ${currentIP}`
      // );

      // Uncomment the lines below if you want strict IP enforcement
      res.status(401).json({
        success: false,
        message: "IP address mismatch",
        code: "IP_MISMATCH"
      });
      return;
    }

    // User-Agent check (optional for internal apps)
    // if (session.userAgent && session.userAgent !== currentUserAgent) {
    //   res.status(401).json({
    //     success: false,
    //     message: "Device mismatch",
    //     code: "DEVICE_MISMATCH"
    //   });
    //   return;
    // }

    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isVerified: true
      }
    });

    if (!user) {
      res.status(404).json({ message: "User not found", code: "UNAUTHORIZED" });
      return;
    }
    if (!user?.isVerified) {
      res.status(401).json({
        message: "Please verify you account to perform this action",
        code: "UNAUTHORIZED"
      });
      return;
    }
    (req as RequestWithUser).user = user || null;
    next();
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      res.status(401).json({
        message: "Token has expired",
        code: "TOKEN_EXPIRED"
      });
      return;
    }

    if (err.name === "JsonWebTokenError") {
      res.status(400).json({
        message: "Invalid token",
        code: "INVALID_TOKEN"
      });
      return;
    }

    res.status(500).json({
      message: "Authentication failed",
      code: "AUTH_ERROR"
    });
    return;
  }
};
