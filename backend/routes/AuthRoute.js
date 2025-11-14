const express = require("express");
const { loginUser, registerUser } = require("../controllers/AuthController");

const router = express.Router();

// Route for user login
router.post("/login", loginUser);

// Route for user registration
router.post("/register", registerUser);

module.exports = router;
