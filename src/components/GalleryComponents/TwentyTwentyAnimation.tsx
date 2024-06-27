import React from "react";
import TwentyTwenty from "react-compare-image";

interface twentyTwentyInterface {
  firstPhoto: string;
  secondPhoto: string;
}

const TwentyTwentyAnimation: React.FC<twentyTwentyInterface> = ({
  firstPhoto,
  secondPhoto,
}) => {
  return (
    <div className="gallery-page-class cursor-pointer ">
      {" "}
      <TwentyTwenty leftImage={firstPhoto} rightImage={secondPhoto} />
      <div className="absolute twentyTwenty-description left-0 flex justify-between w-full opacity-0 transform-all ease-in-out duration-200 text-base bottom-2">
        <div className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb1.5">
          Przed zmianą
        </div>
        <div className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb1.">
          Po zmianie
        </div>
      </div>
    </div>
  );
};

export default TwentyTwentyAnimation;
