const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const { authentication, isAuthor } = require("../middlewares/authentication");
const { uploadAvatar } = require('../middlewares/multer');

router.post('/', authentication, uploadAvatar.single('myFile'), PostController.create);
router.delete('/delete/:_id', authentication, isAuthor, PostController.delete);
router.put('/update/:_id', authentication, isAuthor, PostController.update);
router.get('/getAll/',  authentication, PostController.getAll);
router.get('/getById/:id', authentication, PostController.getById);
router.get('/getByName/:title', PostController.getByName);
router.patch('/:id/like', authentication, PostController.likePost);
router.get("/getByUserId/:userId", authentication, PostController.getUserPosts);

module.exports = router;