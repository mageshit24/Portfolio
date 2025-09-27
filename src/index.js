import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Main() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return <App />;
}

root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
