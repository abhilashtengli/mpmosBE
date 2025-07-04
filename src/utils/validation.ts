import validator from "validator";
import { z } from "zod";
interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

//Create user
export const signupValidation = z.object({
  name: z.string().min(1, { message: "Invalid first name or last name" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(1)
    .refine(
      (val) =>
        z
          .string()
          .refine(() => true)
          .safeParse(val).success && require("validator").isStrongPassword(val),
      {
        message: "Enter a strong password"
      }
    ),
  role: z.string().min(1, { message: "Please select a role" })
});

//update user
export const updateUserValidation = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required" }),
    name: z.string().min(1, { message: "Invalid name" }).optional(),
    password: z
      .string()
      .min(1)
      .refine(
        (val) =>
          z
            .string()
            .refine(() => true)
            .safeParse(val).success &&
          require("validator").isStrongPassword(val),
        {
          message: "Enter a strong password"
        }
      )
      .optional()
  })
  .refine((data) => data.name || data.password, {
    message: "At least one field (name or password) must be provided"
  });

// create project validation
export const createProjectValidation = z
  .object({
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be atleast of 2 characters" })
      .max(255, { message: "Title cannot exceed 255 characters" }),
    implementingAgency: z
      .string()
      .trim()
      .min(2, {
        message: "Implementing agency must be atleast of 2 characters"
      })
      .max(40, { message: "Implementing agency cannot exceed 40 characters" }),
    locationState: z
      .string()
      .trim()
      .min(2, { message: "State must be atleast of 2 characters" })
      .max(40, { message: "State cannot exceed 30 characters" }),
    director: z
      .string()
      .trim()
      .min(2, { message: "Director name must be atleast of 2 characters" })
      .max(40, { message: "Director name cannot exceed 30 characters" }),
    budget: z
      .number({ invalid_type_error: "Budget must be a number" })
      .nonnegative({ message: "Budget must be zero or positive" })
      .min(0, { message: "Budget must be a positive number" })
      .max(9999999999.99, {
        message: "Budget exceeds the maximum allowed value"
      })
      .transform((val) => Number(val.toFixed(2)))
      .optional()
      .nullable(),
    status: z.enum(["Active", "Completed"], {
      errorMap: () => ({
        message: "Status must be either 'Active' or 'Completed'"
      })
    }),
    startDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional()
      .nullable(),
    endDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      if (data.endDate && data.startDate && data.endDate < data.startDate) {
        return false;
      }
      return true;
    },
    {
      message: "End date cannot be earlier than start date",
      path: ["endDate"]
    }
  )
  .refine(
    (data) => {
      if (data.status === "Completed" && !data.endDate) {
        return false;
      }
      return true;
    },
    {
      message: "End date is required for completed projects",
      path: ["endDate"]
    }
  );

// Update Project validation
export const updateProjectValidation = z
  .object({
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be atleast of 2 characters" })
      .max(255, { message: "Title cannot exceed 255 characters" })
      .optional(),

    implementingAgency: z
      .string()
      .trim()
      .min(2, {
        message: "Implementing agency must be atleast of 2 characters"
      })
      .max(40, { message: "Implementing agency cannot exceed 40 characters" })
      .optional(),
    locationState: z
      .string()
      .trim()
      .min(2, { message: "State must be atleast of 2 characters" })
      .max(40, { message: "State cannot exceed 30 characters" })
      .optional(),
    director: z
      .string()
      .trim()
      .min(2, { message: "Director name must be atleast of 2 characters" })
      .max(40, { message: "Director name cannot exceed 30 characters" })
      .optional(),
    budget: z
      .number({ invalid_type_error: "Budget must be a number" })
      .nonnegative({ message: "Budget must be zero or positive" })
      .min(0, { message: "Budget must be a positive number" })
      .max(9999999999.99, {
        message: "Budget exceeds the maximum allowed value"
      })
      .transform((val) => Number(val.toFixed(2)))
      .optional()
      .nullable(),
    status: z
      .enum(["Active", "Completed"], {
        errorMap: () => ({
          message: "Status must be either 'Active' or 'Completed'"
        })
      })
      .optional(),
    startDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional()
      .nullable(),
    endDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      if (data.endDate && data.startDate && data.endDate < data.startDate) {
        return false;
      }
      return true;
    },
    {
      message: "End date cannot be earlier than start date",
      path: ["endDate"]
    }
  );

