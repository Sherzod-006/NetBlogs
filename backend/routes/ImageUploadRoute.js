const express = require("express");
const { storage } = require("../db/Cloudinary");
const multer = require("multer");

const router = express.Router();
const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  const { userId } = req.body;
  const imageUrl = req.file.path;
  console.log(userId, imageUrl);

  await User.findByIdAndUpdate(userId, {
    profileImage: imageUrl,
  });
  res.json({ message: "Image Uploaded", imageUrl });
});

module.exports = router;
