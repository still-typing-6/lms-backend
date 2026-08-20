import { Router } from "express";
import { validate } from "../middlewares/validation.middleware.js";
import { loginSchema, userRegSchema } from "../validations/auth.validations.js";
import { signInUser, userRegistered } from "../controllers/auth.controller.js";

const authRouter = Router();


authRouter.post("/register/user", validate(userRegSchema), userRegistered)
authRouter.post("/signin/user", validate(loginSchema), signInUser);

export default authRouter;
