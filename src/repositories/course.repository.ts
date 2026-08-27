import { db } from "../database/connection.js";
import { courseTable } from "../models/course.model.js";
import type { courseDetail } from "../validations/course.validation.js";

export const createCourse = async (courseDetail: courseDetail, userId: number) => {
  const result = await db.insert(courseTable).values({
    courseName: courseDetail.courseName,
    description: courseDetail.discrption,
    teacherId: userId,
  }).$returningId();
  return result[0]?.courseId;
}

export const updateCourse = async () => {

}

export const deleteCourse = async () => {

}

export const findCourseById = async () => {

}
