import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "react-spring";
import { PulseLoader } from "react-spinners";
import { Link } from "react-router-dom";

const TwentyTwentyAnimation = lazy(
  async () => await import("../GalleryComponents/TwentyTwentyAnimation")
);

const PetCareSection: React.FC = () => {
  const [petRef, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animatePetSection = useSpring({
    opacity: elementInView ? 1 : 0,
    transform: elementInView ? `translateX(0%)` : `translateX(-100%)`,
    duration: 600,
    config: { tension: 180, friction: 70 },
  });

  const p1 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";
  const p4 =
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais";

  return (
    <section ref={petRef}>
      {elementInView && (
        <div className="w-full flex mb-20 overflow-hidden mt-20 items-center flex-col xl:flex-row">
          <animated.div
            style={animatePetSection}
            className="flex justify-center flex-col items-center text-center w-full xl:w-7/12"
            role="region"
            aria-labelledby="petSectionHeader"
          >
            <div
              id="petSectionHeader"
              className="special-font color-pink mb-5 xl:mb-0 md:text-5xl tracking-wider transition-all ease-in-out duration-200 text-5xl"
              role="heading"
              aria-level="1"
            >
              Zmiany, zmiany, zmiany
            </div>
            <div
              className="fs-40 font-semibold mb-10 small-font-resp pl-2 pr-2 text-center"
              role="heading"
              aria-level="2"
            >
              BO KAŻDY CHCE, WYGLĄDAĆ DOBRZE
            </div>
            <div
              className="font-semibold mb-5 responsive-font pl-2 pr-2 text-base"
              role="heading"
              aria-level="3"
            >
              Zapraszam na kompleksową pielęgnację małe i duże psy
            </div>
            <button
              className="special-button bg-pink font-semibold flex items-center text-white rounded-3xl pl-7 pr-5 p-2.5 mt-8 xl:mt-0 transform hover:transform-x-0 transition-all ease-out duration-200"
              aria-label="Learn more about grooming services"
              tabIndex={0}
            >
              <>Dowiedz się więcej</>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                className="fill-white ml-1 special-button-animate transition-all ease-in-out duration-200"
                aria-hidden="true"
              >
                <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
              </svg>
            </button>
          </animated.div>

          <div
            className="xl:mt-6 flex justify-center flex-col TwentyTwenty mt-10 pl-5 pr-5 md:pl-0 md-mr-0 w-full sm:w-10/12 md:w-9/12 xl:w-5/12 transition-all ease-in-out duration-200 items-center"
            role="region"
            aria-labelledby="twentyTwentyDescription"
          >
            <div
              id="twentyTwentyDescription"
              className="text-sm text-gray-500 flex justify-center mb-3"
              aria-label="Slide the slider to compare images"
            >
              Przesuń suwak i sprawdź...
            </div>
            <div
              className="Twentytwenty-container xl:w-10/12 relative mb-2 overflow-hidden transition-all ease-in-out duration-200 text-center sm:w-9/12 w-full"
              aria-live="polite"
              aria-label="Image comparison slider"
            >
              <Suspense
                fallback={
                  <div className="w-full mt-20">
                    <PulseLoader
                      color="#ff00cc"
                      margin={15}
                      speedMultiplier={0.5}
                      aria-label="Loading Spinner"
                    />
                  </div>
                }
              >
                <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
              </Suspense>
            </div>
            <div
              className="w-10/12 flex justify-end mt-2 text-gray-500 text-sm"
              role="link"
            >
              <Link to="/Galeria" aria-label="Gallery Page">
                Więcej zmian tutaj!
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PetCareSection;
