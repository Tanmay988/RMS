const express =  require("express");

const {viewOrders}  = require("../controllers/restaurant-controllers/orderController");

const router = express.Router();

router.post("/view", viewOrders);

module.exports = router;