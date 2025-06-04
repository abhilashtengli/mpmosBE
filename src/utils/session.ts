// utils/session.ts
import { v4 as uuidv4 } from 'uuid';

export function createSessionId(): string {
  return uuidv4();
}
