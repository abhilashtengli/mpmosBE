import rateLimit from "express-rate-limit";

export const statsRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 50,
  message: {
    success: false,
    message: "Too many requests for statistics. Please try again in a minute.",
    retryAfter: 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  // Skip rate limiting for local development
  skip: (req) => req.ip === "127.0.0.1" || req.ip === "::1"
});

export const contentRateLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute (increased window)
  max: 100, // Allow 100 requests per minute for content endpoints
  message: {
    success: false,
    message: "Too many requests. Please wait before making more requests.",
    retryAfter: 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.ip === "127.0.0.1" || req.ip === "::1"
});

// Moderate rate limit for heavy data endpoints
export const heavyDataRateLimit = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 20, // Allow 20 requests per 2 minutes (supports multiple users)
  message: {
    success: false,
    message:
      "This endpoint has stricter limits. Please wait before making more requests.",
    retryAfter: 120
  },
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => req.ip === "127.0.0.1" || req.ip === "::1"
});
