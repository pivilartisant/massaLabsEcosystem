import { Canvas } from "@react-three/fiber";
import { OrbitControls} from "@react-three/drei";
import { Suspense } from "react";
import { MassaRoute } from "./MassaRoute";



//The is the 3D rendering component which is a classsic three canvas
//scroll is disabled on orbit for better UX
//The 3D model is rendered in the MassaRoute component

export  function OverviewCanvas() {
  return (
    <div className="overview-canvas-container">
      <Canvas className="overview-canvas" camera={{ fov: 75, position: [0, 0, 15]}}>

        <Suspense fallback={null}>
          <pointLight position={[4, 10, 10]} intensity={0.7}/>
          <pointLight position={[-4, 10, 10]} intensity={0.3}/>
          <MassaRoute />
          <OrbitControls enableZoom={false}/>
        </Suspense> 
      </Canvas>
    </div>
  );
}
