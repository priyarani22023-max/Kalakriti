import "./Products.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "./frontendApi";

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();
  const { categoryName } = useParams();

  useEffect(() => {
    fetchProducts();
    loadCart();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await API.get("/api/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCart = () => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(saved);
  };

  const addToCart = (product) => {
    const saved = JSON.parse(localStorage.getItem("cartItems")) || [];

    const exists = saved.find((item) => item._id === product._id);

    let updatedCart;

    if (exists) {
      updatedCart = saved.map((item) =>
        item._id === product._id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
    } else {
      updatedCart = [...saved, { ...product, quantity: 1 }];
    }

    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCartItems(updatedCart);

    alert("Added To Cart");
  };

  const goToCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item._id === id);
  };

  // SEARCH

  const keyword = categoryName
    ? decodeURIComponent(categoryName).toLowerCase().trim()
    : "";

  const filteredProducts = products.filter((product) => {
    if (!keyword) return true;

    return (
      product.title?.toLowerCase().includes(keyword) ||
      product.artist?.toLowerCase().includes(keyword) ||
      product.category?.toLowerCase().includes(keyword)
    );
  });

  // HEADING LOGIC

  let heading = "Our Collection";

  if (keyword && filteredProducts.length > 0) {
    const firstCategory = filteredProducts[0].category;

    const sameCategory = filteredProducts.every(
      (item) => item.category === firstCategory
    );

    if (sameCategory) {
      heading = firstCategory;
    }
  }

  return (
    <>
      <div className="product-container">
        {/* Heading */}

        <h1 className="text-center mb-5">{heading}</h1>

        {/* Products */}

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="card" key={product._id}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top"
                  onClick={() => setSelectedImage(product.image)}
                />

                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>

                  <p className="card-text">
                    Artist: {product.artist}
                  </p>

                  <h6>₹{product.price}</h6>

                  {isInCart(product._id) ? (
                    <button
                      className="btn btn-success mt-auto"
                      onClick={goToCart}
                    >
                      Go To Cart 🛒
                    </button>
                  ) : (
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => addToCart(product)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-danger w-100">
              No Products Found
            </h3>
          )}
        </div>
      </div>

      {/* Image Preview */}

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="preview-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="close-btn"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

export default ProductPage;