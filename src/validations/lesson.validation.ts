import * as z from "zod";

export const lessonSchema = z.object({
  lessonNo: z.number().int().positive(),
  lessonTitle: z.string().min(5).max(100),
  lessonContext: z.string().min(5).max(255),
  videoUrl: z.string().url("Invalid Url provided").max(255)
})

export type lessonDetail = z.infer<typeof lessonSchema>
