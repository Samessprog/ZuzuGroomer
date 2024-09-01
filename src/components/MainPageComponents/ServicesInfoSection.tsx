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
    translate: string
  ): SpringValues<React.CSSProperties> => {
    return useSpring({
      opacity: elementInView ? 1 : 0,
      transform: elementInView ? `translateX(0%)` : `${translate}`,
      config: { tension: 120, friction: 50 },
    });
  };

  return (
    <section
      ref={servicesRefElement}
      className="overflow-hidden w-full"
      aria-labelledby="services-title"
    >
      <div
        className="w-full flex services-container items-center justify-center bg-cover bg-fixed mt-20 flex-col xl:flex-row"
        role="group"
        aria-labelledby="services-title"
      >
        <header>
          <h2 id="services-title" className="sr-only">
            Nasze Usługi
          </h2>
        </header>
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateX(-100%)")}
          className="flex flex-col items-center item-services mb-16 xl:mb-0 text-center w-full sm:w-4/12 mt-8 sm:mt-0"
          role="region"
          aria-labelledby="professional-grooming-title"
        >
          <h3
            id="professional-grooming-title"
            className="info-header special-font color-pink tracking-wide"
          >
            Profesjonalny
          </h3>
          <p className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            GROOMING
          </p>
          <p className="text-sm">BEZPIECZNY • DOKŁADNY • ŁAGODNY</p>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateY(100%)")}
          className="flex flex-col w-full sm:w-4/12 items-center item-services mb-16 xl:mb-0 text-center"
          role="region"
          aria-labelledby="certified-behaviorist-title"
        >
          <h3
            id="certified-behaviorist-title"
            className="info-header special-font color-pink tracking-wide"
          >
            Certyfikowany
          </h3>
          <p className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            BEHAWIORYSTA
          </p>
          <p className="text-sm">WYROZUMIAŁY • SPOKOJNY • WYTRWAŁY</p>
        </animated.div>
        <animated.div
          style={servicesInfoAnimate(elementInView, "translateX(100%)")}
          className="flex flex-col w-full sm:w-4/12 items-center item-services sm:mb-16 xl:mb-0 text-center"
          role="region"
          aria-labelledby="first-visit-title"
        >
          <h3
            id="first-visit-title"
            className="info-header special-font color-pink tracking-wide"
          >
            Komfortowa
          </h3>
          <p className="pb-4 font-bold fs-28 transition-all ease-out duration-300">
            PIERWSZA WIZYTA
          </p>
          <p className="text-sm">SPOKOJNA • PRZYJEMNA • POUCZAJĄCA</p>
        </animated.div>
      </div>
    </section>
  );
};

export default ServicesInfoSection;
