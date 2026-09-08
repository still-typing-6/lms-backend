import { Router } from "express";
import { middleware } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validation.middleware.js";
import { lessonSchema, lessonUpdateSchema } from "../validations/lesson.validation.js";
import { roleAuthMiddleware } from "../middlewares/roll.middleware.js";
import { courseOwnerMiddleware } from "../middlewares/courseOwner.middleware.js";
import { createLessonController, deleteLessonController, updateLessonController } from "../controllers/lesson.controller.js";

const lessonRouter = Router();

lessonRouter.post(
  "/create/course/:courseId/module/:moduleNo/lesson/:lessonNo",
  middleware,
  roleAuthMiddleware("Teacher"),
  validate(lessonSchema),
  courseOwnerMiddleware,
  createLessonController
);
lessonRouter.patch("/course/:courseId/module/:moduleNo/lesson/:lessonNo",
  middleware,
  roleAuthMiddleware("Teacher"),
  validate(lessonUpdateSchema),
  courseOwnerMiddleware,
  updateLessonController
)
lessonRouter.delete("/course/:courseId/module/:moduleNo/lesson/:lessonNo",
  middleware,
  roleAuthMiddleware("Teacher"),
  validate(lessonUpdateSchema),
  courseOwnerMiddleware,
  deleteLessonController
)

export default lessonRouter;
