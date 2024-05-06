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
                description: "Name of the blog",
              },
              description: {
                type: "string",
                description: "Description of the blog",
              },
              image: {
                type: "string",
                description: "URL of the image for the blog post",
              },
            },
            required: ["name", "description"],
          },
          required: true,
        },
      ],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses: {
        // Define your responses here
      },
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
      description: "Update an existing blog post.",
      parameters: [
        {
          in: "path",
          name: "blogId",
          required: true,
          schema: {
            type: "string",
            description: "The ID of the blog post to update.",
          },
        },
        {
          in: "body",
          name: "body",
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "Name of the blog",
              },
              description: {
                type: "string",
                description: "Description of the blog",
              },
              image: {
                type: "string",
                description: "URL of the image for the blog post",
              },
            },
            required: ["name", "description"],
          },
          required: true,
        },
      ],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses: {
        // Define your responses here
      },
      security: [
        {
          JWT: [],
        },
      ],
    },
  },
};

export default blog;
