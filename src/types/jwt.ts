// types/jwt.ts
import { JwtPayload as DefaultJwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends DefaultJwtPayload {
  id: string;
  sessionId: string;
}
