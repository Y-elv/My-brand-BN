import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import findUserByEmail from "../repository/adminRepository";
import { encryptPassword, comparePassword } from "../../../utils/password";
import createToken from "../../../utils/createToken";
import adminModel from "../../../database/models/admin";

const loginAdmin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.status(401).json({ status: false, message: "Admin not found" });
  }

  const passwordMatches = await comparePassword(password, user.password);

  if (!passwordMatches) {
    return res
      .status(401)
      .json({ status: false, message: "Invalid Credentials" });
  }

  const token = createToken(user._id, user.email);

  res.json({ status: true, message: { token } });
};
export default loginAdmin;
