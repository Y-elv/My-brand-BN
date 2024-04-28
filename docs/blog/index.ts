import responses from "../response";

const blog = {
  "/blog/createBlog": {
    post: {
      tags: ["Blogs"],
      summary: "Create A Blog",
      description: "Create A Blog",
      parameters: [
          {
          in: "body",
          name: "body",
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "Name of a blog",
              },
              description: {
                type: "string",
                description: "Description of the blog",
              },
            },
            required: ["name", "description"],
          },
          required: true,
        },
        {
          in: "formData",
          name: "image",
          type: "file",
          required: true,
          description: "Image file to upload for the blog",
        },
      
      ],
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
};

export default blog;
