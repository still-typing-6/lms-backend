import type { NextFunction, Request, Response } from "express";
import { createModuleService } from "../services/module.service.js";

export const createModuleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req?.user) {
      res.status(400).json({ message: "unauthorized" })
    }
    const courseId = Number(req.params.courseId);
    const moduleNo = Number(req.params.moduleNo);
    const result = await createModuleService(courseId, moduleNo, req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
