import React from "react";
import ReactCompareImage from "react-compare-image";

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
      <div className="z">
        <ReactCompareImage
          leftImage={firstPhoto}
          rightImage={secondPhoto}
          leftImageCss={{
            objectFit: "fill",
            width: "100%",
            height: "100%",
          }}
          rightImageCss={{
            objectFit: "fill",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="absolute twentyTwenty-description left-0 flex justify-between w-full opacity-0 transform-all ease-in-out duration-200 text-base bottom-2">
        <div className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb-1.5">
          Przed zmianą
        </div>
        <div className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb-1.5">
          Po zmianie
        </div>
      </div>
    </div>
  );
};

export default TwentyTwentyAnimation;
