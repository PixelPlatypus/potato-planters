import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.lambert15SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.lambert16SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.lambert18SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.lambert19SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.lambert20SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.lambert20SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.lambert21SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.lambert22SG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.lambert22SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
