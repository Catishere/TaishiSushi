import React from "react";

import Hero from "../../Hero/Hero";
import Products from "../../Products/Products";
import { BackgroundH } from "../Menu/MenuElements";

const HomePage = () => {
  return (
    <>
      <BackgroundH />
      <Hero />
      <Products heading="Chose your favorite set" />
    </>
  );
};

export default HomePage;
