import { VFC } from "react";
import { Vector3 } from "three";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import Experiment00 from "./00";

const Experiments: VFC = () => {
  return (
    <>
      <Experiment00 />
      <PerspectiveCamera makeDefault position={new Vector3(0, 0, 1.2)} />
      <OrbitControls makeDefault />
    </>
  );
};

export default Experiments;
