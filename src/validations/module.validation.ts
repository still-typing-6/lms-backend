import * as z from "zod"

export const moduleSchema = z.object({
  moduleNo: z.number().int().positive(),
  title: z.string().min(3).max(100),
})

export type moduleDetail = z.infer<typeof moduleSchema>
