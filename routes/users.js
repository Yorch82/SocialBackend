const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const { uploadAvatar } = require('../middlewares/multer');

router.post('/', uploadAvatar.single('myFile'), UserController.create);
router.get('/confirm/:emailToken', UserController.confirm);
router.get('/', UserController.getAll);
router.post('/login', UserController.login);
router.get('/getById/:_id', authentication, UserController.getById);
router.get('/getFriends/:id', authentication, UserController.getUserFriends);
router.patch('/:id/:friendId', authentication, UserController.addRemoveFriend);
router.get('/getInfo/:id', authentication, UserController.getInfo);

module.exports = router;