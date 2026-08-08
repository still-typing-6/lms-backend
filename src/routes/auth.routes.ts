import { Router } from "express";
import { validate } from "../middlewares/validation.middleware.js";
import { studentRegSchema } from "../validations/auth.validations.js";
import { studentRegister } from "../controllers/auth.controller.js";

const authRouter = Router();


authRouter.post("/register/user", validate(studentRegSchema), studentRegister)

export default authRouter;
