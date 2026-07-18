import React from "react";
import hero from "../assets/heroSection.png";
import hero2 from "../assets/heroImage2.jpeg";
import hero3 from "../assets/heroImage3.jpeg";
import '../Components/Hero.css'
function Hero() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={hero} className="d-block w-100 heroImage" alt="hero1" />
        </div>

        <div className="carousel-item">
          <img src={hero2} className="d-block w-100 heroImage" alt="hero2" />
        </div>

        <div className="carousel-item">
          <img src={hero3} className="d-block w-100 heroImage" alt="hero3" />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;