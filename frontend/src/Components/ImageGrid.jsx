import React from "react";
import "./ImageGrid.css";

import image1 from "/featuredImages/image1.jpeg";
import image2 from "/featuredImages/image2.jpeg";
import image3 from "/featuredImages/image3.jpeg";
import image4 from "/featuredImages/image4.jpeg";
import image5 from "/featuredImages/image5.jpeg";
import image6 from "/featuredImages/image6.jpeg";
import image7 from "/featuredImages/image7.jpeg";
import image8 from "/featuredImages/image8.jpeg";
import image9 from "/featuredImages/image9.jpeg";
import image10 from "/featuredImages/image10.jpeg";

function ImageGrid() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  return (
    <>
      <hr />
      <h2 className="text-center mb-4">FEATURED IMAGES</h2>

      <div className="container-fluid px-2">
        <div className="row g-3">
          {images.map((img, index) => (
            <div
              className="col-6 col-md-4 col-lg"
              key={index}
            >
              <img
                src={img}
                alt={`Featured ${index + 1}`}
                className="featured-img"
              />
            </div>
          ))}
        </div>
      </div>

      <hr />
    </>
  );
}

export default ImageGrid;