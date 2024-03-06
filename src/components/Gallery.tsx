import React from "react";
import GalleryPhoto from "./GalleryPhoto";

const Gallery: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col items-center gallery-header">
        <div className="fancy-header text-5xl tracking-wider">Galeria Zdjęć</div>
        <div className="text-5xl font-bold  tracking-wide mt-2">Nasze dzieła</div>
        <div className="mt-10 text-lg ">Zobacz jak Twój pupil będzie wyglądać po kompleksowej pielęgnacji w ZUZU HASU</div>
      </div>
      <div className=" gallery-holder w-12/12 ">
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
        <GalleryPhoto />
      </div>
    </section>
  );
};

export default Gallery;
