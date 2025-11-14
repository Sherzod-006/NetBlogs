const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const router = express.Router();

router.get("/verify", AuthMiddleware, (req, res) => {
  res.json({ user });
});

module.exports = router;
