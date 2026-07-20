import React from "react";
import logo from "../assets/logo2.png";

function Footer() {
  return (
    <footer
      className="bg-success text-white py-4"
      style={{ minHeight: "100px" }}
    >
      <div className="container">
        <div className="row align-items-center text-center text-lg-start">

          {/* Left Side */}
          <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex flex-column flex-lg-row align-items-center align-items-lg-start">
            <img
              src={logo}
              alt="Kalakriti"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />

            <a
              href="#"
              className="text-decoration-none ms-lg-3 mt-2 mt-lg-0"
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "black",
              }}
            >
              Top
            </a>
          </div>

          {/* Center */}
          <div className="col-12 col-lg-6 mb-3 mb-lg-0">
            <h5
              style={{
                fontSize: "clamp(22px, 4vw, 30px)",
                fontWeight: "600",
                color: "black",
              }}
            >
              Where Creativity Meets Craftsmanship
            </h5>

            <p
              style={{
                fontSize: "clamp(14px, 2vw, 17px)",
                color: "#f8f9fa",
                marginBottom: "0",
              }}
            >
              Discover unique artworks, handcrafted treasures, and timeless
              creations that celebrate the beauty of imagination.
            </p>
          </div>

          {/* Right Side */}
          <div className="col-12 col-lg-3"></div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;