import jwt from "jsonwebtoken";
const createToken = (_id: string, email: String): string => {
  const jwtkey: string = process.env.JWT_SECRET_KEY || "";
  const token = jwt.sign({ _id, email }, jwtkey);
  return `Bearer ${token}`;
};
export default createToken;
