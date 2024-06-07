import jwt from "jsonwebtoken";
import User, { generateAccessToken } from "../model/user.model.js";
import { login } from "../controller/user.controller.js";
const verifyToken = async (req, res, next) => {
  try {
    const token = req?.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "access token is required" });
    }

    const verifyToken = jwt.verify(token, process.env.SECRET);

    req.user = verifyToken;

    res.status(200).json({ message: "success" });
  } catch (error) {
    //   next(error);
    res.status(403).json({ message: "invalid token !" });
  }
};



const getNewAccessToken = async (req, res, next) => {
  try {
    const  refreshToken = req.cookies.refreshToken;

    // console.log(req.cookies.refreshToken);

    if (!refreshToken) {
      res.status(401).json({ message: "no refeesh token found" });
    }

    const token = jwt.verify(refreshToken, process.env.SECRET);
    /* 
    const user = await User.findById(token.id);

    if (!user) {
      res.status(404).json({ message: "no user found !!" });
    }
 */
    // const accessToken = user.getNewAccessToken();

    const accessToken = generateAccessToken(token.id);

    return res.json({ token: accessToken });
  } catch (error) {
    // next(error);

    console.log({ error });
  }
};

export { verifyToken, getNewAccessToken };
