import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";

import express, { Request, Response } from "express";
import { generateDocxReportBuffer } from "./generateDocxReport";
import { generatePresignedUrl } from "@services/Cloudflare/cloudflare";

const generateReportRouter = express.Router();

interface NormalizedActivity {
  title: string;
  units?: string;
  quarter: number;
  year: number;
  target: number;
  achievement: number;
  beneficiaries: {
    male: number;
    female: number;
    total: number;
  };
  location: {
    state: string;
    district: string;
    village: string;
  };
  isHeader?: boolean; // New flag for header rows
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

generateReportRouter.post(
  "/generate-report",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { projectId, quarterId } = req.body;
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Awareness Program",
          code: "UNAUTHORIZED"
        });
        return;
      }

      if (!projectId || !quarterId) {
        res
          .status(400)
          .json({ success: false, error: "Missing projectId or quarterId." });
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

      const project = await prisma.project.findFirst({
        where: { id: projectId, userId: user.id },
        select: { id: true, title: true, locationState: true }
      });
      if (!project) {
        res.status(403).json({
          success: false,
          error: "Project not found or access denied."
        });
        return;
      }

      const commonSelect = {
        quarter: { select: { number: true, year: true } },
        target: true,
        achieved: true,
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

        return {
          title: label,
          units: units ?? items[0].units,
          quarter: items[0].quarter.number,
          year: items[0].quarter.year,
          target: totalTarget,
          achievement: totalAchieved,
          beneficiaries: {
            male: totalMale,
            female: totalFemale,
            total: totalMale + totalFemale
          },
          location: {
            state: "N/A",
            district: items[0].district ?? "N/A",
            village: items[0].village ?? "N/A"
          }
        };
      };

      //Training
      const trainingItems = await prisma.training.findMany({
        where: { projectId, quarterId },
        select: {
          ...commonSelect,
          title: true,
          units: true,
          beneficiaryMale: true,
          beneficiaryFemale: true
        }
      });
      const trainingData = aggregate(trainingItems, "Training");
      if (trainingData) {
        trainingData.location.state = project.locationState;
        staticActivities.push(trainingData);
      }

      //Awarness Program
      const awpItems = await prisma.awarenessProgram.findMany({
        where: { projectId, quarterId },
        select: {
          ...commonSelect,
          title: true,
          units: true,
          beneficiaryMale: true,
          beneficiaryFemale: true
        }
      });
      const awpData = aggregate(awpItems, "Awareness Program");
      if (awpData) {
        awpData.location.state = project.locationState;
        staticActivities.push(awpData);
      }

      //FLD
      const fldItems = await prisma.fLD.findMany({
        where: { projectId, quarterId },
        select: {
          ...commonSelect,
          units: true
        }
      });
      const fldData = aggregate(fldItems, "Front Line Demonstrations");
      if (fldData) {
        fldData.location.state = project.locationState;
        staticActivities.push(fldData);
      }

      //Infrastructure development
      const infraItems = await prisma.infrastructureDevelopment.findMany({
        where: { projectId, quarterId },
        select: { ...commonSelect, title: true }
      });
      const infraData = aggregate(infraItems, "Infrastructure Development");
      if (infraData) {
        infraData.location.state = project.locationState;
        staticActivities.push(infraData);
      }

      //Input distribution
      const inputDistItems = await prisma.inputDistribution.findMany({
        where: { projectId, quarterId },
        select: { ...commonSelect, name: true, units: true, activityType: true }
      });

      if (inputDistItems.length > 0) {
        // Add the main heading
        staticActivities.push({
          title: "Input Distribution", // Main heading
          units: undefined,
          quarter: quarter.number,
          year: quarter.year,
          target: 0,
          achievement: 0,
          beneficiaries: { male: 0, female: 0, total: 0 },
          location: {
            state: "N/A",
            district: "N/A",
            village: "N/A"
          },
          isHeader: true // Add this flag to identify headers
        });

        // Add individual input distribution items
        inputDistItems.forEach((a) => {
          staticActivities.push({
            title: `  ${a.activityType}`, // Add indentation to show it's a sub-item
            units: a.units ?? undefined,
            quarter: a.quarter.number,
            year: a.quarter.year,
            target: a.target,
            achievement: a.achieved,
            beneficiaries: { male: 0, female: 0, total: 0 },
            location: {
              state: project.locationState ?? "N/A",
              district: a.district ?? "N/A",
              village: a.village ?? "N/A"
            },
            isSubItem: true // Add this flag to identify sub-items
          });
        });
      }

      const rawCustomActivities = await prisma.activities.findMany({
        where: { quarterId, projectId },
        select: {
          activityCategory: { select: { id: true, name: true } },
          target: true,
          achieved: true,
          beneficiaryMale: true,
          beneficiaryFemale: true,
          district: true,
          village: true,
          units: true
        }
      });
      const customActivityMap: Map<string, NormalizedActivity> = new Map();

      for (const item of rawCustomActivities) {
        if (!item.activityCategory) continue;
        const key = item.activityCategory.name;

        if (!customActivityMap.has(key)) {
          customActivityMap.set(key, {
            title: key,
            units: item.units ?? undefined,
            quarter: quarter.number,
            year: quarter.year,
            target: 0,
            achievement: 0,
            beneficiaries: { male: 0, female: 0, total: 0 },
            location: {
              state: project.locationState ?? "N/A",
              district: item.district ?? "N/A",
              village: item.village ?? "N/A"
            }
          });
        }
        const existing = customActivityMap.get(key)!;
        existing.target += item.target ?? 0;
        existing.achievement += item.achieved ?? 0;
        existing.beneficiaries.male += item.beneficiaryMale ?? 0;
        existing.beneficiaries.female += item.beneficiaryFemale ?? 0;
        existing.beneficiaries.total =
          existing.beneficiaries.male + existing.beneficiaries.female;
      }
      const customActivities = Array.from(customActivityMap.values());

      const activities = [...staticActivities, ...customActivities];

      if (activities.length === 0) {
        res.status(404).json({
          success: false,
          error: "No activities found for the given criteria."
        });
        return;
      }

      //   console.log("Act : ", activities);

      const projectInfo = {
        name: project.title,
        state: project.locationState,
        quarter: quarter.number,
        year: quarter.year
      };

      const buffer = await generateDocxReportBuffer(activities, projectInfo);

      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const fileName = `project-${projectId}-Q${quarter.number}-${quarter.year}-${timestamp}.docx`;
      const { signedUrl, key, publicUrl } = await generatePresignedUrl(
        fileName,
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      );

      const uploadResponse = await fetch(signedUrl, {
        method: "PUT",
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "Content-Length": buffer.length.toString()
        },
        body: buffer
      });

      if (!uploadResponse.ok) {
        throw new Error(
          `Upload failed: ${uploadResponse.status} ${uploadResponse.statusText}`
        );
      }

      const generatedReport = await prisma.generatedReport.create({
        data: {
          projectId,
          quarter: `Q${quarter.number}`,
          year: quarter.year,
          fileName,
          fileKey: key,
          fileUrl: publicUrl,
          userId: user.id
        }
      });
      console.log("Public Url : ", publicUrl);
      res.json({
        success: true,
        fileUrl: publicUrl,
        reportId: generatedReport.id
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

export default generateReportRouter;
