import React from "react";
import Events from "../components/Events/Events";
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Hero from "../components/Route/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <Events />
      <FeaturedProduct />
    </div>
  );
};

export default HomePage;
