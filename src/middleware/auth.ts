import { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { prisma } from "@lib/prisma";

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
        message: "Invalid token or missiong authentication"
      });
      return;
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res.send(500).json({ message: "Internal server error" });
      return;
    }

    const decodeObject = (await jwt.verify(token, secret)) as JwtPayload;
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
      res.status(404).json({ message: "User not found" });
    }
    (req as RequestWithUser).user = user || null;
    next();
  } catch (err) {
    res.status(400).send("Error : " + err);
  }
};
