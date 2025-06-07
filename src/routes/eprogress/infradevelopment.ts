import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import {
  createInfrastructureValidation,
  updateInfrastructureValidation
} from "@utils/validation";

import express, { Request, Response } from "express";

const infrastructureRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

//PENDING -----------------------------------

// Create Infrastructure Development
infrastructureRouter.post(
  "/create-infrastructure",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Infrastructure Development",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const body = req.body;
      const result = await createInfrastructureValidation.safeParse(body);

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
        InfraDevId,
        projectId,
        quarterId,
        target,
        achieved,
        district,
        village,
        block,
        remarks,
        imageUrl,
        imageKey
      } = result.data;

      // Check if infrastructure development with this ID already exists
      const existingInfra = await prisma.infrastructureDevelopment.findFirst({
        where: {
          InfraDevId: {
            equals: InfraDevId,
            mode: "insensitive"
          }
        }
      });

      if (existingInfra) {
        res.status(409).json({
          success: false,
          message: "An Infrastructure Development with this Id already exists",
          code: "DUPLICATE_RESOURCE"
        });
        return;
      }

      // Verify project exists
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

      // Verify quarter exists
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

      // Create new infrastructure development
      const newInfrastructure = await prisma.infrastructureDevelopment.create({
        data: {
          InfraDevId,
          projectId,
          quarterId,
          target,
          achieved,
          district,
          village,
          block,
          remarks,
          imageUrl,
          imageKey,
          userId: user.id
        }
      });

      res.status(201).json({
        success: true,
        message: "Infrastructure Development created successfully",
        data: newInfrastructure,
        code: "INFRASTRUCTURE_CREATED"
      });
      return;
    } catch (err) {
      console.error(`Error creating Infrastructure Development:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Update Infrastructure Development
infrastructureRouter.put(
  "/update-infrastructure/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate infrastructure ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Infrastructure Development ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the Infrastructure Development",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the infrastructure and check existence
      const existingInfra = await prisma.infrastructureDevelopment.findUnique({
        where: { id }
      });

      if (!existingInfra) {
        res.status(404).json({
          success: false,
          message: "Infrastructure Development not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Validate update data
      const body = req.body;
      const result = await updateInfrastructureValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      // Check for InfraDevId uniqueness if being updated
      if (
        result.data.InfraDevId &&
        result.data.InfraDevId !== existingInfra.InfraDevId
      ) {
        const duplicateId = await prisma.infrastructureDevelopment.findFirst({
          where: {
            InfraDevId: {
              equals: result.data.InfraDevId,
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
            message:
              "An Infrastructure Development with this ID already exists",
            code: "DUPLICATE_RESOURCE"
          });
          return;
        }
      }

      // Verify project exists if it's being updated
      if (
        result.data.projectId &&
        result.data.projectId !== existingInfra.projectId
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
        result.data.quarterId !== existingInfra.quarterId
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
        InfraDevId,
        projectId,
        quarterId,
        target,
        achieved,
        district,
        village,
        block,
        remarks,
        imageUrl,
        imageKey
      } = result.data;

      if (InfraDevId !== undefined) updateData.InfraDevId = InfraDevId;
      if (projectId !== undefined) updateData.projectId = projectId;
      if (quarterId !== undefined) updateData.quarterId = quarterId;
      if (target !== undefined) updateData.target = target;
      if (achieved !== undefined) updateData.achieved = achieved;
      if (district !== undefined) updateData.district = district;
      if (village !== undefined) updateData.village = village;
      if (block !== undefined) updateData.block = block;
      if (remarks !== undefined) updateData.remarks = remarks;
      if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
      if (imageKey !== undefined) updateData.imageKey = imageKey;

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
      const updatedInfra = await prisma.infrastructureDevelopment.update({
        where: { id },
        data: updateData
      });

      // console.info(
      //   `Infrastructure Development updated: ${updatedInfra.id} by user ${user.id}`
      // );

      res.status(200).json({
        message: "Infrastructure Development updated successfully",
        success: true,
        data: updatedInfra,
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating Infrastructure Development:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//get infra-Dev for user
infrastructureRouter.get(
  "/get-user-infra",
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
      }

      const infraDevelopmentData =
        await prisma.infrastructureDevelopment.findMany({
          where: {
            userId: user?.id
          },
          orderBy: {
            createdAt: "desc"
          },
          select: {
            id: true,
            InfraDevId: true,
            project: true,
            quarter: true,
            target: true,
            achieved: true,
            district: true,
            village: true,
            block: true,
            remarks: true,
            imageUrl: true,
            createdAt: true,
            updatedAt: true
          }
        });

      if (infraDevelopmentData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No Infra development data found",
          data: [],
          code: "NO_INFRA_DEV_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: infraDevelopmentData,
        code: "GET_INFRADEV_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the Infra development info", err);
      res.status(500).json({
        success: false,
        message: "Could not Infra development info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//get infra-Deev for admin
infrastructureRouter.get(
  "/get-admin-infra",
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
      }

      const infraDevelopmentData =
        await prisma.infrastructureDevelopment.findMany({
          orderBy: {
            createdAt: "desc"
          },
          select: {
            id: true,
            InfraDevId: true,
            project: true,
            quarter: true,
            target: true,
            achieved: true,
            district: true,
            village: true,
            block: true,
            remarks: true,
            imageUrl: true,
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

      if (infraDevelopmentData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No Infra development data found",
          data: [],
          code: "NO_INFRA_DEV_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: infraDevelopmentData,
        code: "GET_INFRADEV_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the Infra development info", err);
      res.status(500).json({
        success: false,
        message: "Could not Infra development info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//delete infra-Dev
infrastructureRouter.delete(
  "/delete-infraDev/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Validate project ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Infra developement ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the field",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const existingInfra = await prisma.infrastructureDevelopment.findUnique({
        where: { id }
      });
      if (!existingInfra) {
        res.status(404).json({
          success: false,
          message: "Infra development field not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      if (existingInfra.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this field",
          code: "FORBIDDEN"
        });
        return;
      }
      //Delete
      await prisma.infrastructureDevelopment.delete({
        where: { id }
      });
      res.status(200).json({
        success: true,
        message: "Infra development field deleted successfully",
        code: "RESOURCE_DELETED"
      });
      return;
    } catch (err) {
      console.error(`Error deleting Infra development :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default infrastructureRouter;
