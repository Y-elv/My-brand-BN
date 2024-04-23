import express, { Router } from "express";
import SendMessage from "../modules/contact/controller/contactController";

const userRouter = express.Router();

userRouter.post("/contact", SendMessage);

export default userRouter;
