import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaPlusCircle,
  FaShoppingBag,
  FaUsers,
  FaThLarge,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate("/login");
  };

  const menuStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 15px",
    marginBottom: "12px",
    borderRadius: "12px",
    textDecoration: "none",
    color: "white",
    fontSize: "17px",
    fontWeight: "500",
    background: location.pathname.startsWith(path)
      ? "rgba(255,255,255,0.25)"
      : "transparent",
    transition: "0.3s",
  });

  return (
    <div
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "linear-gradient(180deg,#0b7d5b,#046347)",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "4px 0 20px rgba(0,0,0,0.15)",
      }}
    >
      <div>
        {/* Logo */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <Link to="/admin">
            <img
              src={logo}
              alt="Kalakriti Logo"
              style={{
                width: "170px",
                height: "auto",
              }}
            />
          </Link>
        </div>

        {/* Dashboard */}
        <Link to="/admin" style={menuStyle("/admin")}>
          <FaTachometerAlt size={20} />
          Dashboard
        </Link>

        {/* Products */}
        <Link to="/products" style={menuStyle("/products")}>
          <FaBoxOpen size={20} />
          Products
        </Link>

        {/* Add Product */}
        <Link
          to="/admin/addproduct"
          style={menuStyle("/admin/addproduct")}
        >
          <FaPlusCircle size={20} />
          Add Product
        </Link>

        {/* Orders */}
        <Link
          to="/admin/orders"
          style={menuStyle("/admin/orders")}
        >
          <FaShoppingBag size={20} />
          Orders
        </Link>

        {/* Customers */}
        <Link
          to="/admin/customers"
          style={menuStyle("/admin/customers")}
        >
          <FaUsers size={20} />
          Customers
        </Link>

        {/* Categories */}
        <Link
          to="/admin/categories"
          style={menuStyle("/admin/categories")}
        >
          <FaThLarge size={20} />
          Categories
        </Link>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderRadius: "12px",
          background: "#ffffff",
          color: "#0b7d5b",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <FaSignOutAlt />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;