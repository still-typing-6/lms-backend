import type { NextFunction, Request, Response } from "express";
import { createCourseService, deleteCourseService, updateCourseService } from "../services/course.service.js";

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

export const updateCourseController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req?.user) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const courseId = Number(req.params.courseId);
    const result = await updateCourseService(req.body, courseId);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export const deleteCourseController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req?.user) {
      return res.status(401).json({ message: "unauthorized" });
    }
    const courseId = Number(req.params.courseId);
    const result = await deleteCourseService(courseId);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
