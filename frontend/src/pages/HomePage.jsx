import React from "react";
import Events from "../components/Events/Events";
import Header from "../components/Layout/Header";
import Categories from "../components/Route/Categories/Categories";
import Hero from "../components/Route/Hero/Hero";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <Events />
    </div>
  );
};

export default HomePage;
