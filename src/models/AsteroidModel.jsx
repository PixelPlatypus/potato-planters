import React from "react";
import { useGLTF } from "@react-three/drei";

const AsteroidModel = (props) => {
  const { nodes, materials } = useGLTF("./models/asteroid/model.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[13.067, -0.002, 13.62]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes["Asteroid_no_1_Material_#3_0"].geometry}
          material={materials.Material_3}
          position={[-13.067, 13.62, 0.002]}
        />
      </group>
      <group
        position={[12.427, -0.004, -14.44]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          geometry={nodes["Asteroid_no_7_Material_#3_0"].geometry}
          material={materials.Material_3}
          position={[-12.427, -14.44, 0.004]}
        />
      </group>
      <group
        position={[-13.327, -0.054, 0.133]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          geometry={nodes["Asteroid_no_6_Material_#3_0"].geometry}
          material={materials.Material_3}
          position={[13.327, 0.133, 0.054]}
        />
      </group>
      <group position={[-0.293, -0.025, 0.144]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes["Asteroid_no_5_Material_#3_0"].geometry}
          material={materials.Material_3}
          position={[0.293, 0.144, 0.025]}
        />
      </group>
      <group position={[12.945, 0.008, 0.103]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes["Asteroid_no_4_Material_#3_0"].geometry}
          material={materials.Material_3}
          position={[-12.945, 0.103, -0.008]}
        />
      </group>
      <group
        position={[-13.204, 0.026, 13.617]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          geometry={nodes["Asteroid_no_3_Material_#3_0"].geometry}
          material={materials.Material_3}
          position={[13.204, 13.617, -0.026]}
        />
      </group>
      <group position={[-0.128, 0.004, 13.657]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes["Asteroid_no_2_Material_#3_0"].geometry}
          material={materials.Material_3}
          position={[0.128, 13.657, -0.004]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./models/asteroid/model.glb");

export default AsteroidModel;
