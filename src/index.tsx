import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Experiments from "./experiments";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Experiments />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