// Create Training validation --------------------------------------------------
export const createTrainingValidation = z
  .object({
    projectId: z.string().trim().uuid({ message: "Invalid project ID format" }),
    quarterId: z.string().trim().uuid({ message: "Invalid quarter ID format" }),
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(255, { message: "Title cannot exceed 255 characters" }),
    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .nonnegative({ message: "Target must be zero or positive" })
      .optional(),
    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" })
      .optional(),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" }),
    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" }),
    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" }),
    beneficiaryMale: z
      .number({ invalid_type_error: "Male beneficiary count must be a number" })
      .int({ message: "Male beneficiary count must be an integer" })
      .nonnegative({
        message: "Male beneficiary count must be zero or positive"
      })
      .default(0),
    beneficiaryFemale: z
      .number({
        invalid_type_error: "Female beneficiary count must be a number"
      })
      .int({ message: "Female beneficiary count must be an integer" })
      .nonnegative({
        message: "Female beneficiary count must be zero or positive"
      })
      .default(0),
    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),
    imageUrl: z
      .string()
      .trim()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),
    imageKey: z.string().trim().optional().nullable(),
    pdfUrl: z
      .string()
      .trim()
      .url({ message: "Invalid PDF URL format" })
      .optional()
      .nullable(),
    pdfKey: z.string().trim().optional().nullable(),
    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      const bothPresent =
        data.target !== undefined && data.achieved !== undefined;
      const bothAbsent =
        data.target === undefined && data.achieved === undefined;

      // Either both should be present or both should be absent
      return bothPresent || bothAbsent;
    },
    {
      message: "Either both target and achieved must be provided, or neither",
      path: ["target"]
    }
  )
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // Ensure imageKey is present if imageUrl is provided
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  )
  .refine(
    (data) => {
      // Ensure pdfKey is present if pdfUrl is provided
      if (data.pdfUrl && !data.pdfKey) {
        return false;
      }
      return true;
    },
    {
      message: "PDF key is required when PDF URL is provided",
      path: ["pdfKey"]
    }
  );

// Update Training Validation
export const updateTrainingValidation = z
  .object({
    projectId: z
      .string()
      .trim()
      .uuid({ message: "Invalid project ID format" })
      .optional(),
    quarterId: z
      .string()
      .trim()
      .uuid({ message: "Invalid quarter ID format" })
      .optional(),
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(255, { message: "Title cannot exceed 255 characters" })
      .optional(),
    target: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    achieved: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" })
      .optional(),
    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" })
      .optional(),
    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" })
      .optional(),
    beneficiaryMale: z
      .number({ invalid_type_error: "Male beneficiary count must be a number" })
      .int({ message: "Male beneficiary count must be an integer" })
      .nonnegative({
        message: "Male beneficiary count must be zero or positive"
      })
      .optional(),
    beneficiaryFemale: z
      .number({
        invalid_type_error: "Female beneficiary count must be a number"
      })
      .int({ message: "Female beneficiary count must be an integer" })
      .nonnegative({
        message: "Female beneficiary count must be zero or positive"
      })
      .optional(),
    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),
    imageUrl: z
      .string()
      .trim()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),
    imageKey: z.string().trim().optional().nullable(),
    pdfUrl: z
      .string()
      .trim()
      .url({ message: "Invalid PDF URL format" })
      .optional()
      .nullable(),
    pdfKey: z.string().trim().optional().nullable(),
    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // Skip if imageUrl is not being updated
      if (data.imageUrl === undefined) {
        return true;
      }
      // If imageUrl is null, we don't need to check for imageKey
      if (data.imageUrl === null) {
        return true;
      }
      // If setting a new imageUrl, ensure imageKey is also set
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  )
  .refine(
    (data) => {
      // Skip if pdfUrl is not being updated
      if (data.pdfUrl === undefined) {
        return true;
      }
      // If pdfUrl is null, we don't need to check for pdfKey
      if (data.pdfUrl === null) {
        return true;
      }
      // If setting a new pdfUrl, ensure pdfKey is also set
      if (data.pdfUrl && !data.pdfKey) {
        return false;
      }
      return true;
    },
    {
      message: "PDF key is required when PDF URL is provided",
      path: ["pdfKey"]
    }
  );

