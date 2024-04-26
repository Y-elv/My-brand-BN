import express, { Router, Request, Response, NextFunction } from "express";
import {
  createCommentController,
  deleteCommentsForBlogController,
  getAllCommentsController,
  getAllCommentsForBlogController,
} from "../modules/comments/controller/commentsController";
import verifyToken from "../middlewares/verifyToken";

const commentRouter = express.Router();

commentRouter.post("/createComment/:id", createCommentController);
commentRouter.get("/getComment/:id", getAllCommentsForBlogController);
commentRouter.delete(
  "/deleteComment/:id",
  verifyToken,
  deleteCommentsForBlogController
);
commentRouter.get("/getAllComment", verifyToken, getAllCommentsController);
export default commentRouter;
