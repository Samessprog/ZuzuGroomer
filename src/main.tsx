/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { StrictMode, Suspense, type CSSProperties } from "react";
import { createRoot } from "react-dom/client";
import { PulseLoader } from "react-spinners";
import { Provider } from "react-redux";
import store from "./states/store.js";
import "../Style/CSS/index.css";
import "../src/input.css";
import { BrowserRouter } from "react-router-dom";
const App = React.lazy(async () => await import("./App.tsx"));

const Preloader: React.FC = () => {
  const override: CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <StrictMode>
      <BrowserRouter>
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
      </BrowserRouter>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<Preloader />);
