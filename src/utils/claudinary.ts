import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const opts = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const uploadImage = (image: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, (error: any, result: any) => {
      if (result && result.secure_url) {
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({ message: error.message });
    });
  });
};

export default uploadImage;
