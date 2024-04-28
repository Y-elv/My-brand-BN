import express from "express";
import contactRoutes from "./contactRouter";
import adminRoutes from "./adminRouter";
import blogRouter from "./blogRouter";
import commentRouter from "./commentRouter";
import swaggerOptions from "../../docs";
import swaggerUi from "swagger-ui-express";

const url = `api/${process.env.APP_VERSION || "v1"}`;

const router = express.Router();

router.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerOptions));

router.use(`/${url}/api/v1/blog`, blogRouter);
router.use(`/${url}/api/v1"`, adminRoutes);
router.use(`/${url}/api/v1`, contactRoutes);
router.use(`/${url}/api/v1/comment`, commentRouter);

router.all(`/`, (req, res) => {
  res.send("welcome to Medestudo Apis");
});

router.use("/api/v1", contactRoutes);
router.use("/api/v1", adminRoutes);
router.use("/api/v1/blog", blogRouter);
router.use("/api/v1/comment", commentRouter);

export default router;