//Backend validation
// Create validation schema awarness-------------------------------------------------------
export const createAwarenessProgramValidation = z
  .object({
    projectId: z.string().trim().uuid({ message: "Invalid project ID format" }),
    quarterId: z.string().trim().uuid({ message: "Invalid quarter ID format" }),
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" }),
    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .nonnegative({ message: "Target must be zero or positive" })
      .optional()
      .nullable(),
    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" })
      .optional()
      .nullable(),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" }),
    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),
    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" }),
    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" }),
    beneficiaryMale: z
      .number({ invalid_type_error: "Male beneficiary count must be a number" })
      .int({ message: "Male beneficiary count must be an integer" })
      .nonnegative({
        message: "Male beneficiary count must be zero or positive"
      })
      .default(0),
    beneficiaryFemale: z
      .number({
        invalid_type_error: "Female beneficiary count must be a number"
      })
      .int({ message: "Female beneficiary count must be an integer" })
      .nonnegative({
        message: "Female beneficiary count must be zero or positive"
      })
      .default(0),
    imageUrl: z
      .string()
      .trim()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),
    imageKey: z.string().trim().optional().nullable(),
    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      const bothPresent =
        data.target !== undefined && data.achieved !== undefined;
      const bothAbsent =
        data.target === undefined && data.achieved === undefined;

      // Either both should be present or both should be absent
      return bothPresent || bothAbsent;
    },
    {
      message: "Either both target and achieved must be provided, or neither",
      path: ["target"]
    }
  )
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // If imageUrl is provided, imageKey must also be provided
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

// Update validation schema of awarness
export const updateAwarenessProgramValidation = z
  .object({
    projectId: z
      .string()
      .trim()
      .uuid({ message: "Invalid project ID format" })
      .optional(),
    quarterId: z
      .string()
      .trim()
      .uuid({ message: "Invalid quarter ID format" })
      .optional(),
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" })
      .optional()
      .nullable(),
    target: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    achieved: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),
    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" })
      .optional(),
    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" })
      .optional(),
    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" })
      .optional(),
    beneficiaryMale: z
      .number({ invalid_type_error: "Male beneficiary count must be a number" })
      .int({ message: "Male beneficiary count must be an integer" })
      .nonnegative({
        message: "Male beneficiary count must be zero or positive"
      })
      .optional(),
    beneficiaryFemale: z
      .number({
        invalid_type_error: "Female beneficiary count must be a number"
      })
      .int({ message: "Female beneficiary count must be an integer" })
      .nonnegative({
        message: "Female beneficiary count must be zero or positive"
      })
      .optional(),
    imageUrl: z
      .string()
      .trim()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),
    imageKey: z.string().trim().optional().nullable(),
    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // Skip if imageUrl is not being updated
      if (data.imageUrl === undefined || data.imageUrl === null) return true;
      // If setting a new imageUrl, ensure imageKey is also set
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

// Create Fld validation schemas--------------------------------------------
export const createFldValidation = z
  .object({
    projectId: z.string().uuid({ message: "Valid project ID is required" }),
    quarterId: z.string().uuid({ message: "Valid quarter ID is required" }),
    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),

    district: z
      .string()
      .max(100, { message: "District must be 100 characters or less" }),
    village: z
      .string()
      .max(100, { message: "Village must be 100 characters or less" }),
    block: z
      .string()
      .max(100, { message: "Block must be 100 characters or less" }),
    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .nonnegative({ message: "Target must be zero or positive" })
      .optional(),
    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" })
      .optional(),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      const bothPresent =
        data.target !== undefined && data.achieved !== undefined;
      const bothAbsent =
        data.target === undefined && data.achieved === undefined;

      // Either both should be present or both should be absent
      return bothPresent || bothAbsent;
    },
    {
      message: "Either both target and achieved must be provided, or neither",
      path: ["target"]
    }
  )
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  );

