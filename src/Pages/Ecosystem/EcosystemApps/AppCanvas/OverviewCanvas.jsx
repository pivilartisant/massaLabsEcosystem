import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { Suspense } from "react";
import { useNavigate } from 'react-router-dom';
import { MassaModel } from "./Gltf/Massa";
import { MassaRoute } from "./Gltf/MassaRoute";




export  function OverviewCanvas() {

//   const navigate = useNavigate()
//   const handleNavigate = () => {
//     navigate("/gallery/mystere")
//   }

  return (
    <div className="overview-canvas-container">
      <Canvas className="overview-canvas" camera={{ fov: 75, position: [-6, 2.6, 10]}}>

        <Suspense fallback={null}>
          <pointLight position={[4, 10, 10]} intensity={0.7}/>
          <pointLight position={[-4, 10, 10]} intensity={0.3}/>
          <MassaRoute/>
          {/* <MassaModel /> */}
          {/* <axesHelper/> */}
          {/* <gridHelper/> */}
          <OrbitControls />
        </Suspense> 
      </Canvas>
    </div>
  );
}
