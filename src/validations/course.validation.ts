import * as z from "zod";

export const courseSchema = z.object({
  courseName: z.string().min(5).max(50),
  description: z.string().min(5).max(255),
})

export const updateCourseSchema = z.object({
  courseName: z.string().min(5).max(50).optional(),
  description: z.string().min(5).max(255).optional(),
})

export type courseDetail = z.infer<typeof courseSchema>
export type updateCourseDetail = z.infer<typeof updateCourseSchema>
