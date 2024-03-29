const express =  require("express");

const {viewOrders,updateOrderStatus,viewOrderHistory}  = require("../controllers/restaurant-controllers/orderController");

const router = express.Router();

router.post("/view", viewOrders);
router.put("/update", updateOrderStatus);
router.post("/history", viewOrderHistory);

module.exports = router;