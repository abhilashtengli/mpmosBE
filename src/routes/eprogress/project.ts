import { prisma } from "@lib/prisma";
import { userAuth } from "@middleware/auth";
import { projectValidation } from "@utils/validation";
import express, { Request, Response } from "express";

const projectRouter = express.Router();

interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}
// CRUD Operation

projectRouter.post(
  "/create-project",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = await projectValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          errors: result.error.format(),
          code: "VALIDATION_ERROR"
        });
        return;
      }

      const {
        title,
        implementingAgency,
        locationState,
        director,
        budget,
        status,
        startDate,
        endDate
      } = result.data;

      const existingProject = await prisma.project.findFirst({
        where: {
          title: {
            equals: title,
            mode: "insensitive"
          }
        }
      });

      if (existingProject) {
        res.status(409).json({
          message: "A project with this title already existis",
          code: "DUPLICATE_RESOURCE"
        });
      }
      const user = (req as RequestWithUser).user;
      if (!user) {
        res.status(401).json({
          message: "Please Sign in to create a New Project",
          code: "UNAUTHORIZED"
        });
        return;
      }
      const projectData: any = {
        title,
        implementingAgency,
        locationState,
        director,
        status,
        userId: user.id
      };

      // Add optional fields only if they have actual values
      if (budget !== undefined && budget !== null) {
        projectData.budget = budget;
      }

      if (startDate !== undefined && startDate !== null) {
        projectData.startDate = startDate;
      }
      if (endDate !== undefined && endDate !== null) {
        projectData.endDate = endDate;
      }
      const newProject = await prisma.project.create({
        data: projectData
      });

      console.info(`Project created: ${newProject.id} by user ${user.id}`);

      res.status(201).json({
        message: "Project created successfully",
        data: {
          id: newProject.id,
          title: newProject.title,
          status: newProject.status
          // Avoid sending the entire object back for security
        },
        code: "RESOURCE_CREATED"
      });
      return;
    } catch (err) {
      console.error(`Error creating project:`, err);
      res.status(500).json({
        message: "Something went wrong, Please try again later",
        code: "INTERNAL_SERVER_ERROR"
      });
      return;
    }
  }
);
