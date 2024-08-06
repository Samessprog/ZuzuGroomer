import React, {
  useEffect,
  useState,
  lazy,
  Suspense,
  type CSSProperties,
} from "react";

import { useSelector } from "react-redux";
import Navbar from "./components/GeneralComponents/Navbar";
import MainPage from "./pages/MainPage";
import Footer from "./components/GeneralComponents/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import ScrollToTop from "./utils/ScrollToUp";

const LazyDogBehaviorist = lazy(
  async () => await import("./pages/DogBehaviorist")
);
const LazyGalleryPage = lazy(async () => await import("./pages/Gallery"));
const LazyAboutUs = lazy(async () => await import("./pages/AboutUs"));
const LazyContactInfo = lazy(async () => await import("./pages/Contact"));
const LazyPriceList = lazy(async () => await import("./pages/PriceList"));
const LazyRegulation = lazy(async () => await import("./pages/Regulations"));
const LazyLoyaltyProgram = lazy(
  async () => await import("./pages/LoyaltyProgram")
);
const LazyServicesPage = lazy(async () => await import("./pages/Services"));

const App: React.FC = () => {
  const [userScroll, setUserScroll] = useState<boolean>(false);
  const [displayWidth, setDisplayWidth] = useState<number>(window.innerWidth);
  const fullScreenIsOpen = useSelector(
    (state: RootState) => state.generalStates.fullScreen
  );

  useEffect(() => {
    const setFixed = (): void => {
      setUserScroll(window.scrollY >= 1);
    };
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  useEffect(() => {
    const handleResize = (): void => {
      setDisplayWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const override: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10rem",
    marginTop: "10rem",
  };

  return (
    <>
      <Navbar displayWidth={displayWidth} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage displayWidth={displayWidth} />} />
        <Route
          path="/Cennik"
          element={
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
              <LazyPriceList />
            </Suspense>
          }
        />
        <Route
          path="/Regulamin"
          element={
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
              <LazyRegulation />
            </Suspense>
          }
        />
        <Route
          path="/Kontakt"
          element={
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
              <LazyContactInfo />
            </Suspense>
          }
        />
        <Route
          path="/Galeria"
          element={
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
              <LazyGalleryPage />
            </Suspense>
          }
        ></Route>

        <Route
          path="/Usługi"
          element={
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
              <LazyServicesPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/ProgramLojalnosciowy"
          element={
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
              <LazyLoyaltyProgram />
            </Suspense>
          }
        ></Route>
        <Route
          path="/PsiBehawiorysta"
          element={
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
              <LazyDogBehaviorist />
            </Suspense>
          }
        ></Route>
        <Route
          path="/oNas"
          element={
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
              <LazyAboutUs />
            </Suspense>
          }
        ></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {!fullScreenIsOpen.isOpen && (
        <a
          className={` ${userScroll ? "arrow-up-holder fixed rounded-full scroll-smooth cursor-pointer z-10 mr-1 sm:mr-0" : "none"}`}
          href="#"
          aria-label="up-page"
          role="link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="fill-white h-[35px] w-[35px] sm:h-[40px] sm:w-[40px]"
          >
            <path d="M450-332h60v-182l74 74 42-42-146-146-146 146 42 42 74-74v182Zm30 252q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z" />
          </svg>
        </a>
      )}

      <Footer />
    </>
  );
};

export default App;
