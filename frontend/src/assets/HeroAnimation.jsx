import React from "react";
import { DotLottieReact } from "@dotlottie/react";
import animation from "../assets/Animation.lottie"; // Adjust the path if needed

const HeroAnimation = () => {
  return (
    <DotLottieReact 
      src={animation} 
      loop 
      autoplay 
    />
  );
};

export default HeroAnimation;
