import Blog from "../../../database/models/blog";

const createBlog = async (body: any) => {
  return await Blog.create(body);
};

const getAllBlogs = async () => {
  return await Blog.find().sort({ createdAt: -1 });
};

const getBlogById = async (id: string) => {
  return await Blog.findById(id);
};

const updateBlogById = async (id: string, data: any) => {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

const deleteBlogById = async (id: string) => {
  return await Blog.findByIdAndDelete(id);
};

export { createBlog, getAllBlogs, getBlogById, updateBlogById, deleteBlogById };
