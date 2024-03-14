import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

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

  const photos = [p1, p2, p3, p4, p5, p6];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const galleryAnimate = useSpring({
    opacity: inView ? 1 : 0,
    display: inView ? "grid" : "hidden",
    transform: inView ? `scale(1)` : `scale(0.1)`,
    config: { tension: 150, friction: 50 },
  });

  return (
    <section ref={ref} className="">
      <div className="flex flex-col items-center gallery-header">
        <div className="fancy-header text-5xl">Galeria Zdjęć</div>
        <div className="text-5xl font-bold mt-2">Nasze dzieła</div>
        <div className="mt-10 md:text-lg text-sm w-10/12 text-center md:w-full">
          Zobacz jak Twój pupil będzie wyglądać po kompleksowej pielęgnacji w
          ZUZU HASU
        </div>
      </div>
      <div
        className={` gallery-holder w-12/12 pr-20 pl-20   ${inView ? "grid" : "hidden"}`}
      >
        {photos.map((imgUrl, index) => (
          <animated.div style={galleryAnimate} key={index}>
            <GalleryPhoto imgUrl={imgUrl} index={index} />
          </animated.div>
        ))}
      </div>
      <div className="mt-20 flex justify-end w-11/12 text-gray-500 cursor-pointer text-sm">
        Zobacz więcej!
      </div>
    </section>
  );
};

export default Gallery;
