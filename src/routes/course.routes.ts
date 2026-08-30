import { Router } from "express";
import { middleware } from "../middlewares/auth.middleware.js";
import { roleAuthMiddleware } from "../middlewares/roll.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { courseSchema, updateCourseSchema } from "../validations/course.validation.js";
import { createCourseController, updateCourseController } from "../controllers/course.controller.js";
import { courseOwnerMiddleware } from "../middlewares/courseOwner.middleware.js";

const courseRouter = Router();

courseRouter.post("/create/course", middleware, roleAuthMiddleware("Teacher"), validate(courseSchema), createCourseController);
courseRouter.patch("/course/:courseId", middleware, roleAuthMiddleware("Teacher"), validate(updateCourseSchema), courseOwnerMiddleware, updateCourseController);
courseRouter.delete("/course/:")
