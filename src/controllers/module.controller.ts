import type { NextFunction, Request, Response } from "express";
import { createModuleService, deleteModuleService, updateModuleService } from "../services/module.service.js";

export const createModuleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req?.user) {
      res.status(400).json({ message: "unauthorized" })
      return;
    }
    const courseId = Number(req.params.courseId);
    const moduleNo = Number(req.params.moduleNo);
    const result = await createModuleService(courseId, moduleNo, req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export const updateModuleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
    const courseId = Number(req.params.courseId);
    const moduleNo = Number(req.params.moduleNo);
    const result = await updateModuleService(courseId, moduleNo, req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export const deleteModuleController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "unauthorized" });
      return;
    }
    const courseId = Number(req.params.courseId);
    const moduleNo = Number(req.params.moduleNo);
    const result = await deleteModuleService(courseId, moduleNo);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}
