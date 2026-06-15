const Order = require("../models/orderModel");

// Place Order
const placeOrder = async (req, res) => {
  try {
    const { user, products, totalPrice } = req.body;

    const order = await Order.create({
      user,
      products,
      totalPrice,
    });

    res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  placeOrder,
  getOrders,
};