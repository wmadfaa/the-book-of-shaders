import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "@react-three/fiber";
import Experiments from "./experiments";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Canvas>
      <color attach="background" args={[0, 0, 0]} />
      <Experiments />
    </Canvas>
  </React.StrictMode>,
  document.getElementById("root")
);
