const express = require("express");
const router = express.Router();
const Order = require("../models/OrderModel");


// Get All Orders

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });

    res.json(orders);
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch orders",
      error: err.message,
    });
  }
});


// Add Order

router.post("/", async (req, res) => {
  try {
    // Total orders count
    const count = await Order.countDocuments();

    // Order ID
    const orderId = `ORD${1001 + count}`;

    // Create New Order
    const order = new Order({
      ...req.body,
      orderId,
    });

    await order.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({
      message: "Failed to create order",
      error: err.message,
    });
  }
});

module.exports = router;