export const updateFldValidation = z
  .object({
    projectId: z
      .string()
      .uuid({ message: "Valid project ID is required" })
      .optional(),
    quarterId: z
      .string()
      .uuid({ message: "Valid quarter ID is required" })
      .optional(),
    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),
    district: z
      .string()
      .max(100, { message: "District must be 100 characters or less" })
      .optional(),
    village: z
      .string()
      .max(100, { message: "Village must be 100 characters or less" })
      .optional(),
    block: z
      .string()
      .max(100, { message: "Block must be 100 characters or less" })
      .optional(),
    target: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    achieved: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  );

// Zod validation schemas--------------------------------------------
export const createInfrastructureValidation = z
  .object({
    projectId: z.string().uuid({ message: "Valid project ID is required" }),

    quarterId: z.string().uuid({ message: "Valid quarter ID is required" }),
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" }),
    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .positive({ message: "Target must be a positive number" })
      .optional(),
    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" })
      .optional(),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),

    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" }),

    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" }),

    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" }),

    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),

    imageUrl: z
      .string()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),

    imageKey: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      const bothPresent =
        data.target !== undefined && data.achieved !== undefined;
      const bothAbsent =
        data.target === undefined && data.achieved === undefined;

      // Either both should be present or both should be absent
      return bothPresent || bothAbsent;
    },
    {
      message: "Either both target and achieved must be provided, or neither",
      path: ["target"]
    }
  )
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // If imageUrl is provided, imageKey must also be provided
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

export const updateInfrastructureValidation = z
  .object({
    projectId: z
      .string()
      .uuid({ message: "Valid project ID is required" })
      .optional(),
    quarterId: z
      .string()
      .uuid({ message: "Valid quarter ID is required" })
      .optional(),
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" })
      .optional(),
    target: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    achieved: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" })
      .optional(),

    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" })
      .optional(),

    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" })
      .optional(),

    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),

    imageUrl: z
      .string()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),

    imageKey: z.string().optional().nullable()
  })
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // Skip if imageUrl is not being updated
      if (data.imageUrl === undefined) {
        return true;
      }
      // If imageUrl is null, we don't need to check for imageKey
      if (data.imageUrl === null) {
        return true;
      }
      // If setting a new imageUrl, ensure imageKey is also set
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

// Zod validation schemas inputDistribution-----------------------------------------------------
export const createInputDistributionValidation = z
  .object({
    projectId: z.string().uuid({ message: "Valid project ID is required" }),

    quarterId: z.string().uuid({ message: "Valid quarter ID is required" }),

    activityType: z
      .string()
      .trim()
      .min(2, { message: "Activity type must be at least 2 characters" })
      .max(100, { message: "Activity type cannot exceed 100 characters" }),

    name: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(200, { message: "Name cannot exceed 200 characters" }),

    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .positive({ message: "Target must be a positive number" })
      .optional(),
    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" })
      .optional(),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),

    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" }),

    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" }),

    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" }),

    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),

    units: z
      .string()
      .trim()
      .max(20, { message: "Units cannot exceed 20 characters" })
      .optional()
      .nullable(),

    imageUrl: z
      .string()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),

    imageKey: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      const bothPresent =
        data.target !== undefined && data.achieved !== undefined;
      const bothAbsent =
        data.target === undefined && data.achieved === undefined;

      // Either both should be present or both should be absent
      return bothPresent || bothAbsent;
    },
    {
      message: "Either both target and achieved must be provided, or neither",
      path: ["target"]
    }
  )
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // If imageUrl is provided, imageKey must also be provided
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

export const updateInputDistributionValidation = z
  .object({
    projectId: z
      .string()
      .uuid({ message: "Valid project ID is required" })
      .optional(),

    quarterId: z
      .string()
      .uuid({ message: "Valid quarter ID is required" })
      .optional(),

    activityType: z
      .string()
      .trim()
      .min(2, { message: "Activity type must be at least 2 characters" })
      .max(100, { message: "Activity type cannot exceed 100 characters" })
      .optional(),

    name: z
      .string()
      .trim()
      .min(2, { message: "Name must be at least 2 characters" })
      .max(200, { message: "Name cannot exceed 200 characters" })
      .optional(),
    target: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    achieved: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" })
      .optional(),

    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" })
      .optional(),

    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" })
      .optional(),

    remarks: z
      .string()
      .trim()
      .max(300, { message: "Remarks cannot exceed 300 characters" })
      .optional()
      .nullable(),

    units: z
      .string()
      .trim()
      .max(20, { message: "Units cannot exceed 20 characters" })
      .optional()
      .nullable(),

    imageUrl: z
      .string()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),

    imageKey: z.string().optional().nullable()
  })
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      // Skip if imageUrl is not being updated
      if (data.imageUrl === undefined) {
        return true;
      }
      // If imageUrl is null, we don't need to check for imageKey
      if (data.imageUrl === null) {
        return true;
      }
      // If setting a new imageUrl, ensure imageKey is also set
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

