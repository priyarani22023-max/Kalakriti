const Cart = require("../models/CartModel");


// Get All Cart Items
const getCartItems = async (req, res) => {
  try {
    const items = await Cart.find();

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Add Item
const addToCart = async (req, res) => {
  try {
    const item = await Cart.create(req.body);

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Update Quantity
const updateQuantity = async (req, res) => {
  try {
    const updatedItem =
      await Cart.findByIdAndUpdate(
        req.params.id,
        {
          quantity: req.body.quantity,
        },
        {
          new: true,
        }
      );

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// Delete Item
const deleteItem = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(
      req.params.id
    );

    res.status(200).json({
      message: "Item Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getCartItems,
  addToCart,
  updateQuantity,
  deleteItem,
};