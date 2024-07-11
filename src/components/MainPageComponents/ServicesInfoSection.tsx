import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, type SpringValues } from "react-spring";

const ServicesInfoSection: React.FC = () => {
  const [servicesRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const servicesInfoAnimate = (
    elementInView: boolean,
    translate: string,
  ): SpringValues<React.CSSProperties> => {
    return useSpring({
      opacity: elementInView ? 1 : 0,
      transform: elementInView ? `translateX(0%)` : `${translate}`,
      config: { tension: 120, friction: 50 },
    });
  };

  return (
    <section ref={servicesRefElement} className="overflow-hidden w-full">
      <div className="w-full flex services-container items-center justify-center bg-cover bg-fixed mt-20 flex-col xl:flex-row ">
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateX(-100%)")}
          className="flex flex-col items-center item-services mb-16 xl:mb-0 text-center w-full sm:w-4/12 mt-8 sm:mt-0"
        >
          <label className="info-header special-font color-pink tracking-wide">
            Profesjonalny
          </label>
          <label className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            GROOMING
          </label>
          <label className=" text-sm">BEZPIECZNY • DOKŁADNY • ŁAGODNY</label>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateY(100%)")}
          className="flex flex-col w-full sm:w-4/12 items-center item-services mb-16 xl:mb-0  text-center "
        >
          <label className="info-header special-font color-pink tracking-wide">
            Certyfikowany
          </label>
          <label className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            BEHAWIORYSTA
          </label>
          <label className=" text-sm">WYROZUMIAŁY • SPOKOJNY • WYTRWAŁY</label>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateX(100%)")}
          className="flex flex-col w-full sm:w-4/12 items-center item-services sm:mb-16 xl:mb-0 text-center"
        >
          <label className="info-header special-font color-pink tracking-wide">
            Komfortowa
          </label>
          <label className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            PIERWSZA WIZYTA
          </label>
          <label className="text-sm ">SPOKOJNA • PRZYJEMNA • POUCZAJĄCA</label>
        </animated.div>
      </div>
    </section>
  );
};

export default ServicesInfoSection;
