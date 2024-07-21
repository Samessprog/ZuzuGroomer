import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  from: number;
  isVisible: boolean;
}

const Numbers: React.FC = () => {
  const [numberRefElement, elementInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const AnimatedNumber = ({
    value,
    from,
  }: AnimatedNumberProps): JSX.Element => {
    const { number } = useSpring({
      from: { number: from },
      to: { number: elementInView ? value : 0 },
      config: { duration: 2000 },
    });

    return (
      <animated.span>
        {number.interpolate((num: number) => Math.floor(num))}
      </animated.span>
    );
  };

  return (
    <section ref={numberRefElement}>
      {elementInView && (
        <div className="number-holder mt-20 p-8 flex justify-center items-center flex-col bg-[#f9f9f9] color-pink">
          <div
            className="flex number-header justify-center font-semibold text-3xl md:text-4xl mb-8 tracking-wide mr-0 xl:mr-20"
            role="heading"
            aria-level={1}
          >
            My w liczbach
          </div>
          <div
            className="flex justify-between items-center w-full 2xl:w-9/12 flex-col xl:flex-row"
            role="group"
            aria-labelledby="years-description"
          >
            <div className="flex flex-col mt-5 xl:mt-0">
              <span className="font-semibold number-item text-3xl md:text-4xl  ">
                <AnimatedNumber value={3} from={10} isVisible={elementInView} />{" "}
                lata
              </span>
              <span className="font-semibold text-sm md:text-base text-center">
                doświadczenia
              </span>
            </div>
            <div className="flex flex-col items-center  mt-7 xl:mt-0">
              <span className="font-semibold number-item text-3xl md:text-4xl ">
                <AnimatedNumber
                  value={623}
                  from={700}
                  isVisible={elementInView}
                />
              </span>
              <span className="font-semibold text-sm md:text-base">
                Zadowolonych piesków
              </span>
            </div>
            <div className="flex flex-col items-center  mt-7 xl:mt-0">
              <span className="font-semibold number-item text-3xl md:text-4xl ">
                <AnimatedNumber
                  value={1000}
                  from={210}
                  isVisible={elementInView}
                />
              </span>
              <span className="font-semibold  text-sm md:text-base">
                Wykorzystane litry szamponu
              </span>
            </div>
            <div className="flex flex-col items-center  mt-7 xl:mt-0">
              <span className="font-semibold number-item text-3xl md:text-4xl ">
                <AnimatedNumber value={9} from={18} isVisible={elementInView} />
              </span>
              <span className="font-semibold  text-sm md:text-base">
                Certyfikatów
              </span>
            </div>
            <div className="flex flex-col items-center  mt-7 xl:mt-0">
              <span className="font-semibold number-item text-3xl md:text-4xl  ">
                <AnimatedNumber value={1} from={5} isVisible={elementInView} />
              </span>
              <span className="font-semibold  text-sm md:text-base">
                Udział w zawodach
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Numbers;
