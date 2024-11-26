import { z } from "zod";

export const jobSchema = z.object({
  designation: z.string().min(1, { message: "Designation is required." }),
  department: z.string().min(1, { message: "Department is required." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long." }),
  location: z.string().min(1, { message: "Location is required." }),
  type: z.enum(["Full Time", "Part Time", "Internship"], {
    message: "Invalid job type. Must be 'Full Time', 'Part Time', or 'Internship'.",
  }),
  level: z.enum(["Entry", "Experienced"], {
    message: "Invalid job level. Must be 'Entry' or 'Experienced'.",
  }),
});