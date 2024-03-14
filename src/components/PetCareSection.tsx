import React from "react";
import TwentyTwentyAnimation from "../components/TwentyTwentyAnimation";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";


const PetCareSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animatePetSection = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? `translateX(0%)` : `translateX(-100%)`,
    duration: 600,
    config: {tension: 180, friction: 70 },
  });

  return (
    <section
      className="w-full flex mt-10 mb-20 pet-care-holder overflow-hidden"
      ref={ref}
    >
      <animated.div
        style={animatePetSection}
        className="w-7/12 flex justify-center flex-col items-center respo"
      >
        <label className="change-fancy-text">Zmiany, zmiany, zmiany</label>
        <label className="fs-40 font-semibold mb-10 respo small-font-resp">
          BO KAŻDY CHCE, WYGLĄDAĆ DOBRZE
        </label>
        <label className="font-semibold mb-5 responsive-font">
          Zapraszam na kompleksową pielęgnację małe i duże psy oraz koty
        </label>
        <button className="special-button  mt-10 font-semibold flex items-center">
          <div>Dowiedz się więcej</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
            className="fill-white ml-1"
          >
            <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
          </svg>
        </button>
      </animated.div>
      <div className="w-5/12 flex justify-center flex-col TwentyTwenty">
        <label className="text-sm text-gray-800 flex justify-center mb-3">
          Przesuń suwak i sprawdź...
        </label>
        <div className="Twentytwenty-holder w-10/12">
          <TwentyTwentyAnimation />
        </div>
      </div>
    </section>
  );
};

export default PetCareSection;
