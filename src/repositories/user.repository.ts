import { db } from "../database/connection.js";
import { usersTable } from "../models/user.js";
import { eq } from "drizzle-orm";
import type { studentRegistration } from "../validations/auth.validations.js";

export const findUserByEmail = async (emailId: string) => {
  const result = await db.select().from(usersTable).where(eq(usersTable.email, emailId));
  return result[0] ?? null;
}

export const registerUser = async (user: studentRegistration) => {
  const result = await db.insert(usersTable).values({
    fname: user.fname,
    lname: user.lname,
    email: user.emailId,
    password: user.password,
    dob: user.dob,
    phoneNo: user.phoneNo
  }).$returningId();
  return result;
};

