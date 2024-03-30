const express = require("express");

const {addMenu, editMenu, removeMenu} = require("../controllers/restaurant-controllers/menuController");

const router = express.Router();

router.post("/add", addMenu);
router.put("/edit", editMenu);
router.delete("/remove", removeMenu);

module.exports = router;