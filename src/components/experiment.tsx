import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import { Vector3 } from "three";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

import Nav from "./nav";

import navLinks from "../nav-links.json";

const Experiment: FC = ({ children }) => {
  return (
    <>
      <Nav links={navLinks as any} />
      <Canvas>
        <color attach="background" args={[0, 0, 0]} />
        {children}
        <PerspectiveCamera makeDefault position={new Vector3(0, 0, 1.2)} />
        <OrbitControls makeDefault />
      </Canvas>
    </>
  );
};

export default Experiment;
