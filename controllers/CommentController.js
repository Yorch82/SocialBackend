const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

const CommentController = {
    async create(req,res, next){        
        try {
            if (req.file)req.body.avatar = (req.file.destination + req.file.filename);
            else{
                req.body.avatar = "../assets/defaultavatar.jpg"
            }
            const comment = await Comment.create(                
                { ...req.body, userId: req.user._id, postId: req.body.postId}
            );            
            await Post.findByIdAndUpdate(req.body.postId,{$push:{commentIds: comment._id}})
            await User.findByIdAndUpdate(req.user._id,{$push:{commentIds: comment._id}})            
            res.send(comment);            
            } catch (err) {                            
                err.origin = 'Comment';
                next(err);           
            }        
    },
    async getAll(req, res) {
        try {        
            const { page = 1, limit = 10 } = req.query;        
            const comments = await Comment.find()            
            .limit(limit * 1).skip((page - 1) * limit);        
            res.send(comments);        
        } catch (error) {            
            res.status(500).send({ message: 'Ha habido un problema al recuperar los comentarios'});        
        }        
    },
    async update(req,res){
        try {        
            const comment = await Comment.findByIdAndUpdate(
                req.params._id,
                {...req.body, userId: req.user._id},                
                { 
                    new: true,                
                }             
            );        
            res.status(201).send({ message: 'Comentario actualizado con éxito', comment});        
        } catch (error) {                              
            res.status(500).send({ message: 'Ha habido un problema al actualizar el comentario' })
        }
    },
    async delete(req,res){
        try {        
            const comment = await Comment.deleteOne({ _id : req.params._id});        
            res.status(201).send({ message: 'Comentario borrado con éxito', comment});        
        } catch (error) {                   
            res.status(500).send({ message: 'Ha habido un problema al borrar el comentario' })
        }
    },
}

module.exports = CommentController;