import { eq } from "drizzle-orm";
import { db } from "../database/connection.js"
import { teacherTable } from "../models/teacher.model.js"

export const registerTeacher = async (userId: number) => {
  const result = await db.insert(teacherTable).values({
    userId: userId,
  }).$returningId();
  return result[0]?.teacherId;
}

export const findTeacherByUserId = async (Id: number) => {
  const result = await db.select().from(teacherTable).where(eq(teacherTable.userId, Id));
  return result[0] ?? null;
}
