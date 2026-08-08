import type { NextFunction, Request, Response } from "express";
import { registerStudent } from "../services/auth.service.js";

export const studentRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await registerStudent(req.body);
    res.status(200).json({ message: "user register succesfully", data: result })
  } catch (error) {
    next(error);
  }
}
