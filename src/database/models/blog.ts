import mongoose, { Document } from "mongoose";

interface Blog extends Document {
  name: string;
  description: string;
  pic: String;
  timestamp: Date;
}

const blogSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 200,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model<Blog>("Blog", blogSchema);

export default blogModel;
export { Blog };
