const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes=require("./routes/orderRoutes")
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders",orderRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Kalakriti Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});