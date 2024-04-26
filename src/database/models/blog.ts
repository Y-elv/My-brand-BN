import mongoose, { Document, Schema } from "mongoose";

interface Blog extends Document {
  name: string;
  description: string;

  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

const blogSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const blogModel = mongoose.model<Blog>("Blog", blogSchema);

export default blogModel;
export { Blog };
