const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const { upload } = require('../middlewares/multer');

router.post('/', upload.single('myFile'), UserController.create);
router.get('/confirm/:emailToken', UserController.confirm);
router.get('/getAll', authentication, UserController.getAll);
router.post('/login', UserController.login);
router.delete('/logout', authentication, UserController.logout);
router.get('/getLoggedUser', authentication, UserController.checkLoggedUser);
router.get('/getById/:_id', authentication, isAdmin, UserController.getById);
router.get('/getByName/:name', authentication, isAdmin, UserController.getByName);
router.put('/follow/:_id', authentication, UserController.followUser);
router.put('/unfollow/:_id', authentication, UserController.unfollowUser);
router.put('/likes/:_id', authentication, UserController.likePost);
router.put('/dislikes/:_id', authentication, UserController.dislikePost);
router.put('/likeComment/:_id', authentication, UserController.likeComment);
router.put('/dislikeComment/:_id', authentication, UserController.dislikeComment);
router.get('/getInfo', authentication, UserController.getInfo);

module.exports = router;