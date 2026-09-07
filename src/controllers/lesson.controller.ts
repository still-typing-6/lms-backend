import type { NextFunction, Request, Response } from "express";
import { createLessonService } from "../services/lesson.service.js";

export const createLessonController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "unauthorized" })
    }
    const courseId = Number(req.params.courseId);
    const moduleNo = Number(req.params.moduleNo);
    const lessonNo = Number(req.params.lessonNo);
    const result = await createLessonService(req.body, courseId, moduleNo, lessonNo);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