//Events-----------------------------------------------------------------------
export const upcomingEventValidation = z.object({
  title: z
    .string()
    .trim()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(100, { message: "Title cannot exceed 100 characters" }),
  date: z // Fixed: was "data"
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .refine((date) => new Date(date) > new Date(), "Date must be in the future") // Added future date validation
    .transform((date) => new Date(date)),
  location: z
    .string()
    .trim()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(100, { message: "Location cannot exceed 100 characters" }),
  description: z
    .string()
    .trim()
    .min(10, { message: "Description must be at least 10 characters" })
    .max(300, { message: "Description cannot exceed 300 characters" })
    .optional() // Made optional to match Prisma model
});

export const upcomingEventUpdateValidation = z.object({
  title: z
    .string()
    .transform((val) => (val?.trim() === "" ? undefined : val.trim()))
    .refine((val) => val === undefined || val.length >= 5, {
      message: "Title must be at least 5 characters"
    })
    .refine((val) => val === undefined || val.length <= 100, {
      message: "Title cannot exceed 100 characters" // Fixed: was "Bio can be max of 100 characters"
    })
    .optional(),
  date: z // Fixed: was "data"
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .refine((date) => new Date(date) > new Date(), "Date must be in the future") // Added future date validation
    .transform((date) => new Date(date))
    .optional(),
  location: z
    .string()
    .transform((val) => (val?.trim() === "" ? undefined : val.trim()))
    .refine((val) => val === undefined || val.length >= 2, {
      message: "Location must be at least 2 characters"
    })
    .refine((val) => val === undefined || val.length <= 100, {
      message: "Location cannot exceed 100 characters" // Fixed: was "Location can be max of 100 characters"
    })
    .optional(),
  description: z
    .string()
    .transform((val) => (val?.trim() === "" ? undefined : val.trim()))
    .refine((val) => val === undefined || val.length >= 10, {
      message: "Description must be at least 10 characters" // Fixed: was "Title must be at least 10 characters"
    })
    .refine((val) => val === undefined || val.length <= 300, {
      message: "Description cannot exceed 300 characters" // Fixed: was "Bio can be max of 300 characters"
    })
    .optional()
});

// Publications
// Create Publication Validation------------------------------------------------------------------
export const createPublicationValidation = z
  .object({
    title: z
      .string()
      .trim()
      .min(5, { message: "Title must be at least 5 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" }),
    type: z
      .string()
      .trim()
      .min(2, { message: "Type must be at least 2 characters" })
      .max(100, { message: "Type cannot exceed 100 characters" }),
    category: z
      .string()
      .trim()
      .min(2, { message: "Category must be at least 2 characters" })
      .max(100, { message: "Category cannot exceed 100 characters" })
      .optional()
      .nullable(),
    thumbnailUrl: z
      .string()
      .trim()
      .url({ message: "Invalid thumbnail URL format" })
      .optional()
      .nullable(),
    thumbnailKey: z.string().trim().optional().nullable(),
    pdfUrl: z
      .string()
      .trim()
      .url({ message: "Invalid PDF URL format" })
      .optional()
      .nullable(),
    pdfKey: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      // Ensure thumbnailKey is present if thumbnailUrl is provided
      if (data.thumbnailUrl && !data.thumbnailKey) {
        return false;
      }
      return true;
    },
    {
      message: "Thumbnail key is required when thumbnail URL is provided",
      path: ["thumbnailKey"]
    }
  )
  .refine(
    (data) => {
      // Ensure pdfKey is present if pdfUrl is provided
      if (data.pdfUrl && !data.pdfKey) {
        return false;
      }
      return true;
    },
    {
      message: "PDF key is required when PDF URL is provided",
      path: ["pdfKey"]
    }
  )
  .refine(
    (data) => {
      // Ensure BOTH thumbnail and PDF are provided
      if (!data.thumbnailUrl || !data.pdfUrl) {
        return false;
      }
      return true;
    },
    {
      message: "Both thumbnail and PDF must be provided",
      path: ["thumbnailUrl", "pdfUrl"] // Show error on both fields
    }
  );

