import express, { Router } from "express";
import {
  registerUser,
  loginUser,
  deleteUser,
} from "../modules/user/controller/userController";
import verifyToken from "../middlewares/verifyToken";
import {
  createBlogController,
  deleteBlogController,
  updateBlogController,
  getAllBlogsController,
  getBlogByIdController,
} from "../modules/blog/controller/blogController";

const userRouter = express.Router();

userRouter.post("/createBlog", verifyToken, createBlogController);
userRouter.delete("/deleteBlog/:id", verifyToken, deleteBlogController);
userRouter.put("/updateBlog/:id", verifyToken, updateBlogController);
userRouter.get("/getBlogById/:id", verifyToken, getBlogByIdController);
userRouter.get("/getAllBlogs", verifyToken, getAllBlogsController);

export default userRouter;
