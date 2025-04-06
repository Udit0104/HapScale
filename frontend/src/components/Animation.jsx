import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Animation = () => {
  return (
    <DotLottieReact
      src="frontend\src\assets\Animation.lottie"  // Replace with your actual animation file path
      loop
      autoplay
    />
  );
};

export default Animation;
