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
        },
        select: {
          id: true,
          title: true,
          location: true,
          description: true,
          date: true,
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
        data: updateData,
        select: {
          id: true,
          title: true,
          location: true,
          description: true,
          date: true,
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

//get events for the user
upcomingEventsRouter.get(
  "/get-user-events",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;

      if (!user) {
        res.status(401).json({
          success: false,
          message: "Please Sign in to view your Events",
          code: "UNAUTHORIZED"
        });
      }

      const events = await prisma.upcomingEvent.findMany({
        where: {
          userId: user?.id
        },
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          title: true,
          location: true,
          description: true,
          date: true,
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
      if (events.length === 0) {
        res.status(200).json({
          success: true,
          message: "No Events data found",
          data: [],
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: events,
        code: "GET_EVENTS_SUCCESSFULL"
      });
    } catch (err) {
      console.error("Error getting the Events info", err);
      res.status(500).json({
        success: false,
        message:
          "Something went wrong, Could not Events info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//get all events
upcomingEventsRouter.get(
  "/get-all-events",
  async (req: Request, res: Response) => {
    try {
      const events = await prisma.upcomingEvent.findMany({
        orderBy: {
          createdAt: "desc"
        },
        select: {
          id: true,
          title: true,
          location: true,
          description: true,
          date: true,
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
      if (events.length === 0) {
        res.status(200).json({
          success: true,
          message: "No Events data found",
          data: [],
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: events,
        code: "GET_EVENTS_SUCCESSFULL"
      });
    } catch (err) {
      console.error("Error getting the Events info", err);
      res.status(500).json({
        success: false,
        message:
          "Something went wrong, Could not Events info, please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);

//delete events
upcomingEventsRouter.delete(
  "/delete-event/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // Validate project ID
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
          message: "Please sign in to delete the Event",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const isEventExists = await prisma.upcomingEvent.findUnique({
        where: { id }
      });
      if (!isEventExists) {
        res.status(404).json({
          success: false,
          message: "Event not found",
          code: "RESOURCE_NOT_FOUND"
        });
        return;
      }
      if (isEventExists.userId !== user.id) {
        res.status(403).json({
          success: false,
          message: "You don't have permission to delete this Event",
          code: "FORBIDDEN"
        });
        return;
      }
      await prisma.upcomingEvent.delete({
        where: { id }
      });
      res.status(200).json({
        success: true,
        message: "Event deleted successfully",
        code: "RESOURCE_DELETED"
      });
      return;
    } catch (err) {
      console.error(`Error deleting Event :`, err);
      res.status(500).json({
        success: false,
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
    }
  }
);

export default upcomingEventsRouter;
