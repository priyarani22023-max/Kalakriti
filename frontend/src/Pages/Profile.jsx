import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaEnvelope, FaUserTag, FaSignOutAlt } from "react-icons/fa";
import "./Profile.css";


function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    navigate("/login");
  };

  return (
    <div className="profile-container">

      <div className="profile-card">

        <FaUserCircle className="profile-avatar" />

        <h2>My Profile</h2>

        <div className="profile-info">

          <p>
            <strong>Name :</strong>{" "}
            {user.name || "User"}
          </p>

          <p>
            <FaEnvelope className="icon" />
            <strong>Email :</strong>{" "}
            {user.email || "Not Available"}
          </p>

          <p>
            <FaUserTag className="icon" />
            <strong>Role :</strong>{" "}
            {role}
          </p>

        </div>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <FaSignOutAlt className="me-2" />
          Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;