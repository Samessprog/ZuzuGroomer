import React, { lazy, Suspense, type CSSProperties } from "react";
import { useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import MainBio from "../components/MainPageComponents/Biography";
import PhilosophySection from "../components/MainPageComponents/PhilosophySecation";
import ServicesInfoSection from "../components/MainPageComponents/ServicesInfoSection";
import LazyFullscreenImageViewer from "../components/MainPageComponents/FullscreenImageViewer";

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
  async () => await import("../components/MainPageComponents/Gallery"),
);
const LazySummaryMain = lazy(
  async () => await import("../components/MainPageComponents/Summary"),
);

interface MainPageProps {
  userScroll: boolean;
  displayWidth: number;
}

const MainPage: React.FC<MainPageProps> = ({ userScroll, displayWidth }) => {
  const fullScreenFlag: boolean = useSelector(
    (state) => state.generalStates.fullScreen,
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
      <Suspense fallback={<div>Loading...</div>}>
        <LazyPetCareSection />
        <Numbers />
        <LazyMainOpinions displayWidth={displayWidth} />
        <div className="google-maps-container pl-0 pr-0 md:pl-6 md:pr-6 mt-40">
          <div className="text-center mb-7 text-6xl fancy-text tracking-wider fs-responsive-maps">
            Znajdź nas!
          </div>
          <iframe
            title="google-map"
            className="w-full h-full rounded-lg "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12138.98564959422!2d19.118283106725848!3d50.23763521599856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c528fdfa72db%3A0x4b638e90ac47fd42!2sKebab%20u%20Alika%202!5e0!3m2!1spl!2spl!4v1710866304136!5m2!1spl!2spl"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGallery />
        <LazySummaryMain />
      </Suspense>
      {fullScreenFlag.isOpen === true && <LazyFullscreenImageViewer />}
    </main>
  );
};

export default MainPage;
