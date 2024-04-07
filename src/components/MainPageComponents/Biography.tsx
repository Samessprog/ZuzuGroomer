import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Blurhash } from "react-blurhash";

const MainBio: React.FC = () => {
  const [bioRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animatedDivProps = useSpring({
    opacity: elementInView ? 1 : 0,
    transform: elementInView ? "translateX(0%)" : "translateX(100%)",
    config: { tension: 190, friction: 65 },
  });

  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = (): void => {
    setLoaded(true);
  };

  return (
    <section ref={bioRefElement}>
      <div className={`w-full flex  mt-20 flex-col xl:flex-row `}>
        <div className="overflow-hidden flex object-cover xl:mr-12 justify-center xl:justify-start mr-0 ml-0 w-full xl:w-4/12 md:pl-4">
          <figure className="w-full flex justify-center bio-img  transition-all easy-in-out duration-300 ">
            {!loaded && (
              <div className="bio-img pl-4 overflow-hidden">
                <Blurhash
                  hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
                  width={800}
                  height={800}
                  resolutionX={32}
                  resolutionY={32}
                />
              </div>
            )}
            <img
              src="https://www.gry-online.pl/i/h/22/431209879.jpg"
              alt="loading err w-full"
              className="w-full h-full object-cover bio-imgs"
              style={{
                filter: loaded ? "none" : "blur(10px)",
                display: loaded ? "block" : "none",
              }}
              onLoad={handleImageLoad}
            />
          </figure>
        </div>
        <article className="overflow-hidden mt-12 xl:mt-0 flex-col xl:flex-row w-full xl:w-8/12">
          <div>
            <animated.div style={animatedDivProps}>
              <div>
                <h1 className="bio-header font-bold mb-7 text-[2rem] tracking-wide flex items-start pr-8 pl-8 xl:pr-0 xl:pl-0">
                  <i className="xl:ml-5">Cześć,</i>
                </h1>
                <div className="fs-3 text-base sm:text-[15px] bio-main w-full xl:w-9/12 pr-8 xl:pr-0 pl-8 xl:pl-0">
                  <p className="mb-5 xl:ml-5">
                    Nazywam się zuzu hasu Lorem ipsum dolor sit amet,
                    consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                    ipsum dolor sit amet,
                  </p>
                  <p className="mb-5 xl:ml-5">
                    Nazywam się zuzu hasu Lorem ipsum dolor sit amet,
                    consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                    ipsum dolor sit amet, consectetur
                  </p>
                  <p className="mb-5 xl:ml-5">
                    Nazywam się zuzu hasu Lorem ipsum dolor sit amet,
                    consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                    ipsum dolor sit amet, consectetur
                  </p>
                  <p className="mb-5 xl:ml-5">
                    Nazywam się zuzu hasu Lorem ipsum dolor sit amet,
                    consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                    ipsum dolor sit amet, consectetur
                  </p>
                  <p className="mb-5 xl:ml-5">
                    Nazywam się zuzu hasu Lorem ipsum dolor sit amet,
                    consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                    ipsum dolor sit amet, consectetur
                  </p>
                  <p className="xl:ml-5">
                    Nazywam się zuzu hasu Lorem ipsum dolor sit amet,
                    consectetur Lorem ipsum dolor sit amet, consectetur Lorem
                    ipsum dolor sit amet, consectetur
                  </p>
                </div>
                <h2 className="bio-footer font-bold flex justify-end w-12/12 xl:w-9/12 text-3xl tracking-wider mr-12 mt-8">
                  <i>Zuzanna Hassa</i>
                </h2>
              </div>
            </animated.div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default MainBio;
