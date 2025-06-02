import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import {
  createInputDistributionValidation,
  updateInputDistributionValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const inputDistribution = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

// Create Input Distribution
inputDistribution.post(
  "/create-input-distribution",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Input Distribution",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const body = req.body;
      const result = await createInputDistributionValidation.safeParse(body);

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
        inputDistId,
        projectId,
        quarterId,
        activityType,
        name,
        target,
        achieved,
        district,
        village,
        block,
        remarks,
        units,
        imageUrl,
        imageKey
      } = result.data;

      // Check if input distribution with this ID already exists
      const existingInputDist = await prisma.inputDistribution.findFirst({
        where: {
          inputDistId: {
            equals: inputDistId,
            mode: "insensitive"
          }
        }
      });

      if (existingInputDist) {
        res.status(409).json({
          success: false,
          message: "An Input Distribution with this Id already exists",
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

      // Create new input distribution
      const newInputDistribution = await prisma.inputDistribution.create({
        data: {
          inputDistId,
          projectId,
          quarterId,
          activityType,
          name,
          target,
          achieved,
          district,
          village,
          block,
          remarks,
          units,
          imageUrl,
          imageKey,
          userId: user.id
        }
      });

      res.status(201).json({
        success: true,
        message: "Input Distribution created successfully",
        data: newInputDistribution,
        code: "INPUT_DISTRIBUTION_CREATED"
      });
      return;
    } catch (err) {
      console.error(`Error creating Input Distribution:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Update Input Distribution
inputDistribution.put(
  "/update-input-distribution/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate input distribution ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Input Distribution ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the Input Distribution",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the input distribution and check existence
      const existingInputDist = await prisma.inputDistribution.findUnique({
        where: { id }
      });

      if (!existingInputDist) {
        res.status(404).json({
          success: false,
          message: "Input Distribution not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Validate update data
      const body = req.body;
      const result = await updateInputDistributionValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      // Check for inputDistId uniqueness if being updated
      if (
        result.data.inputDistId &&
        result.data.inputDistId !== existingInputDist.inputDistId
      ) {
        const duplicateId = await prisma.inputDistribution.findFirst({
          where: {
            inputDistId: {
              equals: result.data.inputDistId,
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
            message: "An Input Distribution with this ID already exists",
            code: "DUPLICATE_RESOURCE"
          });
          return;
        }
      }

      // Verify project exists if it's being updated
      if (
        result.data.projectId &&
        result.data.projectId !== existingInputDist.projectId
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
        result.data.quarterId !== existingInputDist.quarterId
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
        inputDistId,
        projectId,
        quarterId,
        activityType,
        name,
        target,
        achieved,
        district,
        village,
        block,
        remarks,
        units,
        imageUrl,
        imageKey
      } = result.data;

      if (inputDistId !== undefined) updateData.inputDistId = inputDistId;
      if (projectId !== undefined) updateData.projectId = projectId;
      if (quarterId !== undefined) updateData.quarterId = quarterId;
      if (activityType !== undefined) updateData.activityType = activityType;
      if (name !== undefined) updateData.name = name;
      if (target !== undefined) updateData.target = target;
      if (achieved !== undefined) updateData.achieved = achieved;
      if (district !== undefined) updateData.district = district;
      if (village !== undefined) updateData.village = village;
      if (block !== undefined) updateData.block = block;
      if (remarks !== undefined) updateData.remarks = remarks;
      if (units !== undefined) updateData.units = units;
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
      const updatedInputDist = await prisma.inputDistribution.update({
        where: { id },
        data: updateData
      });

      console.info(
        `Input Distribution updated: ${updatedInputDist.id} by user ${user.id}`
      );

      res.status(200).json({
        message: "Input Distribution updated successfully",
        success: true,
        data: updatedInputDist,
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating Input Distribution:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//get user input dist
inputDistribution.get(
  "/get-user-inputdist",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view your Input distribution",
          code: "UNAUTHORIZED"
        });
      }

      const inputDistributiondata = await prisma.inputDistribution.findMany({
        where: {
          userId: user?.id
        },
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          inputDistId: true,
          project: true,
          quarter: true,
          activityType: true,
          name: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          remarks: true,
          units: true,
          imageUrl: true
        }
      });
      if (inputDistributiondata.length === 0) {
        res.status(200).json({
          success: true,
          message: "NoInput distribution data found",
          data: [],
          code: "NO_INPUT_DIST_FOUND"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: inputDistributiondata,
        code: "GET_INPUTDIST_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the Input distribution info", err);
      res.status(500).json({
        success: false,
        message: "Could not Input distribution info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//get admin input dist
inputDistribution.get(
  "/get-user-inputdist",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view your Input distribution",
          code: "UNAUTHORIZED"
        });
      }

      const inputDistributiondata = await prisma.inputDistribution.findMany({
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          inputDistId: true,
          project: true,
          quarter: true,
          activityType: true,
          name: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          remarks: true,
          units: true,
          imageUrl: true,
          User: true
        }
      });
      if (inputDistributiondata.length === 0) {
        res.status(200).json({
          success: true,
          message: "NoInput distribution data found",
          data: [],
          code: "NO_INPUT_DIST_FOUND"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: inputDistributiondata,
        code: "GET_INPUTDIST_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the Input distribution info", err);
      res.status(500).json({
        success: false,
        message: "Could not Input distribution info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

export default inputDistribution;
