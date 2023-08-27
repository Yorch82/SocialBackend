module.exports = {
  components: {
    securitySchemes: {
      ApiKeyAuth: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    schemas: {
      UserRegister: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true,
          },
          password: {
            type: 'string',
            description: 'User password',
            example: '123456',
            format: 'password',
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true,
          },
          avatar: {
            type: 'file',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
        },
      },
      getAllUsers: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'user identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          name: {
            type: 'string',
            description: "user's name",
            example: 'John Doe',
          },
          email: {
            type: 'string',
            description: 'The email of the user',
            example: 'john@gmail.com',
          },
          avatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          confirmed: {
            type: 'boolean',
            description: 'User have confirmed email',
            example: true,
          },
          role: {
            type: 'string',
            description: 'User rol',
            example: 'user',
          },
          friends: {
            type: 'array',
            description: 'User friend list',
            example: [
              '64e1f2808be838d86d85cf8b',
              '64e1f2808be838d86d85cf8a',
              '64e1f2808be838d86d85cf89',
              '64e1f2808be838d86d85cf87',
              '64e1f2808be838d86d85cf8d',
              '64e1f2808be838d86d85cf8c',
            ],
          },
        },
      },
      userLogin: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'Email del usuario',
            example: 'test@gmail.com',
            required: true,
          },
          password: {
            type: 'string',
            description: 'Contraseña del usuario',
            example: '123456',
            required: true,
          },
        },
      },
      deleteUser: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'User identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true,
          },          
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true,
          },
          avatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          confirmed: {
            type: 'boolean',
            description: 'User have confirmed email',
            example: true,
          },
          role: {
            type: 'string',
            description: 'User rol',
            example: 'user',
          },
          friends: {
            type: 'array',
            description: 'User friend list',
            example: [
              '64e1f2808be838d86d85cf8b',
              '64e1f2808be838d86d85cf8a',
              '64e1f2808be838d86d85cf89',
              '64e1f2808be838d86d85cf87',
              '64e1f2808be838d86d85cf8d',
              '64e1f2808be838d86d85cf8c',
            ],
          },
        },
      },
      getUserById: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'User identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true,
          },          
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true,
          },
          avatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          confirmed: {
            type: 'boolean',
            description: 'User have confirmed email',
            example: true,
          },
          role: {
            type: 'string',
            description: 'User rol',
            example: 'user',
          },
          friends: {
            type: 'array',
            description: 'User friend list',
            example: [
              '64e1f2808be838d86d85cf8b',
              '64e1f2808be838d86d85cf8a',
              '64e1f2808be838d86d85cf89',
              '64e1f2808be838d86d85cf87',
              '64e1f2808be838d86d85cf8d',
              '64e1f2808be838d86d85cf8c',
            ],
          },
        },
      },
      getfriends: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'User identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true,
          },
          avatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },             
        },
      },
      getInfo: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'User identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true,
          },
          avatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          email: {
            type: 'string',
            description: 'User Email',
            example: 'yorch@gmail.com',
            required: true,
            unique: true,
          },
          avatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          confirmed: {
            type: 'boolean',
            description: 'User have confirmed email',
            example: true,
          },
          role: {
            type: 'string',
            description: 'User rol',
            example: 'user',
          },
          friends: {
            type: 'array',
            description: 'User friend list',
            example: [
              '64e1f2808be838d86d85cf8b',
              '64e1f2808be838d86d85cf8a',
              '64e1f2808be838d86d85cf89',
              '64e1f2808be838d86d85cf87',
              '64e1f2808be838d86d85cf8d',
              '64e1f2808be838d86d85cf8c',
            ],
          },          
        },
      },
      addRemoveFriend: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'User identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yorch',
            required: true,
          },
          avatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },             
        },
      },
      createPost: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'file',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
        },
      },
      getAllPosts: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'Post identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'string',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the post',
            example: '64e48a7e027187192cef3c9e: true',
          },
          commentIds: {
            type: 'array',
            description: 'Comment Ids of the post',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      getPostById: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'Post identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'string',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the post',
            example: '64e48a7e027187192cef3c9e: true',
          },
          commentIds: {
            type: 'array',
            description: 'Comment Ids of the post',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      updatePost: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'Post identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'string',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the post',
            example: '64e48a7e027187192cef3c9e: true',
          },
          commentIds: {
            type: 'array',
            description: 'Comment Ids of the post',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      deletePost: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'Post identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'string',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the post',
            example: '64e48a7e027187192cef3c9e: true',
          },
          commentIds: {
            type: 'array',
            description: 'Comment Ids of the post',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      searchPostByText: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'Post identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'string',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the post',
            example: '64e48a7e027187192cef3c9e: true',
          },
          commentIds: {
            type: 'array',
            description: 'Comment Ids of the post',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      likePost: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'Post identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'string',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the post',
            example: '64e48a7e027187192cef3c9e: true',
          },
          commentIds: {
            type: 'array',
            description: 'Comment Ids of the post',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      getUserPosts: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'Post content',
            example: 'Some text here...',
          },
          postAvatar: {
            type: 'string',
            description: 'Post avatar',
            example: '1692442377403.jpg',
          },
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the post',
            example: '64e48a7e027187192cef3c9e: true',
          },
          commentIds: {
            type: 'array',
            description: 'Comment Ids of the post',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      createComment: {
        type: 'object',
        properties: {
          content: {
            type: 'string',
            description: 'Comment content',
            example: 'Some text here...',
          },
          commentAvatar: {
            type: 'file',
            description: 'Comment avatar',
            example: '1692442377403.jpg',
          },
        },
      },
      getAllComments: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'comment identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Comment content',
            example: 'Some text here...',
          },          
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          commentAvatar: {
            type: 'string',
            description: 'Comment avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the comment',
            example: '64e48a7e027187192cef3c9e: true',
          },
          userId: {
            type: 'array',
            description: 'user Ids of the comment',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      updateComment: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'comment identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Comment content',
            example: 'Some text here...',
          },          
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          commentAvatar: {
            type: 'string',
            description: 'Comment avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the comment',
            example: '64e48a7e027187192cef3c9e: true',
          },
          userId: {
            type: 'array',
            description: 'user Ids of the comment',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      deleteComment: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'comment identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Comment content',
            example: 'Some text here...',
          },          
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          commentAvatar: {
            type: 'string',
            description: 'Comment avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the comment',
            example: '64e48a7e027187192cef3c9e: true',
          },
          userId: {
            type: 'array',
            description: 'user Ids of the comment',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
      likeComment: {
        type: 'object',
        properties: {
          _id: {
            type: 'objectId',
            description: 'comment identification number',
            example: '6201064b0028de7866e2b2c4',
          },
          content: {
            type: 'string',
            description: 'Comment content',
            example: 'Some text here...',
          },          
          userAvatar: {
            type: 'string',
            description: 'User avatar',
            example: '1692442377403.jpg',
          },
          commentAvatar: {
            type: 'string',
            description: 'Comment avatar',
            example: '1692442377403.jpg',
          },
          name: {
            type: 'string',
            description: 'User name',
            example: 'Yprch',
          },
          likes: {
            type: 'object',
            description: 'Likes of the comment',
            example: '64e48a7e027187192cef3c9e: true',
          },
          userId: {
            type: 'array',
            description: 'user Ids of the comment',
            example: ['64e48a7e027187192cef3cad'],
          },
        },
      },
    },
  },
};
