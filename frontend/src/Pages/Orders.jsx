import React, { useEffect, useState } from "react";
import API from "./frontendApi";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/api/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filteredOrders = orders.filter((order) =>
    order.customerName.toLowerCase().includes(search.toLowerCase()) ||
    order.product.toLowerCase().includes(search.toLowerCase()) ||
    order.orderId?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "#f4f7fb",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 style={{ fontWeight: "700" }}>Orders</h2>
          <p className="text-muted mb-0">
            Manage all customer orders
          </p>
        </div>

        <button
          className="btn btn-success"
          onClick={fetchOrders}
        >
          Refresh
        </button>
      </div>

      {/* Card */}
      <div
        className="card border-0 shadow"
        style={{ borderRadius: "18px", width: "100%" }}
      >
        <div className="card-body">

          {/* Top Section */}
          <div className="d-flex justify-content-between align-items-center mb-4">

            <input
              type="text"
              placeholder="Search customer, product..."
              className="form-control"
              style={{
                width: "350px",
                borderRadius: "10px",
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <div
              style={{
                background: "#198754",
                color: "white",
                padding: "10px 18px",
                borderRadius: "10px",
                fontWeight: "600",
              }}
            >
              Total Orders : {filteredOrders.length}
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">

            <table className="table table-hover align-middle">

              <thead
                style={{
                  background: "#198754",
                  color: "white",
                }}
              >
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Email</th>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Status</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <tr key={order._id}>

                      <td>
                        <strong>
                          {order.orderId || order._id.slice(-6).toUpperCase()}
                        </strong>
                      </td>

                      <td>{order.customerName}</td>

                      <td>{order.email}</td>

                      <td>{order.product}</td>

                      <td>{order.quantity}</td>

                      <td>
                        <span
                          className={`badge px-3 py-2 ${
                            order.status === "Delivered"
                              ? "bg-success"
                              : order.status === "Shipped"
                              ? "bg-primary"
                              : "bg-warning text-dark"
                          }`}
                          style={{
                            borderRadius: "20px",
                            fontSize: "13px",
                          }}
                        >
                          {order.status}
                        </span>
                      </td>

                      <td
                        style={{
                          fontWeight: "600",
                          color: "#198754",
                        }}
                      >
                        ₹{order.price}
                      </td>

                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center p-5">
                      <h5>No Orders Found</h5>
                    </td>
                  </tr>
                )}
              </tbody>

            </table>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;