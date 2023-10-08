import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const PlanetModel = (props) => {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF("./models/roast/model.glb");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.planet}
        rotation={[-2.502, 0.026, -2.289]}
      >
        <meshStandardMaterial color="teal" />
      </mesh>
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.clouds}
        rotation={[-1.488, 0.929, 2.34]}
        scale={1.005}
      />
      <mesh
        geometry={nodes.Object_8.geometry}
        material={materials.atmosphere}
        rotation={[-1.921, -0.882, -1.141]}
        scale={1.04}
      >
        <meshStandardMaterial
          color="#ecafbb"
          opacity={0.6}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("./models/roast/model.glb");

export default PlanetModel;
