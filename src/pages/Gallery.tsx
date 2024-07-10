import React from "react";
import p11 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import GalleryPhoto from "../components/GalleryComponents/GalleryPhoto";
import TwentyTwentyAnimation from "../components/GalleryComponents/TwentyTwentyAnimation";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import LazyFullscreenImageViewer from "../components/GalleryComponents/FullscreenImageViewer";
import { useSelector } from "react-redux";

const Gallery: React.FC = () => {
  const p1 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";
  const p2 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";
  const p3 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";
  const p4 =
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais";
  const p5 =
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais";
  const p6 =
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais";
  const p7 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";

  const photos = [p1, p2, p3, p4, p5, p6, p7];

  const [galleryRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.22,
  });

  const galleryAnimate = useSpring({
    opacity: elementInView ? 1 : 0,
    transform: elementInView ? `scale(1)` : `scale(0.01)`,
    config: { tension: 250, friction: 50 },
  });

  const fullScreenFlag = useSelector(
    (state: RootState) => state.generalStates.fullScreen
  );

  return (
    <div>
      <div className="relative">
        <img
          alt="loading err"
          src={p11}
          className="w-full gallery-start-img  object-cover"
        />
        <span className="absolute gallery-text fancy-text text-5xl top-1/2 left-1/2">
          <i> Galeria</i>
        </span>
      </div>
      <section className="w-full flex justify-center mt-10 ">
        <span className="w-8/12 text-center">
          <p>
            {" "}
            Zapraszam do obserwowania naszych prac wykonanych z dbałością i
            pełną estetyką zgodnie ze wzorzem FCI{" "}
          </p>
          <p className="mt-3">
            W mojej galerii znajdziesz zdjęcia różnych ras i stylów strzyżenia,
            które podkreślają naturalne piękno każdego pupila. Moje podejście
            opiera się na indywidualnym podejściu do każdego klienta, dzięki
            czemu każda fryzura jest dopasowana do specyficznych potrzeb i
            charakteru psa.
          </p>
        </span>
      </section>
      <main>
        <section ref={galleryRefElement}>
          <span className="flex justify-center mt-16 text-5xl md:text-6xl font-semibold color-pink fancy-text item">
            {" "}
            <i>Nasze Dzieła</i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              className="gallery-paw-icon ml-5 fill-black mt-1"
            >
              <path
                d="M180-475q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180-160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm240 0q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm180 160q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM266-75q-45 0-75.5-34.5T160-191q0-52 35.5-91t70.5-77q29-31 50-67.5t50-68.5q22-26 51-43t63-17q34 0 63 16t51 42q28 32 49.5 69t50.5 69q35 38 70.5 77t35.5 91q0 47-30.5 81.5T694-75q-54 0-107-9t-107-9q-54 0-107 9t-107 9Z"
                filter="url(#shadow)"
              />
            </svg>
          </span>
          <div className="grid gallery-container mt-10 pl-4 pr-4">
            {photos.map((imgUrl, index) => (
              <animated.div style={galleryAnimate} key={index}>
                <GalleryPhoto
                  imgUrl={imgUrl}
                  index={index}
                  galleryPhotos={photos}
                />
              </animated.div>
            ))}
          </div>
        </section>
        <section>
          <span className="flex justify-center mt-16 text-5xl md:text-6xl font-semibold fancy-text tracking-wide text-shadow">
            <i>Magiczne zmiany</i>
          </span>
          <div className="grid twenty-twenty-container mt-10 mb-20 pl-4 pr-4">
            <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
            <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
            <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
            <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
            <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
          </div>
        </section>
      </main>
      {fullScreenFlag.isOpen === true && <LazyFullscreenImageViewer />}
    </div>
  );
};

export default Gallery;
