import { useNavigate } from 'react-router-dom';
import { MassaNodeFive } from './Gltf/MassaNodeFive';
import { MassaNodeFour } from './Gltf/MassaNodeFour';
import { MassaNodeOne } from './Gltf/MassaNodeOne'
import { MassaNodeSix } from './Gltf/MassaNodeSix';
import { MassaNodeThree } from './Gltf/MassaNodeThree';
import { MassaNodeTwo } from "./Gltf/MassaNodeTwo";
import { MassaTextNode } from './Gltf/MassaTextNode';

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
