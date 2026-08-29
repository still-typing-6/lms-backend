import type { courseDetail, updateCourseDetail } from "../validations/course.validation.js";
import { createCourse, updateCourse } from "../repositories/course.repository.js";
export const createCourseService = async (courseDetails: courseDetail, userId: number) => {
  const courseId = await createCourse(courseDetails, userId);
  return courseId;
}

export const updateCourseService = async (updateDetail: updateCourseDetail, courseId: number) => {
  const result = await updateCourse(updateDetail, courseId);
  return result;
}
