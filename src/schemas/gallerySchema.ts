import { z } from "zod";

export const gallerySchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  image: z
  .instanceof(File)
  .refine(
    (file) => file.size <= 5 * 1024 * 1024, // 5 MB in bytes
    { message: "Image file size must not exceed 5 MB." }
  ),
  category: z.enum(["Office", "Events", "Client Visits"], {
    message: "Please select a category",
  }),
  
});