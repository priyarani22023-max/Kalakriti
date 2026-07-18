import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import "./Navbar.css";

import {
  FaHome,
  FaThLarge,
  FaShoppingCart,
  FaSearch,
  FaUserCircle,
  FaSignOutAlt,
  FaTools,
} from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [search, setSearch] = useState("");

  const cartItems =
    JSON.parse(localStorage.getItem("cartItems")) || [];

  // Search Function
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const value = search.trim();

      if (!value) return;

      navigate(`/products/${encodeURIComponent(value)}`);
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* ================= USER NAVBAR ================= */}
          {role !== "admin" ? (
            <>
              {/* Left Menu */}
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <FaHome className="me-2" />
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/categories">
                    <FaThLarge className="me-2" />
                    Categories
                  </Link>
                </li>
              </ul>

              {/* Search */}
              <div className="search-box me-4">
                <FaSearch className="search-icon" />

                <input
                  type="text"
                  placeholder="Search Products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={handleSearch}
                />
              </div>

              {/* Right Side */}
              <div className="d-flex align-items-center">

                {/* Cart */}
                <Link
                  to={token ? "/cart" : "/login"}
                  className="cart-link me-4 position-relative"
                  onClick={(e) => {
                    if (!token) {
                      e.preventDefault();
                      alert("Please login first.");
                      navigate("/login");
                    }
                  }}
                >
                  <FaShoppingCart className="me-2" />
                  Cart

                  {token && cartItems.length > 0 && (
                    <span className="cart-badge">
                      {cartItems.length}
                    </span>
                  )}
                </Link>

                {token ? (
                  <>
                    <Link
                      to="/profile"
                      className="profile-icon me-3"
                    >
                      <FaUserCircle size={30} />
                    </Link>

                    <button
                      className="logout-btn"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="me-2" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="login-link me-3"
                    >
                      <FaUserCircle className="me-2" />
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      className="signup-btn"
                    >
                      Sign Up
                    </Link>
                  </>
                )}

              </div>
            </>
          ) : (

            /* ================= ADMIN NAVBAR ================= */

            <div className="d-flex justify-content-between align-items-center w-100">

              {/* Clickable Admin Panel */}
              <Link
                to="/admin"
                className="admin-panel-link d-flex align-items-center"
                style={{ marginLeft: "40px" }}
              >
                <FaTools className="me-2" size={20} />

                <span
                  className="fw-bold"
                  style={{ fontSize: "20px" }}
                >
                  Admin Panel
                </span>
              </Link>

              {/* Logout */}
              <button
                className="logout-btn admin-logout"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="me-2" />
                Logout
              </button>

            </div>

          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;