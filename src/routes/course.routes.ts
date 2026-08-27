import { Router } from "express";
import { middleware } from "../middlewares/auth.middleware.js";
import { roleAuthMiddleware } from "../middlewares/roll.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { courseSchema } from "../validations/course.validation.js";
import { createCourseController } from "../controllers/course.controller.js";

const courseRouter = Router();

courseRouter.post("/create/course", middleware, roleAuthMiddleware("Teacher"), validate(courseSchema), createCourseController);
