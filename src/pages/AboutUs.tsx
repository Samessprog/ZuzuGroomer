import React from "react";
import GalleryPhoto from "../components/GalleryComponents/GalleryPhoto";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import FullscreenImageViewer from "../components/GalleryComponents/FullscreenImageViewer";
import pp1 from "../assets/ZdjęciaPsów/3.jpeg";
import certificates from "../context/Certyficates";

const AboutUs: React.FC = () => {
  const [galleryRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const galleryAnimate = useSpring({
    opacity: elementInView ? 1 : 0,
    display: elementInView ? "grid" : "hidden",
    transform: elementInView ? `scale(1)` : `scale(0.1)`,
    config: { tension: 150, friction: 50 },
  });

  const fullScreenFlag = useSelector(
    (state: RootState) => state.generalStates.fullScreen,
  );

  const [AboutUsFirstTabRefElement, elementInViewFirst] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const AboutUsAnimate = useSpring({
    opacity: elementInViewFirst ? 1 : 0,
    transform: elementInViewFirst ? "translateX(0%)" : "translateX(-100%)",
    config: { tension: 190, friction: 65 },
  });

  const [iconsRef, elementInViewIcon] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const iconsAnimate = useSpring({
    opacity: elementInViewIcon ? 1 : 0,
    transform: elementInViewFirst ? "scale(1)" : "scale(0.1)",
    config: { tension: 150, friction: 50 },
  });

  return (
    <>
      <div className="relative">
        <img
          alt="loading err"
          className="contact-img w-full object-cover"
          src={p1}
          role="img"
        />
        <header>
          <span
            className="absolute dog-behaviorist-text text-4xl md:text-6xl top-1/2 left-1/2 font-semibold text-center color-pink"
            role="heading"
            aria-level={1}
          >
            <h1>
              {" "}
              <em>O nas</em>
            </h1>
          </span>
        </header>
      </div>
      <main className="pl-5 pr-5 lg:pr-10">
        <article>
          <div className="flex justify-center mb-8 lg:mb-16">
            <div className="mt-10 text-base lg:text-base leading-relaxed text-center w-11/12 lg:8/12">
              <span className="font-semibold">
                Cześć, Nazywam się Zuzanna Hassa, jestem certyfikowanym
                Groomerem i Opiekunem Zwierząt.
              </span>{" "}
              Nieustannie poszerzam i doskonalę swoją wiedzę oraz umiejętności,
              uczestnicząc w różnego rodzaju seminariach i szkoleniach.
              Zapraszam do skorzystania z moich usług, gdzie profesjonalizm
              łączy się z miłością do zwierząt. Gwarantuję, że każda wizyta
              będzie przyjemnym i bezstresowym doświadczeniem dla Twojego
              pupila.
            </div>
          </div>
          <div
            className=" lg:mt-10 flex flex-col lg:flex-row"
            ref={AboutUsFirstTabRefElement}
          >
            <div className="lg:w-5/12 ml-0 lg:ml-5 rounded flex justify-center about-us-img object-cover ">
              <div className="w-full md:w-8/12 lg:w-full">
                <img
                  alt="loading err"
                  className="w-full h-full object-cover rounded "
                  src={pp1}
                />
              </div>
            </div>
            <div className="w-full lg:w-7/12 pl-0 lg:pl-5 text-justify mt-8 lg:mt-0 text-base lg:text-base leading-relaxed">
              <>
                {" "}
                <p>
                  W moim salonie głównym priorytetem jest komfort pupila. Z
                  wielką uwagą przygotowuję psa do bezstresowej wizyty, dbając o
                  to, aby czuł się <b> bezpiecznie i komfortowo</b> od samego
                  początku. Po wielu ukończonych szkoleniach zdobyłam
                  odpowiednie{" "}
                  <b>
                    doświadczenie związane z behawioryzmem oraz profesjonalną
                    pielęgnacją psa.
                  </b>{" "}
                  Dzięki temu jestem w stanie lepiej zrozumieć potrzeby i
                  zachowania moich czworonożnych klientów. U nas zawsze panuje{" "}
                  <b>cisza i spokój</b>, co pozwala na jeszcze lepsze
                  porozumienie między mną a psem. Tworzę przyjazną atmosferę,
                  która minimalizuje stres zwierzęcia, co jest niezwykle ważne
                  podczas zabiegów pielęgnacyjnych.{" "}
                  <b>
                    Przywiązuję dużą wagę do czystości i starannego wykonywania
                    swoich obowiązków, co gwarantuje higieniczne i bezpieczne
                    warunki dla każdego pupila.
                  </b>
                </p>
                <p className="mt-4">
                  <b>
                    {" "}
                    Stale poszerzam swoją wiedzę i umiejętności, uczestnicząc w
                    kursach i szkoleniach, aby móc oferować usługi na najwyższym
                    poziomie.
                  </b>{" "}
                  Wierzę, że spokojna i pełna miłości atmosfera podczas zabiegów
                  wpływa pozytywnie na doświadczenia moich czworonożnych
                  klientów, dzięki czemu każda wizyta staje się przyjemnością.
                </p>
                <p className="mt-4 font-semibold">
                  Wierzę, że relacja oparta na zaufaniu między groomerem a
                  zwierzęciem jest kluczem do sukcesu. Dlatego zawsze staram się
                  budować pozytywną więź z każdym psem, który trafia do mojego
                  salonu.
                </p>
              </>
            </div>
          </div>
          <div
            className="mt-10 flex flex-col lg:flex-row"
            ref={AboutUsFirstTabRefElement}
            aria-labelledby="about-us-section"
          >
            <animated.div
              className="w-full lg:w-6/12 lg:pl-5 text-justify"
              style={AboutUsAnimate}
              role="region"
              aria-labelledby="about-us-content"
            >
              <div className="text-4xl font-semibold color-pink mb-5 flex items-center w-full justify-center lg:justify-start">
                <div className="mr-3 lg:mr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="35px"
                    viewBox="0 -960 960 960"
                    width="35px"
                    fill="#000000"
                    className="rotate-12"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z" />
                  </svg>
                </div>
                <header>
                  <h2>
                    <i>Psi fryzjer</i>
                  </h2>
                </header>
              </div>
              <div className="mb-5 text-justify">
                W naszym salonie priorytetem jest nie tylko dbanie o komfort
                psów, ale także zapewnienie najwyższej jakości usług. Rozumiemy,
                że każdy pies jest wyjątkowy, dlatego staramy się zapewnić
                spokojną i przyjazną atmosferę podczas zabiegów pielęgnacyjnych.
              </div>
              <div className="">
                <ul aria-label="service list">
                  <li className="text-xl flex items-center list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="21px"
                      viewBox="0 -960 960 960"
                      width="21px"
                      fill="#00000"
                      className="mr-2"
                      focusable="true"
                      aria-label="  Zaufana opieka"
                    >
                      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                    </svg>
                    Zaufana opieka
                  </li>
                  <li className="text-xl flex items-center list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="21px"
                      viewBox="0 -960 960 960"
                      width="21px"
                      fill="#00000"
                      className="mr-2"
                      focusable="true"
                      aria-label="Profesjonalna pielęgnacja"
                    >
                      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                    </svg>
                    Profesjonalna pielęgnacja
                  </li>
                  <li className="text-xl flex items-center list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="21px"
                      viewBox="0 -960 960 960"
                      width="21px"
                      fill="#00000"
                      className="mr-2"
                      focusable="true"
                      aria-label="Indywidualne podejście"
                    >
                      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                    </svg>
                    Indywidualne podejście
                  </li>
                  <li className="text-xl flex items-center list-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="21px"
                      viewBox="0 -960 960 960"
                      width="21px"
                      fill="#00000"
                      className="mr-2"
                      focusable="true"
                      aria-label="Najlepsze kosmetyki"
                    >
                      <path d="M380-80q-59 0-99.5-40.5T240-220q0-9 2.5-14t-.5-8q-3-3-8-.5t-14 2.5q-59 0-99.5-40.5T80-380q0-59 40.5-99.5T220-520q23 0 42 6t36 18l166-166q-12-17-18-36t-6-42q0-59 40.5-99.5T580-880q59 0 99.5 40.5T720-740q0 9-2.5 14t.5 8q3 3 8 .5t14-2.5q59 0 99.5 40.5T880-580q0 59-40.5 99.5T740-440q-23 0-42-6t-36-18L496-298q12 17 18 36t6 42q0 59-40.5 99.5T380-80Zm0-80q26 0 43-17t17-43q0-9-2.5-17.5T430-254q-17-24-14-51.5t24-48.5l166-166q21-21 48.5-24t51.5 14q8 5 16.5 7.5T740-520q26 0 43-17t17-43q0-26-17-43t-43-17q-35 0-49-3.5T662-662q-15-15-18.5-29t-3.5-49q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 11 2 18.5t8 15.5q17 24 14 51.5T520-606L354-440q-21 21-48.5 24T254-430q-8-5-16.5-7.5T220-440q-26 0-43 17t-17 43q0 26 17 43t43 17q35 0 49 3.5t29 18.5q15 15 18.5 29t3.5 49q0 26 17 43t43 17Zm100-320Z" />
                    </svg>
                    Najlepsze kosmetyki
                  </li>
                </ul>
              </div>
              <div className="mt-5 mb-8 lg:mb-0 flex justify-center lg:justify-start">
                <button
                  className="appointment-button text-white rounded-3xl text-lg"
                  role="button"
                  tabIndex={0}
                >
                  Zapisz się na wizytę online
                </button>
              </div>
            </animated.div>
            <div className="lg:w-5/12 ml-0 lg:ml-5 rounded flex justify-center about-us-img object-cover ">
              <div className="w-full md:w-8/12 lg:w-full">
                <img
                  alt="loading err"
                  className="w-full h-full object-cover rounded "
                  src={pp1}
                />
              </div>
            </div>
          </div>
        </article>
        <article className="w-full flex justify-center">
          <div className="mt-12 ">
            <header>
              <div
                className="text-lg lg:text-2xl font-semibold text-center"
                aria-label="Zapraszam do odwiedzenia moich social mediów"
                role="heading"
                aria-level={2}
              >
                <h2>Zapraszam do odwiedzenia moich social mediów</h2>
              </div>
            </header>
            <div
              className="flex justify-center mt-5 flex-col lg:flex-row items-center lg:items-start"
              role="group"
              aria-label="Social media icons"
            >
              <div className="flex  social-holder">
                <animated.div
                  className=" rounded-full cursor-pointer p-[10px] bg-Tick"
                  style={iconsAnimate}
                  role="link"
                  aria-label="TikTok"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="45px"
                    height="45px"
                    className="fill-white ml-0.5 mt-0.5"
                  >
                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 12 7 L 12 14 C 12 14.56503 11.56503 15 11 15 C 10.43497 15 10 14.56503 10 14 C 10 13.43497 10.43497 13 11 13 L 11 11 C 9.3550302 11 8 12.35503 8 14 C 8 15.64497 9.3550302 17 11 17 C 12.64497 17 14 15.64497 14 14 L 14 10.232422 C 14.616148 10.671342 15.259118 11 16 11 L 16 9 C 15.952667 9 15.262674 8.7809373 14.78125 8.3613281 C 14.299826 7.941719 14 7.4149911 14 7 L 12 7 z" />
                  </svg>
                </animated.div>
                <animated.div
                  className=" rounded-full ml-5 cursor-pointer p-[10px] bg-insta"
                  style={iconsAnimate}
                  role="link"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="45px"
                    height="45px"
                    className="fill-white  mt-0.5"
                  >
                    {" "}
                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                  </svg>
                </animated.div>
              </div>
              <animated.div
                className="flex  social-holder mt-4 lg:mt-0"
                style={iconsAnimate}
                role="link"
                aria-label="Facebook"
              >
                <div className="  rounded-full ml-0 lg:ml-5 cursor-pointer p-[11px] bg-facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="45px"
                    height="45px"
                    className="fill-white ml-0.5 mt-0.5 "
                  >
                    {" "}
                    <path d="M 12 2 C 6.477 2 2 6.477 2 12 C 2 17.523 6.477 22 12 22 C 17.523 22 22 17.523 22 12 C 22 6.477 17.523 2 12 2 z M 12 4 C 16.418 4 20 7.582 20 12 C 20 15.934398 17.156174 19.198143 13.414062 19.867188 L 13.414062 15.035156 L 15.779297 15.035156 L 16.130859 12.310547 L 13.429688 12.310547 L 13.429688 10.574219 C 13.429687 9.7862188 13.649297 9.2539062 14.779297 9.2539062 L 16.207031 9.2539062 L 16.207031 6.8222656 C 15.512031 6.7512656 14.814234 6.71675 14.115234 6.71875 C 12.041234 6.71875 10.621094 7.9845938 10.621094 10.308594 L 10.621094 12.314453 L 8.2773438 12.314453 L 8.2773438 15.039062 L 10.621094 15.039062 L 10.621094 19.873047 C 6.861695 19.218214 4 15.946666 4 12 C 4 7.582 7.582 4 12 4 z" />
                  </svg>
                </div>
                <animated.div
                  className="  rounded-full ml-5 cursor-pointer p-[10px] bg-maps"
                  style={iconsAnimate}
                  role="link"
                  aria-label="Google maps"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48px"
                    viewBox="0 -960 960 960"
                    width="48px"
                    className="fill-white  mt-0.5 ml-0.5"
                  >
                    <path d="M480.18-486.04q31.08 0 52.71-21.53 21.63-21.54 21.63-52.61 0-31.08-21.65-52.71-21.65-21.63-52.89-21.63-31.24 0-52.59 21.65-21.35 21.65-21.35 52.89 0 31.24 21.53 52.59 21.54 21.35 52.61 21.35ZM480-170.3q130.17-117.61 192.54-210.74 62.37-93.13 62.37-172.66 0-114.8-73.79-188.01-73.8-73.2-181.04-73.2t-181.11 73.2q-73.88 73.21-73.88 188.01 0 79.53 63.87 172.37Q352.83-288.48 480-170.3Zm0 104.43Q312.22-206.83 229.04-325.46q-83.17-118.63-83.17-228.24 0-155.49 100.76-248.24Q347.39-894.7 480-894.7q132.37 0 233.53 92.76Q814.7-709.19 814.7-553.7q0 109.61-83.46 228.24Q647.78-206.83 480-65.87ZM480-560Z" />
                  </svg>
                </animated.div>
              </animated.div>
            </div>
          </div>
        </article>
        <article
          className="w-full flex mt-10 flex-col items-center"
          ref={galleryRefElement}
        >
          <header>
            <div
              className="text-2xl font-semibold "
              role="heading"
              aria-level={3}
            >
              <h2>Dyplomy i osiągnięcia</h2>
            </div>
          </header>
          <div ref={iconsRef}></div>
          <div
            className={`gallery-holder w-12/12 pr-20 pl-20 grid mt-10 mb-20`}
            role="img"
          >
            {certificates.map((imgUrl, index) => (
              <animated.div style={galleryAnimate} key={index}>
                <GalleryPhoto
                  imgUrl={imgUrl}
                  index={index}
                  mainPhotos={certificates}
                />
              </animated.div>
            ))}
          </div>
        </article>
      </main>
      {fullScreenFlag.isOpen && <FullscreenImageViewer />}
    </>
  );
};

export default AboutUs;
