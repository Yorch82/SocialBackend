const mongoose = require("mongoose");

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const postsIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const commentsIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId()
];

const users = [
  {
    _id: userIds[0],
    name: "test",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    avatar: "p11.jpeg",
    friends: [],
    confirmed: true,
    role: "user",       
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    name: "Steve",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    avatar: "p3.jpeg",
    friends: [],
    confirmed: true,
    role: "user",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    name: "Some",    
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    avatar: "p4.jpeg",
    friends: [],
    confirmed: true,
    role: "user",
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    name: "Whatcha",    
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    avatar: "p6.jpeg",
    friends: [],
    confirmed: true,
    role: "user",
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    name: "Jane",    
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    avatar: "p5.jpeg",
    friends: [],
    confirmed: true,
    role: "user",
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    name: "Harvey",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    avatar: "p7.jpeg",
    friends: [],
    confirmed: true,
    role: "user",
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    name: "Carly",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    avatar: "p8.jpeg",
    friends: [],
    confirmed: true,
    role: "user",
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    name: "Jessica",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    avatar: "p9.jpeg",
    friends: [],
    confirmed: true,
    role: "user",
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
  {
    _id: userIds[8],
    name: "Admin",
    email: "admin@gmail.com",
    password: "$2a$10$bQ2euidoOzW5qBaEZl/iAOVovV8OT3Xr7l/qacFhS0Bzv/n/EoxrC",
    avatar: "admin.jpg",
    friends: [],
    confirmed: true,
    role: "admin",
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

const posts = [
  {
    _id: postsIds[0],
    userId: userIds[1],
    name: "Steve",
    content: "Some really long random description",
    postAvatar: "post1.jpeg",
    userAvatar: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    commentIds: [],
  },
  {
    _id: postsIds[1],
    userId: userIds[3],
    name: "Whatcha",
    content:
      "Another really long random description. This one is longer than the previous one.",
    postAvatar: "post2.jpeg",
    userAvatar: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    commentIds: [],
  },
  {
    _id: postsIds[2],
    userId: userIds[4],
    name: "Jane",
    content:
      "This is the last really long random description. This one is longer than the previous one.",
    postAvatar: "post3.jpeg",
    userAvatar: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    commentIds: [],
  },
  {
    _id: postsIds[3],
    userId: userIds[5],
    name: "Harvey",
    content:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    postAvatar: "post4.jpeg",
    userAvatar: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    commentIds: [],
  },
  {
    _id: postsIds[4],
    userId: userIds[6],
    name: "Carly",
    content:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    postAvatar: "post5.jpeg",
    userAvatar: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    commentIds: [],
  },
  {
    _id: postsIds[5],
    userId: userIds[7],
    name: "Jessica",
    content:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    postAvatar: "post6.jpeg",
    userAvatar: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    commentIds: commentsIds[0],
  },
];

const comments = [
  {
    _id: commentsIds[0],
    name: "test",
    userAvatar: "p11.jpeg",
    content: "I don't like this post :(",
    commentAvatar: "post7.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    postId: postsIds[5],
    userId: userIds[0]
  },
  {
    _id: commentsIds[1],
    name: "test",
    userAvatar: "p11.jpeg",
    content: "LMAO xD",
    commentAvatar: "post8.jpg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    postId: postsIds[4],
    userId: userIds[0]
  }
];

module.exports = {users, posts, comments};