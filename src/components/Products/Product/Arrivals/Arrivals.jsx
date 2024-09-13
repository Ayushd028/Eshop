import React from "react";
import Cricket from "../../../../photo/football.webp";
import "../../NewArrivals.css";

const Arrivals = () => {
  return (
    <>
      <div className="container gx-0 Arrivals">
        <div className="row gx-0 align-items-center Arrivals_main">
          <div className="col-4">
            <div className="Arrivals_col1 text-center">
              <img src={Cricket} alt="Cricket" className="img-fluid" />
            </div>
          </div>
          <div className="col-8">
            <div className="Arrivals_col2">
              <h1 className="Product_name">Cricket</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrivals;
