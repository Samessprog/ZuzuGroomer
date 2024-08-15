import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, type SpringValues } from "react-spring";
import { useLocation } from "react-router-dom";
import SocialIcons from "../components/OttherComponents/SocialIcons";
import ServicesCard from "../components/OttherComponents/ServicesCard";
import ServicesExtraInfo from "../components/OttherComponents/ServicesExtraInfo";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";

const Services: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash !== "") {
      const element = document.getElementById(hash.substring(1));
      if (element !== null) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const [ServicesListAnimateRef, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const ServicesListAnimate = (
    elementInView: boolean,
    translate: string,
    delayNumber: number,
  ): SpringValues<React.CSSProperties> => {
    return useSpring({
      opacity: elementInView ? 1 : 0,
      transform: elementInView ? `translateX(0%)` : `${translate}`,
      delay: delayNumber,
      config: { tension: 150, friction: 70 },
    });
  };

  return (
    <>
      <div className="relative">
        <img
          alt="loading err"
          className="contact-img w-full object-cover"
          src={p1}
          role="img"
        />
        <span
          className="absolute text-6xl fancy-text tracking-wide contact-info-text z-1 left-1/2 top-1/2"
          role="heading"
          aria-level={1}
        >
          <i>Usługi</i>
        </span>
      </div>
      <main>
        <div className=" flex justify-center items-center mt-10 ">
          <section className="w-full sm:w-8/12 text-center ps-5 pr-5 sm:ps-0 sm:pr-0">
            W naszym salonie oferujemy szeroki zakres profesjonalnych usług
            groomerskich, które sprawiają, że Twoje zwierzę będzie wyglądać i
            czuć się wyjątkowo. Dzięki naszemu doświadczeniu oraz indywidualnemu
            podejściu, każdy pupil jest traktowany z największą troską i
            miłością. Naszym celem jest nie tylko poprawa wyglądu, ale także
            zapewnienie komfortu i radości Twojemu czworonogowi, aby każda
            wizyta była przyjemnością.
          </section>
        </div>
        <section className="pl-10 pr-10 mb-20" ref={ServicesListAnimateRef}>
          <div className="flex w-full mt-20">
            <div
              className="w-7/12 pr-10 text-justify flex flex-col"
              role="note"
              aria-label="About-our-services"
            >
              W naszym salonie oferujemy kompleksowy zakres profesjonalnych
              usług groomerskich, które sprawią, że Twoje zwierzę będzie
              wyglądać olśniewająco i czuć się w pełni komfortowo. Nasze
              szerokie doświadczenie w pielęgnacji zwierząt oraz indywidualne
              podejście pozwalają nam dostosować każdą usługę do unikalnych
              potrzeb i preferencji każdego pupila. Starannie dobieramy techniki
              i produkty, aby zapewnić najwyższą jakość pielęgnacji, dbając
              zarówno o estetykę, jak i zdrowie sierści i skóry. Każdy zwierzak
              traktowany jest z pełną troską i miłością, co sprawia, że nasz
              salon to miejsce, gdzie każdy czworonóg może czuć się bezpiecznie
              i komfortowo. Naszym celem jest nie tylko poprawa wyglądu
              zwierzęcia, ale również zapewnienie mu radości i relaksu, aby
              każda wizyta była dla niego przyjemnością. Dzięki naszemu
              zaangażowaniu i dbałości o szczegóły, każda usługa jest wykonywana
              z najwyższą starannością, co sprawia, że Twoje zwierzę wróci do
              domu nie tylko piękne, ale i pełne energii oraz zadowolenia.
              <div
                className="color-pink font-semibold text-2xl mt-3 mb-2"
                role="heading"
                aria-label="Why-we?"
                aria-level={3}
              >
                Dlaczego my?
              </div>
              <ul id="whyWE">
                <animated.li
                  className="text-xl flex items-center list-icon"
                  style={ServicesListAnimate(
                    elementInView,
                    "translateX(-100%)",
                    25,
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="21px"
                    viewBox="0 -960 960 960"
                    width="21px"
                    fill="#00000"
                    className="mr-2"
                  >
                    <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                  </svg>
                  Zaufana opieka
                </animated.li>

                <animated.li
                  className="text-xl flex items-center list-icon"
                  style={ServicesListAnimate(
                    elementInView,
                    "translateX(-100%)",
                    100,
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="21px"
                    viewBox="0 -960 960 960"
                    width="21px"
                    fill="#00000"
                    className="mr-2"
                  >
                    <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                  </svg>
                  Komfortowe wizyty
                </animated.li>
                <animated.li
                  className="text-xl flex items-center list-icon"
                  style={ServicesListAnimate(
                    elementInView,
                    "translateX(-100%)",
                    150,
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="21px"
                    viewBox="0 -960 960 960"
                    width="21px"
                    fill="#00000"
                    className="mr-2"
                  >
                    <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                  </svg>
                  Bezpieczeństwo
                </animated.li>
                <animated.li
                  className="text-xl flex items-center list-icon"
                  style={ServicesListAnimate(
                    elementInView,
                    "translateX(-100%)",
                    170,
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="21px"
                    viewBox="0 -960 960 960"
                    width="21px"
                    fill="#00000"
                    className="mr-2"
                  >
                    <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                  </svg>
                  Profesjonalizm
                </animated.li>
                <animated.li
                  className="text-xl flex items-center list-icon"
                  style={ServicesListAnimate(
                    elementInView,
                    "translateX(-100%)",
                    200,
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="21px"
                    viewBox="0 -960 960 960"
                    width="21px"
                    fill="#00000"
                    className="mr-2"
                  >
                    <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                  </svg>
                  Staranność wykonywanych prac
                </animated.li>
                <animated.li
                  className="text-xl flex items-center list-icon"
                  style={ServicesListAnimate(
                    elementInView,
                    "translateX(-100%)",
                    50,
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="21px"
                    viewBox="0 -960 960 960"
                    width="21px"
                    fill="#00000"
                    className="mr-2"
                  >
                    <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                  </svg>
                  Program lojalnościowy
                </animated.li>
              </ul>
            </div>
            <div className="w-5/12">
              <img alt="loading err" src={p1} className="h-full w-full" />
            </div>
          </div>
        </section>
        <section>
          <div
            className="flex justify-center mt-10 mb-10"
            role="group"
            aria-label="Our services"
          >
            <span
              className="fancy-text font-semibold services-font"
              role="heading"
              aria-level={2}
            >
              Nasze usługi
            </span>
          </div>
          <div className="flex justify-center flex-wrap" id="services">
            <div className="w-full flex justify-center flex-wrap">
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 t mr-5 flex flex-col mb-5">
                <div className="card">
                  <div className="card-inner">
                    <div className="card-front">
                      <img alt="loading err" src={p1} />
                    </div>
                    <div className="card-back">
                      <img
                        alt="loading err"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmxg429Pw7YU0EHrstWHBO99GuJoG7O3TAYA&s"
                      />
                    </div>
                  </div>
                </div>
                <ServicesCard title="Kąpiel oraz pielęgnacja">
                  W naszym salonie staramy się o jak najbardziej bezstresowo i
                  komfortowo przeprowadzoną kapiel. Pielęgnacja wykonywana jest
                  przy użyciu profesionalnych kosmetyków bezpiecznych dla
                  zwierząt. Produkty dobierane są indywidualnie do każdego
                  pupila w zależności od rodzaju jego sierści oraz stanu jego
                  skóry.
                </ServicesCard>
              </div>
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 t mr-5 flex flex-col mb-5">
                <img alt="loading err" src={p1} />
                <ServicesCard title="Trymowanie">
                  Celem trymowania jest usunięcie martwych włosów. Co pomaga
                  utrzymać zdrową sierść i skórę oraz poprawia wygląd
                  zwierzęcia. Polega ono na regularnym wyciągnieciu włosa za
                  pomocą specialistycznych narzędzi takich jak kamień trymerski
                  lub nożyk. Usługa wykonywana jest ręcznie i jest dostosowana
                  do rasy psa, zgonie z wzorcem FCI.
                </ServicesCard>
              </div>
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 t mr-5 flex flex-col mb-5 mt-8">
                <img alt="loading err" src={p1} />
                <ServicesCard title="Strzyżenie">
                  {" "}
                  W salonie strzyżenie wykonywane jest po uprzedniej kapieli, co
                  zapewnia lepsze rezultaty i ułatwia pracę. Usługa dobrana jest
                  odpowiednio do rasy psa, sierści oraz kondycji włosa. Stan
                  sierści oceniany jest indywidalnie tak aby dostosować
                  odpowiednią technike strzyżenia zgodnie z wymaganiami klienta
                </ServicesCard>
              </div>
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 t mr-5 flex flex-col mb-5 mt-8">
                <img alt="loading err" src={p1} />
                <ServicesCard title="Czyszczenie uszów i obcinanie pazurków">
                  Pielęgnacja uszu polega na delikatnym wyskubaniu nadmiaru
                  włosków oraz przeczyszczeniu płatków uszu odpowiednim
                  preparatem. Podczas obcinania pazurków w naszym salonie
                  staramy się zapewnić komfort dla pupila, używając technik
                  zapewnijących bezpieczeństwo oraz precyzyjność.
                </ServicesCard>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center mb-10">
            <button className="services-button-visiting text-white">
              Umów się na wizytę!
            </button>
          </div>
        </section>
        <ServicesExtraInfo />
        <section className="pb-20 pt-20">
          <div className="w-full flex justify-center flex-col items-center">
            <span className="font-semibold color-pink text-4xl">
              Zobacz również
            </span>
            <SocialIcons />
          </div>
        </section>
      </main>
    </>
  );
};
export default Services;
