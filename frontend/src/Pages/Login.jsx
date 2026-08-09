import "./Login.css";
import { FaGoogle, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "./frontendApi";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email Regex Validation
    const emailRegex =
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email in lowercase.");
      return;
    }

    // Password Validation
    if (!form.password) {
      alert("Please enter your password.");
      return;
    }

    try {
      const res = await loginUser(form);

      console.log("res from loginUser", res);

      // Save Login Data
      localStorage.setItem("token", res?.data?.token);
      localStorage.setItem("role", res?.data?.role);

      // Save User Details
      if (res?.data?.user) {
        localStorage.setItem(
          "user",
          JSON.stringify(res.data.user)
        );
      }

      alert("Login Successfully");

      // Clear Form
      setForm({
        email: "",
        password: "",
      });

      // Redirect
      if (res?.data?.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/categories");
      }

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <form onSubmit={handleSubmit}>

          <div className="logo">🎨</div>

          <h2>Welcome Back!</h2>

          <p className="subtitle">
            Login to continue your artistic journey
          </p>

          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <Link
            to="/forgot-password"
            className="forgot-password"
          >
            Forgot Password?
          </Link>

          <button
            className="login-btn"
            type="submit"
          >
            LOGIN
          </button>

          <div className="divider">
            OR
          </div>

          <div className="social">

            <button type="button">
              <FaGoogle />
            </button>

            <button type="button">
              <FaFacebookF />
            </button>

            <button type="button">
              <FaLinkedinIn />
            </button>

          </div>

          <p className="signup">
            Don't have an account?{" "}
            <Link to="/signup">
              Sign Up
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
};

export default Login;