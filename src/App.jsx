import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";
import NewsLetter from "./components/home/NewsLetter/NewsLetter";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import AllProducts from "./components/Products/AllProducts/AllProducts";
import SingleProducts from "./components/SingleProducts/SingleProducts";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<SingleProducts />} />{" "}
          {/* Dynamic Route */}
        </Routes>
        <NewsLetter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
