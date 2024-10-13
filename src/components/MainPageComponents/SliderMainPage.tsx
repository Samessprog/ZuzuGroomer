import React, { useState, useEffect, useRef } from "react";
import groomingSalonImg from "../../context/SaloonPhotos";

const MainSlider: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imgSliderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === groomingSalonImg.length - 1 ? 0 : prevIndex + 1,
      );
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [groomingSalonImg.length]);

  useEffect(() => {
    if (imgSliderRef.current != null) {
      imgSliderRef.current.classList.remove("animate");
      imgSliderRef.current.classList.add("animate");
    }
  }, [imageIndex]);

  return (
    <div className="slider w-full  sm:h-full overflow-hidden relative ">
      <figure className="w-full">
        <img
          ref={imgSliderRef}
          src={groomingSalonImg[imageIndex]}
          alt="img err"
          className="img-slider block w-full h-[30.5rem]  sm:h-full opacity-0 sm:object-cover"
          role="img"
        />
      </figure>
    </div>
  );
};

export default MainSlider;
