import comments from "../../../database/models/comment";


const createComment = async (body: any) => {
  return await comments.create(body);
};
const getAllCommentsForBlog = async (blogId: string) => {
  return await comments.find({ blogId }).sort({ createdAt: -1 });
};
const getAllComments = async () => {
  return await comments.find().sort({ createdAt: -1 });
};
const deleteComment = async (commentId: string) => {
  return await comments.findByIdAndDelete(commentId);
};

export { createComment, getAllCommentsForBlog, deleteComment, getAllComments };
