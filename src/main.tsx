import React, { Suspense, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { PulseLoader } from "react-spinners";
import { Provider } from "react-redux";
import store from "./states/store.js";
import "../Style/CSS/index.css";
import "../src/input.css";
const App = React.lazy(async () => await import("./App.tsx"));

const Preloader = () => {
  const override: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
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
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  );
};

createRoot(document.getElementById("root")!).render(<Preloader />);
