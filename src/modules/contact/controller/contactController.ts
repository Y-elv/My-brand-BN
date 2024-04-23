import { Request, Response } from "express";
import sendEmail from "../repository/contactRepository";

 const SendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, message, name } = req.body;
    await sendEmail(name, email, message);
    res.status(200).send({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred while sending the email." });
  }
};
export default SendMessage