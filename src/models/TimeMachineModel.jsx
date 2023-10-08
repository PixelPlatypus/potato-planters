import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const MACHINE_ROTATION_SPEED = 2;

const TimeMachineModel = (props) => {
  const { nodes, materials } = useGLTF("./models/timeMachine/model.glb");
  const machineRef = useRef();

  useFrame((_state, delta) => {
    machineRef.current.rotation.z += delta * MACHINE_ROTATION_SPEED;
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} ref={machineRef}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.lambert15SG}
        >
          <meshStandardMaterial color="yellow" />
        </mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.lambert16SG}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.lambert19SG}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.lambert20SG}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.lambert20SG}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.lambert21SG}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.lambert22SG}
        />
        <mesh
          rotateZ={Math.PI / 2}
          geometry={nodes.Object_10.geometry}
          material={materials.lambert22SG}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./models/timeMachine/model.glb");

export default TimeMachineModel;
