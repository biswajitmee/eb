import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";


 function HolaSpesh(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/holo_shapeshifter.glb");
  const { actions } = useAnimations(animations, group);




  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.757}
        >
          <group
            name="78196491333b467fa0b7f6eaa0e42b19fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube002"
                  position={[380.626, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="sphere_arm"
                  position={[380.626, 0, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_9.skeleton}
                      morphTargetDictionary={
                        nodes.Object_9.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.Object_9.morphTargetInfluences
                      }
                    />
                    <group
                      name="Object_8"
                      position={[380.626, 0, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/holo_shapeshifter.glb");

 export default HolaSpesh;