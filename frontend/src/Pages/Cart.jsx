import { useState, useEffect } from "react";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id || item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id || item.id === id
          ? {
              ...item,
              quantity:
                (item.quantity || 1) > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item._id !== id && item.id !== id)
    );
  };

  // Checkout Page par Navigate karega
  const placeOrder = () => {
    if (cartItems.length === 0) {
      alert("Cart is Empty");
      return;
    }

    navigate("/checkout");
  };

  const totalAmount = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    return total + price * qty;
  }, 0);

  return (
    <div className="cartContainer">

      <div className="heading">
        <h1>Shopping Cart</h1>
      </div>

      {cartItems.length === 0 ? (
        <h2 className="emptyCart">🛒 Your Cart is Empty</h2>
      ) : (
        cartItems.map((item) => (
          <div className="cartCard" key={item._id || item.id}>

            <img src={item.image} alt={item.title || item.name} />

            <div className="details">
              <h3>{item.title || item.name}</h3>
              <p>{item.artist}</p>
            </div>

            <div className="quantity">

              <button
                className="minusBtn"
                onClick={() => decreaseQty(item._id || item.id)}
              >
                -
              </button>

              <span>{item.quantity || 1}</span>

              <button
                className="plusBtn"
                onClick={() => increaseQty(item._id || item.id)}
              >
                +
              </button>

            </div>

            <h4>₹{Number(item.price) || 0}</h4>

            <h4>
              ₹{(Number(item.price) || 0) * (item.quantity || 1)}
            </h4>

            <button
              className="deleteBtn"
              onClick={() => removeItem(item._id || item.id)}
            >
              ❌
            </button>

          </div>
        ))
      )}

      <div className="bottom">
        <h2>Total: ₹{totalAmount}</h2>

        <button
          className="orderBtn"
          onClick={placeOrder}
        >
          Proceed to Checkout
        </button>

      </div>

    </div>
  );
}

export default Cart;