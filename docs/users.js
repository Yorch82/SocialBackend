module.exports = {
    '/users': {
      post: {
        tags: ["Users"],
        summary: 'Register new user',
        description: 'Register a new user with username, email and password',
        operationId: 'registerUser',
        parameters: [],
        requestBody: {
          content: {
            'multipart/form-data': {
              schema: { $ref: '#/components/schemas/UserRegister' },
            },
          },
        },
        responses: {
          201: { description: 'User successfully registered' },
          400: { description: 'Data required: username, email, password' },
          500: { description: 'Internal server error' },
        },
      },
      get: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Users"],
        summary: 'Get all users data',
        description: 'Get all users data',
        operationId: 'getUserInfo',
        parameters: [],
        responses: {
          200: { description: "All User's data was obtained" },
          500: { description: 'Internal server error' },
        },
      },
    },
    "/users/login": {
      post: {
        tags: ["Users"],
        description: "Connect the user",
        summary: 'User Log In',
        operationId: "loginUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/userLogin",
              },
            },
          },
        },
        responses: {
          201: { description: "User connected successfully" },
          404: { description: "User not found" },
          500: { description: "Server error" },
        },
      },
    },
    "/users/getById/{_id}": {
      get: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Users"],
        summary: "Get user by Id",
        description: "Get user by Id",
        operationId: "getUserById",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of user",
            required: true,
            schema: {
              type: "string",
              example: "629e138fb6e9749879d0dec1"
            }
          }
        ],
        responses: {
          200: { description: "Get user" },
          500: { description: "Internal server error" },
        }
      },
    },
    "/users/getFriends/{_id}": {
      get: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Users"],
        summary: "Get user's friends",
        description: "Get user's friends",
        operationId: "getFriends",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of user",
            required: true,
            schema: {
              type: "string",
              example: "629e138fb6e9749879d0dec1"
            }
          }
        ],
        responses: {
          200: { description: "Get user's friends" },
          500: { description: "Internal server error" },
        }
      },
    },
    "/users/getInfo/{_id}": {
      get: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Users"],
        summary: "Get user's info",
        description: "Get user's info",
        operationId: "getInfo",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of user",
            required: true,
            schema: {
              type: "string",
              example: "629e138fb6e9749879d0dec1"
            }
          }
        ],
        responses: {
          200: { description: "Get user's info" },
          500: { description: "Internal server error" },
        }
      },
    },
    "/users/{_id}/{_friendId}": {
      patch: {
        security: [{ ApiKeyAuth: [] }],
        tags: ["Users"],
        summary: "Set/Remove user's friend",
        description: "Set/Remove user's friend",
        operationId: "addRemoveFriend",
        parameters: [
          {
            name: "_id",
            in: "path",
            description: "Id of user",
            required: true,
            schema: {
              type: "string",
              example: "629e138fb6e9749879d0dec1"
            }
          },
          {
            name: "_friendId",
            in: "path",
            description: "Id of the friend",
            required: true,
            schema: {
              type: "string",
              example: "629e138fb6e9749879d0dec1"
            }
          }
        ],
        responses: {
          200: { description: "Get user's friend" },
          500: { description: "Internal server error" },
        }
      },
    },
  };

