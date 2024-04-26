import express, { Router } from "express";
import {
  DeleteMessage,
  SendMessage,
  getAllMessages,
} from "../modules/contact/controller/contactController";
import verifyToken from "../middlewares/verifyToken";

const userRouter = express.Router();

userRouter.post("/contact", SendMessage);
userRouter.get("/getAll", verifyToken, getAllMessages);
userRouter.delete("/delete/:id", verifyToken, DeleteMessage);

export default userRouter;
