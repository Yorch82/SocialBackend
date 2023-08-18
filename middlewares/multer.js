// const multer = require('multer');
// const mimetypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
// const generateUpload = path => multer({
//   storage: multer.diskStorage({
//         destination: (req, file, cb) => cb(null, path),
//        filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
//     }),
//   fileFilter: (req, file, cb) => {
//         if (mimetypes.includes(file.mimetype)) cb(null, true)
//         else cb(null, false)
//     },
//     limits: { fileSize: 2 * 1024 * 1024 }
// });

// const upload = generateUpload ('/assets/');

// module.exports = {upload};

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/assets/');
//     },
//    filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname);
//     },
//   });
//   const upload = multer({ storage });
//   module.exports = {upload};

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