const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");
const User = require("../models/UserModel");

const router = express.Router();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  const userId = req.body.userId;
  const imageUrl = req.file.path; // Cloudinary URL
  res.json({ message: "Image Uploaded", imageUrl, userId });
  User.findByIdAndUpdate(userId, { profileImage: imageUrl });
});

module.exports = router;
