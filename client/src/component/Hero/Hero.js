import React from "react";

import { HeroContainer, HeroImg, Name, Welcome } from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src="/nakaji3.jpg" alt="Sushi Bar" />
      {/* <Japan>よ う こ そ</Japan> */}
      <Welcome>WELCOME TO</Welcome>
      <Name>TAISHI SUSHI</Name>
    </HeroContainer>
  );
};

export default Hero;
