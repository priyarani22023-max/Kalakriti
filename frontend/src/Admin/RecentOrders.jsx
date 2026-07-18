import React, { useEffect, useState } from "react";
import axios from "axios";

function RecentOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchRecentOrders();
  }, []);

  const fetchRecentOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");

      // Latest 5 Orders
      setOrders(res.data.slice(0, 5));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="card shadow-lg border-0 mt-4"
      style={{
        borderRadius: "18px",
        padding: "25px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{
            color: "#0b7d5b",
            fontWeight: "700",
            margin: 0,
          }}
        >
          Recent Orders
        </h3>

        <span
          style={{
            background: "#0b7d5b",
            color: "#fff",
            padding: "6px 15px",
            borderRadius: "20px",
            fontSize: "14px",
          }}
        >
          {orders.length} Orders
        </span>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle">

          <thead
            style={{
              background: "#f5f7fa",
            }}
          >
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Price</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>

                  <td>
                    <strong>
                      {order.orderId ||
                        order._id.slice(-6).toUpperCase()}
                    </strong>
                  </td>

                  <td>{order.customerName}</td>

                  <td>{order.product}</td>

                  <td>
                    <strong>₹{order.price}</strong>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        order.status === "Delivered"
                          ? "bg-success"
                          : order.status === "Shipped"
                          ? "bg-primary"
                          : order.status === "Cancelled"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>

                  <td>
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-4"
                >
                  No Recent Orders
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default RecentOrders;