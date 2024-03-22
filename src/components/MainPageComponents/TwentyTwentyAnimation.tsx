import React from "react";
import imagineLeft from "../../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import imagineRight from "../../assets/puppy-2785074_640.jpg";
import TwentyTwenty from "react-compare-image";

const TwentyTwentyAnimation: React.FC = () => {
  return (
    <TwentyTwenty
      leftImage={imagineLeft}
      rightImage={imagineRight}
    />
  );
};

export default TwentyTwentyAnimation;
