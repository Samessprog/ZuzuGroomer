import React, { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [userScroll, setUserScroll] = useState<boolean>(false);

  useEffect(() => {
    const setFixed = (): void => {
      setUserScroll(window.scrollY >= 1);
    };
    window.addEventListener("scroll", setFixed);
    return () => {
      window.removeEventListener("scroll", setFixed);
    };
  }, []);

  const [displayWidth, setDisplayWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = (): void => {
      setDisplayWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar displayWidth={displayWidth} />
      <MainPage userScroll={userScroll} displayWidth={displayWidth} />
      <Footer />
    </>
  );
};

export default App;
