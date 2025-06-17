import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { generateFormattedId } from "@services/general";
import {
  createAwarenessProgramValidation,
  updateAwarenessProgramValidation
} from "@utils/validation";

import express, { Request, Response } from "express";

const awarenessProgramRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

//create
awarenessProgramRouter.post(
  "/create-awareness-program",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a New Awareness Program",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const body = req.body;
      const result = await createAwarenessProgramValidation.safeParse(body);

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
        target,
        achieved,
        district,
        village,
        block,
        beneficiaryMale,
        beneficiaryFemale,
        imageUrl,
        imageKey,
        units,
        remarks
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
      const latestProgram = await prisma.awarenessProgram.findFirst({
        orderBy: { createdAt: "desc" },
        select: { awarnessprogramId: true }
      });

      let nextId = 1;
      if (latestProgram?.awarnessprogramId) {
        const match = latestProgram.awarnessprogramId.match(/\d+$/);
        if (match) {
          nextId = parseInt(match[0]) + 1;
        }
      }
      const newAwarenessProgramId = generateFormattedId("AWP", nextId);

      const newProgram = await prisma.awarenessProgram.create({
        data: {
          awarnessprogramId: newAwarenessProgramId,
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
          imageUrl,
          imageKey,
          units,
          remarks,
          userId: user.id
        },
        select: {
          id: true,
          awarnessprogramId: true,
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
          imageUrl: true,
          remarks: true,
          imageKey: true,
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

      res.status(201).json({
        success: true,
        message: "Awareness Program created successfully",
        data: newProgram,
        code: "AWARENESS_PROGRAM_CREATED"
      });
      return;
    } catch (err) {
      console.error(`Error creating awareness program:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//update
awarenessProgramRouter.put(
  "/update-awareness-program/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate program ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid awareness program ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the awareness program",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the program and check existence
      const existingProgram = await prisma.awarenessProgram.findUnique({
        where: { id }
      });

      if (!existingProgram) {
        res.status(404).json({
          success: false,
          message: "Awareness Program not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Validate update data
      const body = req.body;
      const result = await updateAwarenessProgramValidation.safeParse(body);

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
        result.data.projectId !== existingProgram.projectId
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
        result.data.quarterId !== existingProgram.quarterId
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
        target,
        achieved,
        district,
        village,
        block,
        beneficiaryMale,
        beneficiaryFemale,
        imageUrl,
        imageKey,
        remarks,
        units
      } = result.data;

      if (projectId !== undefined) updateData.projectId = projectId;
      if (quarterId !== undefined) updateData.quarterId = quarterId;
      if (title !== undefined) updateData.title = title;
      if (remarks !== undefined) updateData.remarks = remarks;
      if (target !== undefined) updateData.target = target;
      if (achieved && !target) {
        if (achieved > existingProgram.target) {
          res.status(400).json({
            success: false,
            message:
              "Achieved count cannot exceed target count, the target is : " +
              existingProgram.target,
            code: "INVALID_INPUT"
          });
          return;
        } else {
          if (achieved !== undefined) updateData.achieved = achieved;
        }
      } else {
        if (achieved !== undefined) updateData.achieved = achieved;
      }
      if (achieved !== undefined) updateData.achieved = achieved;
      if (district !== undefined) updateData.district = district;
      if (village !== undefined) updateData.village = village;
      if (block !== undefined) updateData.block = block;
      if (beneficiaryMale !== undefined)
        updateData.beneficiaryMale = beneficiaryMale;
      if (beneficiaryFemale !== undefined)
        updateData.beneficiaryFemale = beneficiaryFemale;
      if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
      if (imageKey !== undefined) updateData.imageKey = imageKey;
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
      const updatedProgram = await prisma.awarenessProgram.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          awarnessprogramId: true,
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
          imageUrl: true,
          remarks: true,
          imageKey: true,
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
        message: "Awareness Program updated successfully",
        success: true,
        data: updatedProgram,
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating awareness program:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Delete Awarness program
awarenessProgramRouter.delete(
  "/delete-awarness-program/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Validate project ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Awarness program ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the Awarness program",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if awarness program exists
      const existingAwarnessProgram = await prisma.awarenessProgram.findUnique({
        where: { id }
      });

      if (!existingAwarnessProgram) {
        res.status(404).json({
          success: false,
          message: "Awarness program not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      if (existingAwarnessProgram.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this Awarness program",
          code: "FORBIDDEN"
        });
        return;
      }

      // Delete the Awarness program
      await prisma.awarenessProgram.delete({
        where: { id }
      });

      res.status(200).json({
        success: true,
        message: "Awarness program deleted successfully",
        code: "RESOURCE_DELETED"
      });
    } catch (err) {
      console.error(`Error deleting awarness program:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// For user
awarenessProgramRouter.get(
  "/get-user-awarness-programs",
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

      const awarnessProgramsData = await prisma.awarenessProgram.findMany({
        where: {
          userId: user.id
        },
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          awarnessprogramId: true,
          project: {
            select: {
              title: true,
              implementingAgency: true,
              director: true,
              locationState: true,
              status: true
            }
          },
          quarter: {
            select: {
              id: true,
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
          imageUrl: true,
          imageKey: true,
          units: true,
          remarks: true,
          createdAt: true,
          updatedAt: true
        }
      });
      if (awarnessProgramsData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No awarness programs found",
          data: [],
          code: "NO_PROGRAMS_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: awarnessProgramsData,
        code: "GET_PROGRAMS_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the awarness program info", err);
      res.status(500).json({
        success: false,
        message:
          "Could not fetch Awarness programs info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// For admin
awarenessProgramRouter.get(
  "/get-admin-awarness-programs",
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

      const awarnessProgramsData = await prisma.awarenessProgram.findMany({
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          awarnessprogramId: true,
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
          imageUrl: true,
          remarks: true,
          imageKey: true,
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
      if (awarnessProgramsData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No awarness programs found",
          data: [],
          code: "NO_PROGRAMS_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: awarnessProgramsData,
        code: "GET_PROGRAMS_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the awarness program info", err);
      res.status(500).json({
        success: false,
        message:
          "Could not fetch Awarness programs info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

export default awarenessProgramRouter;
