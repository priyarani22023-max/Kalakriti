const express = require("express");
const router = express.Router();
const Cart = require("../models/CartModels");
// Get Cart Items
router.get("/", async (req, res) => {
  const items = await Cart.find();
  res.json(items);
});

// Add To Cart
router.post("/", async (req, res) => {
  const item = new Cart(req.body);
  await item.save();
  res.status(201).json(item);
});

// Remove Item
router.delete("/:id", async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.json({ message: "Item Removed" });
});

module.exports = router;