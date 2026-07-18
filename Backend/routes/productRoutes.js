const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// ADD Product
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE Product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE Product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;