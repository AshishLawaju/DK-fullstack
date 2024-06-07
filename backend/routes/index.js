import { Router } from "express";

import userRouter from "./user.routes.js";

const mainRouter = Router();

mainRouter.use(userRouter);

//use

export default mainRouter;
