import responses from "../response";

const message = {
  "/contact": {
    post: {
      tags: ["Message"],
      summary: "Contact Me",
      description: "",
      parameters: [
        {
          in: "body",
          name: "body",
          schema: {
            example: {
              name: "name",
              email: "admin@example.com",
              message: "123",
            },
          },
          required: true,
        },
      ],
      consumes: ["application/json"],
      produces: ["application/json"],
      responses,
    },
  },
  "/getAll": {
    get: {
      tags: ["Message"],
      summary: "Get all Mesaages ",
      description: "Get all Mesaages ",

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
  "/delete/{messageId}": {
    delete: {
      tags: ["Message"],
      summary: "Delete Message ",
      description: "Delete Message ",
      parameters: [
        {
          in: "path",
          name: "messageId",
          required: true,
          schema: {
            type: "string",
          },
          description: "The ID of the Message to be deleted",
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

export default message;
