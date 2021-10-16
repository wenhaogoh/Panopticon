import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ArwesThemeProvider } from "@arwes/core";

ReactDOM.render(
  <React.StrictMode>
    <ArwesThemeProvider>
      <App />
    </ArwesThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
