const express = require("express");
const {generateQr} = require("../controllers/restaurant-controllers/qrController");

const router = express.Router();

router.post("/generate", generateQr);

module.exports = router;