import React from "react";
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
  return (
    <>
      <hr />
      <h2 className="text-center mb-4">FEATURED IMAGES</h2>

      <div className="container-fluid px-2">

        {/* First Row */}
        <div className="row g-2 mb-2">
          <div className="col">
            <img
              src={image1}
              alt="image1"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image2}
              alt="image2"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image3}
              alt="image3"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image4}
              alt="image4"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image5}
              alt="image5"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="row g-2">
          <div className="col">
            <img
              src={image6}
              alt="image6"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image7}
              alt="image7"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image8}
              alt="image8"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image9}
              alt="image9"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>

          <div className="col">
            <img
              src={image10}
              alt="image10"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.08)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default ImageGrid;