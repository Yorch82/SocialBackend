const Post = require('../models/Post');
const User = require('../models/User');
const Comment = require('../models/Comment');

const PostController = {
  async create(req, res, next) {
    try {
      if (req.file) req.body.postAvatar = req.file.filename;
      const { userId, content, postAvatar } = req.body;
      const user = await User.findById(req.user._id);
      const newPost = new Post({
        userId,
        name: user.name,       
        content,
        userAvatar: user.avatar,
        postAvatar,
        likes: {},
        comments: [],
      });
      await newPost.save();
  
      const post = await Post.find();
      res.status(201).json(post.reverse());
    } catch (error) {
      error.origin = 'Post';
      next(error);
    }
  },
  async delete(req, res) {
    try {
      const post = await Post.findById(req.params._id);
      await Promise.all(
        post.commentIds.map((id) => Comment.findByIdAndDelete(id.toString()))
      );
      await Post.findByIdAndDelete(req.params._id);      
      const posts = await Post.find();
      res.status(201).json( posts );
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
      const posts = await Post.find()
      .populate("commentIds");
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
      res.status(201).json({ post });
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
  async getUserPosts(req,res){
    try {
      const { userId } = req.params;
      const post = await Post.find({ userId });
      res.status(200).json(post);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },
};

module.exports = PostController;
