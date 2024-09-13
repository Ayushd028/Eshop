import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import NewArrivals from "../Products/NewArrivals.jsx";
import BestSales from "./Best_Sales/BestSales.jsx";
import OrderMethod from "./OrderMethod/OrderMethod.jsx";
const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Products />
      <NewArrivals />
      <BestSales />
      <OrderMethod />
    </>
  );
};

export default Home;
