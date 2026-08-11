import type { NextFunction, Request, Response } from "express";
import { validateToken } from "../utils/token.js";
import { findUserByUserId } from "../repositories/user.repository.js";

export const middleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const cookie = req.cookies;
    const { token } = cookie;
    if (!token) {
      throw new Error("Token invalid");
    }
    const decodedObj = validateToken(token);
    const { id } = decodedObj;
    const user = await findUserByUserId(id);
    if (!user) {
      throw new Error("User not exist");
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "something went wrong", Error: error });
  }
}
