import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg_Categories.png";
import paintings from "../assets/paintings.jpeg";
import mandala from "../assets/mandala.jpeg";
import abstract from "../assets/abstract.jpeg";
import lippan from "../assets/lippan.jpeg";
import madhubani from "../assets/madhubani.jpeg";
import diy from "../assets/diy.jpeg";
import sketchings from "../assets/sketchings.jpeg";
import resin from "../assets/resin.jpeg";
import wooden from "../assets/wooden.jpeg";
import Footer from "../Components/Footer";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    { name: "Paintings", image: paintings },
    { name: "Mandala Art", image: mandala },
    { name: "Abstract Art", image: abstract },
    { name: "Lippan Art", image: lippan },
    { name: "Madhubani Art", image: madhubani },
    { name: "DIY Kits", image: diy },
    { name: "Sketchings", image: sketchings },
    { name: "Resin Art", image: resin },
    { name: "Wooden Art", image: wooden },
  ];

  const handleExplore = (categoryName) => {
  navigate(`/products/${encodeURIComponent(categoryName)}`);
};

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "50px 0",
        }}
      >
        <div className="container">
          <h1 className="text-center fw-bold mb-5">
            Art Categories
          </h1>

          <div className="row justify-content-center">

            {categories.map((category, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="card shadow">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="card-img-top pt-3"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "contain",
                    }}
                  />

                  <div className="card-body text-center p-2">
                    <h6 className="fs-5">{category.name}</h6>

                    {/* ✅ FIXED BUTTON */}
                    <button
                      className="btn btn-success btn-lg px-4 py-1"
                      onClick={() => handleExplore(category.name)}
                    >
                      Explore
                    </button>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Categories;