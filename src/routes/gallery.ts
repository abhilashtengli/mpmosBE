import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { deleteContent } from "@services/Cloudflare/cloudflare";
import {
  createGalleryValidation,
  updateGalleryValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const galleryRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

// Create Gallery
galleryRouter.post(
  "/add-gallery",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to create a gallery item",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const body = req.body;
      const result = createGalleryValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }

      const { title, imageUrl, imageKey } = result.data;

      const gallery = await prisma.gallery.create({
        data: {
          title,
          imageUrl,
          imageKey,
          userId: user.id
        },
        select: {
          id: true,
          title: true,
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
        message: "Gallery item created successfully",
        data: gallery,
        code: "GALLERY_CREATED"
      });
    } catch (err) {
      console.error(`Error creating Gallery:`, err);

      if (err instanceof Error) {
        // Check for database constraint violations
        if (
          err.message.includes("Unique constraint") ||
          err.message.includes("unique constraint")
        ) {
          res.status(409).json({
            success: false,
            message: "Gallery item with similar details already exists",
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

// Update Gallery
galleryRouter.put(
  "/update-gallery/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate gallery ID format (UUID)
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Gallery ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the gallery item",
          code: "UNAUTHORIZED"
        });
        return;
      }

      // Check if gallery item exists and belongs to the user
      const existingGallery = await prisma.gallery.findFirst({
        where: {
          id,
          userId: user.id
        }
      });

      if (!existingGallery) {
        res.status(404).json({
          success: false,
          message:
            "Gallery item not found or you don't have permission to update it",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }

      const body = req.body;
      const result = updateGalleryValidation.safeParse(body);

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
        imageUrl: string;
        imageKey: string;
      }> = {};

      const { title, imageUrl, imageKey } = result.data;

      if (title !== undefined) updateData.title = title;
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

      const updatedGallery = await prisma.gallery.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          title: true,
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
        message: "Gallery item updated successfully",
        success: true,
        data: updatedGallery,
        code: "RESOURCE_UPDATED"
      });
    } catch (err) {
      console.error(`Error updating Gallery:`, err);

      if (err instanceof Error) {
        // Handle case where record was deleted between check and update
        if (err.message.includes("Record to update not found")) {
          res.status(404).json({
            success: false,
            message: "Gallery item not found",
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
            message: "Gallery item with similar details already exists",
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

// Get User's Gallery Items
galleryRouter.get(
  "/get-user-gallery",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to view your gallery items",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const gallery = await prisma.gallery.findMany({
        where: {
          userId: user.id
        },
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          title: true,
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

      if (gallery.length === 0) {
        res.status(200).json({
          success: true,
          message: "No gallery items found",
          data: [],
          code: "SUCCESS"
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: gallery,
        code: "SUCCESS"
      });
    } catch (err) {
      console.error("Error getting user gallery:", err);
      res.status(500).json({
        success: false,
        message:
          "Something went wrong, Could not get gallery items, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

// Get All Gallery Items (Public endpoint)
galleryRouter.get("/get-all-gallery", async (req: Request, res: Response) => {
  try {
    const gallery = await prisma.gallery.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
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

    if (gallery.length === 0) {
      res.status(200).json({
        success: true,
        message: "No gallery items found",
        data: [],
        code: "SUCCESS"
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: gallery,
      code: "SUCCESS"
    });
  } catch (err) {
    console.error("Error getting all gallery items:", err);
    res.status(500).json({
      success: false,
      message:
        "Something went wrong, Could not get gallery items, please try again later",
      code: "INTERNAL_SERVER_ERROR"
    });
  }
});

// Delete Gallery Item
galleryRouter.delete(
  "/delete-gallery/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate gallery ID format (UUID)
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Gallery ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to delete the gallery item",
          code: "UNAUTHORIZED"
        });
        return;
      }

      const existingGallery = await prisma.gallery.findUnique({
        where: { id }
      });

      if (!existingGallery) {
        res.status(404).json({
          success: false,
          message: "Gallery item not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      let fileDeleteWarning = null;
      // Try to delete the file first, but continue even if it fails
      if (existingGallery.imageUrl && existingGallery.imageKey) {
        try {
          const deletionResult = await deleteContent(existingGallery.imageKey);

          if (!deletionResult.success) {
            console.warn(
              `Failed to delete file for Image${id}:`,
              deletionResult.error
            );
            fileDeleteWarning =
              "Image deletion failed but record will be removed from database";
          }
        } catch (fileError) {
          console.error(
            `Error during file deletion for image ${id}:`,
            fileError
          );
          fileDeleteWarning =
            "Image deletion encountered an error but record will be removed from database";
        }
      }

      await prisma.gallery.delete({
        where: { id }
      });
      const response = {
        success: true,
        message: fileDeleteWarning
          ? "Image deleted successfully (with file deletion warning)"
          : "Image deleted successfully",
        code: "RESOURCE_DELETED",
        ...(fileDeleteWarning && { warning: fileDeleteWarning })
      };

      res.status(200).json(response);
      return;
    } catch (err) {
      console.error(`Error deleting Gallery:`, err);

      if (err instanceof Error) {
        if (err.message.includes("Record to delete does not exist")) {
          res.status(404).json({
            success: false,
            message: "Gallery item not found",
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

export default galleryRouter;
