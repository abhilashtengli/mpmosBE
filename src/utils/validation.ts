import validator from "validator";
import { z } from "zod";
interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

export const signupValidation = (req: { body: User }) => {
  const { name, email, password, role } = req.body;
  if (!name) {
    throw new Error("Invalid first name or last name");
  } else if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password");
  } else if (!role) {
    throw new Error("Please select a role");
  }
};
// create project validation
export const createProjectValidation = z
  .object({
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be atleast of 2 characters" })
      .max(40, { message: "Title cannot exceed 40 characters" }),
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
      .max(40, { message: "Title cannot exceed 40 characters" })
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
    trainingId: z
      .string()
      .trim()
      .min(5, { message: "ID must be 6 characters, Ex: TRN001" })
      .max(5, { message: "Id cannot exceed 6 characters" }),
    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .nonnegative({ message: "Target must be zero or positive" }),
    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" }),
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
    units: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      // Ensure achieved doesn't exceed target
      return data.achieved <= data.target;
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
    trainingId: z
      .string()
      .trim()
      .min(5, { message: "ID must be 6 characters, Ex: TRN001" })
      .max(5, { message: "Id cannot exceed 6 characters" })
      .optional(),
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
    units: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      // Skip refinement if we don't have both target and achieved
      if (data.target === undefined || data.achieved === undefined) {
        return true;
      }
      // For update validation, we need to compare the values only if both are provided
      return data.achieved <= data.target;
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

// Create validation schema-------------------------------------------------------
export const createAwarenessProgramValidation = z
  .object({
    projectId: z.string().trim().uuid({ message: "Invalid project ID format" }),
    quarterId: z.string().trim().uuid({ message: "Invalid quarter ID format" }),
    title: z
      .string()
      .trim()
      .min(2, { message: "Title must be at least 2 characters" })
      .max(100, { message: "Title cannot exceed 100 characters" }),
    awarnessprogramId: z
      .string()
      .trim()
      .min(5, { message: "ID must be 5 characters, Ex: AWP01" })
      .max(10, { message: "ID cannot exceed 10 characters" }),
    target: z
      .number({ invalid_type_error: "Target must be a number" })
      .int({ message: "Target must be an integer" })
      .nonnegative({ message: "Target must be zero or positive" }),
    achieved: z
      .number({ invalid_type_error: "Achieved must be a number" })
      .int({ message: "Achieved must be an integer" })
      .nonnegative({ message: "Achieved must be zero or positive" }),
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
    imageUrl: z
      .string()
      .trim()
      .url({ message: "Invalid image URL format" })
      .optional()
      .nullable(),
    imageKey: z.string().trim().optional().nullable(),
    units: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      return data.achieved <= data.target;
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

// Update validation schema
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
      .optional(),
    awarnessprogramId: z
      .string()
      .trim()
      .min(5, { message: "ID must be 5 characters, Ex: AWP01" })
      .max(10, { message: "ID cannot exceed 10 characters" })
      .optional(),
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
    units: z.string().trim().optional().nullable()
  })
  .refine(
    (data) => {
      // Skip refinement if we don't have both target and achieved
      if (data.target === undefined || data.achieved === undefined) {
        return true;
      }
      // For update validation, we need to compare the values only if both are provided
      return data.achieved <= data.target;
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
