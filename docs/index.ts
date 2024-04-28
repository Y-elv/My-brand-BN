import os from "os";

import dotenv from "dotenv";

import swaggerDoc from "./swagger.json";
import comment from "./comment";
import admin from "./admin";
import message from "./message";
import blog from "./blog";

const defaults = swaggerDoc.paths;

dotenv.config();

const paths = {
  ...defaults,
  ...admin,
  ...blog,
  ...comment,
  ...message,
};

const config = {
  swagger: "2.0",
  info: {
    version: "1.0.0.",
    title: " My Brand APIs Documentation",
    description: "",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
      name: `${os.hostname()}`,
    },
    {
      url: `https://${process.env.HOST}`,
      name: `${os.hostname()}`,
    },
  ],

  basePath: `/api/${process.env.API_VERSION || "v1"}`,
  schemes: ["http", "https"],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  tags: [
    {
      name: "My Brand APIs Documentation",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths,
};
export default config;
