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
}

const MainPage: React.FC<MainPageProps> = ({ userScroll }) => {
  return (
    <main className="main-container w-full">
      <section className="slider-holder relative">
        <MainSlider />
        <div className="shade-holder absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="wave"
            viewBox="0 0 1440 100"
            version="1.1"
            className="shade-1"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
                <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M0,60L24,55C48,50,96,40,144,36.7C192,33,240,37,288,45C336,53,384,67,432,60C480,53,528,27,576,20C624,13,672,27,720,38.3C768,50,816,60,864,58.3C912,57,960,43,1008,46.7C1056,50,1104,70,1152,68.3C1200,67,1248,43,1296,36.7C1344,30,1392,40,1440,51.7C1488,63,1536,77,1584,83.3C1632,90,1680,90,1728,81.7C1776,73,1824,57,1872,41.7C1920,27,1968,13,2016,16.7C2064,20,2112,40,2160,41.7C2208,43,2256,27,2304,31.7C2352,37,2400,63,2448,70C2496,77,2544,63,2592,50C2640,37,2688,23,2736,26.7C2784,30,2832,50,2880,61.7C2928,73,2976,77,3024,76.7C3072,77,3120,73,3168,66.7C3216,60,3264,50,3312,53.3C3360,57,3408,73,3432,81.7L3456,90L3456,100L3432,100C3408,100,3360,100,3312,100C3264,100,3216,100,3168,100C3120,100,3072,100,3024,100C2976,100,2928,100,2880,100C2832,100,2784,100,2736,100C2688,100,2640,100,2592,100C2544,100,2496,100,2448,100C2400,100,2352,100,2304,100C2256,100,2208,100,2160,100C2112,100,2064,100,2016,100C1968,100,1920,100,1872,100C1824,100,1776,100,1728,100C1680,100,1632,100,1584,100C1536,100,1488,100,1440,100C1392,100,1344,100,1296,100C1248,100,1200,100,1152,100C1104,100,1056,100,1008,100C960,100,912,100,864,100C816,100,768,100,720,100C672,100,624,100,576,100C528,100,480,100,432,100C384,100,336,100,288,100C240,100,192,100,144,100C96,100,48,100,24,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>
      <MainBio />
      <PhilosophySection />
      <ServicesInfoSection />
      <PetCareSection />
      <section className="number-holder">
        <div className="flex number-header justify-center font-semibold">
          My w liczbach
        </div>
        <div className="flex  justify-between w-9/12 items-center">
          <div className="flex flex-col">
            <span className="font-semibold number-item">7 lat</span>
            <span className="font-semibold">na rynku</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold number-item ">7 lat</span>
            <span className="font-semibold">Zadowolonych piesków</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold number-item">1000</span>
            <span className="font-semibold">Wykorzystanytanych litrów </span>
            <span className="font-semibold">szamponu</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold number-item">20</span>
            <span className="font-semibold">Certyfikatów</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold number-item">20</span>
            <span className="font-semibold">Zdobyte nagrody i wyróżnienia</span>
          </div>
        </div>
      </section>
      <MainOpinions />
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
