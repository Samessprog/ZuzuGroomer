import React from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const MainBio: React.FC = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0%)" : "translateX(100%)",
    config: {tension: 150, friction: 50 },
  });

  return (
    <section className="w-full flex bio-info-holder ">
      <div className="bio-img-holder w-4/12 overflow-hidden flex  object-cover">
        <figure className="w-12/12 img-holder">
          <img
            src="https://www.gry-online.pl/i/h/22/431209879.jpg"
            alt="loading err w-full"
            className="bio-img"
          />
        </figure>
      </div>
      <article className="bio w-7/12 overflow-hidden">
        <div ref={ref}>
          <animated.div style={props}>
            <div>
              <h1 className="bio-header font-bold mb-7">
                <i>Priviet</i>
              </h1>
              <div className="fs-3 text-lg bio-main w-10/12 ">
                <p className="mb-5">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet,
                </p>
                <p className="mb-4">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p className="mb-4">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p className="mb-4">
                  Nazywam się zuzu hasu Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur
                </p>
                <p className="mb-4">
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
              <h2 className="text-xl bio-footer font-bold mt-7 flex justify-end w-9/12">
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
