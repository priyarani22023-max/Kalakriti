import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaShoppingCart,
  FaBoxOpen,
  FaUsers,
  FaRupeeSign,
} from "react-icons/fa";

function DashboardCards() {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchOrders();
    fetchProducts();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const totalRevenue = orders.reduce(
    (total, order) => total + Number(order.price),
    0
  );

  const totalCustomers = new Set(
    orders.map((order) => order.email)
  ).size;

  const cardStyle = (color1, color2) => ({
    background: `linear-gradient(135deg, ${color1}, ${color2})`,
    color: "white",
    border: "none",
    borderRadius: "18px",
    padding: "25px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transition: "0.3s",
    minHeight: "170px",
  });

  return (
    <>
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h2
          style={{
            fontWeight: "700",
            color: "#0b7d5b",
          }}
        >
          Welcome Back, Admin 👋
        </h2>

        <p
          style={{
            color: "#777",
          }}
        >
          Here's what's happening in your Kalakriti Store today.
        </p>
      </div>

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <div style={cardStyle("#00b09b", "#96c93d")}>
            <FaShoppingCart size={38} />
            <h6 className="mt-3">Total Orders</h6>
            <h2>{orders.length}</h2>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div style={cardStyle("#396afc", "#2948ff")}>
            <FaBoxOpen size={38} />
            <h6 className="mt-3">Total Products</h6>
            <h2>{products.length}</h2>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div style={cardStyle("#ff9966", "#ff5e62")}>
            <FaUsers size={38} />
            <h6 className="mt-3">Customers</h6>
            <h2>{totalCustomers}</h2>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div style={cardStyle("#7F00FF", "#E100FF")}>
            <FaRupeeSign size={38} />
            <h6 className="mt-3">Revenue</h6>
            <h2>₹{totalRevenue}</h2>
          </div>
        </div>

      </div>
    </>
  );
}

export default DashboardCards;