import cors from "cors";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import "./database/config/database";
import router from "./routers";
import fileUploader from "express-fileupload";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(
  fileUploader({
    limits: { fileSize: 10 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to My Brand App Apis...");
});
app.use("/", router);

let server: any;

server = app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});

export default app;
