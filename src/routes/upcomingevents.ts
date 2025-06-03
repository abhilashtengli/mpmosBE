import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import {
  upcomingEventUpdateValidation,
  upcomingEventValidation
} from "@utils/validation";
import express, { Request, Response } from "express";

const upcomingEventsRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}

upcomingEventsRouter.post(
  "/add-event",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to create a Event",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const body = req.body;
      const result = await upcomingEventValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR",
          success: false
        });
        return;
      }
      const { title, date, location, description } = result.data;

      const event = await prisma.upcomingEvent.create({
        data: {
          title,
          date,
          location,
          description,
          userId: user.id
        }
      });
      res.status(201).json({
        success: true,
        message: "Event created successfully",
        data: event,
        code: "EVENT_CREATED"
      });
    } catch (err) {
      console.error(`Error creating Event : `, err);
      if (err instanceof Error) {
        // Check for database constraint violations
        if (
          err.message.includes("Unique constraint") ||
          err.message.includes("unique constraint")
        ) {
          res.status(409).json({
            success: false,
            message: "Event with similar details already exists",
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
      return;
    }
  }
);

upcomingEventsRouter.put(
  "/update-event/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      // Validate infrastructure ID
      if (!id || typeof id !== "string") {
        res.status(400).json({
          success: false,
          message: "Valid Event ID is required",
          code: "INVALID_INPUT"
        });
        return;
      }

      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please sign in to update the Event",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const isEventExists = await prisma.upcomingEvent.findUnique({
        where: { id, userId: user.id }
      });

      if (!isEventExists) {
        res.status(404).json({
          success: false,
          message: "Event not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      const body = req.body;
      const result = await upcomingEventUpdateValidation.safeParse(body);

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
        date: Date;
        location: string;
        description: string;
      }> = {};

      const { title, date, description, location } = result.data;

      if (title !== undefined) updateData.title = title;
      if (date !== undefined) updateData.date = date;
      if (description !== undefined) updateData.description = description;
      if (location !== undefined) updateData.location = location;

      // Ensure we have something to update
      if (Object.keys(updateData).length === 0) {
        res.status(400).json({
          success: false,
          message: "No valid fields provided for update",
          code: "INVALID_INPUT"
        });
        return;
      }

      const updateEvent = await prisma.upcomingEvent.update({
        where: { id },
        data: updateData
      });
      res.status(200).json({
        message: "Event updated successfully",
        success: true,
        data: updateEvent,
        code: "RESOURCE_UPDATED"
      });
      return;
    } catch (err) {
      console.error(`Error updating Event:`, err);
      if (err instanceof Error) {
        // Handle case where record was deleted between check and update
        if (err.message.includes("Record to update not found")) {
          res.status(404).json({
            success: false,
            message: "Event not found",
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
            message: "Event with similar details already exists",
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
      return;
    }
  }
);

