import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";
 

export function HoloGram2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/holor-new.glb");
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
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.84}
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
                  <group name="Object_13" position={[0, 0, -12.5]} />
                </group>
                <group
                  name="Concept_202"
                  position={[0, 0.152, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.001}
                >
                  <group
                    name="Concept_2_orange_line01"
                    position={[7.689, 0, 0]}
                    rotation={[0.087, Math.PI / 2, 0]}
                  >
                    <group
                      name="Object_10"
                      position={[-0.036, 0.072, -507.334]}
                    >
                      <mesh
                        name="Concept_2_orange_line01_thin_line_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes.Concept_2_orange_line01_thin_line_0.geometry
                        }
                        material={materials.thin_line}
                      />
                    </group>
                  </group>
                  <group name="Concept_203" rotation={[0, Math.PI / 2, 0]}>
                    <group
                      name="Object_6"
                      position={[-0.036, 0.072, -507.334]}
                    />
                  </group>
                </group>
                <group
                  name="Concept_204"
                  position={[0, 0.152, 0]}
                  rotation={[0.698, 0, -Math.PI / 4]}
                  scale={0.006}
                >
                  <group name="Object_19" position={[0, 0, -12.5]} />
                </group>
                <group
                  name="Plane002"
                  position={[-0.819, 0.167, -0.003]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.001}
                >
                  <group
                    name="Object_16"
                    position={[532.114, 0, -38.875]}
                    rotation={[Math.PI / 2, 0, 1.52]}
                  />
                </group>
                <group
                  name="Plane004"
                  position={[-0.819, 0.168, -0.003]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.001}
                >
                  <group
                    name="Object_22"
                    position={[532.598, -21.397, 16.451]}
                    rotation={[1.572, -0.04, 1.602]}
                  />
                </group>
                <group
                  name="Plane005"
                  position={[0.879, 0.143, -0.003]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.001}
                >
                  <group
                    name="Object_25"
                    position={[-533.066, 14.955, -16.481]}
                    rotation={[-1.57, 0.028, -1.58]}
                  />
                </group>
                <group
                  name="Plane006"
                  position={[0.879, 0.143, -0.003]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.001}
                >
                  <group
                    name="Object_28"
                    position={[-532.464, 0, 29.508]}
                    rotation={[-Math.PI / 2, 0, -1.515]}
                  />
                </group>
                <group
                  name="Plane007"
                  position={[-0.819, 0.167, -0.01]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.001}
                >
                  <group
                    name="Object_31"
                    position={[530.292, 29.795, -50.588]}
                    rotation={[1.572, 0.056, 1.498]}
                  />
                </group>
                <group
                  name="Plane008"
                  position={[0.879, 0.142, -0.01]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.001}
                >
                  <group
                    name="Object_34"
                    position={[-530.292, 29.795, -50.588]}
                    rotation={[-1.57, 0.056, 1.498]}
                    scale={-1}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/holor-new.glb");


export default HoloGram2;