/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 massaNodes.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/massaNodes.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.sphere3.geometry} material={materials['Material.002']} position={[-2.66, 0.5, -4.01]} scale={1.46} />
      <mesh geometry={nodes.sphere5.geometry} material={materials['Material.002']} position={[5.5, -1, -0.01]} scale={1.46} />
      <mesh geometry={nodes.sphere4.geometry} material={materials['Material.002']} position={[2.52, -0.5, -4.18]} scale={1.46} />
      <mesh geometry={nodes.sphere2.geometry} material={materials['Material.002']} position={[-5.49, 1, -0.13]} scale={1.46} />
      <mesh geometry={nodes.sphere6.geometry} material={materials['Material.002']} position={[2.53, -1.5, 4.31]} scale={1.46} />
      <mesh geometry={nodes.sphere1.geometry} material={materials['Material.002']} position={[-2.5, 1.5, 4.3]} scale={1.46} />
      <mesh geometry={nodes.sphereCenter2.geometry} material={materials['Material.002']} scale={0.31} />
      <mesh geometry={nodes.sphereCenter1.geometry} material={materials['Material.006']} scale={0.28} />
      <mesh geometry={nodes.sphere2a.geometry} material={materials['Material.006']} position={[-5.53, 1, -0.18]} scale={-1.28} />
      <mesh geometry={nodes.sphere3a.geometry} material={materials['Material.006']} position={[-2.71, 0.47, -4.04]} scale={-1.28} />
      <mesh geometry={nodes.sphere4a.geometry} material={materials['Material.006']} position={[2.52, -0.53, -4.23]} scale={-1.28} />
      <mesh geometry={nodes.sphere6a.geometry} material={materials['Material.006']} position={[2.56, -1.51, 4.35]} scale={-1.28} />
      <mesh geometry={nodes.sphere1a.geometry} material={materials['Material.006']} position={[-2.5, 1.51, 4.37]} scale={-1.28} />
      <mesh geometry={nodes.sphere5a.geometry} material={materials['Material.006']} position={[5.49, -1, -0.05]} scale={-1.28} />
    </group>
  )
}

useGLTF.preload('/massaNodes.gltf')
