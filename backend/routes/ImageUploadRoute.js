const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");
const User = require("../models/UserModel");
const cloudinary = require("cloudinary").v2;
const router = express.Router();
const upload = multer({ storage });

router.post("/upload/:id", upload.single("image"), async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.image) {
    await cloudinary.uploader.destroy(user.image);
  }

  try {
    const imageUrl = req.file.path; // Cloudinary URL
    await User.findByIdAndUpdate(req.params.id, { image: imageUrl });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
