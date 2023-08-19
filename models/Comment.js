const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const CommentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    content:String,
    commentAvatar: String,
    userAvatar: String,
    likes: { type: Map, of: Boolean },
    userId:{type: String, required: true},
    postId:{type: String, required: true},   
}, {timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;