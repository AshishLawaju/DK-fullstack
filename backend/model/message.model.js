import { model, Schema } from "mongoose";

const messageSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    contactnumber: {
      type: String,
      required: true,
    },
    contactmethod: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Message = model("Message",messageSchema)

export default User
