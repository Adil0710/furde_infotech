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
    .min(2, { message: "First Name must be at least 2 characters." })
    .max(50, { message: "First Name must not exceed 50 characters." }),
  lastname: z
    .string()
    .min(2, { message: "Last Name must be at least 2 characters." })
    .max(50, { message: "Last Name must not exceed 50 characters." }),
  dob: z
    .string({ message: "Pick a Date of Birth" })
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
  phone: z
    .string()
    .min(10, { message: "Phone No. must be at least 10 digits." }),
  email: z.string().email({ message: "Invalid Email address." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." })
    .max(200, { message: "Address must not exceed 200 characters." }),
  caste: z
    .string()
    .min(2, { message: "Caste must be at least 2 characters." })
    .max(50, { message: "Caste mustnot exceed 50 characters." }),
  maritalStatus: z.enum(["Single", "Married", "Widowed", "Divorced"], {
    required_error: "Select Marital Status",
  }),
  schoolname: z
    .string()
    .min(2, { message: "School Name must be at least 2 characters." })
    .max(100, { message: "School Name must not exceed 100 characters." }),
  sscyear: z
    .string()
    .min(4, { message: "Select Passing Year" })
    .refine(
      (value) =>
        /^\d{4}$/.test(value) && parseInt(value) <= new Date().getFullYear(),
      {
        message: "Invalid Year",
      }
    ),
  sscmarks: z
    .string()
    .min(2, { message: "Enter Percentage or CGPA " })
    .max(10, { message: "Percentage or CGPA must not exceed 10 characters." }),
  hscdiplomaname: z
    .string()
    .min(2, { message: "College Name must be at least 2 characters." })
    .max(100, { message: "College Name must not exceed 100 characters." }),
  hscdiplomadepartment: z
    .string()
    .min(2, { message: "Department must be at least 2 characters." })
    .max(50, { message: "Department Name must not exceed 50 characters." }),
  hscdiplomayear: z
    .string()
    .min(4, { message: "Select Passing Year" })
    .refine(
      (value) =>
        /^\d{4}$/.test(value) && parseInt(value) <= new Date().getFullYear(),
      {
        message: "Invalid Year",
      }
    ),
  hscdiplomamarks: z
    .string()
    .min(2, { message: "Enter Percentage or CGPA " })
    .max(10, { message: "Percentage or CGPA must not exceed 10 characters." }),
  graduationname: z
    .string()
    
    .max(100, { message: "College Name must not exceed 100 characters." })
    .optional(),
  graduationdepartment: z
    .string()
   
    .max(50, { message: "Department Name must not exceed 50 characters." })
    .optional(),
  graduationyear: z
    .string()
    .min(4, { message: "Select Passing Year" })
    .refine(
      (value) =>
        value === "" || // Allow empty strings
        (/^\d{4}$/.test(value) && parseInt(value) <= new Date().getFullYear()),
      {
        message: "Invalid Year",
      }
    )
    .optional(),
  graduationmarks: z
    .string()
 
    .max(10, { message: "Percentage or CGPA must not exceed 10 characters." })
    .optional(),
  pgraduationname: z
    .string()
    
    .max(100, { message: "College Name must not exceed 100 characters." })
    .optional(),
  pgraduationdepartment: z
    .string()

    .max(50, { message: "Department Name must not exceed 50 characters." })
    .optional(),
  pgraduationyear: z
    .string()
    .min(4, { message: "Select Passing Year" })
    .refine(
      (value) =>
        value === "" || // Allow empty strings
        (/^\d{4}$/.test(value) && parseInt(value) <= new Date().getFullYear()),
      {
        message: "Invalid Year",
      }
    )
    .optional(),
  pgraduationmarks: z
    .string()
   
    .max(10, { message: "Percentage or CGPA must not exceed 10 characters." })
    .optional(),
  experience: z
    .string()
    .min(2, { message: "Experience must be at least 5 characters." })
    .max(200, { message: "Experience must not exceed 200 characters." }),
  courses: z
    .string()
    .min(2, { message: "Courses must be at least 5 characters." })
    .max(200, { message: "Courses must not exceed 200 characters." }),
  vehicle: z.enum(["Yes", "No"], {
    required_error: "Select an option",
  }),
  languages: z.array(z.string()).nonempty({ message: "Please select at least one language." }),
  resume: z
  .instanceof(File),
  confirm: z.boolean().refine(val => val === true, {
    message: "You must confirm that the information is accurate."
  }),
});

// service: z.string().min(1, { message: "Please select a service." }),
