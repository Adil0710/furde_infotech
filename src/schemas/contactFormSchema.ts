import { z } from "zod";


export const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().min(10, { message: "Phone must be at least 10 digits." }),
    email: z.string().email({ message: "Invalid email address." }),
    service: z.string().min(1, { message: "Please select a service." }),
  })
  