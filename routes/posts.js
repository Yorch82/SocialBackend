const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const { authentication, isAuthor, isAdmin } = require("../middlewares/authentication");
const { uploadAvatar } = require('../middlewares/multer');

router.post('/', authentication, uploadAvatar.single('myFile'), PostController.create);
router.get('/getAll/',  authentication, PostController.getAll);
router.get('/getById/:_id',  authentication, PostController.getById);
router.put('/update/:_id', authentication, isAuthor, PostController.update);
router.delete('/delete/:_id', authentication,  PostController.delete);
router.get('/getByName/:title', authentication, PostController.getByName);
router.patch('/:id/like', authentication, PostController.likePost);
router.get("/getByUserId/:userId", authentication, PostController.getUserPosts);

module.exports = router;