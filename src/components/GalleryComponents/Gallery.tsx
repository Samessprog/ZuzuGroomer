import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import ErrorBoundary from "../OttherComponents/ErrorBoundary";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import p1 from "../../assets/ZdjęciaPsów/kek.jpg";
import p2 from "../../assets/A.jpg";
import p3 from "../../assets/B.jpg";
import p4 from "../../assets/C.jpg";

const Gallery: React.FC = () => {
  const [galleryRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const photos = [p1, p2, p3, p4, p1, p1];

  const galleryAnimate = useSpring({
    opacity: elementInView ? 1 : 0,
    display: elementInView ? "grid" : "hidden",
    transform: elementInView ? `scale(1)` : `scale(0.1)`,
    config: { tension: 150, friction: 50 },
  });

  return (
    <section
      ref={galleryRefElement}
      className="mt-20"
      aria-labelledby="gallery-heading"
      aria-describedby="gallery-description"
    >
      {elementInView && (
        <>
          <div className="flex flex-col items-center pt-20 mb-8">
            <div
              className="fancy-header text-4xl sm:text-4xl md:text-5xl text-center color-pink special-font "
              role="heading"
              aria-level={1}
            >
              Galeria Zdjęć
            </div>
            <div
              className=" text-4xl sm:text-3xl md:text-4xl  font-bold mt-3 text-center"
              role="heading"
              aria-level={2}
            >
              Nasze dzieła
            </div>
            <div
              className="mt-8 md:text-lg text-base sm:text-sm  w-10/12 text-center md:w-full "
              role="note"
            >
              Zobacz jak Twój pupil będzie wyglądać po kompleksowej pielęgnacji
              w <b>Shaggy grooming atelier</b>
            </div>
          </div>
          <div
            className={`gallery-holder w-full pr-5 pl-5 grid`}
            role="list"
            aria-label="Photo gallery"
          >
            <ErrorBoundary>
              {photos.map((imgUrl, index) => (
                <animated.div style={galleryAnimate} key={index}>
                  <GalleryPhoto
                    imgUrl={imgUrl}
                    index={index}
                    mainPhotos={photos}
                  />
                </animated.div>
              ))}
            </ErrorBoundary>
          </div>
          <div
            className="mt-5 md:mt-5 flex justify-end w-full md:w-11/12 text-gray-500 cursor-pointer text-sm"
            role="link"
          >
            <Link to="/Galeria">Zobacz więcej!</Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Gallery;
