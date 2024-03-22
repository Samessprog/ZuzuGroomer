import React from "react";
import { useDispatch } from "react-redux";
import { setFullScreen } from "../../states/action";

interface GalleryProps {
  imgUrl: string;
  index: number;
}

const GalleryPhoto: React.FC<GalleryProps> = ({ imgUrl, index }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="gallery w-12/12 h-100 rounded-md overflow-hidden"
      onClick={() =>
        dispatch(setFullScreen({ isOpen: true, params: { imgUrl, index } }))
      }
    >
      <img className="gallery-img h-100 w-full" alt="loading err" src={imgUrl} />
    </div>
  );
};

export default GalleryPhoto;
