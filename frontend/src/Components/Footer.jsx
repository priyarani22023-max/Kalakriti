import React from "react";
import logo from "../assets/logo2.png";

function Footer() {
  return (
    <footer
      className="bg-success text-white"
      style={{
        minHeight: "100px",
        padding: "15px 40px",
      }}
    >
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Left Side */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="Kalakriti" width={150} />

          <a
            href="#"
            className=" text-decoration-none ms-3"
            style={{ fontSize: "20px", fontWeight: "500", color: "black" }}
          >
            Top
          </a>
        </div>

        {/* Center */}
        <div className="text-center">
          <h5
            className="mb-1"
            style={{ fontSize: "26px", fontWeight: "600" ,color: "black"}}
          >
            Where Creativity Meets Craftsmanship
          </h5>

          <p
            className="mb-0"
            style={{ fontSize: "16px", color: "#f8f9fa" }}
          >
            Discover unique artworks, handcrafted treasures, and timeless
            creations that celebrate the beauty of imagination.
          </p>
        </div>

        {/* Empty div for balance */}
        <div style={{ width: "150px" }}></div>

      </div>
    </footer>
  );
}

export default Footer;