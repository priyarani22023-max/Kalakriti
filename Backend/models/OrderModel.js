const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
    },
    customerName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },

    product: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      default: 1,
    },

    price: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Processing",
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);