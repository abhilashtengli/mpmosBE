import rateLimit from "express-rate-limit";

// Used when too many signup is request
export const signupLimiter = rateLimit({
  windowMs: 20 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429,
  message: {
    message: "Too many Signup attempts, please try again after 20 minutes",
    success: false,
    code: "RATE_LIMIT_EXCEEDED"
  },
  keyGenerator: (req) => {
    return req.body.email || req.ip;
  }
});

// Used when too many login requests
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429,
  message: {
    message: "Too many Signin attempts, please try again after 15 minutes",
    success: false,
    code: "RATE_LIMIT_EXCEEDED"
  },
  keyGenerator: (req) => {
    return req.body.email || req.ip;
  }
});

// Used when verifying the email address of the user
export const verifyEmailLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429,
  message: {
    message:
      "Too many verify email attempts, please try again after 15 minutes",
    success: false,
    code: "RATE_LIMIT_EXCEEDED"
  },
  keyGenerator: (req) => {
    return req.body.email || req.ip;
  }
});

// Used when the user requested to resend the code
export const resendCodeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429,
  message: {
    message: "Too many Resend code attempts, please try again after 15 minutes",
    success: false,
    code: "RATE_LIMIT_EXCEEDED"
  },
  keyGenerator: (req) => {
    return req.body.email || req.ip;
  }
});

// Used when the user is request for code to reset the password
export const forgetPasswordLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429,
  message: {
    message:
      "Too many forget password attempts, please try again after 15 minutes",
    success: false,
    code: "RATE_LIMIT_EXCEEDED"
  },
  keyGenerator: (req) => {
    return req.body.email || req.ip;
  }
});

// Used when the user is trying to set new password with the code
export const passwordResetLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  statusCode: 429,
  message: {
    message:
      "Too many password reset attempts, please try again after 15 minutes",
    success: false,
    code: "RATE_LIMIT_EXCEEDED"
  },
  // Use user's email as the key if available, fallback to IP
  keyGenerator: (req) => {
    return req.body.email || req.ip;
  }
});
