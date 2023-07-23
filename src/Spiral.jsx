

import { createRoot } from 'react-dom/client'
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
//  import Box from './Box';
 
import { SpiralsAnimation } from './SpiralsAnimation';
import { OrbitControls } from '@react-three/drei';

export default function Spiral() {
  return (
     <Canvas>
          <fog attach="fog" args={["#000000", 5, 15]} /> 
          <color attach="background" args={["#000000"]} />
          <directionalLight position={[0, 0, 5]} color="red" />

     <ambientLight />
     <pointLight position={[10, 10, 10]} />
     {/* <Box position={[-1.2, 0, 0]} />
     <Box position={[1.2, 0, 0]} />   */}
     <EngineTransformed position={[1, 0, 3.1]} /> 
     <SpiralsAnimation position={[0, 0, 0]} />
      <OrbitControls />
   </Canvas> 
  );
}
