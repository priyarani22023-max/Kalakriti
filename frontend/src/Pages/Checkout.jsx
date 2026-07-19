import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import API from "./frontendApi";

function Checkout() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "Cash on Delivery",
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const totalAmount = cartItems.reduce((total, item) => {
    return total + Number(item.price) * (item.quantity || 1);
  }, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.city ||
      !form.pincode
    ) {
      alert("Please fill all details");
      return;
    }

    try {
      for (const item of cartItems) {
        await API.post("/api/orders", {
          customerName: form.name,
          email: form.email,
          phone: form.phone,
          product: item.title || item.name,
          quantity: item.quantity || 1,
          price: Number(item.price) * (item.quantity || 1),
          status: "Processing",
        });
      }

      alert("🎉 Order Placed Successfully!");

      localStorage.removeItem("cartItems");
      setCartItems([]);

      navigate("/categories");
    } catch (error) {
      console.log(error);
      alert("Order Failed");
    }
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Delivery Details</h2>

        <form onSubmit={handlePlaceOrder}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Delivery Address"
            value={form.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={form.pincode}
            onChange={handleChange}
          />

          <h4>Payment Method</h4>

          <select
            name="payment"
            value={form.payment}
            onChange={handleChange}
          >
            <option>Cash on Delivery</option>
            <option>UPI</option>
            <option>Card</option>
          </select>

          <button type="submit" className="place-btn">
            Place Order
          </button>
        </form>
      </div>

      <div className="checkout-right">
        <h2>Order Summary</h2>

        {cartItems.map((item) => (
          <div className="summary-card" key={item._id || item.id}>
            <img
              src={item.image}
              alt={item.title || item.name}
            />

            <div>
              <h4>{item.title || item.name}</h4>
              <p>Qty : {item.quantity || 1}</p>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}

        <hr />

        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>
    </div>
  );
}

export default Checkout;