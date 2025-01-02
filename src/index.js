import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./ui/main/Main";
import "./assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
);
