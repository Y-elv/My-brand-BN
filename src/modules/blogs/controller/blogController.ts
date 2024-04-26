import { Request, Response } from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from "../repository/blogRepository";
import uploadImage from "../../../utils/claudinary";

const createBlogController = async (req: Request, res: Response) => {
  try {
    const { name, description, pic } = req.body;
    const imageLink = await uploadImage(pic);
    if (!imageLink) {
      return res.status(500).json({
        status: false,
        message: "Failed to upload image to Cloudinary",
      });
    }

    const newBlog = await createBlog({ name, description, pic: imageLink });
    res.json({ status: true, message: newBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to create blog" });
  }
};

const getAllBlogsController = async (req: Request, res: Response) => {
  try {
    const blogs = await getAllBlogs();
    res.json({ status: true, message: blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to get blogs" });
  }
};

const getBlogByIdController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const blog = await getBlogById(id);
    if (!blog) {
      res.json({ status: false, message: "Blog not found" });
      return;
    }
    res.json({ status: true, message: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to get blog" });
  }
};

const updateBlogByIdController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const { name, description, pic } = req.body;
    const updatedBlog = await updateBlogById(id, { name, description, pic });
    if (!updatedBlog) {
      res.json({ status: false, message: "Blog not found" });
      return;
    }
    res.json({ status: true, message: updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to update blog" });
  }
};

const deleteBlogByIdController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const deletedBlog = await deleteBlogById(id);
    if (!deletedBlog) {
      res.json({ status: false, message: "Blog not found" });
      return;
    }
    res.json({ status: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Failed to delete blog" });
  }
};

export {
  createBlogController,
  getAllBlogsController,
  getBlogByIdController,
  updateBlogByIdController,
  deleteBlogByIdController,
};
