import { model, Schema } from "mongoose";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.SECRET,
    { expiresIn: "10s" }
  );
};
userSchema.methods.generateRefreshToken = function () {
  //less info

  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.SECRET,
    { expiresIn: "1d" }
  );
};
const User = model("User", userSchema);

 export const generateAccessToken = function (id) {
  return jwt.sign(
    {
      id: id,
    },
    process.env.SECRET,
    { expiresIn: "10s" }
  );
};

export default User;
