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
  "/blog/getAllBlog": {
    get: {
      tags: ["Blogs"],
      summary: "Get all Blogs ",
      description: "Get all Blogs ",

      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
    },
  },
  "/blog/deleteBlog/{blogId}": {
    delete: {
      tags: ["Blogs"],
      summary: "Delete Blog ",
      description: "Delete Blog ",
      parameters: [
        {
          in: "path",
          name: "blogId",
          required: true,
          schema: {
            type: "string",
          },
          description: "The ID of the Blog to be deleted",
        },
      ],

      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
  "/blog/updateBlog/{blogId}": {
    patch: {
      tags: ["Blogs"],
      summary: "Update Blog",
      description: "Update Blog ",
      parameters: [
        {
          in: "path",
          name: "blogId",
          required: true,
          schema: {
            type: "string",
          },
          description: "The ID of the Comment to be retrieved ",
        },
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
