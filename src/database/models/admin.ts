import mongoose, { Document } from "mongoose";

interface Admin extends Document {
  password: string;
  email: String;
  timestamp: Date;
}

const blogSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const adminModel = mongoose.model<Admin>("users", blogSchema);

export default adminModel;
export { Admin };
