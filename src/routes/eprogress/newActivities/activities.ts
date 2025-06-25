import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { deleteContent } from "@services/Cloudflare/cloudflare";
import { generateFormattedId } from "@services/general";
import {
  createActivityValidation,
  updateActivityValidation
} from "@utils/validation";

import express, { Request, Response } from "express";

const activityRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

// Create Activities
activityRouter.post(
  "/create-activity",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Activity",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const body = req.body;
      const result = await createActivityValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      const {
        activityCategoryId,
        projectId,
        quarterId,
        title,
        target,
        achieved,
        district,
        village,
        block,
        beneficiaryFemale,
        beneficiaryMale,
        remarks,
        imageUrl,
        imageKey,
        pdfUrl,
        pdfKey,
        units
      } = result.data;
      const project = await prisma.project.findUnique({
        where: { id: projectId }
      });
      if (!project) {
        res.status(404).json({
          success: false,
          message: "Project not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      const quarter = await prisma.quarter.findUnique({
        where: { id: quarterId }
      });

      if (!quarter) {
        res.status(404).json({
          success: false,
          message: "Quarter not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      const actcatName = await prisma.activitiesCategory.findUnique({
        where: { id: activityCategoryId },
        select: { id: true, name: true }
      });
      const activityCategoryName = actcatName?.name.slice(0, 3).toUpperCase();

      const latestActivity = await prisma.activities.findFirst({
        orderBy: { createdAt: "desc" },
        select: { activityId: true }
      });

      let nextId = 1;
      if (latestActivity?.activityId) {
        const match = latestActivity.activityId.match(/\d+$/);
        if (match) {
          nextId = parseInt(match[0]) + 1;
        }
      }

      const newACTId = generateFormattedId(
        activityCategoryName?.slice(0, 3) as string,
        nextId
      );

      const activity = await prisma.activities.create({
        data: {
          activityId: newACTId,
          activityCategoryId,
          projectId,
          quarterId,
          title,
          target,
          achieved,
          district,
          village,
          block,
          beneficiaryMale,
          beneficiaryFemale,
          remarks,
          imageUrl,
          imageKey,
          pdfUrl,
          pdfKey,
          units,
          userId: user.id
        },
        select: {
          id: true,
          activityId: true,
          activityCategory: true,
          project: true,
          quarter: true,
          title: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          beneficiaryFemale: true,
          beneficiaryMale: true,
          remarks: true,
          imageUrl: true,
          imageKey: true,
          pdfUrl: true,
          pdfKey: true,
          units: true,
          User: {
            select: {
              id: true,
              name: true
            }
          },
          createdAt: true,
          updatedAt: true
        }
      });
      res.status(201).json({
        success: true,
        message: "Activity created successfully",
        data: activity,
        code: "ACTIVITY-CREATED"
      });
      return;
    } catch (err) {
      console.error(`Error creating Activity :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Update Activities
activityRouter.put(
  "/update-activity/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate activity ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid activity ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the activity",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the activity and check existence
      const existingActivities = await prisma.activities.findUnique({
        where: { id }
      });

      if (!existingActivities) {
        res.status(404).json({
          success: false,
          message: "Activity not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      const body = req.body;
      const result = await updateActivityValidation.safeParse(body);
      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      // Verify project exists if it's being updated
      if (
        result.data.projectId &&
        result.data.projectId !== existingActivities.projectId
      ) {
        const project = await prisma.project.findUnique({
          where: { id: result.data.projectId }
        });

        if (!project) {
          res.status(404).json({
            success: false,
            message: "Project not found",
            code: "RESOURCE_NOT_FOUND"
          });
          return;
        }
      }

      // Verify quarter exists if it's being updated
      if (
        result.data.quarterId &&
        result.data.quarterId !== existingActivities.quarterId
      ) {
        const quarter = await prisma.quarter.findUnique({
          where: { id: result.data.quarterId }
        });

        if (!quarter) {
          res.status(404).json({
            success: false,
            message: "Quarter not found",
            code: "RESOURCE_NOT_FOUND"
          });
          return;
        }
      }
      const updateData: any = {};

      const {
        activityCategoryId,
        projectId,
        quarterId,
        title,
        target,
        achieved,
        district,
        village,
        block,
        beneficiaryFemale,
        beneficiaryMale,
        remarks,
        imageUrl,
        imageKey,
        pdfUrl,
        pdfKey,
        units
      } = result.data;

      if (activityCategoryId !== undefined)
        updateData.activityCategoryId = activityCategoryId;
      if (projectId !== undefined) updateData.projectId = projectId;
      if (quarterId !== undefined) updateData.quarterId = quarterId;
      if (title !== undefined) updateData.title = title;
      if (target !== undefined) updateData.target = target;
      if (achieved && !target) {
        if (existingActivities.target) {
          if (achieved > existingActivities.target) {
            res.status(400).json({
              success: false,
              message:
                "Achieved count cannot exceed the existing target. Current target is: " +
                existingActivities.target,
              code: "INVALID_INPUT"
            });
            return;
          } else {
            updateData.achieved = achieved;
          }
        }
      } else {
        if (achieved !== undefined) {
          updateData.achieved = achieved;
        }
      }
      if (district !== undefined) updateData.district = district;
      if (village !== undefined) updateData.village = village;
      if (block !== undefined) updateData.block = block;
      if (beneficiaryMale !== undefined)
        updateData.beneficiaryMale = beneficiaryMale;
      if (beneficiaryFemale !== undefined)
        updateData.beneficiaryFemale = beneficiaryFemale;
      if (remarks !== undefined) updateData.remarks = remarks;
      if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
      if (imageKey !== undefined) updateData.imageKey = imageKey;
      if (pdfUrl !== undefined) updateData.pdfUrl = pdfUrl;
      if (pdfKey !== undefined) updateData.pdfKey = pdfKey;
      if (units !== undefined) updateData.units = units;

      // Ensure we have something to update
      if (Object.keys(updateData).length === 0) {
        res.status(400).json({
          success: false,
          message: "No valid fields provided for update",
          code: "INVALID_INPUT"
        });
        return;
      }
      const updatedActivities = await prisma.activities.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          activityCategoryId: true,
          project: true,
          quarter: true,
          title: true,
          target: true,
          activityId: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          beneficiaryMale: true,
          beneficiaryFemale: true,
          remarks: true,
          imageUrl: true,
          imageKey: true,
          pdfUrl: true,
          pdfKey: true,
          units: true,
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
      res.status(200).json({
        message: "Activity updated successfully",
        success: true,
        data: updatedActivities,
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating Activity :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Get Activities for user
activityRouter.get(
  "/get-user-activites/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate activity ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid activity category ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view your Activities",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const activityData = await prisma.activities.findMany({
        where: {
          activityCategoryId: id,
          userId: user.id
        },
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          activityCategoryId: true,
          project: true,
          quarter: true,
          title: true,
          target: true,
          activityId: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          beneficiaryMale: true,
          beneficiaryFemale: true,
          remarks: true,
          imageUrl: true,
          imageKey: true,
          pdfUrl: true,
          pdfKey: true,
          units: true,
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

      if (activityData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No activity found",
          data: [],
          code: "NO_ACTIVITY_FOUND"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: activityData,
        code: "GET_ACTIVIY_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the activity info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Activity info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Get Activities for admin
activityRouter.get(
  "/get-admin-activites/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate activity ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid activity category ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view your Activities",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const activityData = await prisma.activities.findMany({
        where: {
          activityCategoryId: id
        },
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          activityCategoryId: true,
          project: true,
          quarter: true,
          title: true,
          target: true,
          activityId: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          beneficiaryMale: true,
          beneficiaryFemale: true,
          remarks: true,
          imageUrl: true,
          imageKey: true,
          pdfUrl: true,
          pdfKey: true,
          units: true,
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

      if (activityData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No activity found",
          data: [],
          code: "NO_ACTIVITY_FOUND"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: activityData,
        code: "GET_ACTIVIY_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the activity info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Activity info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Delete activity
activityRouter.delete(
  "/delete-activity/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Validate project ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid activity ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the activity",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if activity exists
      const existingActivity = await prisma.activities.findUnique({
        where: { id }
      });

      if (!existingActivity) {
        res.status(404).json({
          success: false,
          message: "Activities not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      if (existingActivity.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this activity",
          code: "FORBIDDEN"
        });
        return;
      }
      const fileDeleteWarnings: string[] = [];

      // Helper function to safely delete files
      const safeDeleteFile = async (
        fileKey: string,
        fileType: string
      ): Promise<boolean> => {
        try {
          const deletionResult = await deleteContent(fileKey);
          if (!deletionResult.success) {
            console.warn(
              `Failed to delete ${fileType} for activity ${id}:`,
              deletionResult.error
            );
            fileDeleteWarnings.push(`${fileType} deletion failed`);
            return false;
          }
          return true;
        } catch (error) {
          console.error(
            `Error during ${fileType} deletion for activity ${id}:`,
            error
          );
          fileDeleteWarnings.push(`${fileType} deletion encountered an error`);
          return false;
        }
      };

      // Delete image file if exists
      if (existingActivity.imageUrl && existingActivity.imageKey) {
        await safeDeleteFile(existingActivity.imageKey, "image");
      }

      // Delete PDF file if exists
      if (existingActivity.pdfUrl && existingActivity.pdfKey) {
        await safeDeleteFile(existingActivity.pdfKey, "PDF");
      }

      // Delete the activity
      await prisma.activities.delete({
        where: { id }
      });
      const hasWarnings = fileDeleteWarnings.length > 0;
      const response = {
        success: true,
        message: hasWarnings
          ? "Activity deleted successfully (with file deletion warnings)"
          : "Activity deleted successfully",
        code: "RESOURCE_DELETED",
        ...(hasWarnings && {
          warning:
            fileDeleteWarnings.length === 1
              ? fileDeleteWarnings[0]
              : `Multiple issues: ${fileDeleteWarnings.join(", ")}`
        })
      };
      res.status(200).json(response);
      return;
    } catch (err) {
      console.error(`Error deleting activity :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default activityRouter;
