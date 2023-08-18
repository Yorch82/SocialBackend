const Post = require('../models/Post');
const User = require('../models/User');
const fs = require('fs');

const PostController = {
  async create(req, res, next) {
    try {
      if (req.file) req.body.postAvatar = req.file.filename;
      else {
        req.body.postAvatar = 'user.jpg';
      }
      const { userId, content, postAvatar } = req.body;
      const user = await User.findById(req.user._id);
      const newPost = new Post({
        userId,
        name: user.name,       
        content,
        userAvatar: user.avatar,
        postAvatar,
        likes: {},
        //comments: [],
      });
      await newPost.save();
  
      const post = await Post.find();
      res.status(201).json(post);
    } catch (error) {
      error.origin = 'Post';
      next(error);
    }
  },
  async delete(req, res) {
    try {
      const post = await Post.findByIdAndDelete(req.params._id);
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { postIds: post._id },
      });
      res.status(201).send({ message: 'Post borrado con éxito', post });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Ha habido un problema al borrar el post' });
    }
  },
  async update(req, res) {
    try {
      const post = await Post.findByIdAndUpdate(
        req.params._id,
        { ...req.body },
        { new: true }
      );
      res.status(201).send({ message: 'Post actualizado con éxito', post });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Ha habido un problema al actualizar el post' });
    }
  },
  async getAll(req, res) {
    try {
      const posts = await Post.find();
      //.populate("commentIds")
      //.populate("userId");
      res.status(200).json(posts.reverse());
    } catch (error) {
      res
        .status(404)
        .json({ message: error.message });
    }
  },
  async getById(req, res) {
    try {
      const post = await Post.findById(req.params._id)
        .populate('commentIds')
        .populate('userId');
      res.status(201).send({ message: 'Post recuperado con éxito', post });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Ha habido un problema al buscar el post por ID' });
    }
  },
  async getByName(req, res) {
    try {
      const title = new RegExp(req.params.title, 'i');
      const post = await Post.findOne({ title });
      res.status(201).send({ message: 'Post recuperado con éxito', post });
    } catch (error) {
      res
        .status(500)
        .send({
          message: 'Ha habido un problema al buscar el post por nombre',
        });
    }
  },
  async likePost(req,res){
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const post = await Post.findById(id);
      const isLiked = post.likes.get(userId);
  
      if (isLiked) {
        post.likes.delete(userId);
      } else {
        post.likes.set(userId, true);
      }
  
      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { likes: post.likes },
        { new: true }
      );
  
      res.status(200).json(updatedPost);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },
};

module.exports = PostController;
