import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/js/dist/modal";
import { GlobalProvider } from "./context/globalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
