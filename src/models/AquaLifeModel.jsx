import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const AquaLifeModel = (props) => {
  const meshRef = useRef();
  const { nodes, materials } = useGLTF("./models/aqualife/model.glb");

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.06}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            geometry={nodes.Cube033__0.geometry}
            material={materials["Scene_-_Root"]}
            position={[-366.474, 87.913, 176.023]}
            rotation={[-1.465, -1.395, 0.067]}
            scale={[9.094, 5.845, 9.094]}
          >
            <meshStandardMaterial color="#796ba5" />
          </mesh>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./models/aqualife/model.glb");

export default AquaLifeModel;
