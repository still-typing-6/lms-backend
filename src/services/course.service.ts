import type { courseDetail, updateCourseDetail } from "../validations/course.validation.js";
import { createCourse, deleteCourse, updateCourse } from "../repositories/course.repository.js";
import { findTeacherByUserId } from "../repositories/teacher.repository.js";

export const createCourseService = async (courseDetails: courseDetail, userId: number) => {
  const teacher = await findTeacherByUserId(userId);
  if (!teacher) {
    throw new Error("Teacher not found")
  }
  const courseId = await createCourse(courseDetails, teacher.teacherId);
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

