import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import {
  createProjectValidation,
  updateProjectValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const projectRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}
// CRUD Operation

projectRouter.post(
  "/create-project",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = await createProjectValidation.safeParse(body);

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
        implementingAgency,
        locationState,
        director,
        budget,
        status,
        startDate,
        endDate
      } = result.data;

      const existingProject = await prisma.project.findFirst({
        where: {
          title: {
            equals: title,
            mode: "insensitive"
          }
        }
      });

      if (existingProject) {
        res.status(409).json({
          success: false,
          message: "A project with this title already existis",
          code: "DUPLICATE_RESOURCE"
        });
        return;
      }
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Project",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const projectData: any = {
        title,
        implementingAgency,
        locationState,
        director,
        status,
        // userId: user.id
        userId: "1edf5b60-f916-47cf-ba4e-d66d5d1ae4aa" //--REMOVE IN PRODUCTION--
      };

      // Add optional fields only if they have actual values
      if (budget !== undefined && budget !== null) {
        projectData.budget = budget;
      }

      if (startDate !== undefined && startDate !== null) {
        projectData.startDate = startDate;
      }
      if (endDate !== undefined && endDate !== null) {
        projectData.endDate = endDate;
      }
      const newProject = await prisma.project.create({
        data: projectData
      });

      // console.info(`Project created: ${newProject.id} by user ${user.id}`);

      res.status(201).json({
        message: "Project created successfully",
        success: true,
        data: {
          id: newProject.id,
          title: newProject.title,
          status: newProject.status
        },
        code: "RESOURCE_CREATED"
      });
      return;
    } catch (err) {
      console.error(`Error creating project :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);
// For the user
projectRouter.get(
  "/get-user-projects",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      console.log("entered");
      const user = (req as RequestWithUser).user;
      console.log("User : ", user);
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view your Projects",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const projectData = await prisma.project.findMany({
        where: {
          userId: user.id
        },
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          title: true,
          implementingAgency: true,
          locationState: true,
          director: true,
          budget: true,
          status: true,
          startDate: true,
          endDate: true,
          createdAt: true,
          updatedAt: true
        }
      });

      if (projectData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No projects found",
          data: [],
          code: "NO_PROJECTS_FOUND"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: projectData,
        code: "GET_PROJECTS_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the project info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Projects info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// For the admin getall
projectRouter.get(
  "/get-admin-projects",
  userAuth,
  async (req: Request, res: Response) => {
    console.log("entered");
    try {
      const user = (req as RequestWithUser).user;
      console.log("entered", user);

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view Projects",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const projectData = await prisma.project.findMany({
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          title: true,
          implementingAgency: true,
          locationState: true,
          director: true,
          budget: true,
          status: true,
          startDate: true,
          endDate: true,
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

      if (projectData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No projects found",
          data: [],
          code: "NO_PROJECTS_FOUND"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: projectData,
        code: "GET_PROJECTS_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the project info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Projects info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// update project
projectRouter.put(
  "/update-project/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate project ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid project ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the project",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the project and check ownership
      const existingProject = await prisma.project.findUnique({
        where: { id }
      });

      if (!existingProject) {
        res.status(404).json({
          success: false,
          message: "Project not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Check if user owns the project
      //   if (existingProject.userId !== user.id) {
      //     res.status(403).json({
      //       success: false,
      //       message: "You don't have permission to update this project",
      //       code: "FORBIDDEN"
      //     });
      //     return;
      //   }

      // Validate update data
      const body = req.body;
      const result = await updateProjectValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      // If status is being updated to Completed, make sure endDate is provided
      if (
        result.data.status === "Completed" &&
        !result.data.endDate &&
        !existingProject.endDate
      ) {
        res.status(400).json({
          success: false,
          message: "End date is required for completed projects",
          code: "VALIDATION_ERROR",
          path: ["endDate"]
        });
        return;
      }

      // Check for title uniqueness if title is being updated
      if (result.data.title && result.data.title !== existingProject.title) {
        const duplicateTitle = await prisma.project.findFirst({
          where: {
            title: {
              equals: result.data.title,
              mode: "insensitive"
            },
            id: {
              not: id
            }
          }
        });

        if (duplicateTitle) {
          res.status(409).json({
            success: false,
            message: "A project with this title already exists",
            code: "DUPLICATE_RESOURCE"
          });
          return;
        }
      }

      // Prepare update data object
      const updateData: any = {};

      // Only include fields that were provided in the request
      const {
        title,
        implementingAgency,
        locationState,
        director,
        budget,
        status,
        startDate,
        endDate
      } = result.data;

      if (title !== undefined) updateData.title = title;
      if (implementingAgency !== undefined)
        updateData.implementingAgency = implementingAgency;
      if (locationState !== undefined) updateData.locationState = locationState;
      if (director !== undefined) updateData.director = director;
      if (budget !== undefined) updateData.budget = budget;
      if (status !== undefined) updateData.status = status;
      if (startDate !== undefined) updateData.startDate = startDate;
      if (endDate !== undefined) updateData.endDate = endDate;

      // Ensure we have something to update
      if (Object.keys(updateData).length === 0) {
        res.status(400).json({
          success: false,
          message: "No valid fields provided for update",
          code: "INVALID_INPUT"
        });
        return;
      }

      // Perform the update
      const updatedProject = await prisma.project.update({
        where: { id },
        data: updateData
      });

      console.info(`Project updated: ${updatedProject.id} by user ${user.id}`);

      res.status(200).json({
        message: "Project updated successfully",
        success: true,
        data: {
          id: updatedProject.id,
          title: updatedProject.title,
          status: updatedProject.status
        },
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating project:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// delete project
projectRouter.delete(
  "/delete-project/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate project ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid project ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the project",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the project and check ownership
      const existingProject = await prisma.project.findUnique({
        where: { id },
        include: {
          _count: {
            select: {
              trainings: true,
              flds: true,
              awarenessPrograms: true,
              infrastructureDevelopments: true,
              inputDistributions: true
            }
          }
        }
      });

      if (!existingProject) {
        res.status(404).json({
          success: false,
          message: "Project not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Check if user owns the project
      if (existingProject.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this project",
          code: "FORBIDDEN"
        });
        return;
      }

      // Count the total related records that will be deleted
      const totalRelatedRecords =
        existingProject._count.trainings +
        existingProject._count.flds +
        existingProject._count.awarenessPrograms +
        existingProject._count.infrastructureDevelopments +
        existingProject._count.inputDistributions;

      // Get related record details for audit logging
      let relatedRecords;
      if (totalRelatedRecords > 0) {
        relatedRecords = await prisma.$transaction([
          prisma.training.findMany({
            where: { projectId: id },
            select: { id: true, title: true }
          }),
          prisma.fLD.findMany({
            where: { projectId: id },
            select: { id: true, project: true }
          }),
          prisma.awarenessProgram.findMany({
            where: { projectId: id },
            select: { id: true, project: true }
          }),
          prisma.infrastructureDevelopment.findMany({
            where: { projectId: id },
            select: { id: true, project: true }
          }),
          prisma.inputDistribution.findMany({
            where: { projectId: id },
            select: { id: true, project: true }
          })
        ]);
      }

      // Note: This will delete all related records in the child tables
      // Perform deletion with transaction for data integrity
      const deletedProject = await prisma.$transaction(async (tx) => {
        // Delete the project (cascading deletes should handle related records)
        const project = await tx.project.delete({
          where: { id }
        });

        return project;
      });

      // Log the deletion and its cascading effects
      // console.info(`Project deleted: ${deletedProject.id} by user ${user.id}`);
      // console.info(`Cascade deleted ${totalRelatedRecords} related records`);

      // If needed, log detailed information about deleted related records
      // if (totalRelatedRecords > 0) {
      //   console.info(
      //     "Deleted related records:",
      //     JSON.stringify(relatedRecords)
      //   );
      // }

      // Return success response with details about what was deleted
      res.status(200).json({
        message: "Project deleted successfully",
        success: true,
        data: {
          id: deletedProject.id,
          title: deletedProject.title,
          relatedRecordsDeleted: totalRelatedRecords
        },
        code: "RESOURCE_DELETED"
      });
      return;
    } catch (err) {
      console.error(`Error deleting project:`, err);
      // Handle specific Prisma errors
      const error = err as any; // or create a proper error interface

      if (error.code === "P2002") {
        res.status(409).json({
          success: false,
          message: "Cannot delete project due to database constraints",
          code: "DATABASE_CONSTRAINT",
          status: 409
        });
        return;
      }

      if (error.code === "P2025") {
        res.status(404).json({
          success: false,
          message: "Project not found or already deleted",
          code: "RESOURCE_NOT_FOUND",
          status: 404
        });
        return;
      }

      // Handle transaction errors
      if (error.message && error.message.includes("transaction")) {
        res.status(500).json({
          success: false,
          message: "Database transaction failed. Please try again",
          code: "TRANSACTION_FAILED",
          status: 500
        });
        return;
      }

      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

export default projectRouter;
