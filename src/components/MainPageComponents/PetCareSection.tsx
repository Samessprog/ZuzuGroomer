import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { PulseLoader } from "react-spinners";

const TwentyTwentyAnimation = lazy(
  async () => await import("./TwentyTwentyAnimation"),
);

const PetCareSection: React.FC = () => {
  const [petRef, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animatePetSection = useSpring({
    opacity: elementInView ? 1 : 0,
    transform: elementInView ? `translateX(0%)` : `translateX(-100%)`,
    duration: 600,
    config: { tension: 180, friction: 70 },
  });

  return (
    <section ref={petRef}>
      {elementInView && (
        <div className="w-full flex mb-20 overflow-hidden mt-20 items-center flex-col xl:flex-row">
          <animated.div
            style={animatePetSection}
            className="flex justify-center flex-col items-center text-center w-full xl:w-7/12"
          >
            <label className="special-font color-pink mb-5 xl:mb-0 md:text-5xl tracking-wider transition-all ease-in-out duration-200 text-5xl">
              Zmiany, zmiany, zmiany
            </label>
            <label className="fs-40 font-semibold mb-10  small-font-resp pl-2 pr-2 text-center ">
              BO KAŻDY CHCE, WYGLĄDAĆ DOBRZE
            </label>
            <label className="font-semibold mb-5 responsive-font  pl-2 pr-2 text-base">
              Zapraszam na kompleksową pielęgnację małe i duże psy oraz koty
            </label>
            <button className="special-button bg-pink font-semibold flex items-center text-white rounded-3xl pl-7 pr-5 p-2.5 mt-8 xl:mt-0 transform hover:transform-x-0 transition-all ease-out duration-200">
              <div>Dowiedz się więcej</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="fill-white ml-1 special-button-animate transition-all ease-in-out duration-200"
              >
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
              </svg>
            </button>
          </animated.div>
          <div className="xl:mt-6 flex justify-center flex-col TwentyTwenty mt-10 pl-5 pr-5 md:pl-0 md-mr-0 w-full sm:w-10/12 md:w-9/12 xl:w-5/12 transition-all ease-in-out duration-200 ">
            <label className="text-sm text-gray-800 flex justify-center mb-3">
              Przesuń suwak i sprawdź...
            </label>
            <div className="Twentytwenty-container xl:w-10/12 relative mb-2 overflow-hidden transition-all ease-in-out duration-200 text-center w-full">
              <Suspense
                fallback={
                  <PulseLoader
                    color="#ff00cc"
                    margin={15}
                    speedMultiplier={0.5}
                    aria-label="Loading Spinner"
                  />
                }
              >
                <TwentyTwentyAnimation />
              </Suspense>

              <div className="absolute twentyTwenty-description left-0 flex justify-between w-full opacity-0 transform-all ease-in-out duration-200 text-base bottom-2">
                <div className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb1.5">
                  Przed zmianą
                </div>
                <div className="twentyTwenty-description-item pl-4 pr-4 pt-1.5 pb1.">
                  Po zmianie
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PetCareSection;
