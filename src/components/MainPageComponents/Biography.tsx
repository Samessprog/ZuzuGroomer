import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const MainBio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(100%)",
    config: { tension: 190, friction: 65 },
  });

  return (
    <section className="w-full flex  mt-20 flex-col xl:flex-row ">
      <div className="overflow-hidden flex object-cover xl:mr-12 justify-center xl:justify-start mr-0 ml-0 w-full xl:w-4/12 ">
        <figure className="w-12/12 ">
          <img
            src="https://www.gry-online.pl/i/h/22/431209879.jpg"
            alt="loading err w-full"
            className="bio-img pl-4 transition-all easy-in-out duration-300"
          />
        </figure>
      </div>
      <article className="overflow-hidden mt-12 xl:mt-0 flex-col xl:flex-row w-full xl:w-8/12">
        <div ref={ref}>
          <animated.div style={props}>
            <div>
              <h1 className="bio-header font-bold mb-7 text-4xl tracking-wider flex items-start pr-8 pl-8 xl:pr-0 xl:pl-0">
                <i>Priviet</i>
              </h1>
              <div className="fs-3 text-lg bio-main w-full xl:w-10/12 pr-8 xl:pr-0 pl-8 xl:pl-0">
                <p className="mb-5">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet,
                </p>
                <p className="mb-5">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p className="mb-5">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p className="mb-5">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p className="mb-5">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p>
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
              </div>
              <h2 className="bio-footer font-bold  flex justify-end w-12/12 xl:w-9/12 text-4xl tracking-wider mr-12 mt-8">
                <i>Zuzanna Hassa</i>
              </h2>
            </div>
          </animated.div>
        </div>
      </article>
    </section>
  );
};

export default MainBio;
