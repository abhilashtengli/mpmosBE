import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import {
  createActivityCategoryValidation,
  updateActivityCategoryValidation
} from "@utils/validation";

import express, { Request, Response } from "express";

const activityCategoryRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

activityCategoryRouter.post(
  "/create-activity-category",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Activity category",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const body = req.body;
      const result = await createActivityCategoryValidation.safeParse(body);
      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }
      const { name } = result.data;

      const activityCategory = await prisma.activitiesCategory.create({
        data: {
          name,
          userId: user.id
        },
        select: {
          id: true,
          name: true,
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

      res.status(201).json({
        success: true,
        message: "Activity category created successfully",
        data: activityCategory,
        code: "ACTIVITY_CATEGORY_CREATED"
      });
    } catch (err) {
      console.error(`Error creating Activity category:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

activityCategoryRouter.put(
  "/update-activity-category/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate program ID
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
          message: "Please sign in to update the activity category",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const existingactCat = await prisma.activitiesCategory.findUnique({
        where: { id }
      });

      if (!existingactCat) {
        res.status(404).json({
          success: false,
          message: "Activity category not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      const body = req.body;
      const result = await updateActivityCategoryValidation.safeParse(body);
      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }
      const updateData: any = {};
      const { name } = result.data;
      if (name !== undefined) updateData.name = name;
      if (Object.keys(updateData).length === 0) {
        res.status(400).json({
          success: false,
          message: "No valid fields provided for update",
          code: "INVALID_INPUT"
        });
        return;
      }
      const updateActCat = await prisma.activitiesCategory.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          name: true,
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
        message: "Activity category updated successfully",
        success: true,
        data: updateActCat,
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating Activity category:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// For user
activityCategoryRouter.get(
  "/get-user-activity-category",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const actCatData = await prisma.activitiesCategory.findMany({
        where: {
          userId: user.id
        },
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          name: true,
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
      if (actCatData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No activity category found",
          data: [],
          code: "NO_RESOURCE_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: actCatData,
        code: "GET_ACTIVITY-CATEGORY_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the activity category info", err);
      res.status(500).json({
        success: false,
        message:
          "Could not fetch Activity category info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// For admin
activityCategoryRouter.get(
  "/get-admin-activity-category",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const actCatData = await prisma.activitiesCategory.findMany({
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          name: true,
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
      if (actCatData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No activity category found",
          data: [],
          code: "NO_RESOURCE_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: actCatData,
        code: "GET_ACTIVITY-CATEGORY_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the activity category info", err);
      res.status(500).json({
        success: false,
        message:
          "Could not fetch Activity category info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Delete Activity program
activityCategoryRouter.delete(
  "/delete-activity-category/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Validate project ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Activity category ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the activity category",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if Activity program exists
      const existinActcat = await prisma.activitiesCategory.findUnique({
        where: { id }
      });

      if (!existinActcat) {
        res.status(404).json({
          success: false,
          message: "Activity category not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      if (existinActcat.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this Activity category",
          code: "FORBIDDEN"
        });
        return;
      }

      // Delete the Activity program
      await prisma.activitiesCategory.delete({
        where: { id }
      });

      // Prepare response based on whether file deletion succeeded
      const response = {
        success: true,
        message: "Activity category deleted successfully",
        code: "ACTIVITY_CATEGORY_DELETED"
      };

      res.status(200).json(response);
      return;
    } catch (err) {
      console.error(`Error deleting activity category:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default activityCategoryRouter;
