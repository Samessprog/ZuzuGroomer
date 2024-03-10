import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../Style/CSS/index.css";
import "../src/input.css";
import { Provider } from "react-redux";
import store from "./states/store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
