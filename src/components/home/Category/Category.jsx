import React from "react";
import Cricket from "../../../photo/Cricket.png";
import Football from "../../../photo/football.webp";
import Tennis from "../../../photo/tennis.webp";
import Badminton from "../../../photo/badminton.webp";
import "./Category.css"; // CSS file for styling

const Category = () => {
  return (
    <>
      <h2 className="py-1">Categories</h2>
      <div className="container">
        <div className="grid-container">
          {/* Cricket */}
          <div className="card">
            <img src={Cricket} alt="Cricket" className="img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Cricket</h5>
              <p className="card-text">Explore cricket essentials and gear.</p>
              <button className="main_btn">Shop Now</button>
            </div>
          </div>

          {/* Football */}
          <div className="card">
            <img src={Football} alt="Football" className="img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Football</h5>
              <p className="card-text">Find the best football products.</p>
              <button className="main_btn">Shop Now</button>
            </div>
          </div>

          {/* Tennis */}
          <div className="card">
            <img src={Tennis} alt="Tennis" className="img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Tennis</h5>
              <p className="card-text">Top tennis gear for all levels.</p>
              <button className="main_btn">Shop Now</button>
            </div>
          </div>

          {/* Badminton */}
          <div className="card">
            <img src={Badminton} alt="Badminton" className="img-fluid" />
            <div className="card-body">
              <h5 className="card-title">Badminton</h5>
              <p className="card-text">Premium badminton accessories.</p>
              <button className="main_btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
