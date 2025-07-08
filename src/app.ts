import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/middleware/glabalErrorHander";
import notFoundRoute from "./app/middleware/notFoundRoute";

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to aws media file provider server");
});

// not found route
app.use(notFoundRoute);

// global error handler..
app.use(globalErrorHandler);
export default app;
