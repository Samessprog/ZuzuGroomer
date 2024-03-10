import React from "react";

const SliderPhotoScreenViewer: React.FC = ({ data }) => {
  return <img src={data.params.elm} className="w-6/12 c" />;
};

export default SliderPhotoScreenViewer;
