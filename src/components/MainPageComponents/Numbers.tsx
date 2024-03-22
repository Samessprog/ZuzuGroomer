import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  from: number;
  isVisible: boolean;
}

const Numbers = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const AnimatedNumber = ({ value, from }: AnimatedNumberProps) => {
    const { number } = useSpring({
      from: { number: hasStarted ? from : 0 },
      to: { number: inView ? value : 0 },
      config: { duration: 2000 },
    });

    return (
      <animated.span>
        {number.interpolate((num: number) => Math.floor(num))}
      </animated.span>
    );
  };

  return (
    <section
      ref={ref}
      className="number-holder mt-20 p-8 flex justify-center items-center flex-col"
    >
      <div className="flex number-header justify-center font-semibold  text-4xl md:text-5xl mb-8 tracking-wide">
        My w liczbach
      </div>
      <div className="flex justify-between items-center  w-full 2xl:w-9/12 flex-col xl:flex-row">
        <div className="flex flex-col mt-5 xl:mt-0">
          <span className="font-semibold number-item text-4xl md:text-5xl  ">
            <AnimatedNumber value={7} from={20} isVisible={inView} /> lat
          </span>
          <span className="font-semibold text-sm md:text-base text-center">
            na rynku
          </span>
        </div>
        <div className="flex flex-col items-center  mt-7 xl:mt-0">
          <span className="font-semibold number-item text-4xl md:text-6xl ">
            <AnimatedNumber value={7} from={20} isVisible={inView} />
          </span>
          <span className="font-semibold text-sm md:text-base">
            Zadowolonych piesków
          </span>
        </div>
        <div className="flex flex-col items-center  mt-7 xl:mt-0">
          <span className="font-semibold number-item text-4xl md:text-6xl ">
            <AnimatedNumber value={1000} from={210} isVisible={inView} />
          </span>
          <span className="font-semibold  text-sm md:text-base">
            Wykorzystane litry szamponu
          </span>
        </div>
        <div className="flex flex-col items-center  mt-7 xl:mt-0">
          <span className="font-semibold number-item text-4xl md:text-6xl ">
            <AnimatedNumber value={20} from={30} isVisible={inView} />
          </span>
          <span className="font-semibold  text-sm md:text-base">
            Certyfikatów
          </span>
        </div>
        <div className="flex flex-col items-center  mt-7 xl:mt-0">
          <span className="font-semibold number-item text-4xl md:text-6xl ">
            <AnimatedNumber value={20} from={30} isVisible={inView} />
          </span>
          <span className="font-semibold  text-sm md:text-base">
            Zdobyte nagrody i wyróżnienia
          </span>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
