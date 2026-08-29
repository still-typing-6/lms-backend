import * as z from "zod";

export const courseSchema = z.object({
  courseName: z.string().min(5).max(50),
  discrption: z.string().max(255),
})

export const updateCourseSchema = z.object({
  courseName: z.string().min(5).max(10).optional(),
  discription: z.string().max(255).optional(),
})

export type courseDetail = z.infer<typeof courseSchema>
export type updateCourseDetail = z.infer<typeof updateCourseSchema>
