import React from "react";
import MainSlider from "../components/MainSlider";
import MainBio from "../components/MainBio";
import PhilosophySection from "../components/PhilosophySection";
import ServicesInfoSection from "../components/ServicesInfoSection";
import PetCareSection from "../components/PetCareSection";
import SummaryMain from "../components/SummaryMain";
import MainOpinions from "../components/MainOpinions";
import Gallery from "../components/Gallery";

interface MainPageProps {
  userScroll: boolean;
  displayWidth: number;
}

const MainPage: React.FC<MainPageProps> = ({ userScroll, displayWidth }) => {
  return (
    <main className="main-container w-full">
      <section className="slider-holder relative">
        <MainSlider />
      </section>
      <MainBio />
      <PhilosophySection />
      <ServicesInfoSection />
      <PetCareSection />
      <section className="number-holder">
        <div className="flex number-header justify-center font-semibold">
          My w liczbach
        </div>
        <div className="flex  justify-between w-9/12 items-center number-context-holder">
          <div className="flex flex-col">
            <span className="font-semibold number-item">7 lat</span>
            <span className="font-semibold">na rynku</span>
          </div>
          <div className="flex flex-col items-center context-holder">
            <span className="font-semibold number-item ">7 lat</span>
            <span className="font-semibold">Zadowolonych piesków</span>
          </div>
          <div className="flex flex-col items-center context-holder">
            <span className="font-semibold number-item">1000</span>
            <span className="font-semibold">Wykorzystanytanych litrów </span>
            <span className="font-semibold">szamponu</span>
          </div>
          <div className="flex flex-col items-center context-holder">
            <span className="font-semibold number-item">20</span>
            <span className="font-semibold">Certyfikatów</span>
          </div>
          <div className="flex flex-col items-center context-holder">
            <span className="font-semibold number-item">20</span>
            <span className="font-semibold">Zdobyte nagrody i wyróżnienia</span>
          </div>
        </div>
      </section>
      <MainOpinions displayWidth={displayWidth} />
      <Gallery />
      {/* <section>Opinie Galeria</section> */}
      <SummaryMain />
      <a
        href="#"
        className={` ${userScroll ? "arrow-up-holder fixed rounded-full scroll-smooth" : "none"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
          className="fill-white"
        >
          <path d="M450-332h60v-182l74 74 42-42-146-146-146 146 42 42 74-74v182Zm30 252q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
        </svg>
      </a>
    </main>
  );
};

export default MainPage;
