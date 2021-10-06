import React from "react";
import ImgBG from "../../resources/nakaji3.jpg";

import { HeroContainer, HeroImg, Name, Welcome } from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImg src={ImgBG} alt="Sushi Bar" />
      {/* <Japan>よ う こ そ</Japan> */}
      <Welcome>WELCOME TO</Welcome>
      <Name>TAISHI SUSHI</Name>
    </HeroContainer>
  );
};

export default Hero;
