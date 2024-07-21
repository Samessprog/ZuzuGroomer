import React, { useState } from "react";
interface SliderPhotoScreenViewerInterface {
  imgUrl: string;
}

const SliderPhotoScreenViewer: React.FC<SliderPhotoScreenViewerInterface> = ({
  imgUrl,
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
      className={`img-viewer w-full lg:w-7/12 xl:6/12 cursor-grab ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
    />
  );
};

export default SliderPhotoScreenViewer;
