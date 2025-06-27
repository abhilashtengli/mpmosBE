import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { z } from "zod";
import express, { Request, Response } from "express";
import { generateDocxReportBuffer } from "./generateDocxReport";
import {
  deleteContent,
  generatePresignedUrl
} from "@services/Cloudflare/cloudflare";
import { cleanupOldProjectReports } from "./cleanUpreport";

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
// Add validation schema
const generateReportSchema = z.object({
  projectId: z.string().uuid().nonempty(),
  quarterId: z.string().uuid().nonempty()
});

// Define error codes enum
enum ErrorCodes {
  UNAUTHORIZED = "UNAUTHORIZED",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  QUARTER_NOT_FOUND = "QUARTER_NOT_FOUND",
  PROJECT_NOT_FOUND = "PROJECT_NOT_FOUND",
  ACCESS_DENIED = "ACCESS_DENIED",
  NO_ACTIVITIES_FOUND = "NO_ACTIVITIES_FOUND",
  DATABASE_ERROR = "DATABASE_ERROR",
  FILE_UPLOAD_ERROR = "FILE_UPLOAD_ERROR",
  REPORT_GENERATION_ERROR = "REPORT_GENERATION_ERROR",
  INTERNAL_ERROR = "INTERNAL_ERROR"
}

// Error response interface
interface ErrorResponse {
  success: false;
  error: {
    code: ErrorCodes;
    message: string;
    details?: any;
  };
}

// Success response interface
interface SuccessResponse {
  success: true;
  data: any;
  publicUrl: string;
  cleanupWarnings?: string[];
}

generateReportRouter.post(
  "/generate-project-report",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      if (!user) {
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.UNAUTHORIZED,
            message: "Authentication required to generate report"
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

      const { projectId, quarterId } = validationResult.data;

      // Fetch quarter with error handling
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

      // Fetch project with error handling
      let project;
      try {
        project = await prisma.project.findFirst({
          where: { id: projectId, userId: user.id },
          select: {
            id: true,
            title: true,
            locationState: true,
            User: {
              select: {
                id: true,
                name: true
              }
            }
          }
        });

        if (!project) {
          const errorResponse: ErrorResponse = {
            success: false,
            error: {
              code: ErrorCodes.PROJECT_NOT_FOUND,
              message: "Project not found or access denied"
            }
          };
          res.status(403).json(errorResponse);
          return;
        }
      } catch (dbError) {
        console.error("Database error fetching project:", dbError);
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.DATABASE_ERROR,
            message: "Failed to fetch project information"
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
          select: {
            ...commonSelect,
            name: true,
            units: true,
            activityType: true
          }
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
              target: a.target || 0,
              achievement: a.achieved || 0,
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

        activities = [...staticActivities, ...customActivities];
      } catch (dbError) {
        console.error("Database error fetching activities:", {
          error: dbError,
          projectId,
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
            message: "No activities found for the given project and quarter"
          }
        };
        res.status(404).json(errorResponse);
        return;
      }
      let buffer;
      try {
        const projectInfo = {
          name: project.title,
          state: project.locationState,
          quarter: quarter.number,
          year: quarter.year,
          reportGeneratedAt: new Date().toLocaleString("en-IN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
          }),
          projectDirector: project.User?.name
        };

        buffer = await generateDocxReportBuffer(activities, projectInfo);
      } catch (reportError) {
        console.error("Error generating report buffer:", reportError);
        const errorResponse: ErrorResponse = {
          success: false,
          error: {
            code: ErrorCodes.REPORT_GENERATION_ERROR,
            message: "Failed to generate report document. Please try again."
          }
        };
        res.status(500).json(errorResponse);
        return;
      }
      let fileInfo;
      try {
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const fileName = `project-report-${project.title}-Q${quarter.number}-${quarter.year}-${timestamp}.docx`;
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
      let generatedReport;
      try {
        generatedReport = await prisma.projectReport.create({
          data: {
            projectId,
            quarter: `Q${quarter.number}`,
            year: quarter.year,
            fileName: fileInfo.fileName,
            fileKey: fileInfo.key,
            fileUrl: fileInfo.publicUrl,
            userId: user.id
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
        console.log(
          "Starting global report cleanup after successful report creation"
        );
        const cleanupResult = await cleanupOldProjectReports();

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

      // Success response
      const successResponse: SuccessResponse = {
        success: true,
        data: generatedReport,
        publicUrl: fileInfo.publicUrl
      };
      // Add cleanup warnings if any exist
      if (cleanupWarnings.length > 0) {
        successResponse.cleanupWarnings = cleanupWarnings;
      }
      res.status(201).json(successResponse);
      return;
    } catch (error) {
      console.error("Unexpected error in generate-report:", error);
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

export default generateReportRouter;
