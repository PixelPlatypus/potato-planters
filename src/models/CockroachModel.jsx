import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const CockroachModel = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/cockroach/model.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="greatfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Arah_low"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="����������������"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={37.884}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <group
                      name="Object_8"
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.text_1}
                      skeleton={nodes.Object_9.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("./models/cockroach/model.glb");

export default CockroachModel;
