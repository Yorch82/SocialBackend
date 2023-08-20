'use strict';
// Multer funcionality, adapted from https://stackoverflow.com/a/39650303
const multer = require('multer');
const path = require('path');

const storageAvatar = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
});
const uploadAvatar = multer({ storage: storageAvatar });
module.exports = { uploadAvatar };