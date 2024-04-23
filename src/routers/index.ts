import express from "express";
import contactRoutes from "./contactRouter";


const router = express.Router();

router.use("/api/v1", contactRoutes);


export default router;
