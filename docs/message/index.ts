import responses from "../response";

const message = {
  "/contact": {
    post: {
      tags: ["Mesaage"],
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
};

export default message;
