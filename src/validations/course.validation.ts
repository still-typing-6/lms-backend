import * as z from "zod";

export const courseSchema = z.object({
  courseName: z.string().min(5).max(50),
  discrption: z.string().max(255),
})

export type courseDetail = z.infer<typeof courseSchema> 
