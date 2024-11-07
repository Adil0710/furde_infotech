import { z } from "zod";

// Helper function to check if a date is 18+ years ago
const isEighteenPlus = (date: Date) => {
  const today = new Date();
  const eighteenYearsAgo = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  return date <= eighteenYearsAgo;
};

export const applicationFormSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "First Name must be at least 2 characters." }).max(50, { message: "First Name must not exceed 50 characters." }),
  lastname: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters." }).max(50, { message: "Last Name must not exceed 50 characters." }),
  dob: z
    .string({message: "Pick a Date of Birth"})
    .refine(
      (value) => {
        const date = new Date(value);
        return isEighteenPlus(date);
      },
      { message: "You must be at least 18 years old." }
    )
    .transform((value) => new Date(value)), // Convert string to Date
    gender: z.enum(["Male", "Female", "Other"], {
      required_error: "Select a Gender",
    }),
    phone: z.string().min(10, { message: "Phone No. must be at least 10 digits." }),
    email: z.string().email({ message: "Invalid Email address." }),
    address: z.string().min(5, { message: "Address must be at least 5 characters." }).max(200, { message: "Address must not exceed 200 characters." }),
    caste: z
    .string()
    .min(2, { message: "Caste must be at least 2 characters." }).min(50, { message: "Caste mustnot exceed 50 characters." }),
    maritalStatus: z.enum(["Single", "Married", "Widowed", "Divorced"], {
      required_error: "Select Marital Status",
    }),
});

// service: z.string().min(1, { message: "Please select a service." }),
