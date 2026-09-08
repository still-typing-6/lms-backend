import { createLesson, deleteLesson, updateLesson } from "../repositories/lesson.repository.js";
import type { lessonDetail, lessonUpdateDetail } from "../validations/lesson.validation.js";

export const createLessonService = async (lessonDetail: lessonDetail, courseId: number, moduleNo: number, lessonNo: number) => {
  const result = await createLesson(lessonDetail, courseId, moduleNo, lessonNo);
  return result;
}

export const updateLessonService = async (lessonUpdateDetail: lessonUpdateDetail, courseId: number, moduleNo: number, lessonNo: number) => {
  const result = await updateLesson(lessonUpdateDetail, courseId, moduleNo, lessonNo);
  return result;
}

export const deleteLessonService = async (courseId: number, moduleNo: number, lessonNo: number) => {
  const result = await deleteLesson(courseId, moduleNo, lessonNo);
  return result;
}
