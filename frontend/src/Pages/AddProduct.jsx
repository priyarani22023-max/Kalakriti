import { useState } from "react";
import "./AddProduct.css";
import API from "./frontendApi";

function AddProducts() {
  const [product, setProduct] = useState({
    title: "",
    artist: "",
    price: "",
    image: "",
    category: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !product.title ||
      !product.artist ||
      !product.price ||
      !product.image ||
      !product.category
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await API.post("/api/products", product);

      alert("Product Added Successfully");

      setProduct({
        title: "",
        artist: "",
        price: "",
        image: "",
        category: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error Adding Product");
    }
  };

  return (
    <div className="background">
      <div className="form-card">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            value={product.title}
            onChange={handleChange}
            placeholder="Product Name"
          />

          <input
            name="artist"
            value={product.artist}
            onChange={handleChange}
            placeholder="Artist Name"
          />

          <input
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
          />

          <input
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Image URL"
          />

          <input
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
          />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default AddProducts;