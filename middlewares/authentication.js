const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const authentication = async(req, res, next) => {   
    try {
        let token = req.header("Authorization");
    
        if (!token) {
          return res.status(403).send("Access Denied");
        }
    
        if (token.startsWith("Bearer ")) {
          token = token.slice(7, token.length).trimLeft();
        }
    
        const verified = jwt.verify(token, JWT_SECRET);
        req.user = verified;
        next();
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
}

const isAdmin = async(req, res, next) => {
    const admins = "admin";    
    if (admins != req.user.role) {    
        return res.status(403).send({message: 'You do not have permission'});    
    }    
    next();    
}

const isAuthor = async(req, res, next) => {
    try {
        const post = await Post.findById(req.params._id);
        if (post.userId.toString() !== req.user._id.toString()) {
            return res.status(403).send({message: 'Este post no es tuyo'});
        }
        next();
    } catch (error){
        return res.status(500).send({ error, message: 'Ha habido algún problema al comprobar la autoría del post'});
    }
}
const isAuthorComment = async(req, res, next) => {
    try {    
        const comment = await Comment.findById(req.params._id);    
        if (comment.userId.toString() !== req.user._id.toString()) {    
            return res.status(403).send({ message: 'Este comentario no es tuyo' });    
    }    
    next();    
    } catch (error) {           
        return res.status(500).send({ error, message: 'Ha habido un problema al comprobar la autoría del comentario'});    
    }

}

module.exports = { authentication, isAdmin, isAuthor, isAuthorComment }