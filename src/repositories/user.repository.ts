import { db } from "../database/connection.js";
import { usersTable } from "../models/user.model.js";
import { eq } from "drizzle-orm";
import type { userRegistration } from "../validations/auth.validations.js";
import { studentTable } from "../models/student.model.js";
import { teacherTable } from "../models/teacher.model.js";

export const findUserByEmail = async (emailId: string) => {
  const result = await db.select().from(usersTable).where(eq(usersTable.email, emailId));
  return result[0] ?? null;
}

export const registerUser = async (user: userRegistration) => {
  const result = await db.insert(usersTable).values({
    fname: user.fname,
    lname: user.lname,
    email: user.emailId,
    password: user.password,
    dob: user.dob,
    phoneNo: user.phoneNo,
    profileType: user.profileType
  }).$returningId();
  return result;
};

export const findUserByUserId = async (Id: number) => {
  const result = await db.select().from(usersTable).where(eq(usersTable.id, Id));
  return result[0]?.id ?? null;
}

export const findStudentByUserId = async (Id: number) => {
  const result = await db.select().from(studentTable).where(eq(studentTable.userId, Id));
  return result[0]?.student_id ?? null;
}

export const findTeacherByUserId = async (Id: number) => {
  const result = await db.select().from(teacherTable).where(eq(teacherTable.userId, Id));
  return result[0]?.teacherId ?? null;
}

