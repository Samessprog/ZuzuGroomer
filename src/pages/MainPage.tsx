import React, { useState } from "react";
import MainSlider from "../components/MainPageComponents/SliderMainPage";
import MainBio from "../components/MainPageComponents/Biography";
import PhilosophySection from "../components/MainPageComponents/PhilosophySecation";
import ServicesInfoSection from "../components/MainPageComponents/ServicesInfoSection";
import PetCareSection from "../components/MainPageComponents/PetCareSection";
import SummaryMain from "../components/MainPageComponents/Summary";
import MainOpinions from "../components/MainPageComponents/Opinions";
import Gallery from "../components/MainPageComponents/Gallery";
import FullscreenImageViewer from "../components/MainPageComponents/FullscreenImageViewer";
import { useSelector } from "react-redux";
import Numbers from "../components/MainPageComponents/Numbers";

interface MainPageProps {
  userScroll: boolean;
  displayWidth: number;
}

const MainPage: React.FC<MainPageProps> = ({ userScroll, displayWidth }) => {

  const fullScreenFlag = useSelector(
    (state: RootState) => state.generalStates.fullScreen
  );


  return (
    <main className="main-container w-full">
      <section className="slider-holder relative">
        <MainSlider />
      </section>
      <MainBio />
      <PhilosophySection />
      <ServicesInfoSection />
      <PetCareSection />
      <Numbers />
      <MainOpinions displayWidth={displayWidth} />
      <div className="google-maps-container pl-0 pr-0 md:pl-6 md:pr-6">
        <div className="text-center mb-7 text-6xl fancy-text tracking-wider fs-responsive-maps">
          Znajdź nas!
        </div>
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12138.98564959422!2d19.118283106725848!3d50.23763521599856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c528fdfa72db%3A0x4b638e90ac47fd42!2sKebab%20u%20Alika%202!5e0!3m2!1spl!2spl!4v1710866304136!5m2!1spl!2spl"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Gallery />
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
      {fullScreenFlag.isOpen && <FullscreenImageViewer />}
    </main>
  );
};

export default MainPage;
