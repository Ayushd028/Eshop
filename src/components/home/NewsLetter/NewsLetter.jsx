import React from "react";

const NewsLetter = () => {
  return (
    <>
      <div className="NewsLetter py-5">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-md-6">
              <div className="NewsLetter_col1">
                <h1> Join us and Get Updates </h1>
                <p> Sign Up for exclusive offers</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="NewsLetter_col2">
                <form action="">
                  <div className="form-input d-flex">
                    <input
                      type="email"
                      className="form-control mx-3"
                      placeholder="Enter Your Email"></input>
                    <button type="submit" className="main_btn rounded-5">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
