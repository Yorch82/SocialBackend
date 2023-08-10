const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController");
const { authentication, isAuthor } = require("../middlewares/authentication");
const { upload } = require('../middlewares/multer');

router.post('/', authentication, upload.single('myFile'), PostController.create);
router.delete('/delete/:_id', authentication, isAuthor, PostController.delete);
router.put('/update/:_id', authentication, isAuthor, PostController.update);
router.get('/getAll/', PostController.getAll);
router.get('/getById/:_id', PostController.getById);
router.get('/getByName/:title', PostController.getByName);

module.exports = router;