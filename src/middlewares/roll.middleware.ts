import type { NextFunction, Request, Response } from "express";

export const roleAuthMiddleware = (roll: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (roll == user?.userRoll) {
        next();
      } else {
        res.status(403).json({ message: "Forbidden: Insufficient access" });
      }
    } catch (error) {
      next(error);
    }
  }
}
