import { and, eq } from "drizzle-orm";
import { db } from "../database/connection.js"
import { lessonTable } from "../models/lesson.module.js"
import type { lessonDetail, lessonUpdateDetail } from "../validations/lesson.validation.js"


export const createLesson = async (lessonDetail: lessonDetail, courseId: number, moduleNo: number, lessonNo: number) => {
  const result = await db.insert(lessonTable).values({
    lessonNo: lessonNo, lessonTitle: lessonDetail.lessonTitle, lessonContext:
      lessonDetail.lessonContext, videoUrl: lessonDetail.videoUrl, courseId: courseId, moduleNo: moduleNo
  });
  return result;
}

export const updateLesson = async (lessonUpdateDetail: lessonUpdateDetail, courseId: number, moduleNo: number, lesssonNo: number) => {
  const result = await db.update(lessonTable).
    set({ lessonTitle: lessonUpdateDetail.lessonTitle, lessonContext: lessonUpdateDetail.lessonContext, videoUrl: lessonUpdateDetail.videoUrl }).where(
      and(
        eq(lessonTable.courseId, courseId),
        eq(lessonTable.moduleNo, moduleNo),
        eq(lessonTable.lessonNo, lesssonNo)
      )
    )
  return result;
}

