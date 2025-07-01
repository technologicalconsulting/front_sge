import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-calendar/dist/Calendar.css";

// Global Styles
import "./assets/css/style.css";
import "./assets/css/responsive.css";

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.querySelector("#root")
);
