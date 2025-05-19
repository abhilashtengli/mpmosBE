import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class TokenService {
  private static readonly token_expiry = "12h";

  static generateToken(payload: { id: string }) {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT_SECRET is not configured in environment variables");
    }
    const token = jwt.sign(
      { id: payload.id, iat: Math.floor(Date.now() / 1000) },
      secret,
      { expiresIn: this.token_expiry }
    );
    return token;
  }
}
export default TokenService;
