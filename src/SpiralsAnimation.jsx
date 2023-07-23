import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { AnimationMixer, LoopRepeat } from "three";

export function SpiralsAnimation(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/SpiralsAnimation.glb");
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
      mixer.update(0.058); // Adjust the animation speed here
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
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Spiral_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Spiral001_1" scale={0.9}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.material_1}
                />
              </group>
              <group name="Spiral002_2" scale={0.8}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.material_2}
                />
              </group>
              <group name="Spiral003_3" scale={0.7}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.material_3}
                />
              </group>
              <group name="Spiral004_4" scale={0.6}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material_4}
                />
              </group>
              <group name="Spiral005_5" scale={0.5}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.material_5}
                />
              </group>
              <group name="Spiral006_6">
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.material}
                />
              </group>
              <group name="Spiral007_7" scale={0.9}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.material_1}
                />
              </group>
              <group name="Spiral008_8" scale={0.8}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.material_2}
                />
              </group>
              <group name="Spiral009_9" scale={0.7}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.material_3}
                />
              </group>
              <group name="Spiral010_10" scale={0.6}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.material_4}
                />
              </group>
              <group name="Spiral011_11" scale={0.5}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.material_5}
                />
              </group>
              <group
                name="Cube002_14"
                rotation={[0.025, -0.001, -0.025]}
                scale={3.2}
              >
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.hide}
                />
                <group name="Cube_12" scale={0.719}>
                  <mesh
                    name="Object_30"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_30.geometry}
                    material={materials.hide}
                  />
                </group>
                <group
                  name="Cube001_13"
                  rotation={[0, 0, -Math.PI]}
                  scale={0.719}
                >
                  <mesh
                    name="Object_32"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_32.geometry}
                    material={materials.hide}
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

useGLTF.preload("/SpiralsAnimation.glb");
