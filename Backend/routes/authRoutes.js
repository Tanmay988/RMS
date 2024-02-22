// Imports
const express = require('express');
const authorizationController = require('../controllers/restaurant-controllers/authorizationController/authController');
const router = express.Router();

// Routes

router.post('/register' ,authorizationController.register)

router.post('/login' ,authorizationController.login);

router.post('/logout' ,authorizationController.logout);

module.exports = router;