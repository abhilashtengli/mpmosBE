import { prisma } from "@lib/prisma";
import {
  contentRateLimit,
  heavyDataRateLimit,
  statsRateLimit
} from "@lib/ratelimits";
import express, { Request, Response } from "express";
import rateLimit from "express-rate-limit";

const globalRouter = express.Router();

// Apply rate limiting to the stats endpoint (moderate usage expected)
globalRouter.get(
  "/get-stats-promo-meter",
  statsRateLimit,
  async (req: Request, res: Response) => {
    try {
      const [
        trainings,
        awarenessProgram,
        inputDist,
        fld,
        infra,
        otherActivities,
        projectCount
      ] = await Promise.all([
        prisma.training.aggregate({
          _sum: {
            target: true,
            achieved: true,
            beneficiaryMale: true,
            beneficiaryFemale: true
          }
        }),
        prisma.awarenessProgram.aggregate({
          _sum: {
            target: true,
            achieved: true,
            beneficiaryMale: true,
            beneficiaryFemale: true
          }
        }),
        prisma.inputDistribution.aggregate({
          _sum: {
            target: true,
            achieved: true
          }
        }),
        prisma.fLD.aggregate({
          _sum: {
            target: true,
            achieved: true
          }
        }),
        prisma.infrastructureDevelopment.aggregate({
          _sum: {
            target: true,
            achieved: true
          }
        }),
        prisma.activities.aggregate({
          _sum: {
            target: true,
            achieved: true,
            beneficiaryMale: true,
            beneficiaryFemale: true
          }
        }),
        prisma.project.count()
      ]);

      // Compute total beneficiaries (farmers)
      const totalMale =
        (trainings._sum.beneficiaryMale || 0) +
        (awarenessProgram._sum.beneficiaryMale || 0) +
        (otherActivities._sum.beneficiaryMale || 0);

      const totalFemale =
        (trainings._sum.beneficiaryFemale || 0) +
        (awarenessProgram._sum.beneficiaryFemale || 0) +
        (otherActivities._sum.beneficiaryFemale || 0);

      const totalFarmers = totalMale + totalFemale;

      res.status(200).json({
        success: true,
        data: {
          trainings: {
            target: trainings._sum.target || 0,
            achieved: trainings._sum.achieved || 0
          },
          awarenessProgram: {
            target: awarenessProgram._sum.target || 0,
            achieved: awarenessProgram._sum.achieved || 0
          },
          inputDistribution: {
            target: inputDist._sum.target || 0,
            achieved: inputDist._sum.achieved || 0
          },
          fld: {
            target: fld._sum.target || 0,
            achieved: fld._sum.achieved || 0
          },
          infrastructure: {
            target: infra._sum.target || 0,
            achieved: infra._sum.achieved || 0
          },
          otherActivities: {
            target: otherActivities._sum.target || 0,
            achieved: otherActivities._sum.achieved || 0
          },
          totalFarmers,
          projectCount
        }
      });
      return;
    } catch (error) {
      console.error("Error fetching promo meter stats:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch statistics",
        error: error instanceof Error ? error.message : "Unknown error"
      });
      return;
    }
  }
);

// Apply content rate limiting to upcoming events
globalRouter.get(
  "/upcoming-events",
  contentRateLimit,
  async (req: Request, res: Response) => {
    try {
      const events = await prisma.upcomingEvent.findMany({
        orderBy: {
          date: "asc" // Show upcoming events first
        },
        include: {
          User: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      });

      res.status(200).json({
        success: true,
        count: events.length,
        data: events
      });
      return;
    } catch (error) {
      console.error("Failed to fetch upcoming events:", error);
      res.status(500).json({
        success: false,
        message: "Something went wrong while fetching events.",
        error: error instanceof Error ? error.message : "Unknown error"
      });
      return;
    }
  }
);

// Apply content rate limiting to publications
globalRouter.get(
  "/publications",
  contentRateLimit,
  async (req: Request, res: Response) => {
    try {
      const publications = await prisma.publication.findMany({
        orderBy: {
          createdAt: "desc" // Show most recent first
        },
        include: {
          User: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      });

      res.status(200).json({
        success: true,
        count: publications.length,
        data: publications
      });
      return;
    } catch (error) {
      console.error("Failed to fetch publications:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch publications",
        error: error instanceof Error ? error.message : "Unknown error"
      });
      return;
    }
  }
);

// Apply heavy data rate limiting to gallery (images can be large)
globalRouter.get(
  "/gallery",
  heavyDataRateLimit,
  async (req: Request, res: Response) => {
    try {
      const images = await prisma.gallery.findMany({
        orderBy: {
          createdAt: "desc"
        },
        include: {
          User: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      });

      res.status(200).json({
        success: true,
        count: images.length,
        data: images
      });
      return;
    } catch (error) {
      console.error("Failed to fetch gallery images:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch gallery images",
        error: error instanceof Error ? error.message : "Unknown error"
      });
      return;
    }
  }
);

// Apply content rate limiting to project details
globalRouter.get(
  "/project-details",
  contentRateLimit,
  async (req: Request, res: Response) => {
    try {
      const projects = await prisma.projectDetails.findMany({
        orderBy: {
          year: "desc" // Most recent projects first
        },
        include: {
          User: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      });

      res.status(200).json({
        success: true,
        count: projects.length,
        data: projects
      });
      return;
    } catch (error) {
      console.error("Failed to fetch project details:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch project details",
        error: error instanceof Error ? error.message : "Unknown error"
      });
      return;
    }
  }
);

export default globalRouter;
