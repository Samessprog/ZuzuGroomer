import React from "react";
interface SliderPhotoScreenViewer {
  imgUrl: string;
}

const SliderPhotoScreenViewer: React.FC<SliderPhotoScreenViewer> = ({
  imgUrl,
}) => {
  return <img src={imgUrl} className="w-6/12 h-lvh" />;
};

export default SliderPhotoScreenViewer;
