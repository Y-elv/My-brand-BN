import responses from "../response";

const comment = {
  "/comment/createComment/{blogId}": {
    post: {
      tags: ["Comment"],
      summary: "Comment A Blog ",
      description: "Comment A Blog",
      parameters: [
        {
          in: "path",
          name: "blogId",
          required: true,
          schema: {
            type: "string",
          },
          description: "The ID of A Blog to comment ",
        },
        {
          in: "body",
          name: "body",
          schema: {
            example: {
              name: "Keza",
              text: "I have liked your blog ",
            },
          },
          required: true,
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
  "/comment/getAllComment": {
    get: {
      tags: ["Comment"],
      summary: "Get all Comments ",
      description: "Get all Comments ",

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
  "/comment/deleteComment/{commentId}": {
    delete: {
      tags: ["Comment"],
      summary: "Delete Comment ",
      description: "Delete Comment ",
      parameters: [
        {
          in: "path",
          name: "commentId",
          required: true,
          schema: {
            type: "string",
          },
          description: "The ID of the Comment to be deleted",
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
  "/comment/getComment/{blogId}": {
    get: {
      tags: ["Comment"],
      summary: "Get Comment By Id",
      description: "Get Comment By Id ",
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
};
export default comment;
