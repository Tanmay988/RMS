const express = require("express");

const {
  addMenu,
  editMenu,
  removeMenu,
  getMenu,
  editMenuById,
} = require("../controllers/restaurant-controllers/menuController");

const router = express.Router();

router.post("/add", addMenu);
router.put("/edit", editMenu);
router.get("/edit/:id/:name", editMenuById);
router.delete("/remove", removeMenu);
router.get("/get", getMenu);

module.exports = router;
