import { NavLink } from "react-router-dom";
import logo from "../../photo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"; // Import both icons
import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offsets = window.scrollY;
    if (offsets > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg nav-sec ${
          scrolled ? "sticky-nav" : ""
        }`}>
        <div className="container gx-0">
          <NavLink to="/">
            <img src={logo} alt="Company Logo" style={{ height: "50px" }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-lg-0 nav_ul">
              <li className="navItem">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/about" className="nav-link">
                  ABOUT
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/products" className="nav-link">
                  PRODUCT
                </NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/contact" className="nav-link">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn" type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />{" "}
                {/* FontAwesome Search Icon */}
              </button>
            </form>
            <NavLink to="/cart" className="btn">
              <FontAwesomeIcon icon={faBagShopping} size="xl" />{" "}
              {/* FontAwesome Bag Icon */}
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
