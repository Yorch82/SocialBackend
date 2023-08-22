const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');

const CommentController = {
  async create(req, res, next) {
    try {      
      if (req.file) req.body.commentAvatar = req.file.filename;
      const { userId, postId, content, commentAvatar } = req.body;
      const user = await User.findById(req.user._id);      
      const newComment = new Comment({
        userId,
        postId,
        name: user.name,
        content,
        userAvatar: user.avatar,
        commentAvatar,
        likes: {},
      });
      await newComment.save();
      await Post.findByIdAndUpdate(req.body.postId,{$push:{commentIds: newComment._id}})
      const comment = await Comment.find();
      res.status(201).json(comment);
    } catch (err) {
      err.origin = 'Comment';
      next(err);
    }
  },
  async getAll(req, res) {
    try {
      const { page = 1, limit = 10 } = req.query;
      const comments = await Comment.find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
      res.status(200).json(comments);
    } catch (error) {
      res
        .status(500)
        .send({
          message: 'Ha habido un problema al recuperar los comentarios',
        });
    }
  },
  async update(req, res) {
    try {
      const comment = await Comment.findByIdAndUpdate(
        req.params._id,
        { ...req.body, userId: req.user._id },
        {
          new: true,
        }
      );
      res
        .status(201)
        .send({ message: 'Comentario actualizado con éxito', comment });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Ha habido un problema al actualizar el comentario' });
    }
  },
  async delete(req, res) {
    try {
      const comment = await Comment.deleteOne({ _id: req.params._id });
      res
        .status(201)
        .send({ message: 'Comentario borrado con éxito', comment });
    } catch (error) {
      res
        .status(500)
        .send({ message: 'Ha habido un problema al borrar el comentario' });
    }
  },
  async likeComment(req,res){
    try {
      const { id } = req.params;
      const { userId } = req.body;
      const comment = await Comment.findById(id);
      const isLiked = comment.likes.get(userId);
  
      if (isLiked) {
        comment.likes.delete(userId);
      } else {
        comment.likes.set(userId, true);
      }
  
      const updatedComment = await Comment.findByIdAndUpdate(
        id,
        { likes: comment.likes },
        { new: true }
      );
  
      res.status(200).json(updatedComment);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },  
};

module.exports = CommentController;