// Update Publication Validation
export const updatePublicationValidation = z
  .object({
    title: z
      .string()
      .trim()
      .min(5, { message: "Title must be at least 5 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" })
      .optional(),
    type: z
      .string()
      .trim()
      .min(2, { message: "Type must be at least 2 characters" })
      .max(100, { message: "Type cannot exceed 100 characters" })
      .optional(),
    category: z
      .string()
      .trim()
      .min(2, { message: "Category must be at least 2 characters" })
      .max(100, { message: "Category cannot exceed 100 characters" })
      .optional()
      .nullable(),
    thumbnailUrl: z
      .string()
      .trim()
      .url({ message: "Invalid thumbnail URL format" })
      .optional()
      .nullable(),
    thumbnailKey: z.string().trim().optional().nullable(),
    pdfUrl: z
      .string()
      .trim()
      .url({ message: "Invalid PDF URL format" })
      .optional()
      .nullable(),
    pdfKey: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      // ✅ GOOD: Handles undefined (not being updated)
      if (data.thumbnailUrl === undefined) {
        return true;
      }
      // ✅ GOOD: Handles null (removing thumbnail)
      if (data.thumbnailUrl === null) {
        return true;
      }
      // ✅ GOOD: Ensures key is provided when URL is set
      if (data.thumbnailUrl && !data.thumbnailKey) {
        return false;
      }
      return true;
    },
    {
      message: "Thumbnail key is required when thumbnail URL is provided",
      path: ["thumbnailKey"]
    }
  )
  .refine(
    (data) => {
      // ✅ GOOD: Same logic for PDF
      if (data.pdfUrl === undefined) {
        return true;
      }
      if (data.pdfUrl === null) {
        return true;
      }
      if (data.pdfUrl && !data.pdfKey) {
        return false;
      }
      return true;
    },
    {
      message: "PDF key is required when PDF URL is provided",
      path: ["pdfKey"]
    }
  );

