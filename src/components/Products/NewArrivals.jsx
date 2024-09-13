import React from "react";
import "./NewArrivals.css";
import Hockey from "../../photo/hockey.jpg";
import Arrivals from "./Product/Arrivals/Arrivals.jsx";

const NewArrivals = () => {
  return (
    <>
      <div className="container">
        <h1 className="extra"> New Arrival Products </h1>
        <div className="row d-flex align-items-center">
          <div className="col-md-5">
            <div className="NewArrivals_col1">
              <h3>Hockey Kit</h3>
              <div className="Arrivals_btns py-4 pt-2">
                <button className="main_btn">Shop Now</button>
              </div>
              <img src={Hockey} alt="Hockey Kit" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="NewArrivals_col2">
              {[...Array(3)].map((_, index) => (
                <Arrivals key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
