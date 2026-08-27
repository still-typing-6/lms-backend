import { Router } from "express";

export const teacherRoute = Router();

teacherRoute.get("/api/teacher/me");
teacherRoute.patch("/api/teacher/me")
