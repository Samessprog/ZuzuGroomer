import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";

const ServicesInfoSection: React.FC = () => {
  const [servicesRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const servicesInfoAnimate = (elementInView: boolean, translate: string) => {
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
          className="flex flex-col items-center item-services mb-16 xl:mb-0 text-center w-4/12"
        >
          <label className="info-header special-font color-pink tracking-wide">
            Przyjazny
          </label>
          <label className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            GROOMING
          </label>
          <label className="font-semibold ">
            DOKŁADNY • BEZPIECZNY • DELIKATNY
          </label>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateY(100%)")}
          className="flex flex-col w-4/12 items-center item-services mb-16 xl:mb-0  text-center "
        >
          <label className="info-header special-font color-pink tracking-wide">
            Certyfikowany
          </label>
          <label className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            BEHAWIORYSTA
          </label>
          <label className="font-semibold ">
            WNIKLIWY • UWAŻNY • KREATYWNY
          </label>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateX(100%)")}
          className="flex flex-col w-4/12 items-center item-services mb-16 xl:mb-0  text-center"
        >
          <label className="info-header special-font color-pink tracking-wide">
            Komfortowy
          </label>
          <label className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            DOMOWY HOTELIK
          </label>
          <label className="font-semibold ">
            CAŁODOBOWY • RODZINNY • KAMERALNY
          </label>
        </animated.div>
      </div>
    </section>
  );
};

export default ServicesInfoSection;
