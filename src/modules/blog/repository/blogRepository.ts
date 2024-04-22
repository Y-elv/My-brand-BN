import BlogModel from "../../../database/models/blogModel";

const createBlog = async (body: any) => {
  return await BlogModel.create(body);
};

const deleteBlogById = async (id: string) => {
  return await BlogModel.findByIdAndDelete(id);
};

const updateBlogById = async (id: string, updateData: any) => {
  return await BlogModel.findByIdAndUpdate(id, updateData, { new: true });
};

const getAllBlogs = async () => {
  return await BlogModel.find();
};

const getBlogById = async (id: string) => {
  return await BlogModel.findById(id);
};

export { createBlog, deleteBlogById, updateBlogById, getAllBlogs, getBlogById };
