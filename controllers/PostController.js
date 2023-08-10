const Post = require("../models/Post");
const User = require("../models/User");
const fs = require('fs');

const PostController = {
    async create(req, res, next){
        try {
            if (req.file)req.body.avatar = (req.file.destination + req.file.filename);
            else{
                req.body.avatar = "/assets/user.jpg"
            }
            const post = await Post.create({
                ...req.body,
                userId: req.user._id
            });
            await User.findByIdAndUpdate(req.user._id, {$push:{postIds: post._id}});
            res.status(201).send({message: 'Post creado con éxito', post});
        } catch (error){
            err.origin = 'Post';
            next(err);
        }
    },
    async delete(req,res){
        try {
            const post = await Post.findByIdAndDelete(req.params._id);
            await User.findByIdAndUpdate(req.user._id, {$pull:{postIds: post._id}});   
            res.status(201).send({message: "Post borrado con éxito", post});
        } catch (error){
            res.status(500).send({ message: 'Ha habido un problema al borrar el post' })
        }
    },
    async update(req, res){
        try {
            const post = await Post.findByIdAndUpdate(
                req.params._id,
                {...req.body},
                { new: true }
              );
            res.status(201).send({ message: 'Post actualizado con éxito', post});
        } catch (error){
            res.status(500).send({ message: 'Ha habido un problema al actualizar el post' });
        }
    },
    async getAll(req, res){
        try {
            const posts = await Post.find()
            //.populate("commentIds")
            .populate("userId");
            res.send(posts.reverse());
        } catch (error){
            res.status(500).send({ message: 'Ha habido un problema al recuperar los posts' });
        }
    },
    async getById (req, res) {
        try {
            const post = await Post.findById(req.params._id)
            .populate("commentIds")
            .populate("userId")
            res.status(201).send({ message: 'Post recuperado con éxito', post});

        }catch (error){            
            res.status(500).send({ message: 'Ha habido un problema al buscar el post por ID' });
        }
    },
    async getByName (req, res) {
        try {
            const title = new RegExp(req.params.title, "i");
            const post = await Post.findOne ({title});
            res.status(201).send({ message: 'Post recuperado con éxito', post});
        } catch (error){            
            res.status(500).send({ message: 'Ha habido un problema al buscar el post por nombre' });
        }
    }
}

module.exports = PostController;