// Create Gallery Validation-----------------------------------------------
export const createGalleryValidation = z
  .object({
    title: z
      .string()
      .trim()
      .min(5, { message: "Title must be at least 5 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" }),
    imageUrl: z.string().trim().url({ message: "Invalid image URL format" }),
    imageKey: z.string().trim().min(1, { message: "Image key is required" })
  })
  .refine(
    (data) => {
      // Ensure imageKey is present if imageUrl is provided
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

// Update Gallery Validation
export const updateGalleryValidation = z
  .object({
    title: z
      .string()
      .trim()
      .min(5, { message: "Title must be at least 5 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" })
      .optional(),
    imageUrl: z
      .string()
      .trim()
      .url({ message: "Invalid image URL format" })
      .optional(),
    imageKey: z.string().trim().optional()
  })
  .refine(
    (data) => {
      // Skip if imageUrl is not being updated
      if (data.imageUrl === undefined) {
        return true;
      }
      // If setting a new imageUrl, ensure imageKey is also set
      if (data.imageUrl && !data.imageKey) {
        return false;
      }
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  );

// Create Project Details Validation--------------------------------------------------------
export const createProjectDetailsValidation = z.object({
  title: z
    .string()
    .trim()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(300, { message: "Title cannot exceed 100 characters" }),
  region: z
    .string()
    .trim()
    .refine((val) => val === "NEH" || val === "AICRP", {
      message: "Region must be either 'NEH' or 'AICRP'"
    }),
  year: z
    .number()
    .int({ message: "Year must be a valid integer" })
    .min(1950, { message: "Year must be at least 1950" })
    .max(2100, { message: "Year cannot exceed 2100" }),
  budget: z
    .number()
    .positive({ message: "Budget must be a positive number" })
    .optional()
    .nullable(),
  center: z
    .string()
    .trim()
    .min(2, { message: "Center must be at least 2 characters" })
    .max(300, { message: "Center cannot exceed 100 characters" })
    .optional()
    .nullable(),
  location: z
    .string()
    .trim()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(200, { message: "Location cannot exceed 100 characters" })
    .optional()
    .nullable(),
  objectives: z
    .array(z.string().trim().min(1, { message: "Objective cannot be empty" }))
    .min(1, { message: "At least one objective is required" })
    .max(20, { message: "Cannot have more than 20 objectives" }),
  director: z
    .string()
    .trim()
    .min(2, { message: "Director name must be at least 2 characters" })
    .max(100, { message: "Director name cannot exceed 100 characters" }),
  coDirectors: z
    .array(
      z.string().trim().min(1, { message: "Co-director name cannot be empty" })
    )
    .max(10, { message: "Cannot have more than 10 co-directors" })
    .default([]),
  achievements: z
    .array(z.string().trim().min(1, { message: "Achievement cannot be empty" }))
    .max(50, { message: "Cannot have more than 50 achievements" })
    .default([])
});

// Update Project Details Validation
export const updateProjectDetailsValidation = z.object({
  title: z
    .string()
    .trim()
    .min(5, { message: "Title must be at least 5 characters" })
    .max(300, { message: "Title cannot exceed 100 characters" })
    .optional(),
  region: z
    .string()
    .trim()
    .refine((val) => val === "NEH" || val === "AICRP", {
      message: "Region must be either 'NEH' or 'AICRP'"
    })
    .optional(),
  year: z
    .number()
    .int({ message: "Year must be a valid integer" })
    .min(1950, { message: "Year must be at least 1950" })
    .max(2100, { message: "Year cannot exceed 2100" })
    .optional(),
  budget: z
    .number()
    .positive({ message: "Budget must be a positive number" })
    .optional()
    .nullable(),
  center: z
    .string()
    .trim()
    .min(2, { message: "Center must be at least 2 characters" })
    .max(300, { message: "Center cannot exceed 100 characters" })
    .optional()
    .nullable(),
  location: z
    .string()
    .trim()
    .min(2, { message: "Location must be at least 2 characters" })
    .max(200, { message: "Location cannot exceed 100 characters" })
    .optional()
    .nullable(),
  objectives: z
    .array(z.string().trim().min(1, { message: "Objective cannot be empty" }))
    .min(1, { message: "At least one objective is required" })
    .max(20, { message: "Cannot have more than 20 objectives" })
    .optional(),
  director: z
    .string()
    .trim()
    .min(2, { message: "Director name must be at least 2 characters" })
    .max(100, { message: "Director name cannot exceed 100 characters" })
    .optional(),
  coDirectors: z
    .array(
      z.string().trim().min(1, { message: "Co-director name cannot be empty" })
    )
    .max(10, { message: "Cannot have more than 10 co-directors" })
    .optional(),
  achievements: z
    .array(z.string().trim().min(1, { message: "Achievement cannot be empty" }))
    .max(50, { message: "Cannot have more than 50 achievements" })
    .optional()
});

export const createActivityCategoryValidation = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: "Activity category must be at least 2 characters" })
    .max(300, { message: "Activity category cannot exceed 100 characters" })
});
export const updateActivityCategoryValidation = z.object({
  name: z
    .string()
    .trim()
    .min(5, { message: "Activity category must be at least 2 characters" })
    .max(300, { message: "Activity category cannot exceed 100 characters" })
    .optional()
});

