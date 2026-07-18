const Order = require("../models/orderModel");
//create orders
const createOrder = async (req, res) => {
  try {
    console.log(req.body)
    const order = await Order.create(req.body);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
//get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports={createOrder,getAllOrders}