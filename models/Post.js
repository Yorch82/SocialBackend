const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "Por favor rellena el título del post"]
    },
    content: {
        type: String,
        require: [true, "Por favor rellena el contenido del post"]
    },
    avatar: String,
    userId:{type: ObjectId, ref: 'User'},
    commentIds:[{type: ObjectId, ref: 'Comment'}],   
    likes: [{ type: ObjectId }]    
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;