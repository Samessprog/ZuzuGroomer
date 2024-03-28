import React, { useState } from "react";
interface SliderPhotoScreenViewer {
  imgUrl: string;
}

const SliderPhotoScreenViewer: React.FC<SliderPhotoScreenViewer> = ({
  imgUrl,
}) => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };


  const handleMouseDown = () => {
    setIsGrabbing(true);
  };

  const handleMouseUp = () => {
    setIsGrabbing(false);
  };
  return (
    <img
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      src={imgUrl}
      className={`img-viewer w-full lg:w-7/12 xl:6/12 cursor-grab ${isGrabbing ? "cursor-grabbing" : "cursor-grab"}`}
    
    />
  );
};

export default SliderPhotoScreenViewer;
