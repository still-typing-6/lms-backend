import { Router } from "express";
import { middleware } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { lessonSchema } from "../validations/lesson.validation.js";
import { roleAuthMiddleware } from "../middlewares/roll.middleware.js";
import { courseOwnerMiddleware } from "../middlewares/courseOwner.middleware.js";
import { createLessonController } from "../controllers/lesson.controller.js";

const lessonRouter = Router();

lessonRouter.post(
  "/create/course/:courseId/module/:moduleNo/lesson/:lessonNo",
  middleware,
  roleAuthMiddleware("Teacher"),
  validate(lessonSchema),
  courseOwnerMiddleware,
  createLessonController
);

export default lessonRouter;
