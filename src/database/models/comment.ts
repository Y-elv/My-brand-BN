import mongoose, { Document } from "mongoose";

interface Comments extends Document {
  name: string;
  text: string;
  blogId: mongoose.Types.ObjectId;
  timestamp: Date;
}

const commentSchema = new mongoose.Schema(
  {
    name: {
      type:  String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    blogId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentsModel = mongoose.model<Comments>("Comments", commentSchema);

export default CommentsModel;
export { Comments };
