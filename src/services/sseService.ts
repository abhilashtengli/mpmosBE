import { Response } from "express";
import { SSEConnection, SSEMessage } from "../types/sse";

class SSEService {
  private connections = new Map<string, SSEConnection[]>();

  // Add a new connection for a user
  addConnection(userId: string, sessionId: string, response: Response): void {
    const connection: SSEConnection = {
      userId,
      response,
      sessionId
    };

    if (!this.connections.has(userId)) {
      this.connections.set(userId, []);
    }

    this.connections.get(userId)?.push(connection);
    // console.log(
    //   `SSE connection added for user ${userId}, session ${sessionId}`
    // );
  }

  // Remove connection when client disconnects
  removeConnection(userId: string, sessionId: string): void {
    const userConnections = this.connections.get(userId);
    if (userConnections) {
      const filteredConnections = userConnections.filter(
        (conn) => conn.sessionId !== sessionId
      );

      if (filteredConnections.length === 0) {
        this.connections.delete(userId);
      } else {
        this.connections.set(userId, filteredConnections);
      }
    }
    // console.log(
    //   `SSE connection removed for user ${userId}, session ${sessionId}`
    // );
  }

  // Send message to all connections of a user EXCEPT the current session
  sendToUserExceptSession(
    userId: string,
    currentSessionId: string,
    message: SSEMessage
  ): void {
    const userConnections = this.connections.get(userId);
    if (!userConnections) return;

    const connectionsToNotify = userConnections.filter(
      (conn) => conn.sessionId !== currentSessionId
    );

    connectionsToNotify.forEach((connection) => {
      try {
        const data = `data: ${JSON.stringify(message)}\n\n`;
        connection.response.write(data);
        console.log("SENDING DATA : ", data);
      } catch (error) {
        console.error(`Failed to send SSE message to user ${userId}:`, error);
        // Remove dead connection
        this.removeConnection(userId, connection.sessionId);
      }
    });

    // console.log(
    //   `SSE message sent to ${connectionsToNotify.length} connections for user ${userId}`
    // );
  }

  // Send message to all connections of a user
  sendToUser(userId: string, message: SSEMessage): void {
    const userConnections = this.connections.get(userId);
    if (!userConnections) return;

    userConnections.forEach((connection) => {
      try {
        const data = `data: ${JSON.stringify(message)}\n\n`;
        connection.response.write(data);
      } catch (error) {
        console.error(`Failed to send SSE message to user ${userId}:`, error);
        this.removeConnection(userId, connection.sessionId);
      }
    });
  }

  // Get active connections count for a user
  getConnectionCount(userId: string): number {
    return this.connections.get(userId)?.length || 0;
  }

  // Clean up dead connections
  cleanup(): void {
    // console.log("Cleaning up SSE connections...");
    this.connections.clear();
  }
}

export const sseService = new SSEService();
