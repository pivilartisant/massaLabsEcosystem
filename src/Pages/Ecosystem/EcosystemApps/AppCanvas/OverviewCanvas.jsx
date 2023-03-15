import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { Suspense } from "react";
import { MassaRoute } from "./MassaRoute";





export  function OverviewCanvas() {
  return (
    <div className="overview-canvas-container">
      <Canvas className="overview-canvas" camera={{ fov: 75, position: [0, 0, 15]}}>

        <Suspense fallback={null}>
          <pointLight position={[4, 10, 10]} intensity={0.7}/>
          <pointLight position={[-4, 10, 10]} intensity={0.3}/>
          <MassaRoute />
          {/* <axesHelper/>
          <gridHelper/> */}
          <OrbitControls enableZoom={false}/>
        </Suspense> 
      </Canvas>
    </div>
  );
}
