const Cart = require("../models/cartModel");

// Add to Cart
const addToCart = async (req, res) => {
  try {
    const { user, product, quantity } = req.body;

    const cart = await Cart.create({
      user,
      product,
      quantity,
    });

    res.status(201).json({
      message: "Product Added To Cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Cart Items
const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find();

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Remove Cart Item
const removeCartItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Cart Item Removed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeCartItem,
};