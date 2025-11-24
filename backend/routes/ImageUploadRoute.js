const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");
const User = require("../models/UserModel");
const cloudinary = require("cloudinary").v2;
const router = express.Router();
const upload = multer({ storage });

router.post("/upload/:id", upload.single("image"), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.image) {
      await cloudinary.uploader.destroy(user.imageId);
    }

    const imageUrl = req.file.path; // Cloudinary URL
    const imageId = req.file.filename; // Cloudinary id

    await User.findByIdAndUpdate(req.params.id, {
      image: imageUrl,
      imageId: imageId,
    });

    res.json({
      message: "Image uploaded and user updated",
      imageUrl,
      imageId,
      userId: req.params.id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
