const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getOrders,
} = require("../controllers/orderController");

// Place Order
router.post("/", placeOrder);

// Get All Orders
router.get("/", getOrders);

module.exports = router;