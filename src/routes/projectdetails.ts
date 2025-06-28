import { prisma } from "@lib/prisma";
import { contentRateLimit } from "@lib/ratelimits";
import { userAuth } from "@middleware/auth";
import {
  createProjectDetailsValidation,
  updateProjectDetailsValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const projectDetailsRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

// Create Project Details
projectDetailsRouter.post(
  "/add-project-details",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to create project details",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const body = req.body;
      const result = createProjectDetailsValidation.safeParse(body);

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
        title,
        region,
        year,
        budget,
        center,
        location,
        objectives,
        director,
        coDirectors,
        achievements
      } = result.data;

      const projectDetails = await prisma.projectDetails.create({
        data: {
          title,
          region,
          year,
          budget,
          center,
          location,
          objectives,
          director,
          coDirectors,
          achievements,
          userId: user.id
        },
        select: {
          id: true,
          title: true,
          region: true,
          year: true,
          budget: true,
          center: true,
          location: true,
          objectives: true,
          director: true,
          coDirectors: true,
          achievements: true,
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
        message: "Project details created successfully",
        data: projectDetails,
        code: "PROJECT_DETAILS_CREATED"
      });
    } catch (err) {
      console.error(`Error creating Project Details:`, err);

      if (err instanceof Error) {
        // Check for database constraint violations
        if (
          err.message.includes("Unique constraint") ||
          err.message.includes("unique constraint")
        ) {
          res.status(409).json({
            success: false,
            message: "Project details with similar details already exists",
            code: "CONFLICT"
          });
          return;
        }

        // Check for foreign key constraint (invalid userId)
        if (err.message.includes("Foreign key constraint")) {
          res.status(400).json({
            success: false,
            message: "Invalid user reference",
            code: "INVALID_REFERENCE"
          });
          return;
        }
      }

      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Update Project Details
projectDetailsRouter.put(
  "/update-project-details/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate project details ID format (UUID)
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Project Details ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the project details",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if project details exists and belongs to the user
      const existingProjectDetails = await prisma.projectDetails.findFirst({
        where: {
          id,
          userId: user.id
        }
      });

      if (!existingProjectDetails) {
        res.status(404).json({
          success: false,
          message:
            "Project details not found or you don't have permission to update it",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      const body = req.body;
      const result = updateProjectDetailsValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      const updateData: Partial<{
        title: string;
        region: string;
        year: number;
        budget: number | null;
        center: string | null;
        location: string | null;
        objectives: string[];
        director: string;
        coDirectors: string[];
        achievements: string[];
      }> = {};

      const {
        title,
        region,
        year,
        budget,
        center,
        location,
        objectives,
        director,
        coDirectors,
        achievements
      } = result.data;

      if (title !== undefined) updateData.title = title;
      if (region !== undefined) updateData.region = region;
      if (year !== undefined) updateData.year = year;
      if (budget !== undefined) updateData.budget = budget;
      if (center !== undefined) updateData.center = center;
      if (location !== undefined) updateData.location = location;
      if (objectives !== undefined) updateData.objectives = objectives;
      if (director !== undefined) updateData.director = director;
      if (coDirectors !== undefined) updateData.coDirectors = coDirectors;
      if (achievements !== undefined) updateData.achievements = achievements;

      // Ensure we have something to update
      if (Object.keys(updateData).length === 0) {
        res.status(400).json({
          success: false,
          message: "No valid fields provided for update",
          code: "INVALID_INPUT"
        });
        return;
      }

      const updatedProjectDetails = await prisma.projectDetails.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          title: true,
          region: true,
          year: true,
          budget: true,
          center: true,
          location: true,
          objectives: true,
          director: true,
          coDirectors: true,
          achievements: true,
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
        message: "Project details updated successfully",
        success: true,
        data: updatedProjectDetails,
        code: "RESOURCE_UPDATED"
      });
    } catch (err) {
      console.error(`Error updating Project Details:`, err);

      if (err instanceof Error) {
        // Handle case where record was deleted between check and update
        if (err.message.includes("Record to update not found")) {
          res.status(404).json({
            success: false,
            message: "Project details not found",
            code: "RESOURCE_NOT_FOUND"
          });
          return;
        }

        // Handle constraint violations
        if (
          err.message.includes("Unique constraint") ||
          err.message.includes("unique constraint")
        ) {
          res.status(409).json({
            success: false,
            message: "Project details with similar details already exists",
            code: "CONFLICT"
          });
          return;
        }
      }

      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Get User's Project Details
projectDetailsRouter.get(
  "/get-user-project-details",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to view your project details",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const projectDetails = await prisma.projectDetails.findMany({
        where: {
          userId: user.id
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          region: true,
          year: true,
          budget: true,
          center: true,
          location: true,
          objectives: true,
          director: true,
          coDirectors: true,
          achievements: true,
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

      if (projectDetails.length === 0) {
        res.status(200).json({
          success: true,
          message: "No project details found",
          data: [],
          code: "SUCCESS"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: projectDetails,
        code: "SUCCESS"
      });
    } catch (err) {
      console.error("Error getting user project details:", err);
      res.status(500).json({
        success: false,
        message:
          "Something went wrong, Could not get project details, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Get All Project Details (Public endpoint)
projectDetailsRouter.get(
  "/get-all-project-details",
  contentRateLimit,
  async (req: Request, res: Response) => {
    try {
      const projectDetails = await prisma.projectDetails.findMany({
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          region: true,
          year: true,
          budget: true,
          center: true,
          location: true,
          objectives: true,
          director: true,
          coDirectors: true,
          achievements: true,
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

      if (projectDetails.length === 0) {
        res.status(200).json({
          success: true,
          message: "No project details found",
          data: [],
          code: "SUCCESS"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: projectDetails,
        code: "SUCCESS"
      });
    } catch (err) {
      console.error("Error getting all project details:", err);
      res.status(500).json({
        success: false,
        message:
          "Something went wrong, Could not get project details, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Delete Project Details
projectDetailsRouter.delete(
  "/delete-project-details/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate project details ID format (UUID)
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Project Details ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the project details",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const existingProjectDetails = await prisma.projectDetails.findUnique({
        where: { id }
      });

      if (!existingProjectDetails) {
        res.status(404).json({
          success: false,
          message: "Project details not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      //   if (existingProjectDetails.userId !== user.id) {
      //     res.status(403).json({
      //       success: false,
      //       message: "You don't have permission to delete this project details",
      //       code: "FORBIDDEN"
      //     });
      //     return;
      //   }

      await prisma.projectDetails.delete({
        where: { id }
      });

      res.status(200).json({
        success: true,
        message: "Project details deleted successfully",
        code: "RESOURCE_DELETED"
      });
    } catch (err) {
      console.error(`Error deleting Project Details:`, err);

      if (err instanceof Error) {
        if (err.message.includes("Record to delete does not exist")) {
          res.status(404).json({
            success: false,
            message: "Project details not found",
            code: "RESOURCE_NOT_FOUND"
          });
          return;
        }
      }

      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default projectDetailsRouter;
