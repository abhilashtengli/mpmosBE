import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import {
  createTrainingValidation,
  updateTrainingValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const trainingRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}
// For create training
trainingRouter.post(
  "/create-training",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Project",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const body = req.body;
      const result = await createTrainingValidation.safeParse(body);

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
        projectId,
        quarterId,
        title,
        trainingId,
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
        units
      } = result.data;

      const existingTraining = await prisma.training.findFirst({
        where: {
          trainingId: {
            equals: trainingId,
            mode: "insensitive"
          }
        }
      });

      if (existingTraining) {
        res.status(409).json({
          success: false,
          message: "A Training with this Id already existis",
          code: "DUPLICATE_RESOURCE"
        });
        return;
      }

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

      const newTraining = await prisma.training.create({
        data: {
          trainingId,
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
        }
      });

      res.status(201).json({
        success: true,
        message: "Training created successfully",
        data: newTraining,
        code: "TRAINING-CREATED"
      });
      return;
    } catch (err) {
      console.error(`Error creating training :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Update training
trainingRouter.put(
  "/update-training/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate training ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid training ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the training",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the training and check existence
      const existingTraining = await prisma.training.findUnique({
        where: { id }
      });

      if (!existingTraining) {
        res.status(404).json({
          success: false,
          message: "Training not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Validate update data
      const body = req.body;
      const result = await updateTrainingValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      // Check for trainingId uniqueness if being updated
      if (
        result.data.trainingId &&
        result.data.trainingId !== existingTraining.trainingId
      ) {
        const duplicateId = await prisma.training.findFirst({
          where: {
            trainingId: {
              equals: result.data.trainingId,
              mode: "insensitive"
            },
            id: {
              not: id
            }
          }
        });

        if (duplicateId) {
          res.status(409).json({
            success: false,
            message: "A training with this ID already exists",
            code: "DUPLICATE_RESOURCE"
          });
          return;
        }
      }

      // Verify project exists if it's being updated
      if (
        result.data.projectId &&
        result.data.projectId !== existingTraining.projectId
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
        result.data.quarterId !== existingTraining.quarterId
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

      // Prepare update data object
      const updateData: any = {};

      // Only include fields that were provided in the request
      const {
        projectId,
        quarterId,
        title,
        trainingId,
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
        units
      } = result.data;

      if (projectId !== undefined) updateData.projectId = projectId;
      if (quarterId !== undefined) updateData.quarterId = quarterId;
      if (title !== undefined) updateData.title = title;
      if (trainingId !== undefined) updateData.trainingId = trainingId;
      if (target !== undefined) updateData.target = target;
      if (achieved && !target) {
        if (achieved > existingTraining.target) {
          res.status(400).json({
            success: false,
            message:
              "Achieved count cannot exceed target count, the target is : " +
              existingTraining.target,
            code: "INVALID_INPUT"
          });
          return;
        } else {
          if (achieved !== undefined) updateData.achieved = achieved;
        }
      } else {
        if (achieved !== undefined) updateData.achieved = achieved;
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

      // Perform the update
      const updatedTraining = await prisma.training.update({
        where: { id },
        data: updateData
      });

      console.info(
        `Training updated: ${updatedTraining.id} by user ${user.id}`
      );

      res.status(200).json({
        message: "Training updated successfully",
        success: true,
        data: {
          id: updatedTraining.id,
          title: updatedTraining.title,
          trainingId: updatedTraining.trainingId
        },
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating training:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Get training for user
trainingRouter.get(
  "/get-user-trainings",
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

      const trainingData = await prisma.training.findMany({
        where: {
          userId: user.id
        },
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          trainingId: true,
          project: {
            select: {
              implementingAgency: true,
              director: true,
              locationState: true,
              status: true
            }
          },
          quarter: {
            select: {
              number: true,
              year: true
            }
          },
          title: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          beneficiaryMale: true,
          beneficiaryFemale: true,
          remarks: true,
          imageUrl: true,
          pdfKey: true,
          units: true,
          createdAt: true,
          updatedAt: true
        }
      });

      if (trainingData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No trainings found",
          data: [],
          code: "NO_TRAININGS_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: trainingData,
        code: "GET_TRAININGS_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the training info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Training info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Get trainings for admin
trainingRouter.get(
  "/get-admin-trainings",
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

      const trainingData = await prisma.training.findMany({
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          trainingId: true,
          project: true,
          quarter: true,
          title: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          beneficiaryMale: true,
          beneficiaryFemale: true,
          remarks: true,
          imageUrl: true,
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

      if (trainingData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No trainings found",
          data: [],
          code: "NO_TRAININGS_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: trainingData,
        code: "GET_TRAININGS_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the training info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch Training info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Delete training
trainingRouter.delete(
  "/delete-training/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Validate project ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid training ID is required",
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

      // Check if training exists
      const existingTraining = await prisma.training.findUnique({
        where: { id }
      });

      if (!existingTraining) {
        res.status(404).json({
          success: false,
          message: "Training not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      if (existingTraining.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this training",
          code: "FORBIDDEN"
        });
        return;
      }

      // Delete the training
      await prisma.training.delete({
        where: { id }
      });

      res.status(200).json({
        success: true,
        message: "Training deleted successfully",
        code: "RESOURCE_DELETED"
      });
      return;
    } catch (err) {
      console.error(`Error deleting training :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default trainingRouter;
