import { Request, Response } from "express";
import {
  createComment,
  getAllCommentsForBlog,
  getAllComments,
  deleteComment,
} from "../repository/commentRepository";

const createCommentController = async (req: Request, res: Response) => {
  try {
    const { name, text } = req.body;
    const blogId = req.params.id;

    // Creating the comment using the repository function
    await createComment({ name, text, blogId });

    res.status(201).json({ message: "Comment created successfully" });
  } catch (err) {
    console.error("Error creating comment:", err);
    res.status(500).json({ error: "Server error" });
  }
};
const getAllCommentsForBlogController = async (req: Request, res: Response) => {
  try {
    const blogId = req.params.id;

    const comments = await getAllCommentsForBlog(blogId);

    res.status(200).json(comments);
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ error: "Server error" });
  }
};
const getAllCommentsController = async (req: Request, res: Response) => {
  try {
    const comments = await getAllComments();

    res.status(200).json(comments);
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ error: "Server error" });
  }
};
const deleteCommentsForBlogController = async (req: Request, res: Response) => {
  try {
    const commentId = req.params.id;

    const comments = await deleteComment(commentId);

    res.status(200).json({ message: "Comment deleted" });
  } catch (err) {
    console.error("Error fetching comments:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export {
  createCommentController,
  getAllCommentsForBlogController,
  deleteCommentsForBlogController,
  getAllCommentsController,
};
