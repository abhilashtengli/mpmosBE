// import rateLimit from "express-rate-limit";
// import { Request } from "express";

// // Base configuration for all limiters
// const baseConfig = {
//   standardHeaders: true,
//   legacyHeaders: false,
//   statusCode: 429,
//   validate: {
//     xForwardedForHeader: false // Disable X-Forwarded-For validation
//   },
//   keyGenerator: (req: Request) => {
//     const email = req.body?.email;
//     const ip = req.ip || req.connection?.remoteAddress || "unknown";
//     return email || ip;
//   }
// };

// // Used when too many signup is request
// export const signupLimiter = rateLimit({
//   ...baseConfig,
//   windowMs: 20 * 60 * 1000,
//   max: 5,
//   message: {
//     message: "Too many Signup attempts, please try again after 20 minutes",
//     success: false,
//     code: "RATE_LIMIT_EXCEEDED"
//   }
// });

// // Used when too many login requests
// export const loginLimiter = rateLimit({
//   ...baseConfig,
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: {
//     message: "Too many Signin attempts, please try again after 15 minutes",
//     success: false,
//     code: "RATE_LIMIT_EXCEEDED"
//   }
// });

// // Used when verifying the email address of the user
// export const verifyEmailLimiter = rateLimit({
//   ...baseConfig,
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: {
//     message:
//       "Too many verify email attempts, please try again after 15 minutes",
//     success: false,
//     code: "RATE_LIMIT_EXCEEDED"
//   }
// });

// // Used when the user requested to resend the code
// export const resendCodeLimiter = rateLimit({
//   ...baseConfig,
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: {
//     message: "Too many Resend code attempts, please try again after 15 minutes",
//     success: false,
//     code: "RATE_LIMIT_EXCEEDED"
//   }
// });

// // Used when the user is request for code to reset the password
// export const forgetPasswordLimiter = rateLimit({
//   ...baseConfig,
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: {
//     message:
//       "Too many forget password attempts, please try again after 15 minutes",
//     success: false,
//     code: "RATE_LIMIT_EXCEEDED"
//   }
// });

// // Used when the user is trying to set new password with the code
// export const passwordResetLimiter = rateLimit({
//   ...baseConfig,
//   windowMs: 15 * 60 * 1000,
//   max: 5,
//   message: {
//     message:
//       "Too many password reset attempts, please try again after 15 minutes",
//     success: false,
//     code: "RATE_LIMIT_EXCEEDED"
//   }
// });
