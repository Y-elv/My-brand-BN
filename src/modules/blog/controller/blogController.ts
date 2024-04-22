import { Request, Response } from "express";
import {
  createBlog,
  deleteBlogById,
  updateBlogById,
  getAllBlogs,
  getBlogById,
} from "../repository/blogRepository";

const createBlogController = async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = await createBlog({ title, content, author });
    return res.status(201).json(newBlog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteBlogController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteBlogById(id);
    return res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateBlogController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, content, author } = req.body;
    const updatedBlog = await updateBlogById(id, {
      title,
      content,
      author,
      updatedAt: new Date(),
    });
    return res.status(200).json(updatedBlog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllBlogsController = async (req: Request, res: Response) => {
  try {
    const blogs = await getAllBlogs();
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getBlogByIdController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const blog = await getBlogById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export {
  createBlogController,
  deleteBlogController,
  updateBlogController,
  getAllBlogsController,
  getBlogByIdController,
};
