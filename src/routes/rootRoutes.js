import express from "express";
import foodRouter from "./foodRoutes.js";
import userRouter from "./userRoutes.js";

const rootRouter = express();

rootRouter.use("/foods", foodRouter);
rootRouter.use("/user", userRouter);

export default rootRouter;
