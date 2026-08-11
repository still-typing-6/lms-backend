import { registerStudent } from "../repositories/student.repository.js";
import { findUserByEmail, registerUser } from "../repositories/user.repository.js";
import { hashPassword } from "../utils/password.js";
import { comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/token.js";
import type { LoginCred, userRegistration } from "../validations/auth.validations.js";

export const userRegister = async (student: userRegistration) => {
  try {
    const checkUser = await findUserByEmail(student.emailId);
    if (checkUser) {
      throw new Error("Email already exist in Database");
    }
    const hashedPass = await hashPassword(student.password);
    const userData = { ...student, password: hashedPass }
    const regUser = await registerUser(userData);
    if (!regUser[0]) {
      return;
    }
    if (student.profileType == "Student") {
      studentRegister(regUser[0]?.id);
    } else {
      teacherRegister(regUser[0]?.id);
    }
    return regUser[0]?.id;
  } catch (error) {
    console.error("Insert fails ", error);
  }
}

export const studentRegister = async (userId: number) => {
  try {
    const result = registerStudent(userId);
    if (!result) {
      return;
    }
    console.log("Student register successfull");
  } catch (error) {
    console.log("Insert fails", error);
  }
}

export const teacherRegister = async (userId: number) => {
  try {
    const result = teacherRegister(userId);
    if (!result) {
      return;
    }
    console.log("teacher register successfull");
  } catch (error) {
    console.error("Insert fails", error);
  }
}

export const userLogin = async (loginCredentials: LoginCred) => {
  try {
    const result = await findUserByEmail(loginCredentials.emailId);
    if (result == null) {
      throw new Error("User not found");
    }
    const isMatch = await comparePassword(loginCredentials.password, result.password);
    if (!isMatch) {
      throw new Error("password is wrong");
    }
    const getToken = generateToken(result.id);
    return getToken;
  } catch (error) {
    console.log(error);
    throw new Error("somthing went wrong in userLogin");
  }
}
