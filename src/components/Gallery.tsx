import React from "react";
import GalleryPhoto from "./GalleryPhoto";

const Gallery: React.FC = () => {

  const p1 = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png"
  const p2 = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png"
  const p3 = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png"
  const p4 = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png"

  const photos = [p1,p2,p3,p4]


  return (
    <section>
      <div className="flex flex-col items-center gallery-header">
        <div className="fancy-header text-5xl tracking-wider">
          Galeria Zdjęć
        </div>
        <div className="text-5xl font-bold  tracking-wide mt-2">
          Nasze dzieła
        </div>
        <div className="mt-10 md:text-lg text-sm w-10/12 text-center md:w-full">
          Zobacz jak Twój pupil będzie wyglądać po kompleksowej pielęgnacji w
          ZUZU HASU
        </div>
      </div>
      <div className=" gallery-holder w-12/12 ">
        {photos.map((elm,key) => (
          <GalleryPhoto elm={elm} key={key} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
