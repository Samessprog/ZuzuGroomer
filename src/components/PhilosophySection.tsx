import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const PhilosophySection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const getAnimation = (
    inView: boolean,
    tension: number,
    friction: number,
    translateX: string,
  ) => {
    return useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? `translateX(0%)` : `translateX(${translateX})`,
      config: { tension: tension, friction: friction },
    });
  };

  return (
    <section ref={ref} className="overflow-hidden">
      <div className="flex flex-col motto-holder items-center">
        <animated.div style={getAnimation(inView, 100, 50, "100%")}>
          <header className="motto-header">Moja filozofia</header>
        </animated.div>
        <animated.div style={getAnimation(inView, 120, 80, "-100%")}>
          <div className="text-lg">Umysł • Ciało • Dusza</div>
        </animated.div>
        <animated.div style={getAnimation(inView, 100, 50, "100%")}>
          <div className="font-bold fs-20 mt-5 mb-9 header-section">
            KAŻDY Z NAS NOSI W SOBIE PIĘKNO
          </div>
        </animated.div>
        <animated.div
          style={getAnimation(inView, 120, 70, "-100%")}
          className="w-8/12"
        >
          <div className="flex flex-col motto-description pl-5 pr-5 ">
            <p className="mb-3">
              Podstawą udanego pobytu u mnie jest poczucie bezpieczeństwa, które
              pozwoli się odpowiednio zrelaksować oraz wypocząć.
            </p>
            <p className="mb-3">
              Efektem takiego stanu jest dobry humor i samopoczucie Twojego
              pupila.
            </p>
            <p className="mb-3">
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
