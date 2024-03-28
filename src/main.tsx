import React, { Suspense, CSSProperties } from "react";
import ReactDOM from "react-dom";
import { PulseLoader } from "react-spinners";
import { Provider } from "react-redux";
import store from "./states/store.js";
const App = React.lazy(() => import("./App.tsx"));
import "../Style/CSS/index.css";
import "../src/input.css";

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

ReactDOM.createRoot(document.getElementById("root")!).render(<Preloader />);
