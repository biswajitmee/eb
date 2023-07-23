import React, { useRef, useMemo, useContext, createContext } from "react";
import { useGLTF, Merged } from "@react-three/drei";

const context = createContext();
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF("../selected_object_particale.glb");
  const instances = useMemo(
    () => ({
      Emmiter: nodes.emmiter,
      Collision: nodes.collision,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => (
        <context.Provider value={instances} children={children} />
      )}
    </Merged>
  );
}

export function GlobeModel(props) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Turbulence"
          rotation={[-0.41, 0.13, 0.09]}
          userData={{ name: "Turbulence" }}
        />
        <instances.Emmiter
          name="emmiter"
          position={[-0.03, -0.04, 0.01]}
          scale={0.18}
          userData={{ name: "emmiter" }}
        />
        <instances.Collision
          name="collision"
          position={[-0.01, -0.02, 0.01]}
          scale={1.17}
          userData={{ name: "collision" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../selected_object_particale.glb");

export default GlobeModel