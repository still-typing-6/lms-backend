import express, { type Application, type Request, type Response } from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use("/", authRouter);

app.get('/', (req: Request, res: Response) => {
  res.send("API is running")
})

export default app;
