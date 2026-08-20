import { time } from "console";
import { db } from "../database/connection.js"
import { studentTable } from "../models/student.model.js"

export const registerStudent = async (userId: number) => {
  const result = await db.insert(studentTable).values({
    userId: userId,
  }).$returningId();
  return result[0]?.student_id;
} 
