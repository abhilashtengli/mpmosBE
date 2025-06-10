import { ServerResponse } from "http";
import { Response as ExpressResponse } from "express";

// types/sse.ts
export interface SSEConnection {
  userId: string;
  response: ExpressResponse & ServerResponse;
  sessionId: string;
}

export interface SSEMessage {
  type: "force-logout" | "connected" | "session-expired";
  reason?: string;
  timestamp: string;
}
