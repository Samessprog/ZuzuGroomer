import React, { useState } from "react";
import { Blurhash } from "react-blurhash";
import { useDispatch } from "react-redux";
import { setFullScreen } from "../../states/action";

interface GalleryProps {
  imgUrl: string;
  index: number;
  mainPhotos: string[];
  galleryPhotos: string[];
}

const GalleryPhoto: React.FC<GalleryProps> = ({
  imgUrl,
  index,
  mainPhotos,
  galleryPhotos,
}) => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = (): void => {
    setLoaded(true);
  };

  return (
    <div
      className="gallery w-12/12 h-100 rounded-md overflow-hidden"
      onClick={() =>
        dispatch(
          setFullScreen({
            isOpen: true,
            photos: mainPhotos?.length ? mainPhotos : galleryPhotos,
            params: { index },
          })
        )
      }
    >
      {!loaded && (
        <div className="gallery-img h-100 w-full">
          {" "}
          <Blurhash
            hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
            width="100%"
            height={380}
            resolutionX={32}
            resolutionY={32}
          />
        </div>
      )}
      <img
        src={imgUrl}
        alt="loading err"
        className="gallery-img h-100 w-full"
        style={{
          filter: loaded ? "none" : "blur(10px)",
          display: loaded ? "block" : "none",
        }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default GalleryPhoto;
