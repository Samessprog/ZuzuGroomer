import React from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";


const ServicesInfoSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const servicesInfoAnimate = (
    inView: boolean,
    duration: number,
    translate: string
  ) => {
    return useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? `translateX(0%)` : `${translate}`,
      config: { tension: 190, friction: 60 },
      duration: duration,
    });
  };

  return (
    <section ref={ref} className="overflow-hidden ">
      <div className="w-full flex fancy-info-holder items-center justify-center">
        <animated.div
          style={servicesInfoAnimate(inView, 500, "translateX(-100%)")}
          className="flex flex-col w-4/12 items-center item-services"
        >
          <label className="info-header">Przyjazny</label>
          <label className="pb-4 font-bold fs-28">GROOMING</label>
          <label className="font-semibold">
            DOKŁADNY • BEZPIECZNY • DELIKATNY
          </label>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(inView, 500, "translateY(100%)")}
          className="flex flex-col w-4/12 items-center item-services"
        >
          <label className="info-header">Certyfikowany</label>
          <label className="pb-4 font-bold fs-28">BEHAWIORYSTA</label>
          <label className="font-semibold">WNIKLIWY • UWAŻNY • KREATYWNY</label>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(inView, 500, "translateX(100%)")}
          className="flex flex-col w-4/12 items-center item-services"
        >
          <label className="info-header">Komfortowy</label>
          <label className="pb-4 font-bold fs-28">DOMOWY HOTELIK</label>
          <label className="font-semibold">
            CAŁODOBOWY • RODZINNY • KAMERALNY
          </label>
        </animated.div>
      </div>
    </section>
  );
};

export default ServicesInfoSection;
