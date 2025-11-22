const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");
const User = require("../models/UserModel");

const router = express.Router();
const upload = multer({ storage });

router.post("/upload/:id", upload.single("image"), async (req, res) => {
  const imageUrl = req.file.path; // Cloudinary URL
  res.json({ message: "Image Uploaded", imageUrl, userId: req.params.id });
  User.findByIdAndUpdate(req.params.id, { profileImage: imageUrl });
});

module.exports = router;
