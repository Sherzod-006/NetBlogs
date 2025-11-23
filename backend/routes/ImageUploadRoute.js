const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");
const User = require("../models/UserModel");
import { v2 as cloudinary } from "cloudinary";

const router = express.Router();
const upload = multer({ storage });

router.post("/upload/:id", upload.single("image"), async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.profileImagePublicId) {
    await cloudinary.uploader.destroy(user.profileImagePublicId);
  }

  const imageUrl = req.file.path; // Cloudinary URL
  res.json({ message: "Image Uploaded", imageUrl, userId: req.params.id });
  await User.findByIdAndUpdate(req.params.id, { image: imageUrl });
});

module.exports = router;
