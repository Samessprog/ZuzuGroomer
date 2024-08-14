import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Blurhash } from "react-blurhash";
import p1 from "../../assets/ZdjęciaPsów/3.jpeg"

const MainBio: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  const [bioRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const animatedDivProps = useSpring({
    opacity: elementInView ? 1 : 0,
    transform: elementInView ? "translateX(0%)" : "translateX(100%)",
    config: { tension: 190, friction: 65 },
  });

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
              src={p1}
              alt="loading err w-full"
              className="w-full h-full object-cover bio-imgs"
              style={{
                filter: loaded ? "none" : "blur(10px)",
                display: loaded ? "block" : "none",
              }}
              onLoad={handleImageLoad}
              role="img"
            />
          </figure>
        </div>
        <article className="overflow-hidden mt-12 xl:mt-0 flex-col xl:flex-row w-full xl:w-8/12">
          <animated.div style={animatedDivProps} role="document">
            <header>
              <h1
                className="bio-header font-bold mb-7 text-[2rem] tracking-wide flex items-start pr-8 pl-8 xl:pr-0 xl:pl-0"
                role="heading"
                aria-level="1"
              >
                <i className="xl:ml-5">Cześć,</i>
              </h1>
            </header>
            <div className="fs-3 text-base sm:text-[15px] bio-main w-full xl:w-10/12 pr-8 xl:pr-0 pl-8 xl:pl-0 text-justify">
              <p className="mb-5 xl:ml-5">
                Od najmłodszych lat zwierzęta towarzyszyły mi w życiu. Zawsze
                pasjonowałam się ich życiem i emocjami. Już jako dziecko
                trenowałam jazdę konną i opiekowałam się różnymi zwierzętami
                domowymi. Obecnie jestem szczęśliwą właścicielką kochanego psa
                rasy Shih Tzu o imieniu Shaggy.
              </p>
              <p className="mb-5 xl:ml-5">
                Psy zawsze były ważną częścią mojego życia, dlatego postanowiłam
                zawodowo związać się z groomingiem. Swoją karierę rozpoczęłam od
                podstawowego kursu u Katarzyny Palka w Canis Salon. Po
                ukończeniu kursu zaczęłam praktykować i uczyć się profesjonalnej
                pielęgnacji psów. Przez trzy lata współpracowałam z jednym z
                najlepszych specjalistów w Polsce, zdobywając cenną wiedzę i
                doświadczenie.
              </p>
              <p className="mb-5 xl:ml-5">
                Jestem profesjonalistką z dużymi pokładami empatii,
                wyrozumiałości i miłości do zwierząt. Pracuję ze wszystkimi
                rodzajami okrywy włosowej, w tym głównie z psami wymagającymi
                trymowania.
              </p>
              <p className="mb-5 xl:ml-5">
                Moim celem jako groomerki jest nie tylko dbanie o wygląd psów,
                ale także o ich komfort i dobre samopoczucie. Każde zwierzę
                traktuję indywidualnie, dostosowując pielęgnację do jego potrzeb
                i charakteru. Wierzę, że spokojna i pełna miłości atmosfera
                podczas zabiegów wpływa pozytywnie na doświadczenia moich
                czworonożnych klientów.
              </p>
            </div>
            <div>
              <h2
                className="bio-footer font-bold flex justify-end w-12/12 xl:w-10/12 text-3xl tracking-wider mt-5"
                role="heading"
                aria-level="2"
              >
                <i>Zuzanna Hassa</i>
              </h2>
            </div>
          </animated.div>
        </article>
      </div>
    </section>
  );
};

export default MainBio;
