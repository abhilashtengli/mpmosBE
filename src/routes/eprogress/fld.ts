import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { generateFormattedId } from "@services/general";
import { createFldValidation, updateFldValidation } from "@utils/validation";

import express, { Request, Response } from "express";

const fldRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

// Create FLD
fldRouter.post("/create-fld", userAuth, async (req: Request, res: Response) => {
  try {
    const user = (req as RequestWithUser).user;

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Please Sign in to create a New FLD",
        code: "UNAUTHORIZED"
      });
      return;
    }

    const body = req.body;
    const result = await createFldValidation.safeParse(body);

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
      remarks,
      district,
      village,
      block,
      target,
      achieved,
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
    const latestProgram = await prisma.fLD.findFirst({
      orderBy: { createdAt: "desc" },
      select: { fldId: true }
    });

    let nextId = 1;
    if (latestProgram?.fldId) {
      const match = latestProgram.fldId.match(/\d+$/);
      if (match) {
        nextId = parseInt(match[0]) + 1;
      }
    }
    const newFLDId = generateFormattedId("FLD", nextId);

    const newFld = await prisma.fLD.create({
      data: {
        fldId: newFLDId,
        projectId,
        quarterId,
        remarks,
        district,
        village,
        block,
        target,
        achieved,
        units,
        userId: user.id
      }
    });

    res.status(201).json({
      success: true,
      message: "FLD created successfully",
      data: newFld,
      code: "FLD_CREATED"
    });
    return;
  } catch (err) {
    console.error(`Error creating FLD:`, err);
    res.status(500).json({
      success: false,
      message: "Something went wrong, Please try again later",
      code: "INTERNAL_SERVER_ERROR"
    });
    return;
  }
});

// Update FLD
fldRouter.put(
  "/update-fld/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate FLD ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid FLD ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the FLD",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Find the FLD and check existence
      const existingFld = await prisma.fLD.findUnique({
        where: { id }
      });

      if (!existingFld) {
        res.status(404).json({
          success: false,
          message: "FLD not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Validate update data
      const body = req.body;
      const result = await updateFldValidation.safeParse(body);

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
        result.data.projectId !== existingFld.projectId
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
        result.data.quarterId !== existingFld.quarterId
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
        remarks,
        district,
        village,
        block,
        target,
        achieved,
        units
      } = result.data;

      if (projectId !== undefined) updateData.projectId = projectId;
      if (quarterId !== undefined) updateData.quarterId = quarterId;
      if (remarks !== undefined) updateData.remarks = remarks;
      if (district !== undefined) updateData.district = district;
      if (village !== undefined) updateData.village = village;
      if (block !== undefined) updateData.block = block;
      if (target !== undefined) updateData.target = target;
      if (achieved && !target) {
        if (achieved > existingFld.target) {
          res.status(400).json({
            success: false,
            message:
              "Achieved count cannot exceed target count, the target is : " +
              existingFld.target,
            code: "INVALID_INPUT"
          });
          return;
        } else {
          if (achieved !== undefined) updateData.achieved = achieved;
        }
      } else {
        if (achieved !== undefined) updateData.achieved = achieved;
      }
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
      const updatedFld = await prisma.fLD.update({
        where: { id },
        data: updateData
      });

      console.info(`FLD updated: ${updatedFld.id} by user ${user.id}`);

      res.status(200).json({
        message: "FLD updated successfully",
        success: true,
        data: {
          id: updatedFld.id,
          fldId: updatedFld.fldId
        },
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating FLD:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// Delete FLD
fldRouter.delete(
  "/delete-fld/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Validate FLD ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid FLD ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the FLD",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if FLD exists
      const existingFld = await prisma.fLD.findUnique({
        where: { id }
      });

      if (!existingFld) {
        res.status(404).json({
          success: false,
          message: "FLD not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      // Check if the user has permission to delete (if they created it)
      if (existingFld.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this FLD",
          code: "FORBIDDEN"
        });
        return;
      }

      // Delete the FLD
      await prisma.fLD.delete({
        where: { id }
      });

      res.status(200).json({
        success: true,
        message: "FLD deleted successfully",
        code: "RESOURCE_DELETED"
      });
    } catch (err) {
      console.error(`Error deleting FLD:`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// For user
fldRouter.get(
  "/get-user-fld",
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

      const fldData = await prisma.fLD.findMany({
        where: {
          userId: user.id
        },
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          fldId: true,
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
          remarks: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
          units: true,
          createdAt: true,
          updatedAt: true
        }
      });

      if (fldData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No FLD found",
          data: [],
          code: "NO_FLD_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: fldData,
        code: "GET_FLD_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the FLD info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch FLD info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

// For admin
fldRouter.get(
  "/get-admin-fld",
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

      const fldData = await prisma.fLD.findMany({
        orderBy: {
          createdAt: "desc" // Default ordering by most recent
        },
        select: {
          id: true,
          fldId: true,
          project: true,
          quarter: true,
          remarks: true,
          target: true,
          achieved: true,
          district: true,
          village: true,
          block: true,
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

      if (fldData.length === 0) {
        res.status(200).json({
          success: true,
          message: "No FLD found",
          data: [],
          code: "NO_FLD_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: fldData,
        code: "GET_FLD_SUCCESSFULL"
      });
      return;
    } catch (err) {
      console.error("Error getting the FLD info", err);
      res.status(500).json({
        success: false,
        message: "Could not fetch FLD info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

export default fldRouter;
