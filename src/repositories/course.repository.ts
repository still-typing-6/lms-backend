import { eq } from "drizzle-orm";
import { db } from "../database/connection.js";
import { courseTable } from "../models/course.model.js";
import type { courseDetail, updateCourseDetail } from "../validations/course.validation.js";

export const createCourse = async (courseDetail: courseDetail, userId: number) => {
  const result = await db.insert(courseTable).values({
    courseName: courseDetail.courseName,
    description: courseDetail.discrption,
    teacherId: userId,
  }).$returningId();
  return result[0]?.courseId;
}

export const updateCourse = async (updateDetail: updateCourseDetail, courseId: number) => {
  const result = await db.update(courseTable).set({ courseName: updateDetail.courseName, description: updateDetail.discription }).where(eq(courseTable.courseId, courseId));
  return result;
}

export const deleteCourse = async (courseId: number) => {
  const result = await db.delete(courseTable).where(eq(courseTable.courseId, courseId));
  return result;
}

export const findCourseById = async (courseId: number) => {
  const course = await db.select().from(courseTable).where(eq(courseTable.courseId, courseId));
  return course;
}
