import * as z from "zod"

export const moduleSchema = z.object({
  title: z.string().min(3).max(100),
})

export const updateModuleSchema = z.object({
  title: z.string().min(3).max(100).optional(),
})

export type moduleDetail = z.infer<typeof moduleSchema>
export type updatemoduleDetail = z.infer<typeof updateModuleSchema>
