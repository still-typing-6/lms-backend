import type { NextFunction, Request, Response } from "express";
import { createCourseService } from "../services/teacher.service.js";

export const createCourseController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req?.user) {
      return res.status(401).json({ massage: "unauthorized" });
    }
    const course = await createCourseService(req.body, req.user.userId);
    return res.status(201).json(course);
  } catch (error) {
    next(error);
  }
}
