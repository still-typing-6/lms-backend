import type { NextFunction, Request, Response } from "express";
import { userLogin, userRegister } from "../services/auth.service.js";

export const userRegistered = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await userRegister(req.body);
    console.log(result)
    if (!result) {
      res.status(400).json({ message: "user registration failed", data: result })

    }
    res.status(200).json({ message: "user register succesfully", data: result })
  } catch (error) {
    next(error);
  }
}

export const signInUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = userLogin(req.body);
    res.cookie("token", result);
  } catch (error) {
    next(error);
  }
} 
