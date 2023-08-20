const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
const { users, posts, comments } = require("../data/index");
const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

const dbConnection = async() => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("Base de datos iniciada con éxito");

        /* ADD DATA ONE TIME */
        //User.insertMany(users);
        //Post.insertMany(posts);
        //Comment.insertMany(comments);
    } catch (error) {
        console.error(error);
        throw new Error("Error al iniciar la base de datos");
    }        
};

module.exports = {
    dbConnection,
};