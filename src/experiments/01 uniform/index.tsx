import { VFC } from "react";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";
import { DoubleSide } from "three";
import Experiment from "../../components/experiment";

const UniformExperiment: VFC = () => {
  return (
    <Experiment>
      <mesh>
        <planeGeometry args={[1, 1, 32, 32]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          side={DoubleSide}
        />
      </mesh>
    </Experiment>
  );
};

export default UniformExperiment;
