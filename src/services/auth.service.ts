import { findUserByEmail, registerUser } from "../repositories/user.repository.js";
import { hashPassword } from "../utils/password.js";
import type { studentRegistration } from "../validations/auth.validations.js";

export const registerStudent = async (student: studentRegistration) => {
  try {
    const checkUser = await findUserByEmail(student.emailId);
    if (checkUser) {
      throw new Error("Email already exist in Database");
    }
    const hashedPass = await hashPassword(student.password);
    const userData = { ...student, password: hashedPass }
    const regUser = await registerUser(userData);
    return regUser;
  } catch (error) {
    console.error("Insert fails ", error);
  }
}
