import { Router } from "express";
import { middleware } from "../middlewares/auth.middleware.js";
import { roleAuthMiddleware } from "../middlewares/roll.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { moduleSchema } from "../validations/module.validation.js";
import { courseOwnerMiddleware } from "../middlewares/courseOwner.middleware.js";
import { createModuleController } from "../controllers/module.controller.js";

const moduleRouter = Router();

moduleRouter.post("/create/course/:courseId/module/:moduleNo", middleware, roleAuthMiddleware("Teacher"), validate(moduleSchema), courseOwnerMiddleware, createModuleController);
moduleRouter.patch("/course/:courseId/module/:moduleNo", middleware, roleAuthMiddleware("Teacher"))
moduleRouter.delete("/course/:courseId/module/:moduleNo", middleware, roleAuthMiddleware("Teacher"))

export default moduleRouter;

