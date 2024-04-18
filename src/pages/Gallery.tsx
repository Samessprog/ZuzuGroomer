import React from "react";
import p11 from "../assets/beautiful-pet-portrait-dog_23-2149218450.avif";
import GalleryPhoto from "../components/MainPageComponents/GalleryPhoto";
import TwentyTwentyAnimation from "../components/MainPageComponents/TwentyTwentyAnimation";

const Gallery: React.FC = () => {
  const p1 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";
  const p2 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";
  const p3 =
    "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMThfaGFwcHlfc21pbGluZ19nb2xkZW5fcmV0cml2ZXJfcHVwcHlfb25fd2hpdGVfYl8xOTAzYWI3Ni04NjQzLTQxNzYtODY3ZS01MjUxNDk1MGExNTMucG5n.png";
  const p4 =
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais";
  const p5 =
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais";
  const p6 =
    "https://img.freepik.com/premium-zdjecie/japonka-pod-wisniowym-drzewem-krajobraz-anime-manga-ilustracja_691560-7776.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=ais";

  const photos = [p1, p2, p3, p4, p5, p6];

  return (
    <div>
      <div className="relative">
        <img
          alt="loading err"
          src={p11}
          className="w-full gallery-start-img  object-cover"
        />
        <span className="absolute gallery-text fancy-text text-5xl">
          <i> Galeria</i>
        </span>
      </div>
      <section className="w-full flex justify-center mt-10 ">
        <span className="w-8/12 text-center">
          <p>
            {" "}
            Witaj w naszej galerii zdjęć, gdzie pragniemy podzielić się z Tobą
            efektami naszej pracy w salonie groomerki. Przejrzyj nasze
            fotografie, aby zobaczyć, jak dbamy o wygląd i dobrostan naszych
            futrzastych klientów.
          </p>
          <p className="mt-3">
            Każde zdjęcie to historia zanurzona w pielęgnacji, miłości i
            zaufaniu. Odkryj urok naszej galerii i dołącz do nas w podróży przez
            świat pielęgnacji zwierząt domowych
          </p>
        </span>
      </section>
      <main>
        <section>
          <span className="flex justify-center mt-16 text-3xl font-semibold">
            {" "}
            <i>Zdjęcia</i>
          </span>
          <div className="grid gallery-container mt-10">
            {photos.map((imgUrl, index) => (
              <div key={index}>
                <GalleryPhoto imgUrl={imgUrl} index={index} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <span className="flex justify-center mt-16 text-3xl font-semibold">
            <i>Zmiany</i>
          </span>
          <div className="grid gallery-container mt-10 mb-20">
            <TwentyTwentyAnimation />
            <TwentyTwentyAnimation />
            <TwentyTwentyAnimation />
            <TwentyTwentyAnimation />
            <TwentyTwentyAnimation />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Gallery;
