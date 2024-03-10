import React from "react";
import { useDispatch } from "react-redux";
import { setFullScreen } from "../states/action";

const GalleryPhoto: React.FC = ({ elm }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="gallery w-12/12"
      onClick={() => dispatch(setFullScreen({ isOpen: true, params: { elm } }))}
    >
      <img className="gallery-img w-full" alt="loading err" src={elm} />
    </div>
  );
};

export default GalleryPhoto;
