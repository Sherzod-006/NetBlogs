const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");
const User = require("../models/UserModel");
const cloudinary = require("../db/Cloudinary");

const router = express.Router();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  const { userId } = req.body;
  const cloudRes = await cloudinary.uploader.upload(req.file.path, {
    folder: "profile_images",
  });
  await User.findByIdAndUpdate(userId, {
    profileImage: cloudRes.secure_url,
  });
  res.json({
    success: true,
    imageUrl: cloudRes.secure_url,
  });
});

module.exports = router;
