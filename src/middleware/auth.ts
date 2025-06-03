import { Request, Response } from "express";
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

export const userAuth = async (req: Request, res: Response, next: any) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

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
    const { id } = decodeObject;

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
  } catch {
    res
      .status(400)
      .json({ message: "Invalid token or request", code: "BAD_TOKEN" });
  }
};
