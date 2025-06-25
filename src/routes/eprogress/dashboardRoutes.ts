import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";

import express, { Request, Response } from "express";

const dashboardRoute = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

//get stats
dashboardRoute.get(
  "/get-dashboard-stats",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in!",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const projectCount = await prisma.project.count();

      let maletotalBeneficiaries = 0;
      let femaletotalBeneficiaries = 0;

      // Training
      const trainingBf = await prisma.training.aggregate({
        _sum: {
          beneficiaryMale: true,
          beneficiaryFemale: true
        }
      });
      maletotalBeneficiaries += trainingBf._sum.beneficiaryMale || 0;
      femaletotalBeneficiaries += trainingBf._sum.beneficiaryFemale || 0;

      // Awareness
      const awarenessBf = await prisma.awarenessProgram.aggregate({
        _sum: {
          beneficiaryMale: true,
          beneficiaryFemale: true
        }
      });
      maletotalBeneficiaries += awarenessBf._sum.beneficiaryMale || 0;
      femaletotalBeneficiaries += awarenessBf._sum.beneficiaryFemale || 0;

      // Activities
      const activitiesBf = await prisma.activities.aggregate({
        _sum: {
          beneficiaryMale: true,
          beneficiaryFemale: true
        }
      });
      maletotalBeneficiaries += activitiesBf._sum.beneficiaryMale || 0;
      femaletotalBeneficiaries += activitiesBf._sum.beneficiaryFemale || 0;

      const totalBeneficiaries =
        maletotalBeneficiaries + femaletotalBeneficiaries;

      // ✅ Respond with the stats
      res.status(200).json({
        success: true,
        data: {
          projectCount,
          maletotalBeneficiaries,
          femaletotalBeneficiaries,
          totalBeneficiaries
        }
      });
    } catch (err) {
      console.error("Error getting the Stats", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Stats",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

//get graph/Bar chart data
dashboardRoute.get(
  "/get-dashboard-target-achieved",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in!",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const statusCounts = await prisma.project.groupBy({
        by: ["status"],
        _count: {
          status: true
        }
      });

      // Extract Active and Completed counts
      let activeCount = 0;
      let completedCount = 0;

      statusCounts.forEach((item) => {
        if (item.status === "Active") {
          activeCount = item._count.status;
        } else if (item.status === "Completed") {
          completedCount = item._count.status;
        }
      });

      // Calculate total and percentage
      const totalStatus = activeCount + completedCount;

      const activePercentage =
        totalStatus > 0 ? (activeCount / totalStatus) * 100 : 0;
      const completedPercentage =
        totalStatus > 0 ? (completedCount / totalStatus) * 100 : 0;

      const trainingData = await prisma.training.aggregate({
        _sum: {
          target: true,
          achieved: true
        }
      });

      const awarnessData = await prisma.awarenessProgram.aggregate({
        _sum: {
          target: true,
          achieved: true
        }
      });

      const fldData = await prisma.fLD.aggregate({
        _sum: {
          target: true,
          achieved: true
        }
      });

      const infraData = await prisma.infrastructureDevelopment.aggregate({
        _sum: {
          target: true,
          achieved: true
        }
      });

      const inputDistData = await prisma.inputDistribution.aggregate({
        _sum: {
          target: true,
          achieved: true
        }
      });

      // ✅ Respond with the stats
      res.status(200).json({
        success: true,
        data: {
          training: {
            target: trainingData._sum.target || 0,
            achieved: trainingData._sum.achieved || 0
          },
          awareness: {
            target: awarnessData._sum.target || 0,
            achieved: awarnessData._sum.achieved || 0
          },
          fld: {
            target: fldData._sum.target || 0,
            achieved: fldData._sum.achieved || 0
          },
          infrastructure: {
            target: infraData._sum.target || 0,
            achieved: infraData._sum.achieved || 0
          },
          inputDistribution: {
            target: inputDistData._sum.target || 0,
            achieved: inputDistData._sum.achieved || 0
          },
          project: {
            activeCount,
            completedCount,
            activePercentage,
            completedPercentage
          }
        },
        code: "DATA_FETCH_SUCCESSFULL"
      });
    } catch (err) {
      console.error("Error getting the Stats", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Stats",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default dashboardRoute;
