const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");

const router = express.Router();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  const imageUrl = req.file.path; // Cloudinary URL
  res.json({ message: "Image Uploaded", imageUrl });
});

module.exports = router;
