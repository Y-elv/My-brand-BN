import adminModel, { Admin } from "../../../database/models/admin";


const findUserByEmail = async (email: string) => {
  return await adminModel.findOne({ email });
};

export default findUserByEmail
