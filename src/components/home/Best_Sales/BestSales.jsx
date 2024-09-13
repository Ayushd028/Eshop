import "./Discount.css";
import React from "react";
import cricket from "../../../photo/Cricket.png";

const BestSales = () => {
  return (
    <>
      <div className="container Discount">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="Discount_col1 pt-md-4">
              <h1>
                Get <span>Healthy</span> Body with the <span>Perfect</span>{" "}
                Exercises
              </h1>
              <p className="py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi dolores dicta quidem ullam, sint consequuntur
              </p>
              <div className="banner_btns">
                <button className="main_btn">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={cricket}
              alt="Cricket equipment"
              className="img-fluid img-shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSales;
