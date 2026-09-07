import { createLesson } from "../repositories/lesson.repository.js";
import type { lessonDetail } from "../validations/lesson.validation.js";

export const createLessonService = async (lessonDetail: lessonDetail, courseId: number, moduleNo: number, lessonNo: number) => {
  const result = await createLesson(lessonDetail, courseId, moduleNo, lessonNo);
  return result;
}
