import React, { useState } from "react";
interface SliderPhotoScreenViewerInterface {
  imgUrl: string;
  fullScreenFlag: boolean;
}

const SliderPhotoScreenViewer: React.FC<SliderPhotoScreenViewerInterface> = ({
  imgUrl,
  fullScreenFlag,
}) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseDown = (): void => {
    setIsGrabbing(true);
  };

  const handleMouseUp = (): void => {
    setIsGrabbing(false);
  };


  return (
    <img
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      src={imgUrl}
      role="slider"
      className={`transition-all w-full ease-in-out delay-150 lg:w-7/12 xl:6/12 cursor-grab ${isGrabbing ? "cursor-grabbing" : "cursor-grab"} ${fullScreenFlag ? "img-on-full-screen" : "img-viewer"}`}
    />
  );
};

export default SliderPhotoScreenViewer;
