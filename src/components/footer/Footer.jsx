import React from "react";
import logo from "../../photo/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-md-3">
              <div className="Footer_col2">
                <img src={logo} alt="" className="img-fluid" />
                <div className="Ft_icons">
                  <i className="fa-brands fa-facebook fa-2xl"></i>
                  <i className="fa-brands fa-instagram fa-2xl"></i>
                  <i className="fa-brands fa-whatsapp fa-2xl"></i>
                </div>
                <p>&copy; Copyright: All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="Footer_col2 ">
                <h4> Get to Know Us</h4>
                <ul>
                  <li className="navItem">
                    <NavLink to="/" className="nav_li">
                      HOME
                    </NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/about" className="nav_li">
                      ABOUT
                    </NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/products" className="nav_li">
                      PRODUCT
                    </NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/contact" className="nav_li">
                      CONTACT US
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="Footer_col2">
                <h4> Orders and Returns </h4>
                <ul>
                  <li className="navItem">
                    <NavLink to="/" className="nav_li">
                      Shiping and Delivery
                    </NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/about" className="nav_li">
                      Return and Exchange
                    </NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/products" className="nav_li">
                      Track Order
                    </NavLink>
                  </li>
                  <li className="navItem">
                    <NavLink to="/contact" className="nav_li">
                      Payment
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 my-3">
              <div className="Footer_col2">
                <h4> Contact US </h4>
                <ul>
                  <p>
                    <i class="fa-solid fa-phone"></i> +91 6394261448
                  </p>
                  <p>
                    <i class="fa-solid fa-envelope"></i>{" "}
                    dwivediayush028@gmail.com
                  </p>
                  <p>
                    <i class="fa-solid fa-location-dot"></i> Kalindipuram,
                    Prayagraj
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
