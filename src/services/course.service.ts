import type { courseDetail, updateCourseDetail } from "../validations/course.validation.js";
import { createCourse, deleteCourse, updateCourse } from "../repositories/course.repository.js";

export const createCourseService = async (courseDetails: courseDetail, userId: number) => {
  const courseId = await createCourse(courseDetails, userId);
  return courseId;
}

export const updateCourseService = async (updateDetail: updateCourseDetail, courseId: number) => {
  const result = await updateCourse(updateDetail, courseId);
  return result;
}

export const deleteCourseService = async (courseId: number) => {
  const result = await deleteCourse(courseId);
  return result;
}
