const User = require("../models/User");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const transporter = require("../config/nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;

const UserController = {
    async create(req,res,next){
        try {
            if (req.file) req.body.avatar = req.file.filename;
            else{
                req.body.avatar = "user.jpg"
            }            
            let password;
            if (req.body.password != undefined){
                password = bcrypt.hashSync(req.body.password,10);
            }
            req.body.confirmed = true;
            req.body.role = "user";
            const user = await User.create({...req.body,confirmed: req.body.confirmed, password});
            const emailToken = jwt.sign({email:req.body.email},JWT_SECRET,{expiresIn:'48h'});
            const url = 'http://localhost:8080/users/confirm/'+ emailToken;
            // await transporter.sendMail({                
            //     to: req.body.email,                
            //     subject: "Confirme su registro",                
            //     html: `<h3>Bienvenido, estás a un paso de registrarte </h3>                
            //     <a href="${url}"> Click para confirmar tu registro</a>
            //     `,});    
            res.status(201).json({user})
        } catch (error){
            console.error(error);
            error.origin = 'User';
            next(error);
        }
    },
    async getAll(req, res){
        try {
            const users = await User.find()
            .populate("CommentIds")
            .limit(limit * 1).skip((page -1) * limit);
            res.send(users);
        } catch(error){
            res.status(500).send({message:"Ha habido un problema al recuperar los usuarios"});
        }
    },
    async confirm(req, res){
        try {
            const token = req.params.emailToken;
            const payload = jwt.verify(token, JWT_SECRET);
            await User.updateOne({email: payload.email}, {$set: {confirmed:true}});
            res.status(201).send("Usuario confirmado con éxito");
        } catch(error) {
            console.error(error)
        }
    },
    async login(req,res){
        try {
            const user = await User.findOne({email: req.body.email});
            if (!user){
                return res.status(400).send({message: "Usuario o contraseña incorrecta."})
            };
            const isMatch = bcrypt.compareSync(req.body.password, user.password);
            if(!isMatch){
                return res.status(400).send({message: "Usuario o contraseña incorrecta."})
            }
            if (!user.confirmed){
                return res.status(403).send({message: "Usuario no confirmado. Verifique su email"})
            }
            const token = jwt.sign({_id: user._id}, JWT_SECRET);
            if (user.tokens.length > 4) user.tokens.shift();
            user.tokens.push(token);
            await user.save();
            res.status(200).json({user,token});
        } catch(error) {
            res.status(500).send({message:"Ha habido un problema en el login del usuario"});
        }
    },
    async logout(req, res){
        try {
            await User.findByIdAndUpdate(req.user._id, {
                $pull: { tokens: req.headers.authorization }
            });
            res.status(200).send({message: "Desconectado con éxito"});
        } catch (error) {
            res.status(500).send({message: "Hubo un problema al intentar desconectar al usuario"});
        }
    },
    async getById(req, res){
        try {
            const user = await User.findById(req.params._id);
            res.status(201).json({user});
        } catch (error){
            res.status(500).send({message: "Hubo un problema al buscar al usuario por ID"});
        }
    },
    async getByName(req, res){
        try {
            const user = await User.findOne({name: req.params.name});
            res.status(201).send({message: "Usuario recuperado con éxito", user});
        } catch (error){
            res.status(500).send({message: "Hubo un problema al buscar al usuario por nombre"});
        }
    },
    async getUserFriends(req,res){
        try {
            const { id } = req.params;
            const user = await User.findById(id);
        
            const friends = await Promise.all(
              user.friends.map((id) => User.findById(id))
            );
            const formattedFriends = friends.map(
              ({ _id, name, avatar }) => {
                return { _id, name, avatar };
              }
            );
            res.status(200).json(formattedFriends);
          } catch (err) {
            res.status(404).json({ message: err.message });
          }
    },
    async addRemoveFriend(req, res){
        try {
            const { id, friendId } = req.params;
            const user = await User.findById(id);
            const friend = await User.findById(friendId);
        
            if (user.friends.includes(friendId)) {
              user.friends = user.friends.filter((id) => id !== friendId);
              friend.friends = friend.friends.filter((id) => id !== id);
            } else {
              user.friends.push(friendId);
              friend.friends.push(id);
            }
            await user.save();
            await friend.save();
        
            const friends = await Promise.all(
              user.friends.map((id) => User.findById(id))
            );
            const formattedFriends = friends.map(
              ({ _id, name, avatar }) => {
                return { _id, name, avatar };
              }
            );
        
            res.status(200).json(formattedFriends);
          } catch (err) {
            res.status(404).json({ message: err.message });
          }
    },    
    async likeComment(req, res) {
        try {
            const comment = await Comment.findById(req.params._id);
            if (comment.likes.includes(req.user._id)) {
                res.send('Ya le diste a like a este comentario');
            } else {
                const comment = await Comment.findByIdAndUpdate(        
                    req.params._id,        
                    { $push: { likes: req.user._id } },        
                    { new: true }
                )
                res.status(201).send(comment);
            };                     
                    
        } catch (error) {
            console.error(error)                    
            res.status(500).send({ message: "Hubo un problema con tu like al comenatario" });        
        }        
    },
    async dislikeComment(req, res) {
        try {        
            const comment = await Comment.findByIdAndUpdate(        
            req.params._id,        
            { $pull: { likes: req.user._id } },        
            { new: true }        
        );              
        res.status(201).send(comment);        
        } catch (error) {                    
            res.status(500).send({ message: "Hubo un problema con tu dislike al comentario"});        
        }        
    },
    async checkLoggedUser(req,res) {
        try{           
            const user = await User.findOne({tokens: req.headers.authorization})
            .populate({
                path: "postIds",
                populate: {
                    path: "commentIds"
                }
            })
            .populate("likeIds")            
            res.status(201).send({ message: 'Usuario conectado: ', user});
        } catch (error){            
            res.status(500).send({message: "Hubo un problema al intentar recuperar usuario conectado",
        });
      }
    },
    async getInfo(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            res.status(200).json(user);
          } catch (err) {
            res.status(404).json({ message: err.message });
          }
    },
    async updatePhoto(req, res) {
        try {           
            // if (req.file)req.body.avatar = (req.file.filename);
            const updatedUser = {
                avatar:req.file.filename,
                
              };
            const user = await User.findByIdAndUpdate(req.user._id, updatedUser,

                // { $pull: { avatar: req.file.filename } },        
                { new: true }        
            );              
            res.status(201).send(user); 
        }catch (error) {
            console.error(error)
            res.status(500).send({ message: 'Ha habido un problema al actualizar la foto del usuario' })
        }
    } 

}

module.exports = UserController;