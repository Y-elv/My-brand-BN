import express, { Router } from "express";
import loginAdmin from "../modules/admin/controller/adminController";

const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin);

export default adminRouter;
