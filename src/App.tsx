import Navbar from "../src/components/Navbar";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [userScroll, setUserScroll] = useState<boolean>(false);

  useEffect(() => {
    const setFixed = () => {
      setUserScroll(window.scrollY >= 1);
    };
    window.addEventListener("scroll", setFixed);
    return () => window.removeEventListener("scroll", setFixed);
  }, []);

  const [displayWidth, setDisplayWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
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
}

export default App;
