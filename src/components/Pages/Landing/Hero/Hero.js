import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Items from "./Items";
const Hero = () => {
  return (
    <>
      <OwlCarousel className="border-2 border-dark rounded-xl   owl-theme"  loop items={1}>
       <Items/>
       <Items/>
       <Items/>
        
      </OwlCarousel>
    </>
  );
};

export default Hero;
