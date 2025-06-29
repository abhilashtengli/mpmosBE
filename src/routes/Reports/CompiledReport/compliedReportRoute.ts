import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { generatePresignedUrl } from "@services/Cloudflare/cloudflare";
import { z } from "zod"; // Add zod for validation
import express, { Request, Response } from "express";
import { generateCompliedDocxReportBuffer } from "./generateCompiledDocxReport";
import { cleanupOldCompiledReports } from "./cleanUpReports";
import { incrementReportCounter } from "@lib/constants";

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
const generateReportSchema = z.object({
  quarterId: z.string().uuid().nonempty()
});

enum ErrorCodes {
  UNAUTHORIZED = "UNAUTHORIZED",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  QUARTER_NOT_FOUND = "QUARTER_NOT_FOUND",
  DATABASE_ERROR = "DATABASE_ERROR",
  NO_ACTIVITIES_FOUND = "NO_ACTIVITIES_FOUND",
  FILE_UPLOAD_ERROR = "FILE_UPLOAD_ERROR",
  INTERNAL_ERROR = "INTERNAL_ERROR"
}
interface ErrorResponse {
  success: false;
  error: {
    code: ErrorCodes;
    message: string;
    details?: any;
  };
}

interface ReportCount {
  id: string;
  count: number;
  updatedAt: Date;
}
// Success response type
interface SuccessResponse {
  success: true;
  data: any;
  publicUrl: string;
  cleanupWarnings?: string[];
  reportCount: ReportCount | null;
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
      const user = (req as RequestWithUser).user;
      if (!user) {
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.UNAUTHORIZED,
            message: "Authentication required to generate compiled report"
          }
        };
        res.status(401).json(errorResponse);
        return;
      }
      const validationResult = generateReportSchema.safeParse(req.body);

      if (!validationResult.success) {
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.VALIDATION_ERROR,
            message: "Invalid request parameters",
            details: validationResult.error.format()
          }
        };
        res.status(400).json(errorResponse);
        return;
      }
      const { quarterId } = validationResult.data;
      let quarter;
      try {
        quarter = await prisma.quarter.findUnique({
          where: { id: quarterId },
          select: { number: true, year: true }
        });

        if (!quarter) {
          const errorResponse: ErrorResponse = {
            success: false,
            error: {
              code: ErrorCodes.QUARTER_NOT_FOUND,
              message: `Quarter with ID ${quarterId} not found`
            }
          };
          res.status(404).json(errorResponse);
          return;
        }
      } catch (dbError) {
        console.error("Database error fetching quarter:", dbError);
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.DATABASE_ERROR,
            message: "Failed to fetch quarter information"
          }
        };
        res.status(500).json(errorResponse);
        return;
      }
      let activities;
      try {
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
          const totalTarget = items.reduce(
            (sum, a) => sum + (a.target ?? 0),
            0
          );
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

        activities = [...staticActivities, ...customActivities];
      } catch (dbError) {
        console.error("Database error fetching activities:", {
          error: dbError,
          quarterId,
          timestamp: new Date().toISOString()
        });

        // Check for specific Prisma errors
        if (dbError instanceof Error) {
          if (dbError.message.includes("connection")) {
            const errorResponse: ErrorResponse = {
              success: false,
              error: {
                code: ErrorCodes.DATABASE_ERROR,
                message: "Database connection failed. Please try again."
              }
            };
            res.status(503).json(errorResponse);
            return;
          }

          if (dbError.message.includes("timeout")) {
            const errorResponse: ErrorResponse = {
              success: false,
              error: {
                code: ErrorCodes.DATABASE_ERROR,
                message:
                  "Database query timed out. Please try again with a smaller data range."
              }
            };
            res.status(504).json(errorResponse);
            return;
          }
        }

        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.DATABASE_ERROR,
            message:
              "Failed to fetch activity data. Please contact support if this persists."
          }
        };
        res.status(500).json(errorResponse);
        return;
      }

      if (activities.length === 0) {
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.NO_ACTIVITIES_FOUND,
            message: "No activities found for the given quarter"
          }
        };
        res.status(404).json(errorResponse);
        return;
      }

      let buffer;
      try {
        const reportInfo = {
          quarter: quarter.number,
          year: quarter.year,
          reportGeneratedAt: new Date().toLocaleString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
          })
        };
        buffer = await generateCompliedDocxReportBuffer(activities, reportInfo);
      } catch (reportError) {
        console.error("Error generating report buffer:", reportError);
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.INTERNAL_ERROR,
            message: "Failed to generate report document, Please try again"
          }
        };
        res.status(500).json(errorResponse);
        return;
      }
      let fileInfo;
      try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const fileName = `compiled-report-Q${quarter.number}-${quarter.year}-${timestamp}.docx`;
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
        fileInfo = { fileName, key, publicUrl };
      } catch (uploadError) {
        console.error("File upload error:", uploadError);
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.FILE_UPLOAD_ERROR,
            message: "Failed to upload report file to cloud storage"
          }
        };
        res.status(500).json(errorResponse);
        return;
      }
      let compliedReport;
      let reportCount;
      try {
        compliedReport = await prisma.compliedReport.create({
          data: {
            quarter: `Q${quarter.number}`,
            year: quarter.year,
            fileName: fileInfo.fileName,
            fileKey: fileInfo.key,
            fileUrl: fileInfo.publicUrl,
            userId: user.id
          },
          select: {
            id: true,
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
        reportCount = await incrementReportCounter();
      } catch (dbError) {
        console.error("Database error saving report:", dbError);
        // TODO: Consider cleanup of uploaded file here
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.DATABASE_ERROR,
            message: "Report generated but failed to save record"
          }
        };
        res.status(500).json(errorResponse);
        return;
      }
      let cleanupWarnings: string[] = [];
      try {
        // console.log(
        //   "Starting global report cleanup after successful report creation"
        // );
        const cleanupResult = await cleanupOldCompiledReports();

        if (!cleanupResult.success) {
          console.warn(
            "Report cleanup completed with warnings:",
            cleanupResult.warnings
          );
          cleanupWarnings = cleanupResult.warnings;
        } else {
          console.log("Report cleanup completed successfully");
        }
      } catch (cleanupError) {
        console.error("Critical error during report cleanup:", cleanupError);
        cleanupWarnings.push(
          "Report cleanup process failed - old reports may still exist"
        );
      }

      const successResponse: SuccessResponse = {
        success: true,
        data: compliedReport,
        publicUrl: fileInfo.publicUrl,
        reportCount: reportCount
      };
      // Add cleanup warnings if any exist
      if (cleanupWarnings.length > 0) {
        successResponse.cleanupWarnings = cleanupWarnings;
      }
      res.status(201).json(successResponse);
      return;
    } catch (error) {
      console.error("Unexpected error in generate-compiled-report:", error);

      const errorResponse: ErrorResponse = {
        success: false,
        error: {
          code: ErrorCodes.INTERNAL_ERROR,
          message: "An unexpected error occurred while generating the report",
          details:
            process.env.NODE_ENV === "development" ? String(error) : undefined
        }
      };

      res.status(500).json(errorResponse);
      return;
    }
  }
);

export default generateCompliedReportRouter;
