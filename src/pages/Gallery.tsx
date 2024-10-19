import React from "react";
import p11 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import GalleryPhoto from "../components/GalleryComponents/GalleryPhoto";
import TwentyTwentyAnimation from "../components/GalleryComponents/TwentyTwentyAnimation";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import LazyFullscreenImageViewer from "../components/GalleryComponents/FullscreenImageViewer";
import { useSelector } from "react-redux";
import photos from "../context/GalleryPhotos";
import SocialIcons from "../components/OttherComponents/SocialIcons";


import p1 from "../assets/ZdjęciaPsów/XX1.jpg";
import p4 from "../assets/ZdjęciaPsów/XX2.jpg";
import a1 from "../assets/ZdjęciaPsów/1a.jpg";
import a2 from "../assets/ZdjęciaPsów/2a.jpg";
import b1 from "../assets/ZdjęciaPsów/1b.jpg";
import b2 from "../assets/ZdjęciaPsów/2b.jpg";
import zz from "../assets/ZdjęciaPsów/X1.webp";
import xx from "../assets/ZdjęciaPsów/X2.webp";


const Gallery: React.FC = () => {
  const [galleryRefElement, elementInView] = useInView({
    triggerOnce: true,
    threshold: 0.03,
  });

  const galleryAnimate = useSpring({
    opacity: elementInView ? 1 : 0,
    transform: elementInView ? `scale(1)` : `scale(0.5)`,
    config: { tension: 250, friction: 50 },
  });

  const fullScreenFlag = useSelector(
    (state: RootState) => state.generalStates.fullScreen
  );

  return (
    <>
      <div className="relative">
        <img
          alt="loading err"
          src={p11}
          className="w-full gallery-start-img  object-cover"
        />
        <header>
          <span className="absolute dog-behaviorist-text text-4xl md:text-6xl top-1/2 left-1/2 font-semibold text-center color-pink">
            <h1>
              <em> Galeria</em>
            </h1>
          </span>
        </header>
      </div>
      <section className="w-full flex justify-center mt-10 ">
        <span className="w-11/12 sm:w-8/12 text-center text-base sm:text-base">
          <p>
            {" "}
            Zapraszam do obserwowania naszych prac wykonanych z dbałością i
            pełną estetyką zgodnie ze{" "}
            <span className="font-semibold"> wzorcem FCI</span>{" "}
          </p>
          <p className="mt-3">
            W mojej galerii znajdziesz zdjęcia różnych ras i stylów strzyżenia,
            które podkreślają naturalne piękno każdego pupila. Moje podejście
            opiera się na indywidualnym podejściu do każdego klienta,{" "}
            <span className="font-semibold">
              {" "}
              dzięki czemu każda fryzura jest dopasowana do specyficznych
              potrzeb i charakteru psa.
            </span>
          </p>
        </span>
      </section>
      <main>
        <section>
          <span className="flex justify-center mt-16 text-4xl sm:text-5xl md:text-6xl font-semibold color-pink fancy-text item">
            {" "}
            <header>
              {" "}
              <h2>
                <em>Nasze Dzieła</em>
              </h2>
            </header>
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
          <div
            className="grid gallery-container mt-10 pl-4 pr-4"
            ref={galleryRefElement}
          >
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
          <span className="flex justify-center mt-20 text-4xl md:text-6xl font-semibold fancy-text tracking-wide text-shadow items-center">
            <header>
              <h2>
                <em>Magiczne zmiany</em>
              </h2>
            </header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              className="ml-4 fill-yellow-400"
            >
              <path d="m384-334 96-74 96 74-36-122 90-64H518l-38-124-38 124H330l90 64-36 122ZM233-120l93-304L80-600h304l96-320 96 320h304L634-424l93 304-247-188-247 188Zm247-369Z" />
            </svg>
          </span>
          <div className="grid twenty-twenty-container mt-10 mb-20 pl-4 pr-4">
            <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
            <TwentyTwentyAnimation firstPhoto={zz} secondPhoto={xx} />
            <TwentyTwentyAnimation firstPhoto={a1} secondPhoto={a2} />
            <TwentyTwentyAnimation firstPhoto={b1} secondPhoto={b2} />
            <TwentyTwentyAnimation firstPhoto={p1} secondPhoto={p4} />
          </div>
        </section>
      </main>
      <section className="mb-20">
        <div className="flex justify-center w-full font-semibold text-3xl sm:text-4xl color-pink">
          <h2>Zobacz również</h2>
        </div>
        <SocialIcons />
      </section>
      {fullScreenFlag.isOpen === true && <LazyFullscreenImageViewer />}
    </>
  );
};

export default Gallery;
