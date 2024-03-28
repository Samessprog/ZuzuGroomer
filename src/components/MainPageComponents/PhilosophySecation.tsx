import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const PhilosophySection: React.FC = () => {
  const [philosophyElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const philosophyAnimate = (elementInView: boolean, translateX: string) => {
    return useSpring({
      opacity: elementInView ? 1 : 0,
      transform: elementInView ? `translateX(0%)` : `translateX(${translateX})`,
      config: { tension: 150, friction: 80 },
    });
  };

  return (
    <section ref={philosophyElement} className="overflow-hidden">
      <div className={`flex flex-col items-center mt-20 md:mt-28 `}>
        <animated.div style={philosophyAnimate(elementInView, "100%")}>
          <header className="motto-header w-full color-pink special-font text-8xl md:text-9xl mb-5 md:mb-0 text-center tracking-wider transition-all ease-in-out duration-300">
            Moja filozofia
          </header>
        </animated.div>
        <animated.div style={philosophyAnimate(elementInView, "-100%")}>
          <div className="text-lg mb-5 md:mb-0 mt-5 sm:mt-10">Umysł • Ciało • Dusza</div>
        </animated.div>
        <animated.div style={philosophyAnimate(elementInView, "100%")}>
          <div className="font-bold mt-5 sm:mt-14 text-xl md:text-2xl xl:text-4xl  text-center transition-all ease-in-out duration-300">
            KAŻDY Z NAS NOSI W SOBIE PIĘKNO
          </div>
          <div className="text-lg mb-10 text-center pl-5 pr-5 mt-10 sm:mt-14">
            Cała sztuka polega na tym, by umieć je odkryć…. – Eric Emmanuel
            Schmitt
          </div>
        </animated.div>
        <animated.div
          style={philosophyAnimate(elementInView, "-100%")}
          className="w-full xl:w-8/12"
        >
          <div className="flex flex-col  pl-5 pr-5 items-center  w-full">
            <p className="mb-8 ms:mb-10 xl:mb-5 text-lg text-center ">
              Podstawą udanego pobytu u mnie jest poczucie bezpieczeństwa, które
              pozwoli się odpowiednio zrelaksować oraz wypocząć.
            </p>
            <p className="mb-8 ms:mb-10 xl:mb-5 text-lg text-center ">
              Efektem takiego stanu jest dobry humor i samopoczucie Twojego
              pupila.
            </p>
            <p className="text-lg text-center ">
              Do dyspozycji zwierzaków są różnego rodzaju zabawki typu kong,
              piłki, pluszaki, zabawki logiczne i maty węchowe. Każdy znajdzie
              coś dla siebie. Oczywiście nie zapominajmy o świetnym towarzystwie
              moich suczek, które chętnie potowarzyszą przy zabawie.
            </p>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
