import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullScreen } from "../states/action";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderPhotoScreenViewer from "./SliderPhotoScreenViewer";

const FullscreenImageViewer: React.FC = () => {
  const dispatch = useDispatch();
  let sliderRef = useRef(null);
  const [autoPlayOn, setAutoPlay] = useState(false);
  const data = useSelector(
    (state: RootState) => state.generalStates.fullScreen
  );

  useEffect(() => {
    if (autoPlayOn) {
      sliderRef.slickPlay();
    } else {
      sliderRef.slickPause();
    }
  }, [autoPlayOn]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: autoPlayOn,
    autoplaySpeed: 5000,
    slidesToShow: 1,
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

  const staticlength = 6;
  const id = 1;

  return (
    <div className="full-screen-IMG-holder">
      <div className="close-img-viewer">
        <div className="lengthImg">{`${id} / ${staticlength}`}</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30"
            viewBox="0 -960 960 960"
            width="30"
            className="close-icon"
            onClick={() =>
              dispatch(setFullScreen({ isOpen: false, params: {} }))
            }
          >
            <path d="m251.333-198.29-53.043-53.043L426.957-480 198.29-708.667l53.043-53.043L480-533.043 708.667-761.71l53.043 53.043L533.043-480 761.71-251.333l-53.043 53.043L480-426.957 251.333-198.29Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="25"
            viewBox="0 -960 960 960"
            width="25"
            className={`play-icon  ${autoPlayOn ? "autoplay-active" : ""}`}
            onClick={() => setAutoPlay(!autoPlayOn)}
          >
            <path d="M378.087-296.652 663.348-480 378.087-663.348v366.696ZM480-71.869q-84.913 0-159.345-32.118t-129.491-87.177q-55.059-55.059-87.177-129.491Q71.869-395.087 71.869-480t32.118-159.345q32.118-74.432 87.177-129.491 55.059-55.059 129.491-87.177Q395.087-888.131 480-888.131t159.345 32.118q74.432 32.118 129.491 87.177 55.059 55.059 87.177 129.491Q888.131-564.913 888.131-480t-32.118 159.345q-32.118 74.432-87.177 129.491-55.059 55.059-129.491 87.177Q564.913-71.869 480-71.869Zm0-91.001q133.043 0 225.087-92.043Q797.13-346.957 797.13-480t-92.043-225.087Q613.043-797.13 480-797.13t-225.087 92.043Q162.87-613.043 162.87-480t92.043 225.087Q346.957-162.87 480-162.87ZM480-480Z" />
          </svg>
        </div>
      </div>
      <div className="z ">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <SliderPhotoScreenViewer data={data} />
          <SliderPhotoScreenViewer data={data} />
          <SliderPhotoScreenViewer data={data} />
        </Slider>
      </div>
    </div>
  );
};

export default FullscreenImageViewer;
