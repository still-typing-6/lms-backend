import type { Response, NextFunction, Request } from "express";
import { findCourseById } from "../repositories/course.repository.js";

export const courseOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courseId = Number(req.params.courseId);
    const userId = req.user?.userId;

    const course = await findCourseById(courseId);
    if (course.length === 0) {
      return res.status(404).json({ message: "Course not found" });
    }
    if (course[0]?.teacherId !== userId) {
      return res.status(403).json({ message: "Your do not own this course" });
    }
    next();
  } catch (error) {
    next(error);
  }
}
