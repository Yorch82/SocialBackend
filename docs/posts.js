module.exports = {
  '/posts': {
    post: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Create new post',
      description: 'Create new post',
      operationId: 'createPost',
      parameters: [],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: { $ref: '#/components/schemas/createPost' },
          },
        },
      },
      responses: {
        201: { description: 'Post created' },
        400: { description: 'Bad request' },
        401: { description: 'Unauthorized' },
        500: { description: 'Internal server error' },
      },
    },
  },
  '/posts/getAll': {
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Get all posts',
      description: 'Get all posts, paginated.',
      operationId: 'getAllPosts',
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
  '/posts/getById/{_id}': {
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Get post by Id',
      description: 'Get post by Id',
      operationId: 'getPostById',
      parameters: [
        {
          name: '_id',
          in: 'path',
          description: 'Id of post',
          required: true,
          schema: {
            type: 'string',
            example: '629e138fb6e9749879d0dec1',
          },
        },
      ],
      responses: {
        200: { description: 'Get post' },
        500: { description: 'Internal server error' },
      },
    },
  },
  '/posts/update/{_id}': {
    put: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Update own post',
      description:
        'Authenticated user can update a post if they are the owner.',
      operationId: 'updatePost',
      parameters: [
        {
          name: '_id',
          in: 'path',
          description: 'Id of post',
          required: true,
          schema: {
            type: 'string',
            example: '629e138fb6e9749879d0dec1',
          },
        },
      ],
      requestBody: {
        content: {
          'multipart/form-data': {
            schema: { $ref: '#/components/schemas/createPost' },
          },
        },
      },
      responses: {
        200: { description: 'Post updated' },
        400: { description: 'Bad request' },
        401: { description: 'Unauthorized' },
        500: { description: 'Internal server error' },
      },
    },
  },
  '/posts/delete/{_id}': {
    delete: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Delete own post by Id',
      description:
        'User can delete own posts. Deletion will cascade, deleting all comments and referenced likes in users.',
      operationId: 'deletePost',
      parameters: [
        {
          name: '_id',
          in: 'path',
          description: 'Id of post',
          required: true,
          schema: {
            type: 'string',
            example: '629e138fb6e9749879d0dec1',
          },
        },
      ],
      responses: {
        200: { description: 'Post deleted' },
        400: { description: 'Bad request' },
        401: { description: 'Unauthorized' },
        500: { description: 'Internal server error' },
      },
    },
  },
  '/posts/getByName/{title}': {
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Search a post by text',
      description: 'Search a post by text, case insensitive',
      operationId: 'searchPostByText',
      parameters: [
        {
          name: 'title',
          in: 'path',
          description: 'Text to search for',
          required: true,
          schema: {
            type: 'string',
          },
        },
      ],
      responses: {
        200: { description: 'Posts found' },
        400: { description: 'Bad request' },
        500: { description: 'Internal server error' },
      },
    },
  },
  '/posts/{_id}/like': {
    patch: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Like/dislike a post',
      description: 'Authenticated user can like a post by id',
      operationId: 'likePost',
      parameters: [
        {
          name: '_id',
          in: 'path',
          description: 'Id of post',
          required: true,
          schema: {
            type: 'string',
            example: '629e138fb6e9749879d0dec1',
          },
        },
      ],
      responses: {
        200: { description: 'Post liked' },
        400: { description: 'Bad request' },
        401: { description: 'Unauthorized' },
        500: { description: 'Internal server error' },
      },
    },
  },
  '/posts/getByUserId/{_userId}': {
    get: {
      security: [{ ApiKeyAuth: [] }],
      tags: ['Posts'],
      summary: 'Get post by User',
      description: 'Get post by User',
      operationId: 'getUserPosts',
      parameters: [
        {
          name: '_userId',
          in: 'path',
          description: 'Id of user',
          required: true,
          schema: {
            type: 'string',
            example: '629e138fb6e9749879d0dec1',
          },
        },
      ],
      responses: {
        200: { description: 'Get posts' },
        500: { description: 'Internal server error' },
      },
    },
  },
};
