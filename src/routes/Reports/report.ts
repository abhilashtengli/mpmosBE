import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import express, { Request, Response } from "express";

const reportRouter = express.Router();
interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}
reportRouter.get(
  "/get-project-reports",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view your Projects",
          code: "UNAUTHORIZED"
        });
        return;
      }
      if (user.role !== "admin") {
        res.status(401).json({
          success: false,
          message: "You are not authorised",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const reportData = await prisma.generatedReport.findMany({
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          project: true,
          quarter: true,
          year: true,
          fileUrl: true,
          fileKey: true,
          fileName: true,
          createdAt: true,
          updatedAt: true,
          User: {
            select: {
              id: true,
              name: true
            }
          }
        }
      });

      if (reportData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No Reports found",
          data: [],
          code: "NO_REPORTS_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: reportData,
        code: "GET_REPORTS_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the reports", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Reports, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

export default reportRouter;
