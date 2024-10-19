import React, { Suspense, useState, useEffect } from "react";
import ReactCompareImage from "react-compare-image";
import { PulseLoader } from "react-spinners";

interface TwentyTwentyInterface {
  firstPhoto: string;
  secondPhoto: string;
}

const TwentyTwentyAnimation: React.FC<TwentyTwentyInterface> = ({
  firstPhoto,
  secondPhoto,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    if (imagesLoaded) {
      setIsLoading(false);
    }
  }, [imagesLoaded]);

  return (
    <div className="gallery-page-class cursor-pointer">
      <div className="z">
        {isLoading ? (
          <div className="w-full flex justify-center items-center h-full mt-20 mb-20">
            <PulseLoader
              color="#ff00cc"
              margin={15}
              speedMultiplier={0.5}
              aria-label="Loading Spinner"
            />
          </div>
        ) : (
          <Suspense>
            <ReactCompareImage
              leftImage={firstPhoto}
              rightImage={secondPhoto}
              leftImageCss={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              rightImageCss={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              aria-label="Compare images"
            />
          </Suspense>
        )}
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

      <img
        src={firstPhoto}
        alt="First"
        onLoad={handleImageLoad}
        style={{ display: "none" }}
      />
      <img
        src={secondPhoto}
        alt="Second"
        onLoad={handleImageLoad}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default TwentyTwentyAnimation;
