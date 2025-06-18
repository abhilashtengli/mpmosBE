import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { deleteContent } from "@services/Cloudflare/cloudflare";
import {
  createPublicationValidation,
  updatePublicationValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const publicationRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

// Create Publication
publicationRouter.post(
  "/add-publication",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to create a publication",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const body = req.body;
      const result = createPublicationValidation.safeParse(body);

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
        type,
        category,
        thumbnailUrl,
        thumbnailKey,
        pdfUrl,
        pdfKey
      } = result.data;

      const publication = await prisma.publication.create({
        data: {
          title,
          type,
          category,
          thumbnailUrl,
          thumbnailKey,
          pdfUrl,
          pdfKey,
          userId: user.id
        },
        select: {
          id: true,
          title: true,
          type: true,
          category: true,
          thumbnailUrl: true,
          thumbnailKey: true,
          pdfUrl: true,
          pdfKey: true,
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
        message: "Publication created successfully",
        data: publication,
        code: "PUBLICATION_CREATED"
      });
    } catch (err) {
      console.error(`Error creating Publication:`, err);

      if (err instanceof Error) {
        // Check for database constraint violations
        if (
          err.message.includes("Unique constraint") ||
          err.message.includes("unique constraint")
        ) {
          res.status(409).json({
            success: false,
            message: "Publication with similar details already exists",
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

// Update Publication
publicationRouter.put(
  "/update-publication/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate publication ID format (UUID)
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Publication ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the publication",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if publication exists and belongs to the user
      const existingPublication = await prisma.publication.findFirst({
        where: {
          id,
          userId: user.id
        }
      });

      if (!existingPublication) {
        res.status(404).json({
          success: false,
          message:
            "Publication not found or you don't have permission to update it",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      const body = req.body;
      const result = updatePublicationValidation.safeParse(body);

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
        type: string;
        category: string | null;
        thumbnailUrl: string | null;
        thumbnailKey: string | null;
        pdfUrl: string | null;
        pdfKey: string | null;
      }> = {};

      const {
        title,
        type,
        category,
        thumbnailUrl,
        thumbnailKey,
        pdfUrl,
        pdfKey
      } = result.data;

      if (title !== undefined) updateData.title = title;
      if (type !== undefined) updateData.type = type;
      if (category !== undefined) updateData.category = category;
      if (thumbnailUrl !== undefined) updateData.thumbnailUrl = thumbnailUrl;
      if (thumbnailKey !== undefined) updateData.thumbnailKey = thumbnailKey;
      if (pdfUrl !== undefined) updateData.pdfUrl = pdfUrl;
      if (pdfKey !== undefined) updateData.pdfKey = pdfKey;

      // Ensure we have something to update
      if (Object.keys(updateData).length === 0) {
        res.status(400).json({
          success: false,
          message: "No valid fields provided for update",
          code: "INVALID_INPUT"
        });
        return;
      }

      const updatedPublication = await prisma.publication.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          title: true,
          type: true,
          category: true,
          thumbnailUrl: true,
          thumbnailKey: true,
          pdfUrl: true,
          pdfKey: true,
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
        message: "Publication updated successfully",
        success: true,
        data: updatedPublication,
        code: "RESOURCE_UPDATED"
      });
    } catch (err) {
      console.error(`Error updating Publication:`, err);

      if (err instanceof Error) {
        // Handle case where record was deleted between check and update
        if (err.message.includes("Record to update not found")) {
          res.status(404).json({
            success: false,
            message: "Publication not found",
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
            message: "Publication with similar details already exists",
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

// Get User's Publications
publicationRouter.get(
  "/get-user-publications",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to view your publications",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const publications = await prisma.publication.findMany({
        where: {
          userId: user.id
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          type: true,
          category: true,
          thumbnailUrl: true,
          thumbnailKey: true,
          pdfUrl: true,
          pdfKey: true,
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

      if (publications.length === 0) {
        res.status(200).json({
          success: true,
          message: "No publications found",
          data: [],
          code: "SUCCESS"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: publications,

        code: "SUCCESS"
      });
    } catch (err) {
      console.error("Error getting user publications:", err);
      res.status(500).json({
        success: false,
        message:
          "Something went wrong, Could not get publications, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Get All Publications (Public endpoint)
publicationRouter.get(
  "/get-all-publications",
  async (req: Request, res: Response) => {
    try {
      const publications = await prisma.publication.findMany({
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
          type: true,
          category: true,
          thumbnailUrl: true,
          thumbnailKey: true,
          pdfUrl: true,
          pdfKey: true,
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

      if (publications.length === 0) {
        res.status(200).json({
          success: true,
          message: "No publications found",
          data: [],
          code: "SUCCESS"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: publications,
        code: "SUCCESS"
      });
    } catch (err) {
      console.error("Error getting all publications:", err);
      res.status(500).json({
        success: false,
        message:
          "Something went wrong, Could not get publications, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Delete Publication
publicationRouter.delete(
  "/delete-publication/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // console.log("Step-0 : ", id);

      // Validate publication ID format (UUID)
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Publication ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the publication",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const existingPublication = await prisma.publication.findUnique({
        where: { id }
      });
      // console.log("STEP-1 : ", existingPublication);

      if (!existingPublication) {
        res.status(404).json({
          success: false,
          message: "Publication not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      if (existingPublication.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this publication",
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
          // console.log("STEP-2 : ", fileKey);
          const deletionResult = await deleteContent(fileKey);
          if (!deletionResult.success) {
            console.warn(
              `Failed to delete ${fileType} for publication ${id}:`,
              deletionResult.error
            );
            fileDeleteWarnings.push(`${fileType} deletion failed`);
            return false;
          }
          return true;
        } catch (error) {
          console.error(
            `Error during ${fileType} deletion for publication ${id}:`,
            error
          );
          fileDeleteWarnings.push(`${fileType} deletion encountered an error`);
          return false;
        }
      };
      // Delete image file if exists
      if (
        existingPublication.thumbnailUrl &&
        existingPublication.thumbnailKey
      ) {
        await safeDeleteFile(existingPublication.thumbnailKey, "image");
      }

      // Delete PDF file if exists
      if (existingPublication.pdfUrl && existingPublication.pdfKey) {
        await safeDeleteFile(existingPublication.pdfKey, "PDF");
      }

      await prisma.publication.delete({
        where: { id }
      });

      const hasWarnings = fileDeleteWarnings.length > 0;
      const response = {
        success: true,
        message: hasWarnings
          ? "Publication deleted successfully (with file deletion warnings)"
          : "Publication deleted successfully",
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
      console.error(`Error deleting Publication:`, err);

      if (err instanceof Error) {
        if (err.message.includes("Record to delete does not exist")) {
          res.status(404).json({
            success: false,
            message: "Publication not found",
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

export default publicationRouter;
