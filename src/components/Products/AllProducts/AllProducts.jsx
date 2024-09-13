import React from "react";
import { Link } from "react-router-dom";
import cricketKit from "../../../photo/cricketKit.png";
import Badminton from "../../../photo/badminton.png";
import "./AllProducts";
// Ensure path is correct

const AllProducts = () => {
  // Dummy data for products, replace this with actual data
  const products = [
    { id: 1, name: "Product 1", price: "$99.99", image: Badminton },
    { id: 2, name: "Product 2", price: "$89.99", image: cricketKit },
    // Add more products as needed
  ];

  return (
    <section className="all-products py-5">
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4">
              <div className="product-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                  style={{ width: "70%", borderRadius: "10px" }}
                />
                <h1 className="fs-4 my-3">{product.name}</h1>
                <p>{product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  state={{ image: product.image }}
                  className="btn-3">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
