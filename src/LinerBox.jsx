import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

export function LinerBox(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/hologram.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const mixer = new AnimationMixer(group.current);
    // Find the animation action by name or index
    const animationAction = mixer.clipAction(animations[0]); // Replace with the correct animation index or name
    // Set the desired loop behavior
    animationAction.loop = LoopRepeat;
    // Play the animation
    animationAction.play();

    const animate = () => {
      mixer.update(0.015); // Adjust the animation speed here
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      mixer.stopAllAction();
    };
  }, [animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3}
        >
          <group
            name="d4e286c425e847e78723a56ea435af67fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
               
                <group
                  name="Concept_201"
                  position={[0, 0.152, 0]}
                  rotation={[0.698, 0, -Math.PI / 4]}
                  scale={0.005}
                >
                  {/* box start */}
                  <group name="Object_13" position={[0, 0, -12.5]}>
                    <mesh
                      name="Concept_201_blue_cube_mapped_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Concept_201_blue_cube_mapped_0.geometry}
                      material={materials.blue_cube_mapped}
                    />
                  </group>
                </group>
   {/* box line start */}
                <group
                  name="Concept_204"
                  position={[0, 0.152, 0]}
                  rotation={[0.698, 0, -Math.PI / 4]}
                  scale={0.006}
                >
               
                  <group name="Object_19" position={[0, 0, -12.5]}>
                    <mesh
                      name="Concept_204_blue_cube_mapped_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Concept_204_blue_cube_mapped_0.geometry}
                      material={materials.blue_cube_mapped}
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

useGLTF.preload("/hologram.glb");

export default LinerBox;
