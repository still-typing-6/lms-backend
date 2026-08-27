import type { courseDetail } from "../validations/course.validation.js";
import { createCourse } from "../repositories/course.repository.js";
export const createCourseService = async (courseDetails: courseDetail, userId: number) => {
  const courseId = await createCourse(courseDetails, userId);
  return courseId;
} 
