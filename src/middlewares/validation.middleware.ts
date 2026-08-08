import type { ZodSchema } from "zod/v3";
import type { NextFunction, Request, Response } from "express";

export const validate = (schema: ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        message: "Invalid request data"
      })
    } else {
      req.body = result.data;
      next();

    }
  }
}
