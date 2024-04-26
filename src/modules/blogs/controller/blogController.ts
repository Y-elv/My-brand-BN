import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import {
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from "../repository/blogRepository";
import blogModel, { Blog } from "../../../database/models/blog";
// import uploadImagesToCloudinary from "../../../utils/claudinary";

const uploadImagesToCloudinary = async (images: any[]): Promise<string[]> => {
  try {
    const uploadPromises = images.map(async (image: any) => {
      try {
        if (image.tempFilePath) {
          const result = await cloudinary.uploader.upload(image.tempFilePath);
          console.log("result", result.secure_url);
          return result.secure_url;
        } else {
          console.error("Image upload error: tempFilePath is missing");
          return null;
        }
      } catch (error) {
        console.error("Image upload error:", error);
        return null;
      }
    });

    const savedImages = await Promise.all(uploadPromises);
    return savedImages as string[];
  } catch (error) {
    console.error("Error uploading images to Cloudinary:", error);
    throw error;
  }
};

const createBlogController = async (req: any, res: Response): Promise<void> => {
  try {
    const { name, description } = req.body;
    const uploadedImages = req.files?.images;
    console.log(req);
    // console.log(uploadedImages);

    if (!name || !description) {
      res
        .status(400)
        .json({ error: "name and description are required fields" });
      return;
    }

    let imageUrls: string[] = [];
    if (uploadedImages && Array.isArray(uploadedImages)) {
      imageUrls = await uploadImagesToCloudinary(uploadedImages);
    } else {
      const uploadedImages: any =
        req.files && req.files.images && req.files.images.tempFilePath
          ? (await cloudinary.uploader.upload(req.files.images.tempFilePath))
              .secure_url
          : undefined;
      imageUrls = [uploadedImages];
    }

    const newPostData: Partial<Blog> = {
      name,
      description,
      images: imageUrls,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const newPost: Blog = new blogModel(newPostData);

    const savedPost: Blog = await newPost.save();
    res.status(201).json({
      status: true,
      savedPost,
    });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
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
