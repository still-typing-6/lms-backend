import { hashPassword } from "../utils/password.js";
import type { studentRegistration } from "../validations/auth.validations.js";

export const registerStudent = (student: studentRegistration) => {
  const hashPass = hashPassword(student.password);

}
