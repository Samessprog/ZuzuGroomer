import React, { useState, useEffect, useRef } from "react";
import p1 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import p2 from "../assets/isolated-happy-smiling-dog-white-background-portrait-3_1562-692.avif";
import p3 from "../assets/puppy-2785074_640.jpg";

const MainSlider: React.FC = () => {
  const groomingSalonImg = [p1, p2, p3];
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imgSliderRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === groomingSalonImg.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [groomingSalonImg.length]);

  useEffect(() => {
    if (imgSliderRef.current) {
      imgSliderRef.current.classList.remove("animate");
      imgSliderRef.current.offsetWidth;
      imgSliderRef.current.classList.add("animate");
    }
  }, [imageIndex]);

  return (
    <section className="slider">
      <img
        ref={imgSliderRef}
        src={groomingSalonImg[imageIndex]}
        alt="img err"
        className="img-slider"
      />
      <div className="shade-holder">
        <div
          className="elementor-shape elementor-shape-bottom "
          data-negative="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="shade"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
              className="shade"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
              className="shade"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
