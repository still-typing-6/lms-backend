import type { NextFunction, Request, Response } from "express";
import { userLogin, userRegister } from "../services/auth.service.js";

export const userRegistered = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userRegister(req.body);
    if (!result) {
      return res.status(400).json({ message: "user registration failed", data: result })
    }
    return res.status(201).json({ message: "user registered succesfully", data: result })
  } catch (error) {
    next(error);
  }
}

export const signInUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await userLogin(req.body);
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000
    });
    return res.status(200).json({ message: "Login succesfully" })
  } catch (error) {
    next(error);
  }
} 
