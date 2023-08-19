const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: [true, "Por favor rellena el contenido del post"]
    },
    postAvatar: String,
    userAvatar: String,
    userId:{type: String, required: true},
    commentIds:[{type: ObjectId, ref: 'Comment'}],   
    likes: { type: Map, of: Boolean }    
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;