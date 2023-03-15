/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 massaNodes.gltf
*/

import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from '@react-three/drei'

export function MassaNodeFive(props) {
  const { nodes, materials } = useGLTF('/massaNodes.gltf');
  const ref = useRef();

  const [materialColor, setMaterialColor] = useState("#fff");

  const handleColor=()=>{
    materialColor ===  "#fff" ? setMaterialColor("#e74e4e") : setMaterialColor("#fff");

  };
  return (
    <group {...props} dispose={null}>
      <mesh material-color={materialColor} geometry={nodes.sphere5.geometry} position={[5.5, -1, -0.01]} scale={1.46} />
      <mesh onPointerEnter={
            ()=>handleColor()
            }
            onPointerLeave={
            ()=>handleColor()
          } geometry={nodes.sphere5a.geometry} material-color={"#17202A"} position={[5.49, -1, -0.05]} scale={-1.28} />
    </group>
  )
}

useGLTF.preload('/massaNodes.gltf')
