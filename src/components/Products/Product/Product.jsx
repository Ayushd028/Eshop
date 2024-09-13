import React from "react";
import boxer from "../../../photo/boxer.jpg";
import "./Product.css";

const Product = () => {
  return (
    <>
      <div className="Product_main">
        <div className="col my-4 mx-2">
          <div className="card border-0 h-100">
            <div className="card_head">
              <img src={boxer} alt="" className="img-fluid" />
            </div>
            <div className="card_body">
              <h5 className="Product_name"> Cricket </h5>
              <p className="Product_price"> $40 </p>
            </div>
          </div>
        </div>
        <div className="col my-5 mx-2">
          <div className="card border-0 h-100">
            <div className="card_head">
              <img src={boxer} alt="" className="img-fluid" />
            </div>
            <div className="card_body">
              <h5 className="Product_name"> Cricket </h5>
              <p className="Product_price"> $40 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
