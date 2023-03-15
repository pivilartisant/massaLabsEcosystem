import { useNavigate } from 'react-router-dom';
import { MassaNodeFive } from './Gltf/MassaNodeFive';
import { MassaNodeFour } from './Gltf/MassaNodeFour';
import { MassaNodeOne } from './Gltf/MassaNodeOne'
import { MassaNodeSix } from './Gltf/MassaNodeSix';
import { MassaNodeThree } from './Gltf/MassaNodeThree';
import { MassaNodeTwo } from "./Gltf/MassaNodeTwo";
import { MassaTextNode } from './Gltf/MassaTextNode';


//this component is vital for using three meshes in an interactive way 
//because it is a functional component it lets use normal react fiber hooks 
//Here we use the useNavigate hook to redirect on click 
//the nodes that are rendered are all part of the same glft but parsed so we can treat them as seperate meshes
//all models we're made by me in blender

export function MassaRoute() {
  const navigate = useNavigate();

const handleNodeClick = (str) => {
  navigate(str);
};
    
  return (
    <>
      <MassaNodeOne onClick={() => handleNodeClick('/defi')} />
      <MassaNodeTwo onClick={() => handleNodeClick('/games')} />
      <MassaNodeThree onClick={() => handleNodeClick('/nft')} />
      <MassaNodeFour onClick={() => handleNodeClick('/social')} />
      <MassaNodeFive onClick={() => handleNodeClick('/tools')} />
      <MassaNodeSix onClick={() => handleNodeClick('/wallet')} />
      <MassaTextNode/>
    </>
  );
}
