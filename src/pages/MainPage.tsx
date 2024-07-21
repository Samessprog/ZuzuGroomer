import React, { lazy, Suspense, type CSSProperties } from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import MainBio from "../components/MainPageComponents/Biography";
import PhilosophySection from "../components/MainPageComponents/PhilosophySecation";
import ServicesInfoSection from "../components/MainPageComponents/ServicesInfoSection";
import LazyFullscreenImageViewer from "../components/GalleryComponents/FullscreenImageViewer";

const MainSlider = lazy(
  async () => await import("../components/MainPageComponents/SliderMainPage"),
);
const Numbers = lazy(
  async () => await import("../components/MainPageComponents/CompanyNumbers"),
);
const LazyPetCareSection = lazy(
  async () => await import("../components/MainPageComponents/PetCareSection"),
);
const LazyMainOpinions = lazy(
  async () => await import("../components/MainPageComponents/Opinions"),
);
const LazyGallery = lazy(
  async () => await import("../components/GalleryComponents/Gallery"),
);
const LazySummaryMain = lazy(
  async () => await import("../components/MainPageComponents/Summary"),
);

interface MainPageProps {
  displayWidth: number;
}
interface RootState {
  generalStates: {
    fullScreen: {
      isOpen: boolean;
    };
  };
}

const MainPage: React.FC<MainPageProps> = ({ displayWidth }) => {
  const fullScreenFlag = useSelector(
    (state: RootState) => state.generalStates.fullScreen,
  );

  const override: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <main className="main-container w-full">
      <section className=" relative">
        <Suspense
          fallback={
            <PulseLoader
              color="#ff00cc"
              margin={15}
              speedMultiplier={0.5}
              aria-label="Loading Spinner"
              cssOverride={override}
            />
          }
        >
          <MainSlider />
        </Suspense>
      </section>
      <MainBio />
      <PhilosophySection />
      <ServicesInfoSection />
      <Suspense fallback={<>Loading...</>}>
        <LazyPetCareSection />
        <Numbers />
        <LazyMainOpinions displayWidth={displayWidth} />
        <div className="google-maps-container pl-0 pr-0 md:pl-6 md:pr-6 mt-40">
          <div className="text-center mb-7 text-6xl fancy-text tracking-wider fs-responsive-maps">
            Znajdź nas!
          </div>
          <iframe
            title="google-map"
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.523344024832!2d19.128241984731773!3d50.24480917800197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c53eb21b961b%3A0xe929c76059b771df!2sWielka%20Skotnica%203%2C%2041-400%20Mys%C5%82owice!5e0!3m2!1spl!2spl!4v1718215740020!5m2!1spl!2spl"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <LazyGallery />
        <LazySummaryMain />
      </Suspense>
      {fullScreenFlag.isOpen && <LazyFullscreenImageViewer />}
    </main>
  );
};

export default MainPage;
