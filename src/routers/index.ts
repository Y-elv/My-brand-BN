import express from "express";
import contactRoutes from "./contactRouter";
import adminRoutes from "./adminRouter";
import blogRouter from "./blogRouter";
import commentRouter from "./commentRouter";

const router = express.Router();

router.use("/api/v1", contactRoutes);
router.use("/api/v1", adminRoutes);
router.use("/api/v1/blog", blogRouter);
router.use("/api/v1/comment", commentRouter);

export default router;
