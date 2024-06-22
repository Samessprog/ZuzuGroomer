import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullScreen } from "../../states/action";
import Slider from "react-slick";

import SliderPhotoScreenViewer from "./SliderPhotoScreenViewer";

interface RootState {
  generalStates: {
    fullScreen: {
      isOpen: boolean;
      params: {
        index: number;
      };
      photos: string[];
    };
  };
}

const FullscreenImageViewer: React.FC = () => {
  const dispatch = useDispatch();
  const [autoPlay, setAutoPlay] = useState(false);
  const [fullScreenFlag, setFullScreenFlag] = useState();
  const elementRef = useRef(null);
  const sliderRef = useRef(null);

  const data = useSelector(
    (state: RootState) => state.generalStates.fullScreen,
  );

  const refData = useRef(data);

  const {
    current: { photos: photosCollection },
  } = refData;

  const {
    params: { index },
  } = data;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 1,
        );
      }, 50);
    }
    return () => {
      clearInterval(interval);
    };
  }, [autoPlay]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    initialSlide: index,
    pauseOnHover: false,
    autoplay: autoPlay,
    autoplaySpeed: 5000,
    nextArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        id="slider-arrow-right"
      >
        <path d="M494.667-480.667 301.334-674l73.999-74 267.334 267.333-267.334 267.334-73.999-74 193.333-193.334Z" />
      </svg>
    ),
    prevArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        id="slider-arrow-left"
      >
        <path
          className="k"
          d="M560.667-213.333 293.333-480.667 560.667-748l73.999 74-193.333 193.333 193.333 193.334-73.999 74Z"
        />
      </svg>
    ),
  };

  const enterFullscreen = () => {
    const element = elementRef.current;
    const requestFullscreen =
      element.requestFullscreen ||
      element.mozRequestFullScreen ||
      element.webkitRequestFullscreen ||
      element.msRequestFullscreen;

    if (requestFullscreen) {
      requestFullscreen.call(element);
    }
  };

  const exitFullscreen = () => {
    const exitFullscreen =
      document.exitFullscreen ||
      document.mozCancelFullScreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;

    if (exitFullscreen) {
      exitFullscreen.call(document);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFullscreen =
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement ||
        document.msFullscreenElement;

      setFullScreenFlag(!!isFullscreen);
    };

    const events = [
      "fullscreenchange",
      "webkitfullscreenchange",
      "mozfullscreenchange",
      "MSFullscreenChange",
    ];

    events.forEach((event) => {
      document.addEventListener(event, handleFullscreenChange);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, handleFullscreenChange);
      });
    };
  }, []);

  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      sliderRef.current.slickNext();
    } else {
      sliderRef.current.slickPrev();
    }
  };

  const autoPlayON = (): void => {
    setAutoPlay(true);
    sliderRef.current.slickPlay();
  };

  const autoPlayOFF = (): void => {
    setAutoPlay(false);
    sliderRef.current.slickPause();
  };

  const handleSliderClick = (): void => {
    setAutoPlay(false);
    setProgress(0);
  };

  const handleClickOutside = (event) => {
    console.log(sliderRef.current);
    if (sliderRef.current && !sliderRef.current.contains(event.target)) {
      console.log("Kliknięcie poza sliderem");
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="full-screen-IMG-holder fixed top-0 left-0 overflow-hidden h-lvh z-50"
    >
      {autoPlay && (
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      )}
      <div className="icons-holder absolute w-full pl-10 pt-5">
        <div className="text-white z-50 count-slider">{`${index + 1} / ${photosCollection.length}`}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            className="close-icon fill-[#8e8e8e]"
            onClick={() =>
              dispatch(setFullScreen({ isOpen: false, photos: [] }))
            }
          >
            <path d="m251.333-198.29-53.043-53.043L426.957-480 198.29-708.667l53.043-53.043L480-533.043 708.667-761.71l53.043 53.043L533.043-480 761.71-251.333l-53.043 53.043L480-426.957 251.333-198.29Z" />
          </svg>
        </div>
        <div>
          {!fullScreenFlag && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
              className="full-screen-icon fill-[#8e8e8e]"
              onClick={enterFullscreen}
            >
              <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
            </svg>
          )}

          {fullScreenFlag && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
              className="full-screen-icon fill-[#8e8e8e]"
              onClick={exitFullscreen}
            >
              <path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z" />
            </svg>
          )}
        </div>
        <div>
          {!autoPlay && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
              className="play-icon fill-[#8e8e8e]"
              onClick={autoPlayON}
            >
              <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          )}

          {autoPlay && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
              className="play-icon fill-red-500"
              onClick={autoPlayOFF}
            >
              <path d="M360-320h80v-320h-80v320Zm160 0h80v-320h-80v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          )}
        </div>
      </div>
      <div
        className="div-slider"
        onWheel={handleWheel}
        onMouseDown={handleSliderClick}
      >
        <Slider ref={sliderRef} {...settings}>
          {photosCollection.map((imgUrl, id) => (
            <SliderPhotoScreenViewer imgUrl={imgUrl} key={id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FullscreenImageViewer;
