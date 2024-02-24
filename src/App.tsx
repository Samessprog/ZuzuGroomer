import Navbar from "../src/components/Navbar";
import MainPage from "./pages/Main";
import { useEffect, useState } from "react";

function App() {
  
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
      <Navbar />
      <MainPage />
    </>
  );
}

export default App;
