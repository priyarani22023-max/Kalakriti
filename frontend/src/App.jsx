import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AdminLayout from "./Admin/AdminLayout";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

import Admin from "./Pages/Admin";
import AddProducts from "./Pages/AddProduct";
import Orders from "./Pages/Orders";
import Customers from "./Pages/Customers";

function Layout() {
  const location = useLocation();

  // Admin pages par normal navbar mat dikhao
  const hideNavbar = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* ================= USER ROUTES ================= */}
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />
        <Route path="/products/:categoryName" element={<Products />} />

        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Dashboard */}
          <Route index element={<Admin />} />

          {/* Admin Pages */}
          <Route path="addproduct" element={<AddProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;