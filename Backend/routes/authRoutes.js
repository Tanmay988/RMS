// Imports
const express = require("express");
const {
  register,
  login,
  logout,
} = require("../controllers/restaurant-controllers/authorizationController/authController");
const router = express.Router();

// Routes

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

module.exports = router;
