import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ArwesThemeProvider } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";

const generalAnimator = { duration: { enter: 300, exit: 300, stagger: 30 } };

ReactDOM.render(
  <React.StrictMode>
    <ArwesThemeProvider>
      <AnimatorGeneralProvider animator={generalAnimator}>
        <App />
      </AnimatorGeneralProvider>
    </ArwesThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
