import React from "react";
import ship from "../../../photo/ship.png";
import secure from "../../../photo/secure.png";
import support from "../../../photo/support.png";
import "./OrderMethod.css";

const OrderMethod = () => {
  return (
    <>
      <div className="order container gx-0">
        <div className="row gx-0">
          <div className="col-md-4">
            <div className="order_col1">
              <img src={ship} alt="" className="img-fluid py-4" />
              <h6 className="py-2"> Free Shiping </h6>
              <p className="py-0"> Get FREE delivery on all orders!</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="order_col1">
              <img src={secure} alt="" className="img-fluid" />
              <h6 className="py-2"> Secure Payment </h6>
              <p className="py-0"> Your Payments is in safe hands</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="order_col1">
              <img src={support} alt="" className="img-fluid temp" />
              <h6 className="py-2"> 24*7 Support </h6>
              <p className="py-0"> Customer service is not just a department</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderMethod;
