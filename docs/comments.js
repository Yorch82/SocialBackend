module.exports = {
    "/comments": {
      post: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Comments"],
        summary: "Create new comment",
        description: "Create new comment to a post",
        operationId: "createComment",
        parameters: [],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: { $ref: "#/components/schemas/createComment" },
            },
          },
        },
        responses: {
          201: { description: "Comment created" },
          400: { description: "Bad request" },
          401: { description: "Unauthorized" },
          500: { description: "Internal server error" },
        }
      },
    },
    '/comments/getAll': {
      get: {
        security: [{ ApiKeyAuth: [] }],
        tags: ['Comments'],
        summary: 'Get all comments',
        description: 'Get all comments, paginated.',
        operationId: 'getAllComments',
        parameters: [
          {
            name: 'page',
            in: 'query',
            description: 'Page number',
            required: false,
            schema: { type: 'integer' },
          },
          {
            name: 'limit',
            in: 'query',
            description: 'Number of results per page',
            required: false,
            schema: { type: 'integer' },
          },
        ],
        responses: {
          200: { description: 'Get posts' },
          500: { description: 'Internal server error' },
        },
      },
    },
    "/comments/update/{_id}": {
      put: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Comments"],
        summary: "Update own comment",
        description: "Authenticated user can update a comment if they are the owner.",
        operationId: "updateComment",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of comment",
            required: true,
            schema: {
              type: "string",
              example: "629e138fb6e9749879d0dedd"
            }
          },
        ],
        requestBody: {
          content: {
            "multipart/form-data": {
              schema: { $ref: "#/components/schemas/createComment" },
            },
          },
        },
        responses: {
          200: { description: "Comment updated" },
          400: { description: "Bad request" },
          401: { description: "Unauthorized" },
          500: { description: "Internal server error" },
        },
      },      
    },
    "/comments/delete/{_id}": {
      delete: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Comments"],
        summary: "Delete own comment by Id",
        description: "User can delete own comments. Deletion will cascade, deleting referenced likes in users.",
        operationId: "deleteComment",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of comment",
            required: true,
            schema: {
              type: "string",
              example: "629e138fb6e9749879d0dec1"
            }
          },
        ],
        responses: {
          200: { description: "Comment deleted" },
          400: { description: "Bad request" },
          401: { description: "Unauthorized" },
          500: { description: "Internal server error" },
        }
      },
    },
    '/comments/{_id}/like': {
      patch: {
        security: [{ ApiKeyAuth: [] }],
        tags: ['Comments'],
        summary: 'Like/Dislike a comment',
        description: 'Authenticated user can like/dislike a comment by id',
        operationId: 'likeComment',
        parameters: [
          {
            name: '_id',
            in: 'path',
            description: 'Id of comment',
            required: true,
            schema: {
              type: 'string',
              example: '629e138fb6e9749879d0dec1',
            },
          },
        ],
        responses: {
          200: { description: 'Comment liked/unliked' },
          400: { description: 'Bad request' },
          401: { description: 'Unauthorized' },
          500: { description: 'Internal server error' },
        },
      },
    },
  };