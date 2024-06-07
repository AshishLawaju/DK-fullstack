import User from "../model/user.model.js";
import bycrypt from "bcrypt";
import jwt from "jsonwebtoken";
const signup = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(500)
        .json({ status: false, message: "all field required" });
    }
    const hashPassowrd = await bycrypt.hash(password, 10);
    const signup = await User.create({
      username,
      password: hashPassowrd,
    });

    if (!signup) {
      return res
        .status(500)
        .json({ status: false, message: "failed to create user" });
    }
    return res
      .status(200)
      .json({ status: true, message: "user create success" });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(500)
        .json({ status: false, message: "all field required" });
    }
    const checkusername = await User.findOne({
      username,
    });

    if (!checkusername) {
      return res
        .status(400)
        .json({ status: false, message: "username not found" });
    }
    const match = await bycrypt.compare(password, checkusername.password);
    console.log({ match });
    if (!match) {
      return res
        .status(400)
        .json({ status: false, message: "Invalid user crenditials" });
    }

    /*  const token = jwt.sign(
      {
        id: checkusername._id,
      },
      process.env.SECRET,
      {
        expiresIn: "2d",
      }
    ); */

    const accessToken = checkusername.generateAccessToken();
    const refreshToken = checkusername.generateRefreshToken(); //

    res.cookie("refreshToken", refreshToken, {
      maxAge: 60 * 60 * 24 * 365, //same as refresh token ko tim ein  jwt
      httpOnly: true,
      // secure: process.env.NODE_ENV == "development" ? false : true,
      secure: process.env.NODE_ENV == "development" ? true : true,
      sameSite: process.env.SAME_SITE == true ? "lax" : "none",
      path: "/",
    });
    return res
      .status(200)
      .json({ status: true, message: "login success", token: accessToken });
  } catch (error) {
    if (error.type == "TypeError") {
      return res.status(500).json({ status: false, message: "username error" });
    }
    next(error);
  }
};

export { login, signup };
