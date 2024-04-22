import mongoose from "mongoose";

const Schema = mongoose.Schema;


const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },

});


blogSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});


const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
