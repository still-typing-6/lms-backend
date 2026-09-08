import "dotenv/config";
import express, { type Application, type Request, type Response } from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import courseRouter from "./routes/course.routes.js";
import moduleRouter from "./routes/module.routes.js";
import lessonRouter from "./routes/lesson.router.js";
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use("/", authRouter);
app.use("/", courseRouter);
app.use("/", moduleRouter);
app.use("/", lessonRouter);

app.get('/', (req: Request, res: Response) => {
  res.send("API is running")
})

export default app;
