import express, { Router, Request, Response, NextFunction } from "express";
import {
  createBlogController,
  getAllBlogsController,
  getBlogByIdController,
  updateBlogByIdController,
  deleteBlogByIdController,
} from "../modules/blogs/controller/blogController";
import verifyToken from "../middlewares/verifyToken";

const blogRouter = express.Router();

blogRouter.post("/createBlog", verifyToken, createBlogController);
blogRouter.get("/getAllBlog", getAllBlogsController);
blogRouter.delete("/deleteBlog/:id", verifyToken, deleteBlogByIdController);
blogRouter.put("/updateBlog/:id", verifyToken, updateBlogByIdController);
blogRouter.get("/getBlog/:id", verifyToken, getBlogByIdController);
export default blogRouter;
