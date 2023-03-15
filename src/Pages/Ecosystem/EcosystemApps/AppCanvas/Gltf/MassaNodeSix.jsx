/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 massaNodes.gltf
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from '@react-three/drei'

export function MassaNodeSix(props) {
  const { nodes, materials } = useGLTF('/public/models/massaNodes.gltf');
  const ref = useRef();

  const [materialColor, setMaterialColor] = useState("#fff");

  const handleColor=()=>{
    materialColor ===  "#fff" ? setMaterialColor("#e74e4e") : setMaterialColor("#fff");

  };
  return (
    <group {...props} dispose={null}>
      <mesh material-color={materialColor} geometry={nodes.sphere6.geometry} position={[2.53, -1.5, 4.31]} scale={1.46} />
      <mesh onPointerEnter={
            ()=>handleColor()
            }
            onPointerLeave={
            ()=>handleColor()
          } geometry={nodes.sphere6a.geometry} material={materials['Material.006']} position={[2.56, -1.51, 4.35]} scale={-1.28} />
    </group>
  )
}

useGLTF.preload('/massaNodes.gltf')