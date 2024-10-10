import React from "react";
import ReactCompareImage from "react-compare-image";
interface TwentyTwentyInterface {
  firstPhoto: string;
  secondPhoto: string;
}

const TwentyTwentyAnimation: React.FC<TwentyTwentyInterface> = ({
  firstPhoto,
  secondPhoto,
}) => {
  return (
    <div className="gallery-page-class cursor-pointer">
      <div className="z">
        <ReactCompareImage
          leftImage={firstPhoto}
          rightImage={secondPhoto}
          leftImageCss={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          rightImageCss={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          aria-label="Compare images"
        />
      </div>
      <div
        className="absolute twentyTwenty-description left-0 flex justify-between w-full opacity-0 transform-all ease-in-out duration-200 text-base bottom-2"
        role="region"
        aria-live="polite"
      >
        <div
          className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb-1.5"
          aria-hidden="true"
        >
          Przed zmianą
        </div>
        <div
          className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb-1.5"
          aria-hidden="true"
        >
          Po zmianie
        </div>
      </div>
    </div>
  );
};

export default TwentyTwentyAnimation;
