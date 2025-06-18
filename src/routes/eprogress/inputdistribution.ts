import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { deleteContent } from "@services/Cloudflare/cloudflare";
import { generateFormattedId } from "@services/general";
import {
  createInputDistributionValidation,
  updateInputDistributionValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const inputDistributionRouter = express.Router();

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
inputDistributionRouter.post(
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

      const latestProgram = await prisma.inputDistribution.findFirst({
        orderBy: { createdAt: "desc" },
        select: { inputDistId: true }
      });

      let nextId = 1;
      if (latestProgram?.inputDistId) {
        const match = latestProgram.inputDistId.match(/\d+$/);
        if (match) {
          nextId = parseInt(match[0]) + 1;
        }
      }
      const newINDId = generateFormattedId("IND", nextId);

      // Create new input distribution
      const newInputDistribution = await prisma.inputDistribution.create({
        data: {
          inputDistId: newINDId,
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
          imageKey: true,
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
inputDistributionRouter.put(
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

      if (projectId !== undefined) updateData.projectId = projectId;
      if (quarterId !== undefined) updateData.quarterId = quarterId;
      if (activityType !== undefined) updateData.activityType = activityType;
      if (name !== undefined) updateData.name = name;
      if (target !== undefined) updateData.target = target;
      if (achieved && !target) {
        if (achieved > existingInputDist.target) {
          res.status(400).json({
            success: false,
            message:
              "Achieved count cannot exceed target count, the target is : " +
              existingInputDist.target,
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
        data: updateData,
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
          imageKey: true,
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
inputDistributionRouter.get(
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
          activityType: true,
          name: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          remarks: true,
          imageUrl: true,
          imageKey: true,
          units: true,
          createdAt: true,
          updatedAt: true
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
inputDistributionRouter.get(
  "/get-admin-inputdist",
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
          imageKey: true,
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

inputDistributionRouter.delete(
  "/delete-input-dist/:id",
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
      const existingInputDistribution =
        await prisma.inputDistribution.findUnique({
          where: { id }
        });
      if (!existingInputDistribution) {
        res.status(404).json({
          success: false,
          message: "Input distribution field not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      if (existingInputDistribution.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this field",
          code: "FORBIDDEN"
        });
        return;
      }
      let fileDeleteWarning = null;
      // Try to delete the file first, but continue even if it fails
      if (
        existingInputDistribution.imageUrl &&
        existingInputDistribution.imageKey
      ) {
        try {
          const deletionResult = await deleteContent(
            existingInputDistribution.imageKey
          );

          if (!deletionResult.success) {
            console.warn(
              `Failed to delete file for Input dist image ${id}:`,
              deletionResult.error
            );
            fileDeleteWarning =
              "File deletion failed but record will be removed from database";
          }
        } catch (fileError) {
          console.error(
            `Error during file deletion for Input dist ${id}:`,
            fileError
          );
          fileDeleteWarning =
            "File deletion encountered an error but record will be removed from database";
        }
      }

      await prisma.inputDistribution.delete({
        where: { id }
      });
      res.status(200).json({
        success: true,
        message: fileDeleteWarning
          ? "Input distribution deleted successfully (with file deletion warning)"
          : "Input distribution deleted successfully",
        code: "RESOURCE_DELETED",
        ...(fileDeleteWarning && { warning: fileDeleteWarning })
      });
      return;
    } catch (err) {
      console.error(`Error deleting Input distribution :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default inputDistributionRouter;
