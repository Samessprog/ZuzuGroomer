import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Gallery: React.FC = () => {
  const [galleryRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const photos = [
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png",
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png",
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png",
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais",
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais",
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais",
  ];

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
            className={`gallery-holder w-12/12 pr-20 pl-20 grid`}
            role="list"
            aria-label="Photo gallery"
          >
            {photos.map((imgUrl, index) => (
              <animated.div style={galleryAnimate} key={index}>
                <GalleryPhoto
                  imgUrl={imgUrl}
                  index={index}
                  mainPhotos={photos}
                />
              </animated.div>
            ))}
          </div>
          <div
            className="mt-10 flex justify-end w-11/12 text-gray-500 cursor-pointer text-sm"
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
