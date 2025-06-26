import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";

import express, { Request, Response } from "express";

const generateCompliedReportRouter = express.Router();

interface NormalizedActivity {
  title: string;
  units?: string[]; // Now an array
  quarter: number;
  year: number;
  target: number;
  achievement: number;
  targetSentence?: string[];
  achievedSentence?: string[];
  beneficiaries: {
    male: number;
    female: number;
    total: number;
  };
  locations: {
    state: string;
    district: string;
    village: string;
  }[]; // Now an array of location objects
  isHeader?: boolean;
  isSubItem?: boolean;
}
interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

generateCompliedReportRouter.post(
  "/generate-compiled-report",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { quarterId } = req.body;
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create generate Compiled report",
          code: "UNAUTHORIZED"
        });
        return;
      }

      if (!quarterId) {
        res
          .status(400)
          .json({ success: false, error: "Missing quarter or year." });
        return;
      }
      const quarter = await prisma.quarter.findUnique({
        where: { id: quarterId },
        select: { number: true, year: true }
      });
      if (!quarter) {
        res.status(404).json({ success: false, error: "Quarter not found." });
        return;
      }
      const commonSelect = {
        quarter: { select: { number: true, year: true } },
        target: true,
        achieved: true,
        targetSentence: true,
        achievedSentence: true,
        district: true,
        village: true
      };
      const staticActivities: NormalizedActivity[] = [];
      const aggregate = (
        items: any[],
        label: string,
        units?: string
      ): NormalizedActivity | null => {
        if (items.length === 0) return null;
        const totalTarget = items.reduce((sum, a) => sum + (a.target ?? 0), 0);
        const totalAchieved = items.reduce(
          (sum, a) => sum + (a.achieved ?? 0),
          0
        );
        const totalMale = items.reduce(
          (sum, a) => sum + (a.beneficiaryMale ?? 0),
          0
        );
        const totalFemale = items.reduce(
          (sum, a) => sum + (a.beneficiaryFemale ?? 0),
          0
        );
        const allUnits = Array.from(
          new Set(items.map((a) => a.units).filter((u) => u)) // unique and non-null
        );
        const allLocations = items.map((a) => ({
          state: a.project?.locationState ?? "N/A",
          district: a.district ?? "N/A",
          village: a.village ?? "N/A"
        }));

        return {
          title: label,
          units: allUnits.length > 0 ? allUnits : undefined,
          quarter: quarter.number,
          year: quarter.year,
          target: totalTarget,
          achievement: totalAchieved,
          targetSentence: items.flatMap((i) => i.targetSentence ?? []),
          achievedSentence: items.flatMap((i) => i.achievedSentence ?? []),
          beneficiaries: {
            male: totalMale,
            female: totalFemale,
            total: totalMale + totalFemale
          },
          locations: allLocations
        };
      };

      //Training
      const trainingItems = await prisma.training.findMany({
        where: { quarterId },
        select: {
          ...commonSelect,
          title: true,
          units: true,
          beneficiaryFemale: true,
          beneficiaryMale: true,
          project: {
            select: {
              id: true,
              title: true,
              locationState: true,
              director: true
            }
          }
        }
      });
      const trainingData = aggregate(trainingItems, "Training");
      if (trainingData) {
        staticActivities.push(trainingData);
      }
      //AWP
      const awpItems = await prisma.awarenessProgram.findMany({
        where: { quarterId },
        select: {
          ...commonSelect,
          title: true,
          units: true,
          beneficiaryFemale: true,
          beneficiaryMale: true,
          project: {
            select: {
              id: true,
              title: true,
              locationState: true,
              director: true
            }
          }
        }
      });
      const awpData = aggregate(awpItems, "Awareness Program");
      if (awpData) {
        staticActivities.push(awpData);
      }

      //FLD
      const fldItems = await prisma.fLD.findMany({
        where: { quarterId },
        select: {
          ...commonSelect,
          units: true,
          project: {
            select: {
              id: true,
              title: true,
              locationState: true,
              director: true
            }
          }
        }
      });
      const fldData = aggregate(fldItems, "Front Line Demonstrations");

      if (fldData) {
        staticActivities.push(fldData);
      }

      //Infra
      const infraItems = await prisma.infrastructureDevelopment.findMany({
        where: { quarterId },
        select: {
          ...commonSelect,
          title: true,
          project: {
            select: {
              id: true,
              title: true,
              locationState: true,
              director: true
            }
          }
        }
      });
      const infraData = aggregate(infraItems, "Infrastructure Development");
      if (infraData) {
        staticActivities.push(infraData);
      }

      //Input Dustribution
      const inputDistItems = await prisma.inputDistribution.findMany({
        where: { quarterId },
        select: {
          ...commonSelect,
          name: true,
          activityType: true,
          units: true,
          project: {
            select: {
              locationState: true
            }
          }
        }
      });

      if (inputDistItems.length > 0) {
        // Add main header for input distribution
        staticActivities.push({
          title: "Input Distribution",
          units: undefined,
          quarter: quarter.number,
          year: quarter.year,
          target: 0,
          achievement: 0,
          targetSentence: [],
          achievedSentence: [],
          beneficiaries: { male: 0, female: 0, total: 0 },
          locations: [],
          isHeader: true
        });

        // Add each sub activity
        inputDistItems.forEach((item) => {
          staticActivities.push({
            title: `${item.activityType || item.name}`, // Prefer activityType
            units: item.units ? [item.units] : undefined,
            quarter: item.quarter.number,
            year: item.quarter.year,
            target: item.target ?? 0,
            achievement: item.achieved ?? 0,
            targetSentence: item.targetSentence ?? [],
            achievedSentence: item.achievedSentence ?? [],
            beneficiaries: { male: 0, female: 0, total: 0 },
            locations: [
              {
                state: item.project?.locationState ?? "N/A",
                district: item.district ?? "N/A",
                village: item.village ?? "N/A"
              }
            ],
            isSubItem: true
          });
        });
      }

      const rawCustomActivities = await prisma.activities.findMany({
        where: { quarterId },
        select: {
          activityCategory: { select: { name: true } },
          target: true,
          achieved: true,
          targetSentence: true,
          achievedSentence: true,
          beneficiaryMale: true,
          beneficiaryFemale: true,
          district: true,
          village: true,
          units: true,
          project: { select: { locationState: true } },
          quarter: { select: { number: true, year: true } }
        }
      });

      const customActivityMap: Map<string, NormalizedActivity> = new Map();

      for (const item of rawCustomActivities) {
        if (!item.activityCategory) continue;
        const key = item.activityCategory.name;

        if (!customActivityMap.has(key)) {
          customActivityMap.set(key, {
            title: key,
            units: item.units ? [item.units] : [],
            quarter: item.quarter.number,
            year: item.quarter.year,
            target: 0,
            achievement: 0,
            targetSentence: [],
            achievedSentence: [],
            beneficiaries: { male: 0, female: 0, total: 0 },
            locations: []
          });
        }

        const existing = customActivityMap.get(key)!;

        existing.target += item.target ?? 0;
        existing.achievement += item.achieved ?? 0;
        existing.beneficiaries.male += item.beneficiaryMale ?? 0;
        existing.beneficiaries.female += item.beneficiaryFemale ?? 0;
        existing.beneficiaries.total =
          existing.beneficiaries.male + existing.beneficiaries.female;

        if (item.units && !existing.units?.includes(item.units)) {
          existing.units?.push(item.units);
        }

        if (item.targetSentence?.length) {
          existing.targetSentence?.push(...item.targetSentence);
        }

        if (item.achievedSentence?.length) {
          existing.achievedSentence?.push(...item.achievedSentence);
        }

        existing.locations.push({
          state: item.project?.locationState ?? "N/A",
          district: item.district ?? "N/A",
          village: item.village ?? "N/A"
        });
      }

      const customActivities = Array.from(customActivityMap.values());

      const activities = [...staticActivities, ...customActivities];
      res.json({
        success: true,
        data: activities
      });
      return;
    } catch (error) {
      console.error("Error generating report:", error);
      res.status(500).json({
        success: false,
        error: "Internal server error while generating report",
        details: process.env.NODE_ENV === "development" ? error : undefined
      });
      return;
    }
  }
);

export default generateCompliedReportRouter;
