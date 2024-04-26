import mongoose, { Document } from "mongoose";

interface Message extends Document {
  email: string;
  name: string;
  message: String;
  timestamp: Date;
}

const messageSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1024,
    },
    message: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1024,
    },
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.model<Message>("Message", messageSchema);

export default messageModel;
export { Message };
