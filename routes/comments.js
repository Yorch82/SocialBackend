const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/CommentController.js");
const { authentication, isAdmin, isAuthorComment } = require("../middlewares/authentication");
require("dotenv").config();
const { uploadAvatar } = require('../middlewares/multer');

router.post('/', authentication, uploadAvatar.single('myFile'), CommentController.create);
router.get('/getAll', authentication, CommentController.getAll);
router.put('/update/:_id',authentication, CommentController.update);
router.delete('/delete/:_id', authentication, isAuthorComment, CommentController.delete);
router.patch('/:id/like', authentication, CommentController.likeComment);

module.exports = router;