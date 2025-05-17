import "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        name: string;
        role: string;
        email: string;
        isVerified: boolean;
      } | null;
    }
  }
}
