import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

///const MouseModel = (props) => {
  function MouseModel({action}) {    
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./mouse.glb");  
  const { actions } = useAnimations(animations, group);
  const previousAction = usePrevious(action);
    useEffect(() => {   
      if (previousAction)  {
        actions[previousAction].stop(); 
      }
      actions[action].play(); 
      }, [action,actions]);

  return (
    <group ref={group}  dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Ch14"
            geometry={nodes.Ch14.geometry}
            material={materials.Ch14_Body}
            skeleton={nodes.Ch14.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./mouse.glb");

export default MouseModel

function usePrevious(value) {
  const ref = useRef();
  useEffect(() =>  { ref.current = value }, [value]);
    return ref.current;
}