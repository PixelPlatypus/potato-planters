import React from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/alien_virus.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.defaultMat}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.defaultMat}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.defaultMat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/alien_virus.glb");
