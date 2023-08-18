const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const { uploadAvatar } = require('../middlewares/multer');

router.post('/', uploadAvatar.single('myFile'), UserController.create);
router.get('/confirm/:emailToken', UserController.confirm);
router.get('/getAll', authentication, UserController.getAll);
router.post('/login', UserController.login);
router.delete('/logout', authentication, UserController.logout);
router.get('/getLoggedUser', authentication, UserController.checkLoggedUser);
router.get('/getById/:_id', authentication, UserController.getById);
router.get('/getByName/:name', authentication, isAdmin, UserController.getByName);
router.get('/getFriends/:id', authentication, UserController.getUserFriends);
router.patch('/:id/:friendId', authentication, UserController.addRemoveFriend);
router.put('/likeComment/:_id', authentication, UserController.likeComment);
router.put('/dislikeComment/:_id', authentication, UserController.dislikeComment);
router.get('/getInfo', authentication, UserController.getInfo);

module.exports = router;