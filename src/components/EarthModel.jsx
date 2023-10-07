import React, { useRef } from "react";

import { useFrame, useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function EarthModel() {
  const mesh = useRef();

  const gltf = useGLTF("models/earth/earth.gltf"); // Ensure to adjust the path

  // Rotate the Earth model slowly

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive
      ref={mesh}
      object={gltf.scene}
      position={[-7, -3, 0]}
      scale={[4, 5, 4]}
    />
  );
}

export default EarthModel;
