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

export const signInUser = async (req: Request, res: Response) => {
  try {
    const result = await userLogin(req.body);
    console.log(result);
    res.cookie("token", result);
    res.status(200).json({ message: "Login succesfully" })
  } catch (error) {
    res.status(404).json({ message: "token not get", error: error })
  }
} 
