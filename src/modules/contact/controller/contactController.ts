import { Request, Response } from "express";
import sendEmail from "../repository/contactRepository";
import messageModel from "../../../database/models/message";

const SendMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, message, name } = req.body;
    await messageModel.create({ name, email, message });
    await sendEmail(name, email, message);
    res.status(200).send({ status: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "An error occurred while sending the email.",
    });
  }
};
const getAllMessages = async (req: Request, res: Response): Promise<void> => {
  try {
    const messages = await messageModel.find().sort({ createdAt: -1 });
    res.status(200).send({ status: true, messages });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "An error occurred while fetching messages.",
    });
  }
};
const DeleteMessage = async (req: Request, res: Response): Promise<void> => {
  try {
    const messageId = req.params.id; // Assuming message ID is provided in the URL parameters
    const deletedMessage = await messageModel.findByIdAndDelete(messageId);

    if (!deletedMessage) {
      res.status(404).send({ status: false, message: "Message not found" });
      return;
    }

    res
      .status(200)
      .send({ status: true, message: "Message deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      status: false,
      message: "An error occurred while deleting the message.",
    });
  }
};

export { SendMessage, getAllMessages, DeleteMessage };
