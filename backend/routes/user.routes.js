import { Router } from "express";
import { login, signup } from "../controller/user.controller.js";
import { getNewAccessToken, verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.route("/login").post(login);

router.route("/signup").post(signup);
router.route("/verifyToken").get(verifyToken);
router.route("/getNewAccessToken").get(getNewAccessToken);

export default router;
