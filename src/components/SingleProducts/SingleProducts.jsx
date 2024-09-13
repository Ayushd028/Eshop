import React from "react";
import { useLocation } from "react-router-dom";
import "./SingleProducts.css";

const SingleProducts = () => {
  const location = useLocation();
  const { state } = location;

  // Retrieve product data from location state
  const { image } = state || {};

  // Dummy product data, replace this with actual data fetched using productId
  const product = {
    id: "1", // Example ID, should be dynamic
    title: "Product Title",
    price: "$99.99",
    description: "This is a detailed description of the product.",
    category: "Electronics",
    brand: "XYZ",
    image: image || "default-image-url", // Fallback to a default image if none provided
  };

  return (
    <>
      <div className="container gx-0 py-4 single_product_main">
        <div className="row gx-0 py-2 align-items-center">
          {/* Product Image on the Left */}
          <div className="col-md-6">
            <div className="single_product1">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Product Details on the Right */}
          <div className="col-md-6">
            <div className="single_product2">
              <h1 className="single_product-title">{product.title}</h1>
              <h2 className="single_product-price">{product.price}</h2>
              <p className="single_product-description">
                {product.description}
              </p>

              <div className="carts-button">
                <div className="quality-buttons my-4 py-3">
                  <span className="single-span">-</span>
                  <span className="single-span">1</span>
                  <span className="single-span">+</span>
                </div>
                <button className="btn-3 py-3">
                  <i className="fa-solid fa-cart-shopping fs-6"></i> ADD TO CART
                </button>
                <hr />
                <div className="single-category py-2">
                  <span className="fw-bold fs-6">Category:</span>
                  <span className="ps-1">{product.category}</span>
                </div>
                <div className="single-brand py-2">
                  <span className="fw-bold fs-6">Brand:</span>
                  <span className="ps-1">{product.brand}</span>
                </div>
                <div className="single-social py-2">
                  <span className="fw-bold fs-6">Share:</span>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProducts;
