 import { Canvas, useFrame } from "@react-three/fiber";
import {
   OrbitControls,
} from "@react-three/drei";
import HoloGram from './HoloGram'
 
 

export default function MyAnimation() {




  
  return (
    <div>
     <Canvas style={{width:"100vw", height:"100vh", backgroundColor:"#000000"}}>
 
     <pointLight position={[2, 2, 4]} />
          <HoloGram position={[0, -0.1, 4.4]}  />
           
     </Canvas>
     
    </div>
  )
}
