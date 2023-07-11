import React from "react";
import Events from "../components/Events/Events";
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Hero from "../components/Route/Hero/Hero";
import Sponsored from "../components/Route/Sponsored/Sponsored";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <Events />
      <FeaturedProduct />
      <Sponsored />
    </div>
  );
};

export default HomePage;
