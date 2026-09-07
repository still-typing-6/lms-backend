import * as z from "zod";

export const lessonSchema = z.object({
  lessonTitle: z.string().min(5).max(100),
  lessonContext: z.string().min(5).max(255),
  videoUrl: z.string().url("Invalid Url provided").max(255)
})

export const lessonUpdateSchema = z.object({
  lessonTitle: z.string().min(5).max(100).optional(),
  lessonContext: z.string().min(5).max(255).optional(),
  videoUrl: z.string().url("Invalid Url provided").max(255)
})

export type lessonDetail = z.infer<typeof lessonSchema>

export type lessonUpdateDetail = z.infer<typeof lessonUpdateSchema>
