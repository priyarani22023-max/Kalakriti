import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });

      alert(res.data.message);

      localStorage.setItem("token", res.data.token);

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="backgroundImage d-flex justify-content-center align-items-center">
      <div className="card signup-card shadow-lg">
        <div className="card-body">
          <form className="signup-form">

            <h1>Welcome to Kalakriti</h1>

            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="btn btn-success"
              onClick={handleSignup}
            >
              SignUp
            </button>

            <p className="login-text">
              Already have an account? <Link to="/login">Login here</Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;