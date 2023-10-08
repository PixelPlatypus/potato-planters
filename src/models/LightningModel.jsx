import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const LightningModel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/lightning/model.glb",
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0}>
          <group name="sketchfabtimeframe">
            <group name="Object_2" scale={0}>
              <group name="frame_94">
                <group name="root">
                  <group
                    name="GLTF_SceneRootNode"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2">
                      <group name="mesh0_0">
                        <points
                          name="Object_8"
                          geometry={nodes.Object_8.geometry}
                          material={materials.material_0}
                        >
                          <meshStandardMaterial />
                        </points>
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_1">
                  <group
                    name="GLTF_SceneRootNode_1"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_1">
                      <group name="mesh0_0_1">
                        <points
                          name="Object_13"
                          geometry={nodes.Object_13.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_14" scale={0}>
              <group name="frame_93">
                <group name="root_2">
                  <group
                    name="GLTF_SceneRootNode_2"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_2">
                      <group name="mesh0_0_2">
                        <points
                          name="Object_20"
                          geometry={nodes.Object_20.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_3">
                  <group
                    name="GLTF_SceneRootNode_3"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_3">
                      <group name="mesh0_0_3">
                        <points
                          name="Object_25"
                          geometry={nodes.Object_25.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_26" scale={0}>
              <group name="frame_92">
                <group name="root_4">
                  <group
                    name="GLTF_SceneRootNode_4"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_4">
                      <group name="mesh0_0_4">
                        <points
                          name="Object_32"
                          geometry={nodes.Object_32.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_5">
                  <group
                    name="GLTF_SceneRootNode_5"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_5">
                      <group name="mesh0_0_5">
                        <points
                          name="Object_37"
                          geometry={nodes.Object_37.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_38" scale={0}>
              <group name="frame_91">
                <group name="root_6">
                  <group
                    name="GLTF_SceneRootNode_6"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_6">
                      <group name="mesh0_0_6">
                        <points
                          name="Object_44"
                          geometry={nodes.Object_44.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_7">
                  <group
                    name="GLTF_SceneRootNode_7"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_7">
                      <group name="mesh0_0_7">
                        <points
                          name="Object_49"
                          geometry={nodes.Object_49.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_50" scale={0}>
              <group name="frame_90">
                <group name="root_8">
                  <group
                    name="GLTF_SceneRootNode_8"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_8">
                      <group name="mesh0_0_8">
                        <points
                          name="Object_56"
                          geometry={nodes.Object_56.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_9">
                  <group
                    name="GLTF_SceneRootNode_9"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_9">
                      <group name="mesh0_0_9">
                        <points
                          name="Object_61"
                          geometry={nodes.Object_61.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_62" scale={0}>
              <group name="frame_89">
                <group name="root_10">
                  <group
                    name="GLTF_SceneRootNode_10"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_10">
                      <group name="mesh0_0_10">
                        <points
                          name="Object_68"
                          geometry={nodes.Object_68.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_11">
                  <group
                    name="GLTF_SceneRootNode_11"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_11">
                      <group name="mesh0_0_11">
                        <points
                          name="Object_73"
                          geometry={nodes.Object_73.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_74" scale={0}>
              <group name="frame_88">
                <group name="root_12">
                  <group
                    name="GLTF_SceneRootNode_12"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_12">
                      <group name="mesh0_0_12">
                        <points
                          name="Object_80"
                          geometry={nodes.Object_80.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_13">
                  <group
                    name="GLTF_SceneRootNode_13"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_13">
                      <group name="mesh0_0_13">
                        <points
                          name="Object_85"
                          geometry={nodes.Object_85.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_86" scale={0}>
              <group name="frame_87">
                <group name="root_14">
                  <group
                    name="GLTF_SceneRootNode_14"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_14">
                      <group name="mesh0_0_14">
                        <points
                          name="Object_92"
                          geometry={nodes.Object_92.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_15">
                  <group
                    name="GLTF_SceneRootNode_15"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_15">
                      <group name="mesh0_0_15">
                        <points
                          name="Object_97"
                          geometry={nodes.Object_97.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_98" scale={0}>
              <group name="frame_86">
                <group name="root_16">
                  <group
                    name="GLTF_SceneRootNode_16"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_16">
                      <group name="mesh0_0_16">
                        <points
                          name="Object_104"
                          geometry={nodes.Object_104.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_17">
                  <group
                    name="GLTF_SceneRootNode_17"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_17">
                      <group name="mesh0_0_17">
                        <points
                          name="Object_109"
                          geometry={nodes.Object_109.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_110" scale={0}>
              <group name="frame_85">
                <group name="root_18">
                  <group
                    name="GLTF_SceneRootNode_18"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_18">
                      <group name="mesh0_0_18">
                        <points
                          name="Object_116"
                          geometry={nodes.Object_116.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_19">
                  <group
                    name="GLTF_SceneRootNode_19"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_19">
                      <group name="mesh0_0_19">
                        <points
                          name="Object_121"
                          geometry={nodes.Object_121.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_122" scale={0}>
              <group name="frame_84">
                <group name="root_20">
                  <group
                    name="GLTF_SceneRootNode_20"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_20">
                      <group name="mesh0_0_20">
                        <points
                          name="Object_128"
                          geometry={nodes.Object_128.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_21">
                  <group
                    name="GLTF_SceneRootNode_21"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_21">
                      <group name="mesh0_0_21">
                        <points
                          name="Object_133"
                          geometry={nodes.Object_133.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_134" scale={0}>
              <group name="frame_83">
                <group name="root_22">
                  <group
                    name="GLTF_SceneRootNode_22"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_22">
                      <group name="mesh0_0_22">
                        <points
                          name="Object_140"
                          geometry={nodes.Object_140.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_23">
                  <group
                    name="GLTF_SceneRootNode_23"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_23">
                      <group name="mesh0_0_23">
                        <points
                          name="Object_145"
                          geometry={nodes.Object_145.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_146" scale={0}>
              <group name="frame_82">
                <group name="root_24">
                  <group
                    name="GLTF_SceneRootNode_24"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_24">
                      <group name="mesh0_0_24">
                        <points
                          name="Object_152"
                          geometry={nodes.Object_152.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_25">
                  <group
                    name="GLTF_SceneRootNode_25"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_25">
                      <group name="mesh0_0_25">
                        <points
                          name="Object_157"
                          geometry={nodes.Object_157.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_158" scale={0}>
              <group name="frame_81">
                <group name="root_26">
                  <group
                    name="GLTF_SceneRootNode_26"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_26">
                      <group name="mesh0_0_26">
                        <points
                          name="Object_164"
                          geometry={nodes.Object_164.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_27">
                  <group
                    name="GLTF_SceneRootNode_27"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_27">
                      <group name="mesh0_0_27">
                        <points
                          name="Object_169"
                          geometry={nodes.Object_169.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_170" scale={0}>
              <group name="frame_80">
                <group name="root_28">
                  <group
                    name="GLTF_SceneRootNode_28"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_28">
                      <group name="mesh0_0_28">
                        <points
                          name="Object_176"
                          geometry={nodes.Object_176.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_29">
                  <group
                    name="GLTF_SceneRootNode_29"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_29">
                      <group name="mesh0_0_29">
                        <points
                          name="Object_181"
                          geometry={nodes.Object_181.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_182" scale={0}>
              <group name="frame_79">
                <group name="root_30">
                  <group
                    name="GLTF_SceneRootNode_30"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_30">
                      <group name="mesh0_0_30">
                        <points
                          name="Object_188"
                          geometry={nodes.Object_188.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_31">
                  <group
                    name="GLTF_SceneRootNode_31"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_31">
                      <group name="mesh0_0_31">
                        <points
                          name="Object_193"
                          geometry={nodes.Object_193.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_194" scale={0}>
              <group name="frame_78">
                <group name="root_32">
                  <group
                    name="GLTF_SceneRootNode_32"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_32">
                      <group name="mesh0_0_32">
                        <points
                          name="Object_200"
                          geometry={nodes.Object_200.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_33">
                  <group
                    name="GLTF_SceneRootNode_33"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_33">
                      <group name="mesh0_0_33">
                        <points
                          name="Object_205"
                          geometry={nodes.Object_205.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_206" scale={0}>
              <group name="frame_77">
                <group name="root_34">
                  <group
                    name="GLTF_SceneRootNode_34"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_34">
                      <group name="mesh0_0_34">
                        <points
                          name="Object_212"
                          geometry={nodes.Object_212.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_35">
                  <group
                    name="GLTF_SceneRootNode_35"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_35">
                      <group name="mesh0_0_35">
                        <points
                          name="Object_217"
                          geometry={nodes.Object_217.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_218" scale={0}>
              <group name="frame_76">
                <group name="root_36">
                  <group
                    name="GLTF_SceneRootNode_36"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_36">
                      <group name="mesh0_0_36">
                        <points
                          name="Object_224"
                          geometry={nodes.Object_224.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_37">
                  <group
                    name="GLTF_SceneRootNode_37"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_37">
                      <group name="mesh0_0_37">
                        <points
                          name="Object_229"
                          geometry={nodes.Object_229.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_230" scale={0}>
              <group name="frame_75">
                <group name="root_38">
                  <group
                    name="GLTF_SceneRootNode_38"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_38">
                      <group name="mesh0_0_38">
                        <points
                          name="Object_236"
                          geometry={nodes.Object_236.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_237" scale={0}>
              <group name="frame_74">
                <group name="root_39">
                  <group
                    name="GLTF_SceneRootNode_39"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_39">
                      <group name="mesh0_0_39">
                        <points
                          name="Object_243"
                          geometry={nodes.Object_243.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_40">
                  <group
                    name="GLTF_SceneRootNode_40"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_40">
                      <group name="mesh0_0_40">
                        <points
                          name="Object_248"
                          geometry={nodes.Object_248.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_249" scale={0}>
              <group name="frame_73">
                <group name="root_41">
                  <group
                    name="GLTF_SceneRootNode_41"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_41">
                      <group name="mesh0_0_41">
                        <points
                          name="Object_255"
                          geometry={nodes.Object_255.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_256" scale={0}>
              <group name="frame_72">
                <group name="root_42">
                  <group
                    name="GLTF_SceneRootNode_42"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_42">
                      <group name="mesh0_0_42">
                        <points
                          name="Object_262"
                          geometry={nodes.Object_262.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_263" scale={0}>
              <group name="frame_71">
                <group name="root_43">
                  <group
                    name="GLTF_SceneRootNode_43"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_43">
                      <group name="mesh0_0_43">
                        <points
                          name="Object_269"
                          geometry={nodes.Object_269.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_270" scale={0}>
              <group name="frame_70">
                <group name="root_44">
                  <group
                    name="GLTF_SceneRootNode_44"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_44">
                      <group name="mesh0_0_44">
                        <points
                          name="Object_276"
                          geometry={nodes.Object_276.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_277" scale={0}>
              <group name="frame_69">
                <group name="root_45">
                  <group
                    name="GLTF_SceneRootNode_45"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_45">
                      <group name="mesh0_0_45">
                        <points
                          name="Object_283"
                          geometry={nodes.Object_283.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_284" scale={0}>
              <group name="frame_68">
                <group name="root_46">
                  <group
                    name="GLTF_SceneRootNode_46"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_46">
                      <group name="mesh0_0_46">
                        <points
                          name="Object_290"
                          geometry={nodes.Object_290.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_47">
                  <group
                    name="GLTF_SceneRootNode_47"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_47">
                      <group name="mesh0_0_47">
                        <points
                          name="Object_295"
                          geometry={nodes.Object_295.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_296" scale={0}>
              <group name="frame_67">
                <group name="root_48">
                  <group
                    name="GLTF_SceneRootNode_48"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_48">
                      <group name="mesh0_0_48">
                        <points
                          name="Object_302"
                          geometry={nodes.Object_302.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_303" scale={0}>
              <group name="frame_66">
                <group name="root_49">
                  <group
                    name="GLTF_SceneRootNode_49"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_49">
                      <group name="mesh0_0_49">
                        <points
                          name="Object_309"
                          geometry={nodes.Object_309.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_310" scale={0}>
              <group name="frame_64">
                <group name="root_50">
                  <group
                    name="GLTF_SceneRootNode_50"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_50">
                      <group name="mesh0_0_50">
                        <points
                          name="Object_316"
                          geometry={nodes.Object_316.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_51">
                  <group
                    name="GLTF_SceneRootNode_51"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_51">
                      <group name="mesh0_0_51">
                        <points
                          name="Object_321"
                          geometry={nodes.Object_321.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_322" scale={0}>
              <group name="frame_63">
                <group name="root_52">
                  <group
                    name="GLTF_SceneRootNode_52"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_52">
                      <group name="mesh0_0_52">
                        <points
                          name="Object_328"
                          geometry={nodes.Object_328.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_53">
                  <group
                    name="GLTF_SceneRootNode_53"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_53">
                      <group name="mesh0_0_53">
                        <points
                          name="Object_333"
                          geometry={nodes.Object_333.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_334" scale={0}>
              <group name="frame_62">
                <group name="root_54">
                  <group
                    name="GLTF_SceneRootNode_54"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_54">
                      <group name="mesh0_0_54">
                        <points
                          name="Object_340"
                          geometry={nodes.Object_340.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_341" scale={0}>
              <group name="frame_61">
                <group name="root_55">
                  <group
                    name="GLTF_SceneRootNode_55"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_55">
                      <group name="mesh0_0_55">
                        <points
                          name="Object_347"
                          geometry={nodes.Object_347.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_56">
                  <group
                    name="GLTF_SceneRootNode_56"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_56">
                      <group name="mesh0_0_56">
                        <points
                          name="Object_352"
                          geometry={nodes.Object_352.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_353" scale={0}>
              <group name="frame_60">
                <group name="root_57">
                  <group
                    name="GLTF_SceneRootNode_57"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_57">
                      <group name="mesh0_0_57">
                        <points
                          name="Object_359"
                          geometry={nodes.Object_359.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_58">
                  <group
                    name="GLTF_SceneRootNode_58"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_58">
                      <group name="mesh0_0_58">
                        <points
                          name="Object_364"
                          geometry={nodes.Object_364.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_365" scale={0}>
              <group name="frame_59">
                <group name="root_59">
                  <group
                    name="GLTF_SceneRootNode_59"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_59">
                      <group name="mesh0_0_59">
                        <points
                          name="Object_371"
                          geometry={nodes.Object_371.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_60">
                  <group
                    name="GLTF_SceneRootNode_60"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_60">
                      <group name="mesh0_0_60">
                        <points
                          name="Object_376"
                          geometry={nodes.Object_376.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_377" scale={0}>
              <group name="frame_58">
                <group name="root_61">
                  <group
                    name="GLTF_SceneRootNode_61"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_61">
                      <group name="mesh0_0_61">
                        <points
                          name="Object_383"
                          geometry={nodes.Object_383.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_62">
                  <group
                    name="GLTF_SceneRootNode_62"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_62">
                      <group name="mesh0_0_62">
                        <points
                          name="Object_388"
                          geometry={nodes.Object_388.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_389" scale={0}>
              <group name="frame_57">
                <group name="root_63">
                  <group
                    name="GLTF_SceneRootNode_63"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_63">
                      <group name="mesh0_0_63">
                        <points
                          name="Object_395"
                          geometry={nodes.Object_395.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_64">
                  <group
                    name="GLTF_SceneRootNode_64"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_64">
                      <group name="mesh0_0_64">
                        <points
                          name="Object_400"
                          geometry={nodes.Object_400.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_401" scale={0}>
              <group name="frame_56">
                <group name="root_65">
                  <group
                    name="GLTF_SceneRootNode_65"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_65">
                      <group name="mesh0_0_65">
                        <points
                          name="Object_407"
                          geometry={nodes.Object_407.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_66">
                  <group
                    name="GLTF_SceneRootNode_66"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_66">
                      <group name="mesh0_0_66">
                        <points
                          name="Object_412"
                          geometry={nodes.Object_412.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_413" scale={0}>
              <group name="frame_55">
                <group name="root_67">
                  <group
                    name="GLTF_SceneRootNode_67"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_67">
                      <group name="mesh0_0_67">
                        <points
                          name="Object_419"
                          geometry={nodes.Object_419.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_68">
                  <group
                    name="GLTF_SceneRootNode_68"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_68">
                      <group name="mesh0_0_68">
                        <points
                          name="Object_424"
                          geometry={nodes.Object_424.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_425" scale={0}>
              <group name="frame_54">
                <group name="root_69">
                  <group
                    name="GLTF_SceneRootNode_69"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_69">
                      <group name="mesh0_0_69">
                        <points
                          name="Object_431"
                          geometry={nodes.Object_431.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_70">
                  <group
                    name="GLTF_SceneRootNode_70"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_70">
                      <group name="mesh0_0_70">
                        <points
                          name="Object_436"
                          geometry={nodes.Object_436.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_437" scale={0}>
              <group name="frame_53">
                <group name="root_71">
                  <group
                    name="GLTF_SceneRootNode_71"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_71">
                      <group name="mesh0_0_71">
                        <points
                          name="Object_443"
                          geometry={nodes.Object_443.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_72">
                  <group
                    name="GLTF_SceneRootNode_72"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_72">
                      <group name="mesh0_0_72">
                        <points
                          name="Object_448"
                          geometry={nodes.Object_448.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_449" scale={0}>
              <group name="frame_52">
                <group name="root_73">
                  <group
                    name="GLTF_SceneRootNode_73"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_73">
                      <group name="mesh0_0_73">
                        <points
                          name="Object_455"
                          geometry={nodes.Object_455.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_74">
                  <group
                    name="GLTF_SceneRootNode_74"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_74">
                      <group name="mesh0_0_74">
                        <points
                          name="Object_460"
                          geometry={nodes.Object_460.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_461" scale={0}>
              <group name="frame_51">
                <group name="root_75">
                  <group
                    name="GLTF_SceneRootNode_75"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_75">
                      <group name="mesh0_0_75">
                        <points
                          name="Object_467"
                          geometry={nodes.Object_467.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_76">
                  <group
                    name="GLTF_SceneRootNode_76"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_76">
                      <group name="mesh0_0_76">
                        <points
                          name="Object_472"
                          geometry={nodes.Object_472.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_473" scale={0}>
              <group name="frame_50">
                <group name="root_77">
                  <group
                    name="GLTF_SceneRootNode_77"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_77">
                      <group name="mesh0_0_77">
                        <points
                          name="Object_479"
                          geometry={nodes.Object_479.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_78">
                  <group
                    name="GLTF_SceneRootNode_78"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_78">
                      <group name="mesh0_0_78">
                        <points
                          name="Object_484"
                          geometry={nodes.Object_484.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_485" scale={0}>
              <group name="frame_49">
                <group name="root_79">
                  <group
                    name="GLTF_SceneRootNode_79"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_79">
                      <group name="mesh0_0_79">
                        <points
                          name="Object_491"
                          geometry={nodes.Object_491.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_80">
                  <group
                    name="GLTF_SceneRootNode_80"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_80">
                      <group name="mesh0_0_80">
                        <points
                          name="Object_496"
                          geometry={nodes.Object_496.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_497" scale={0}>
              <group name="frame_48">
                <group name="root_81">
                  <group
                    name="GLTF_SceneRootNode_81"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_81">
                      <group name="mesh0_0_81">
                        <points
                          name="Object_503"
                          geometry={nodes.Object_503.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_82">
                  <group
                    name="GLTF_SceneRootNode_82"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_82">
                      <group name="mesh0_0_82">
                        <points
                          name="Object_508"
                          geometry={nodes.Object_508.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_509" scale={0}>
              <group name="frame_47">
                <group name="root_83">
                  <group
                    name="GLTF_SceneRootNode_83"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_83">
                      <group name="mesh0_0_83">
                        <points
                          name="Object_515"
                          geometry={nodes.Object_515.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_84">
                  <group
                    name="GLTF_SceneRootNode_84"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_84">
                      <group name="mesh0_0_84">
                        <points
                          name="Object_520"
                          geometry={nodes.Object_520.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_521" scale={0}>
              <group name="frame_46">
                <group name="root_85">
                  <group
                    name="GLTF_SceneRootNode_85"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_85">
                      <group name="mesh0_0_85">
                        <points
                          name="Object_527"
                          geometry={nodes.Object_527.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_86">
                  <group
                    name="GLTF_SceneRootNode_86"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_86">
                      <group name="mesh0_0_86">
                        <points
                          name="Object_532"
                          geometry={nodes.Object_532.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_533" scale={0}>
              <group name="frame_45">
                <group name="root_87">
                  <group
                    name="GLTF_SceneRootNode_87"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_87">
                      <group name="mesh0_0_87">
                        <points
                          name="Object_539"
                          geometry={nodes.Object_539.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_88">
                  <group
                    name="GLTF_SceneRootNode_88"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_88">
                      <group name="mesh0_0_88">
                        <points
                          name="Object_544"
                          geometry={nodes.Object_544.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_545" scale={0}>
              <group name="frame_44">
                <group name="root_89">
                  <group
                    name="GLTF_SceneRootNode_89"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_89">
                      <group name="mesh0_0_89">
                        <points
                          name="Object_551"
                          geometry={nodes.Object_551.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_90">
                  <group
                    name="GLTF_SceneRootNode_90"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_90">
                      <group name="mesh0_0_90">
                        <points
                          name="Object_556"
                          geometry={nodes.Object_556.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_557" scale={0}>
              <group name="frame_43">
                <group name="root_91">
                  <group
                    name="GLTF_SceneRootNode_91"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_91">
                      <group name="mesh0_0_91">
                        <points
                          name="Object_563"
                          geometry={nodes.Object_563.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_92">
                  <group
                    name="GLTF_SceneRootNode_92"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_92">
                      <group name="mesh0_0_92">
                        <points
                          name="Object_568"
                          geometry={nodes.Object_568.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_569" scale={0}>
              <group name="frame_42">
                <group name="root_93">
                  <group
                    name="GLTF_SceneRootNode_93"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_93">
                      <group name="mesh0_0_93">
                        <points
                          name="Object_575"
                          geometry={nodes.Object_575.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_94">
                  <group
                    name="GLTF_SceneRootNode_94"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_94">
                      <group name="mesh0_0_94">
                        <points
                          name="Object_580"
                          geometry={nodes.Object_580.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_581" scale={0}>
              <group name="frame_41">
                <group name="root_95">
                  <group
                    name="GLTF_SceneRootNode_95"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_95">
                      <group name="mesh0_0_95">
                        <points
                          name="Object_587"
                          geometry={nodes.Object_587.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_96">
                  <group
                    name="GLTF_SceneRootNode_96"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_96">
                      <group name="mesh0_0_96">
                        <points
                          name="Object_592"
                          geometry={nodes.Object_592.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_593" scale={0}>
              <group name="frame_40">
                <group name="root_97">
                  <group
                    name="GLTF_SceneRootNode_97"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_97">
                      <group name="mesh0_0_97">
                        <points
                          name="Object_599"
                          geometry={nodes.Object_599.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_98">
                  <group
                    name="GLTF_SceneRootNode_98"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_98">
                      <group name="mesh0_0_98">
                        <points
                          name="Object_604"
                          geometry={nodes.Object_604.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_605" scale={0}>
              <group name="frame_39">
                <group name="root_99">
                  <group
                    name="GLTF_SceneRootNode_99"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_99">
                      <group name="mesh0_0_99">
                        <points
                          name="Object_611"
                          geometry={nodes.Object_611.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_100">
                  <group
                    name="GLTF_SceneRootNode_100"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_100">
                      <group name="mesh0_0_100">
                        <points
                          name="Object_616"
                          geometry={nodes.Object_616.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_617" scale={0}>
              <group name="frame_38">
                <group name="root_101">
                  <group
                    name="GLTF_SceneRootNode_101"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_101">
                      <group name="mesh0_0_101">
                        <points
                          name="Object_623"
                          geometry={nodes.Object_623.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_102">
                  <group
                    name="GLTF_SceneRootNode_102"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_102">
                      <group name="mesh0_0_102">
                        <points
                          name="Object_628"
                          geometry={nodes.Object_628.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_629" scale={0}>
              <group name="frame_37">
                <group name="root_103">
                  <group
                    name="GLTF_SceneRootNode_103"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_103">
                      <group name="mesh0_0_103">
                        <points
                          name="Object_635"
                          geometry={nodes.Object_635.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_104">
                  <group
                    name="GLTF_SceneRootNode_104"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_104">
                      <group name="mesh0_0_104">
                        <points
                          name="Object_640"
                          geometry={nodes.Object_640.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_641" scale={0}>
              <group name="frame_36">
                <group name="root_105">
                  <group
                    name="GLTF_SceneRootNode_105"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_105">
                      <group name="mesh0_0_105">
                        <points
                          name="Object_647"
                          geometry={nodes.Object_647.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_106">
                  <group
                    name="GLTF_SceneRootNode_106"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_106">
                      <group name="mesh0_0_106">
                        <points
                          name="Object_652"
                          geometry={nodes.Object_652.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_653" scale={0}>
              <group name="frame_35">
                <group name="root_107">
                  <group
                    name="GLTF_SceneRootNode_107"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_107">
                      <group name="mesh0_0_107">
                        <points
                          name="Object_659"
                          geometry={nodes.Object_659.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_108">
                  <group
                    name="GLTF_SceneRootNode_108"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_108">
                      <group name="mesh0_0_108">
                        <points
                          name="Object_664"
                          geometry={nodes.Object_664.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_665" scale={0}>
              <group name="frame_34">
                <group name="root_109">
                  <group
                    name="GLTF_SceneRootNode_109"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_109">
                      <group name="mesh0_0_109">
                        <points
                          name="Object_671"
                          geometry={nodes.Object_671.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_110">
                  <group
                    name="GLTF_SceneRootNode_110"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_110">
                      <group name="mesh0_0_110">
                        <points
                          name="Object_676"
                          geometry={nodes.Object_676.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_677" scale={0}>
              <group name="frame_33">
                <group name="root_111">
                  <group
                    name="GLTF_SceneRootNode_111"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_111">
                      <group name="mesh0_0_111">
                        <points
                          name="Object_683"
                          geometry={nodes.Object_683.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_112">
                  <group
                    name="GLTF_SceneRootNode_112"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_112">
                      <group name="mesh0_0_112">
                        <points
                          name="Object_688"
                          geometry={nodes.Object_688.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_689" scale={0}>
              <group name="frame_65">
                <group name="root_113">
                  <group
                    name="GLTF_SceneRootNode_113"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_113">
                      <group name="mesh0_0_113">
                        <points
                          name="Object_695"
                          geometry={nodes.Object_695.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_114">
                  <group
                    name="GLTF_SceneRootNode_114"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_114">
                      <group name="mesh0_0_114">
                        <points
                          name="Object_700"
                          geometry={nodes.Object_700.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_701" scale={0}>
              <group name="frame_32">
                <group name="root_115">
                  <group
                    name="GLTF_SceneRootNode_115"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_115">
                      <group name="mesh0_0_115">
                        <points
                          name="Object_707"
                          geometry={nodes.Object_707.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_116">
                  <group
                    name="GLTF_SceneRootNode_116"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_116">
                      <group name="mesh0_0_116">
                        <points
                          name="Object_712"
                          geometry={nodes.Object_712.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_713" scale={0}>
              <group name="frame_31">
                <group name="root_117">
                  <group
                    name="GLTF_SceneRootNode_117"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_117">
                      <group name="mesh0_0_117">
                        <points
                          name="Object_719"
                          geometry={nodes.Object_719.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_118">
                  <group
                    name="GLTF_SceneRootNode_118"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_118">
                      <group name="mesh0_0_118">
                        <points
                          name="Object_724"
                          geometry={nodes.Object_724.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_725" scale={0}>
              <group name="frame_30">
                <group name="root_119">
                  <group
                    name="GLTF_SceneRootNode_119"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_119">
                      <group name="mesh0_0_119">
                        <points
                          name="Object_731"
                          geometry={nodes.Object_731.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_120">
                  <group
                    name="GLTF_SceneRootNode_120"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_120">
                      <group name="mesh0_0_120">
                        <points
                          name="Object_736"
                          geometry={nodes.Object_736.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_737" scale={0}>
              <group name="frame_29">
                <group name="root_121">
                  <group
                    name="GLTF_SceneRootNode_121"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_121">
                      <group name="mesh0_0_121">
                        <points
                          name="Object_743"
                          geometry={nodes.Object_743.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_122">
                  <group
                    name="GLTF_SceneRootNode_122"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_122">
                      <group name="mesh0_0_122">
                        <points
                          name="Object_748"
                          geometry={nodes.Object_748.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_749" scale={0}>
              <group name="frame_28">
                <group name="root_123">
                  <group
                    name="GLTF_SceneRootNode_123"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_123">
                      <group name="mesh0_0_123">
                        <points
                          name="Object_755"
                          geometry={nodes.Object_755.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_124">
                  <group
                    name="GLTF_SceneRootNode_124"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_124">
                      <group name="mesh0_0_124">
                        <points
                          name="Object_760"
                          geometry={nodes.Object_760.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_761" scale={0}>
              <group name="frame_27">
                <group name="root_125">
                  <group
                    name="GLTF_SceneRootNode_125"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_125">
                      <group name="mesh0_0_125">
                        <points
                          name="Object_767"
                          geometry={nodes.Object_767.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_126">
                  <group
                    name="GLTF_SceneRootNode_126"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_126">
                      <group name="mesh0_0_126">
                        <points
                          name="Object_772"
                          geometry={nodes.Object_772.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_773" scale={0}>
              <group name="frame_26">
                <group name="root_127">
                  <group
                    name="GLTF_SceneRootNode_127"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_127">
                      <group name="mesh0_0_127">
                        <points
                          name="Object_779"
                          geometry={nodes.Object_779.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_128">
                  <group
                    name="GLTF_SceneRootNode_128"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_128">
                      <group name="mesh0_0_128">
                        <points
                          name="Object_784"
                          geometry={nodes.Object_784.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_785" scale={0}>
              <group name="frame_25">
                <group name="root_129">
                  <group
                    name="GLTF_SceneRootNode_129"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_129">
                      <group name="mesh0_0_129">
                        <points
                          name="Object_791"
                          geometry={nodes.Object_791.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_130">
                  <group
                    name="GLTF_SceneRootNode_130"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_130">
                      <group name="mesh0_0_130">
                        <points
                          name="Object_796"
                          geometry={nodes.Object_796.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_797" scale={0}>
              <group name="frame_24">
                <group name="root_131">
                  <group
                    name="GLTF_SceneRootNode_131"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_131">
                      <group name="mesh0_0_131">
                        <points
                          name="Object_803"
                          geometry={nodes.Object_803.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_132">
                  <group
                    name="GLTF_SceneRootNode_132"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_132">
                      <group name="mesh0_0_132">
                        <points
                          name="Object_808"
                          geometry={nodes.Object_808.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_809" scale={0}>
              <group name="frame_23">
                <group name="root_133">
                  <group
                    name="GLTF_SceneRootNode_133"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_133">
                      <group name="mesh0_0_133">
                        <points
                          name="Object_815"
                          geometry={nodes.Object_815.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_134">
                  <group
                    name="GLTF_SceneRootNode_134"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_134">
                      <group name="mesh0_0_134">
                        <points
                          name="Object_820"
                          geometry={nodes.Object_820.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_821" scale={0}>
              <group name="frame_22">
                <group name="root_135">
                  <group
                    name="GLTF_SceneRootNode_135"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_135">
                      <group name="mesh0_0_135">
                        <points
                          name="Object_827"
                          geometry={nodes.Object_827.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_136">
                  <group
                    name="GLTF_SceneRootNode_136"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_136">
                      <group name="mesh0_0_136">
                        <points
                          name="Object_832"
                          geometry={nodes.Object_832.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_833" scale={0}>
              <group name="frame_21">
                <group name="root_137">
                  <group
                    name="GLTF_SceneRootNode_137"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_137">
                      <group name="mesh0_0_137">
                        <points
                          name="Object_839"
                          geometry={nodes.Object_839.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_138">
                  <group
                    name="GLTF_SceneRootNode_138"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_138">
                      <group name="mesh0_0_138">
                        <points
                          name="Object_844"
                          geometry={nodes.Object_844.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_845" scale={0}>
              <group name="frame_20">
                <group name="root_139">
                  <group
                    name="GLTF_SceneRootNode_139"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_139">
                      <group name="mesh0_0_139">
                        <points
                          name="Object_851"
                          geometry={nodes.Object_851.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_140">
                  <group
                    name="GLTF_SceneRootNode_140"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_140">
                      <group name="mesh0_0_140">
                        <points
                          name="Object_856"
                          geometry={nodes.Object_856.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_857" scale={0}>
              <group name="frame_19">
                <group name="root_141">
                  <group
                    name="GLTF_SceneRootNode_141"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_141">
                      <group name="mesh0_0_141">
                        <points
                          name="Object_863"
                          geometry={nodes.Object_863.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_142">
                  <group
                    name="GLTF_SceneRootNode_142"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_142">
                      <group name="mesh0_0_142">
                        <points
                          name="Object_868"
                          geometry={nodes.Object_868.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_869" scale={0}>
              <group name="frame_18">
                <group name="root_143">
                  <group
                    name="GLTF_SceneRootNode_143"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_143">
                      <group name="mesh0_0_143">
                        <points
                          name="Object_875"
                          geometry={nodes.Object_875.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_144">
                  <group
                    name="GLTF_SceneRootNode_144"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_144">
                      <group name="mesh0_0_144">
                        <points
                          name="Object_880"
                          geometry={nodes.Object_880.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_881" scale={0}>
              <group name="frame_17">
                <group name="root_145">
                  <group
                    name="GLTF_SceneRootNode_145"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_145">
                      <group name="mesh0_0_145">
                        <points
                          name="Object_887"
                          geometry={nodes.Object_887.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_146">
                  <group
                    name="GLTF_SceneRootNode_146"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_146">
                      <group name="mesh0_0_146">
                        <points
                          name="Object_892"
                          geometry={nodes.Object_892.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_893" scale={0}>
              <group name="frame_16">
                <group name="root_147">
                  <group
                    name="GLTF_SceneRootNode_147"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_147">
                      <group name="mesh0_0_147">
                        <points
                          name="Object_899"
                          geometry={nodes.Object_899.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_148">
                  <group
                    name="GLTF_SceneRootNode_148"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_148">
                      <group name="mesh0_0_148">
                        <points
                          name="Object_904"
                          geometry={nodes.Object_904.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_905" scale={0}>
              <group name="frame_15">
                <group name="root_149">
                  <group
                    name="GLTF_SceneRootNode_149"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_149">
                      <group name="mesh0_0_149">
                        <points
                          name="Object_911"
                          geometry={nodes.Object_911.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_150">
                  <group
                    name="GLTF_SceneRootNode_150"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_150">
                      <group name="mesh0_0_150">
                        <points
                          name="Object_916"
                          geometry={nodes.Object_916.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_917" scale={0}>
              <group name="frame_14">
                <group name="root_151">
                  <group
                    name="GLTF_SceneRootNode_151"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_151">
                      <group name="mesh0_0_151">
                        <points
                          name="Object_923"
                          geometry={nodes.Object_923.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_152">
                  <group
                    name="GLTF_SceneRootNode_152"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_152">
                      <group name="mesh0_0_152">
                        <points
                          name="Object_928"
                          geometry={nodes.Object_928.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_929" scale={0}>
              <group name="frame_13">
                <group name="root_153">
                  <group
                    name="GLTF_SceneRootNode_153"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_153">
                      <group name="mesh0_0_153">
                        <points
                          name="Object_935"
                          geometry={nodes.Object_935.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_154">
                  <group
                    name="GLTF_SceneRootNode_154"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_154">
                      <group name="mesh0_0_154">
                        <points
                          name="Object_940"
                          geometry={nodes.Object_940.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_941" scale={0}>
              <group name="frame_12">
                <group name="root_155">
                  <group
                    name="GLTF_SceneRootNode_155"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_155">
                      <group name="mesh0_0_155">
                        <points
                          name="Object_947"
                          geometry={nodes.Object_947.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_156">
                  <group
                    name="GLTF_SceneRootNode_156"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_156">
                      <group name="mesh0_0_156">
                        <points
                          name="Object_952"
                          geometry={nodes.Object_952.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_953" scale={0}>
              <group name="frame_11">
                <group name="root_157">
                  <group
                    name="GLTF_SceneRootNode_157"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_157">
                      <group name="mesh0_0_157">
                        <points
                          name="Object_959"
                          geometry={nodes.Object_959.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_158">
                  <group
                    name="GLTF_SceneRootNode_158"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_158">
                      <group name="mesh0_0_158">
                        <points
                          name="Object_964"
                          geometry={nodes.Object_964.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_965" scale={0}>
              <group name="frame_10">
                <group name="root_159">
                  <group
                    name="GLTF_SceneRootNode_159"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_159">
                      <group name="mesh0_0_159">
                        <points
                          name="Object_971"
                          geometry={nodes.Object_971.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_160">
                  <group
                    name="GLTF_SceneRootNode_160"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_160">
                      <group name="mesh0_0_160">
                        <points
                          name="Object_976"
                          geometry={nodes.Object_976.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_977" scale={0}>
              <group name="frame_9">
                <group name="root_161">
                  <group
                    name="GLTF_SceneRootNode_161"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_161">
                      <group name="mesh0_0_161">
                        <points
                          name="Object_983"
                          geometry={nodes.Object_983.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_162">
                  <group
                    name="GLTF_SceneRootNode_162"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_162">
                      <group name="mesh0_0_162">
                        <points
                          name="Object_988"
                          geometry={nodes.Object_988.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_989" scale={0}>
              <group name="frame_8">
                <group name="root_163">
                  <group
                    name="GLTF_SceneRootNode_163"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_163">
                      <group name="mesh0_0_163">
                        <points
                          name="Object_995"
                          geometry={nodes.Object_995.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_164">
                  <group
                    name="GLTF_SceneRootNode_164"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_164">
                      <group name="mesh0_0_164">
                        <points
                          name="Object_1000"
                          geometry={nodes.Object_1000.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1001" scale={0}>
              <group name="frame_7">
                <group name="root_165">
                  <group
                    name="GLTF_SceneRootNode_165"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_165">
                      <group name="mesh0_0_165">
                        <points
                          name="Object_1007"
                          geometry={nodes.Object_1007.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_166">
                  <group
                    name="GLTF_SceneRootNode_166"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_166">
                      <group name="mesh0_0_166">
                        <points
                          name="Object_1012"
                          geometry={nodes.Object_1012.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1013" scale={0}>
              <group name="frame_6">
                <group name="root_167">
                  <group
                    name="GLTF_SceneRootNode_167"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_167">
                      <group name="mesh0_0_167">
                        <points
                          name="Object_1019"
                          geometry={nodes.Object_1019.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_168">
                  <group
                    name="GLTF_SceneRootNode_168"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_168">
                      <group name="mesh0_0_168">
                        <points
                          name="Object_1024"
                          geometry={nodes.Object_1024.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1025" scale={0}>
              <group name="frame_5">
                <group name="root_169">
                  <group
                    name="GLTF_SceneRootNode_169"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_169">
                      <group name="mesh0_0_169">
                        <points
                          name="Object_1031"
                          geometry={nodes.Object_1031.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_170">
                  <group
                    name="GLTF_SceneRootNode_170"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_170">
                      <group name="mesh0_0_170">
                        <points
                          name="Object_1036"
                          geometry={nodes.Object_1036.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1037" scale={0}>
              <group name="frame_4">
                <group name="root_171">
                  <group
                    name="GLTF_SceneRootNode_171"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_171">
                      <group name="mesh0_0_171">
                        <points
                          name="Object_1043"
                          geometry={nodes.Object_1043.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_172">
                  <group
                    name="GLTF_SceneRootNode_172"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_172">
                      <group name="mesh0_0_172">
                        <points
                          name="Object_1048"
                          geometry={nodes.Object_1048.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1049" scale={0}>
              <group name="frame_3">
                <group name="root_173">
                  <group
                    name="GLTF_SceneRootNode_173"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_173">
                      <group name="mesh0_0_173">
                        <points
                          name="Object_1055"
                          geometry={nodes.Object_1055.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_174">
                  <group
                    name="GLTF_SceneRootNode_174"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_174">
                      <group name="mesh0_0_174">
                        <points
                          name="Object_1060"
                          geometry={nodes.Object_1060.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1061" scale={0}>
              <group name="frame_2">
                <group name="root_175">
                  <group
                    name="GLTF_SceneRootNode_175"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_175">
                      <group name="mesh0_0_175">
                        <points
                          name="Object_1067"
                          geometry={nodes.Object_1067.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_176">
                  <group
                    name="GLTF_SceneRootNode_176"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_176">
                      <group name="mesh0_0_176">
                        <points
                          name="Object_1072"
                          geometry={nodes.Object_1072.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1073" scale={0}>
              <group name="frame_1">
                <group name="root_177">
                  <group
                    name="GLTF_SceneRootNode_177"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_177">
                      <group name="mesh0_0_177">
                        <points
                          name="Object_1079"
                          geometry={nodes.Object_1079.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_178">
                  <group
                    name="GLTF_SceneRootNode_178"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_178">
                      <group name="mesh0_0_178">
                        <points
                          name="Object_1084"
                          geometry={nodes.Object_1084.geometry}
                          material={materials.material_2}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="Object_1085">
              <group name="frame_0">
                <group name="root_179">
                  <group
                    name="GLTF_SceneRootNode_179"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_179">
                      <group name="mesh0_0_179">
                        <points
                          name="Object_1091"
                          geometry={nodes.Object_1091.geometry}
                          material={materials.material_0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
                <group name="root_180">
                  <group
                    name="GLTF_SceneRootNode_180"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Renderer_Node_2_180">
                      <group name="mesh0_0_180">
                        <points
                          name="Object_1096"
                          geometry={nodes.Object_1096.geometry}
                          material={materials.material_1}
                        />
                      </group>
                    </group>
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

useGLTF.preload("./models/lightning/model.glb");

export default LightningModel;
