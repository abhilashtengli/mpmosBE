import { userAuth } from "@middleware/auth";
import { sseService } from "@services/sseService";
import { Router, Request, Response } from "express";

const sseRouter = Router();
interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
    role: string;
    isVerified: boolean;
  } | null;
}
sseRouter.get("/session-events", userAuth, (req: Request, res: Response) => {
  const user = (req as RequestWithUser).user;
  // In sseRoutes.ts
  const sessionId =
    (req.query.sessionId as string) || (req.headers["x-session-id"] as string);

  if (!user || !sessionId) {
    res.status(400).json({ message: "Missing user or session information" });
    return;
  }

  // Set SSE headers
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": req.headers.origin || "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Cache-Control, x-session-id"
  });

  // Send initial connection confirmation
  const welcomeMessage = {
    type: "connected" as const,
    timestamp: new Date().toISOString()
  };
  res.write(`data: ${JSON.stringify(welcomeMessage)}\n\n`);

  // Add connection to service
  sseService.addConnection(user.id, sessionId, res);

  // Handle client disconnect
  req.on("close", () => {
    console.log(
      `SSE connection closed for user ${user.id}, session ${sessionId}`
    );
    sseService.removeConnection(user.id, sessionId);
  });

  req.on("error", (error) => {
    console.error(`SSE connection error for user ${user.id}:`, error);
    sseService.removeConnection(user.id, sessionId);
  });

  // Keep connection alive with periodic heartbeat
  const heartbeat = setInterval(() => {
    try {
      res.write(
        `data: ${JSON.stringify({ type: "heartbeat", timestamp: new Date().toISOString() })}\n\n`
      );
    } catch (error) {
      console.error("Heartbeat failed:", error);
      clearInterval(heartbeat);
      sseService.removeConnection(user.id, sessionId);
    }
  }, 30000); // Send heartbeat every 30 seconds

  req.on("close", () => {
    clearInterval(heartbeat);
  });
});

export default sseRouter;
