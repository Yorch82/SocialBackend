const mongoose = require("mongoose");
const ObjectId = mongoose.SchemaTypes.ObjectId;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor rellena tu nombre"]
    },
    email:{
        type: String,
        match: [/.+\@.+\..+/, "Este correo no es válido"],
        unique: true,
        required: [true, "Por favor rellena tu correo"]
    },
    avatar: String,
    password:{
        type: String,
        required: [true, "Por favor rellena tu contraseña"]
    },
    tokens: [],
    confirmed: Boolean,
    role: String,    
    friends: {
        type: Array,
        default: []
    },
    
    //commentIds: [{type: ObjectId, ref: "Comment"}],
}, {timestamps: true});

UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;