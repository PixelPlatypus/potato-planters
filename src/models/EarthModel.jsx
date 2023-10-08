import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function EarthModel() {
  const meshRef = useRef();
  const { scene } = useGLTF("./models/earth/scene.gltf");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      position={[-7, -3, 0]}
      scale={[4, 5, 4]}
    />
  );
}

useGLTF.preload("./models/earth/scene.gltf");

export default EarthModel;
