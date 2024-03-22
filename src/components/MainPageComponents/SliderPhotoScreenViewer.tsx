import React from "react";
interface SliderPhotoScreenViewer {
  imgUrl: string;
}

const SliderPhotoScreenViewer: React.FC<SliderPhotoScreenViewer> = ({
  imgUrl,
}) => {
  return <img src={imgUrl} className="w-7/12 img-viewer" />;
};

export default SliderPhotoScreenViewer;
