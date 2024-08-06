import React from "react";
import SocialIcons from "../components/OttherComponents/SocialIcons";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, type SpringValues } from "react-spring";

const Services: React.FC = () => {
  const [ServicesListAnimateRef, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [ServicesExtraInfoRef, servicesExtraInfoView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const servicesExtraInf = (
    servicesExtraInfoView: boolean,
    translate: string
  ): SpringValues<React.CSSProperties> => {
    return useSpring({
      opacity: servicesExtraInfoView ? 1 : 0,
      transform: servicesExtraInfoView ? `translateX(0%)` : `${translate}`,
      config: { tension: 170, friction: 70 },
    });
  };

  const ServicesListAnimate = (
    elementInView: boolean,
    translate: string,
    delayNumber: number
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
                    25
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
                    100
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
                    150
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
                    170
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
                    200
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
                    50
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
                <span
                  className="flex justify-center mt-3 mb-3 text-lg font-semibold"
                  role="heading"
                  aria-level={5}
                >
                  <i>Kąpiel oraz Pielęgnacja</i>
                </span>
                <div
                  className="text-justify"
                  role="note"
                  aria-label="services-info"
                >
                  W naszym salonie staramy się o jak najbardziej bezstresowo i
                  komfortowo przeprowadzoną kapiel. Pielęgnacja wykonywana jest
                  przy użyciu profesionalnych kosmetyków bezpiecznych dla
                  zwierząt. Produkty dobierane są indywidualnie do każdego
                  pupila w zależności od rodzaju jego sierści oraz stanu jego
                  skóry.
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 t mr-5 flex flex-col mb-5">
                <img alt="loading err" src={p1} />
                <span
                  className="flex justify-center mt-3 mb-3 text-lg font-semibold"
                  role="heading"
                  aria-level={5}
                >
                  <i>Trymowanie</i>
                </span>
                <div
                  className="text-justify"
                  role="note"
                  aria-label="services-info"
                >
                  Celem trymowania jest usunięcie martwych włosów. Co pomaga
                  utrzymać zdrową sierść i skórę oraz poprawia wygląd
                  zwierzęcia. Polega ono na regularnym wyciągnieciu włosa za
                  pomocą specialistycznych narzędzi takich jak kamień trymerski
                  lub nożyk. Usługa wykonywana jest ręcznie i jest dostosowana
                  do rasy psa, zgonie z wzorcem FCI.
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 t mr-5 flex flex-col mb-5 mt-8">
                <img alt="loading err" src={p1} />
                <span
                  className="flex justify-center mt-3 mb-3 text-lg font-semibold"
                  role="heading"
                  aria-level={5}
                >
                  <i>Strzyżenie</i>
                </span>
                <div
                  className="text-justify"
                  role="note"
                  aria-label="services-info"
                >
                  W salonie strzyżenie wykonywane jest po uprzedniej kapieli, co
                  zapewnia lepsze rezultaty i ułatwia pracę. Usługa dobrana jest
                  odpowiednio do rasy psa, sierści oraz kondycji włosa. Stan
                  sierści oceniany jest indywidalnie tak aby dostosować
                  odpowiednią technike strzyżenia zgodnie z wymaganiami klienta
                  oraz wzorcem FCI.
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-5/12 xl:w-4/12 t mr-5 flex flex-col mb-5 mt-8">
                <img alt="loading err" src={p1} />
                <span
                  className="flex justify-center mt-3 mb-3 text-lg font-semibold"
                  role="heading"
                  aria-level={5}
                >
                  <i>Czyszczenie uszów i obcinanie pazurków</i>
                </span>
                <div
                  className="text-justify"
                  role="note"
                  aria-label="services-info"
                >
                  Pielęgnacja uszu polega na delikatnym wyskubaniu nadmiaru
                  włosków oraz przeczyszczeniu płatków uszu odpowiednim
                  preparatem. Podczas obcinania pazurków w naszym salonie
                  staramy się zapewnić komfort dla pupila, używając technik
                  zapewnijących bezpieczeństwo oraz precyzyjność.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center mb-10">
            <button className="services-button-visiting text-white">
              Umów się na wizytę!
            </button>
          </div>
        </section>
        <section
          className="pl-10 pr-10 overflow-hidden"
          ref={ServicesExtraInfoRef}
        >
          <div
            className="font-semibold text-2xl color-pink flex justify-center mb-5 mt-5"
            role="heading"
            aria-level={4}
          >
            Dowiedz się więcej o:
          </div>
          <div className="flex justify-center">
            <animated.div
              className="mt-5 text-justify text-md w-6/12 mr-8 flex flex-col services-frame p-5"
              style={servicesExtraInf(
                servicesExtraInfoView,
                "translateX(-100%)"
              )}
            >
              <span
                className="font-semibold text-xl color-pink flex justify-center mb-2 "
                role="heading"
                aria-level={5}
                aria-label="Wizyta Zapoznawcza dla Psów"
              >
                Wizyta Zapoznawcza dla Psów
              </span>{" "}
              Wizyta zapoznawcza jest idealnym rozwiązaniem dla szczeniąt oraz
              psów dorosłych które nigdy dotąd niekorzystających z usług
              groomerskich lub które miały trudne doświadczenia w przeszłości.
              Polega ona na 30 minutowym zapoznaniu się psa z groomerem oraz
              salonem. Na tej wizycie nie są przeprowadzane żadne zabiegi
              groomerskie.{" "}
              <p
                className="mt-2 font-semibold color-pink text-lg"
                role="heading"
                aria-level={6}
                aria-label="Wizyta zapoznawcza obejmuje:"
              >
                Wizyta zapoznawcza obejmuje:
              </p>
              <ul className=" mt-2 ml-4 mb-2" id="adaptationServices">
                <li>Komfortowe wprowadzenie psa do salonu</li>
                <li>Zapoznanie groomera z psem</li>
                <li>
                  Sprawdzanie odruchów psa na różnego rodzaje dźwięki oraz szumy
                </li>
                <li>
                  Edukacja klienta jak powinna wyglądać prawidłowa pielęgnacja w
                  domu tak aby pies komfortowo odbywał wszelkie zabiegi
                  kosmetyczne.
                </li>
              </ul>
              <strong>
                {" "}
                Wizyta zapoznawcza jest całkowicie darmowo ponieważ ma ona
                polegać na poinstruowaniu właściciela jak prawidłowo pracować z
                własnym pupilem dla ich wspólnego komfortu.
              </strong>
            </animated.div>
            <animated.div
              className="mt-5 text-justify text-md w-6/12 ml-8 flex flex-col services-frame p-5 img-bg"
              style={servicesExtraInf(
                servicesExtraInfoView,
                "translateX(100%)"
              )}
            >
              <span
                className="font-semibold text-xl color-pink flex justify-center mb-2 "
                role="heading"
                aria-level={5}
                aria-label="Wizyta Adaptacyjna dla Psów"
              >
                Wizyta Adaptacyjna dla Psów
              </span>{" "}
              Wizyta adaptacyjna jest idealnym rozwiązaniem dla psów, które
              nigdy wcześniej nie korzystały z usług groomera lub miały trudne
              doświadczenia w przeszłości. Ta usługa jest także odpowiednia dla
              psów lękliwych, nielubiących pielęgnacji oraz tych, które przeżyły
              traumę. Ważne jest, aby właściciel poinformował nas o wszelkich
              problemach behawioralnych przed umówieniem wizyty.{" "}
              <p
                className="mt-2 font-semibold color-pink text-lg"
                id="introductoryVisit"
              >
                Wizyta adaptacyjna obejmuje:
              </p>
              <ul className="list-disc mt-2 ml-4 mb-2">
                <li>
                  Stopniowe wprowadzenie psa do zabiegów pielęgnacyjnych w
                  bezstresowej atmosferze.
                </li>
                <li>
                  {" "}
                  Indywidualne podejście i dostosowanie zabiegów do potrzeb oraz
                  zachowania psa.
                </li>
                <li>
                  Delikatne zabiegi pielęgnacyjne, które mają na celu zbudowanie
                  zaufania i komfortu psa.
                </li>
                <li>
                  Wsparcie i wskazówki dla właściciela, jak przygotować psa do
                  regularnych wizyt u groomera.
                </li>
              </ul>
              Cena wizyty adaptacyjnej jest ustalana indywidualnie na podstawie
              wielkości psa oraz jego potrzeb. W celu uzyskania szczegółowych
              informacji oraz umówienia wizyty prosimy o kontakt telefoniczny
              lub osobistą wizytę w salonie. Wierzymy, że dzięki naszej wizytom
              adaptacyjnym, każdy pies może czuć się bezpiecznie i komfortowo
              podczas pielęgnacji.
            </animated.div>
          </div>
        </section>
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
