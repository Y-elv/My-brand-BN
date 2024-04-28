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
};
export default comment;
