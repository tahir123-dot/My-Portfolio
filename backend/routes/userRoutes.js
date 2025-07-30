const express = require("express");
const { signup, login } = require("../controller/sign");
const upload = require("../config/multer");
const { uploadFile, getAllPosts } = require("../controller/postController");
const { search } = require("../controller/search");
const { sendEmail } = require("../controller/emailController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/upload", upload.single("media"), uploadFile);
router.get("/posts", getAllPosts);
router.get("/search", search);
router.post("/sendemail", sendEmail);

module.exports = router;
