import { useGLTF } from "@react-three/drei";
import React from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

const CloudModel = ({ opacity, ...props }) => {
  const { nodes } = useGLTF("./models/cloud/model.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          transparent
          opacity={opacity}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("./models/cloud/model.gltf");

export default CloudModel;
