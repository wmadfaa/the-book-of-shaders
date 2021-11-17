import { VFC } from "react";
import { Routes, Route } from "react-router-dom";

import Experiment00 from "./00";
import UniformExperiment from "./01 uniform";

import navLinks from "../nav-links.json";

const Experiments: VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Experiment00 />} />
      <Route path={navLinks.uniform} element={<UniformExperiment />} />
    </Routes>
  );
};

export default Experiments;
