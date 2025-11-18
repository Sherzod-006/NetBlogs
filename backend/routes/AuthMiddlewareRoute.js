const express = require("express");
const AuthMiddleware = require("../middleware/AuthMiddleware");
const { getUserById } = require("../controllers/UserController");
const router = express.Router();

router.get("/profile/:id", AuthMiddleware, getUserById);

module.exports = router;
