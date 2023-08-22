const mongoose = require("mongoose");

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
    confirmed: Boolean,
    role: String,    
    friends: {
        type: Array,
        default: []
    },    
}, {timestamps: true});

UserSchema.methods.toJSON = function() {
    const user = this._doc;
    delete user.tokens;
    delete user.password;
    return user;
};

const User = mongoose.model('User', UserSchema);
module.exports = User;