export const createActivityValidation = z
  .object({
    activityCategoryId: z
      .string()
      .trim()
      .uuid({ message: "Invalid activity category ID format" }),

    projectId: z.string().trim().uuid({ message: "Invalid project ID format" }),

    quarterId: z.string().trim().uuid({ message: "Invalid quarter ID format" }),

    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(255, { message: "Title cannot exceed 255 characters" }),

    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .nonnegative({ message: "Target must be zero or positive" })
      .optional(),

    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" })
      .optional(),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),
    district: z
      .string()
      .trim()
      .min(2, { message: "District must be at least 2 characters" })
      .max(100, { message: "District cannot exceed 100 characters" }),

    village: z
      .string()
      .trim()
      .min(2, { message: "Village must be at least 2 characters" })
      .max(100, { message: "Village cannot exceed 100 characters" }),

    block: z
      .string()
      .trim()
      .min(2, { message: "Block must be at least 2 characters" })
      .max(100, { message: "Block cannot exceed 100 characters" }),

    beneficiaryMale: z
      .number({ invalid_type_error: "Male beneficiary count must be a number" })
      .int()
      .nonnegative()
      .default(0),

    beneficiaryFemale: z
      .number({
        invalid_type_error: "Female beneficiary count must be a number"
      })
      .int()
      .nonnegative()
      .default(0),

    remarks: z.string().trim().max(300).optional().nullable(),

    imageUrl: z.string().trim().url().optional().nullable(),

    imageKey: z.string().trim().optional().nullable(),

    pdfUrl: z.string().trim().url().optional().nullable(),

    pdfKey: z.string().trim().optional().nullable(),

    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      const bothPresent =
        data.target !== undefined && data.achieved !== undefined;
      const bothAbsent =
        data.target === undefined && data.achieved === undefined;

      // Either both should be present or both should be absent
      return bothPresent || bothAbsent;
    },
    {
      message: "Either both target and achieved must be provided, or neither",
      path: ["target"]
    }
  )
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      if (data.imageUrl && !data.imageKey) return false;
      return true;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  )
  .refine(
    (data) => {
      if (data.pdfUrl && !data.pdfKey) return false;
      return true;
    },
    {
      message: "PDF key is required when PDF URL is provided",
      path: ["pdfKey"]
    }
  );

export const updateActivityValidation = z
  .object({
    activityCategoryId: z.string().trim().uuid().optional(),
    projectId: z.string().trim().uuid().optional(),
    quarterId: z.string().trim().uuid().optional(),

    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(255, { message: "Title cannot exceed 255 characters" })
      .optional(),

    target: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    achieved: z
      .union([z.number().int().nonnegative(), z.null()])
      .optional()
      .transform((val) => {
        // If explicitly set to null or undefined, return null to clear the field
        if (val === null || val === undefined) return null;
        return val;
      }),
    targetSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 target points" })
      .default([])
      .optional(),
    achievedSentence: z
      .array(z.string().trim())
      .max(20, { message: "Cannot have more than 20 achievements" })
      .default([])
      .optional(),

    district: z.string().trim().min(2).max(100).optional(),

    village: z.string().trim().min(2).max(100).optional(),

    block: z.string().trim().min(2).max(100).optional(),

    beneficiaryMale: z
      .number({ invalid_type_error: "Male beneficiary count must be a number" })
      .int()
      .nonnegative()
      .optional(),

    beneficiaryFemale: z
      .number({
        invalid_type_error: "Female beneficiary count must be a number"
      })
      .int()
      .nonnegative()
      .optional(),

    remarks: z.string().trim().max(300).optional().nullable(),

    imageUrl: z.string().trim().url().optional().nullable(),

    imageKey: z.string().trim().optional().nullable(),

    pdfUrl: z.string().trim().url().optional().nullable(),

    pdfKey: z.string().trim().optional().nullable(),

    units: z
      .string()
      .trim()
      .refine((val) => val === "" || val.length >= 1, {
        message: "Units must be specified if provided"
      })
      .transform((val) => (val === "" ? null : val))
      .optional()
      .nullable()
  })
  .refine(
    (data) => {
      if (data.target != null && data.achieved != null) {
        return data.achieved <= data.target;
      }
      return true;
    },
    {
      message: "Achieved count cannot exceed target count",
      path: ["achieved"]
    }
  )
  .refine(
    (data) => {
      if (data.imageUrl === undefined || data.imageUrl === null) return true;
      return !!data.imageKey;
    },
    {
      message: "Image key is required when image URL is provided",
      path: ["imageKey"]
    }
  )
  .refine(
    (data) => {
      if (data.pdfUrl === undefined || data.pdfUrl === null) return true;
      return !!data.pdfKey;
    },
    {
      message: "PDF key is required when PDF URL is provided",
      path: ["pdfKey"]
    }
  );
