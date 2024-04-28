import responses from "../response";

const admin = {
  "/login": {
    post: {
      tags: ["Admin"],
      summary: "Admin login",
      description: "",
      parameters: [
        {
          in: "body",
          name: "body",
          schema: {
            example: {
              email: "admin@example.com",
              password: "123",
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

export default admin;
