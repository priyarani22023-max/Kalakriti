import React, { useEffect, useState } from "react";
import axios from "axios";

function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/orders");

      const uniqueCustomers = [];
      const emailSet = new Set();

      res.data.forEach((order) => {
        if (!emailSet.has(order.email)) {
          emailSet.add(order.email);

          uniqueCustomers.push({
            id: uniqueCustomers.length + 1,
            name: order.customerName,
            email: order.email,
            phone: order.phone || "-",
            createdAt: order.createdAt,
          });
        }
      });

      setCustomers(uniqueCustomers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="card shadow-lg border-0"
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
          Customers
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
          {customers.length} Customers
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
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Registered</th>
            </tr>
          </thead>

          <tbody>
            {customers.length > 0 ? (
              customers.map((customer) => (
                <tr key={customer.email}>

                  <td>{customer.id}</td>

                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "#0b7d5b",
                          color: "#fff",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        {customer.name.charAt(0).toUpperCase()}
                      </div>

                      <strong>{customer.name}</strong>
                    </div>
                  </td>

                  <td>{customer.email}</td>

                  <td>{customer.phone}</td>

                  <td>
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No Customers Found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default Customers;