import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function PrincePlanet(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../PrincePlanet.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sketchfab_model_6"
                position={[-1.45, -0.21, -5.52]}
                rotation={[-1.37, 0.67, -2.31]}
                scale={0.93}
              >
                <group name="root_5">
                  <group
                    name="GLTF_SceneRootNode_4"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group
                      name="Cylinder001_1_1"
                      position={[0, 6.96, -4.34]}
                      rotation={[-Math.PI / 2, 1.1, -Math.PI]}
                      scale={0.29}
                    >
                      <group name="Object_9_0" position={[0.1, 0.08, 0]}>
                        <mesh
                          name="Object_8"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_8.geometry}
                          material={materials.malakhe}
                        />
                      </group>
                    </group>
                    <group
                      name="Cylinder_0_3"
                      position={[0, 6.95, 0]}
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={[1, 3.68, 1]}
                    >
                      <group
                        name="Object_4004_2"
                        position={[-0.1, -0.02, -0.7]}
                      >
                        <mesh
                          name="Object_12"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_12.geometry}
                          material={materials.plane_2}
                        />
                        <mesh
                          name="Object_14"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_14.geometry}
                          material={materials.plane_3}
                        />
                        <mesh
                          name="Object_13"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_13.geometry}
                          material={materials.plane_4}
                        />
                        <mesh
                          name="Object_11"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_11.geometry}
                          material={materials.plane_1}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Fog_Mat_0001_8"
                position={[20.19, -10.25, -12.19]}
                rotation={[Math.PI / 2, 0, Math.PI / 2]}
                scale={[0.11, 0.12, 0.12]}
              />
              <group
                name="RootNode_(gltf_orientation_matrix)_15"
                position={[12.53, -4.89, -2.7]}
                rotation={[-Math.PI / 2, 0, 0.66]}
                scale={7.23}
              >
                <group name="RootNode_(model_correction_matrix)_14">
                  <group name="Root_13">
                    <group
                      name="Cylinder006_10"
                      position={[0, 0, 0.24]}
                      scale={[1, 1, 1.58]}
                    >
                      <group
                        name="Cylinder_0001_9"
                        position={[0.04, 0.03, 0.17]}
                        rotation={[0, 0, -3.06]}
                        scale={[1.21, 1.21, 0.99]}
                      >
                        <mesh
                          name="Object_21"
                          castShadow
                          receiveShadow
                          geometry={nodes.Object_21.geometry}
                          material={materials.golbarg}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="RootNode_(gltf_orientation_matrix)001_32"
                position={[11.17, 3.21, -1.57]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <group name="RootNode_(model_correction_matrix)001_31">
                  <group name="root002_30">
                    <group
                      name="GLTF_SceneRootNode002_29"
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <group
                        name="body_0_19"
                        position={[0, 1.36, 0.63]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.79}
                      >
                        <group
                          name="Mesh_0_16"
                          position={[2.1, 0.32, 4.9]}
                          rotation={[0, -0.29, Math.PI / 2]}
                          scale={1.76}
                        >
                          <mesh
                            name="Object_29"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_29.geometry}
                            material={materials.white}
                          />
                          <mesh
                            name="Object_28"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_28.geometry}
                            material={materials.cheshm}
                          />
                        </group>
                        <group
                          name="Mesh_0001_17"
                          position={[2.19, 0.32, 4.68]}
                          rotation={[0, -0.29, Math.PI / 2]}
                          scale={1.76}
                        >
                          <mesh
                            name="Object_31"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_31.geometry}
                            material={materials.skin}
                          />
                        </group>
                        <group
                          name="Mesh_0002_18"
                          position={[2.89, 0.32, 4.44]}
                          rotation={[0, -0.29, Math.PI / 2]}
                          scale={1.76}
                        >
                          <mesh
                            name="Object_33"
                            castShadow
                            receiveShadow
                            geometry={nodes.Object_33.geometry}
                            material={materials.ASLI}
                          />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Sphere001_33"
                position={[-2.71, -3.88, 5.63]}
                scale={4.32}
              >
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials.planet_2}
                />
              </group>
              <group
                name="Sphere002_34"
                position={[-10.14, -1.71, -6.55]}
                scale={4.2}
              >
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  material={materials["planet_2.001"]}
                />
              </group>
              <group
                name="Sphere003_35"
                position={[-15.6, 3.96, 3.68]}
                scale={3.11}
              >
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials.planet_3}
                />
              </group>
              <group
                name="Sphere004_36"
                position={[-23.02, 5.94, -0.05]}
                scale={2}
              >
                <mesh
                  name="Object_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials.planet_5}
                />
              </group>
              <group
                name="Sphere005_37"
                position={[-28.35, 8.45, 0.37]}
                scale={1.49}
              >
                <mesh
                  name="Object_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials.planet_6}
                />
              </group>
              <group
                name="Sphere006_38"
                position={[-30.15, 10.81, 4.88]}
                scale={1.5}
              >
                <mesh
                  name="Object_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_45.geometry}
                  material={materials.planet_89}
                />
              </group>
              <group
                name="Sphere009_39"
                position={[-16.16, 9.72, -8.06]}
                scale={1.46}
              >
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="Cylinder_40"
                position={[-10.29, 3.02, -7.75]}
                rotation={[-0.24, 0, 0]}
                scale={1.12}
              >
                <mesh
                  name="Object_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials.HAT_STRIP}
                />
              </group>
              <group
                name="Sphere010_42"
                position={[11.28, -11.2, -0.51]}
                scale={7.89}
              >
                <mesh
                  name="Object_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51.geometry}
                  material={materials.planet_asli}
                />
              </group>
              <group
                name="Cylinder002_43"
                position={[-1.69, -0.42, 8.88]}
                rotation={[0.73, -0.17, -0.22]}
                scale={[1.86, 0.23, 1.86]}
              >
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials.CROWN}
                />
              </group>
              <group
                name="Plane_44"
                position={[-18.58, 5.61, 0.07]}
                rotation={[-Math.PI, 0, 0]}
                scale={[-0.14, 0.14, 0.14]}
              >
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials.matn}
                />
              </group>
              <group
                name="Torus_47"
                position={[14.37, -2.14, 1.03]}
                scale={[1.1, 1.06, 1.06]}
              >
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.ASLI}
                />
              </group>
              <group
                name="Plane019_48"
                position={[-25.46, 10.6, 3.05]}
                rotation={[1.73, -0.22, -2.34]}
                scale={[4.05, 2.24, 2.24]}
              >
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials.noor_fanoos}
                />
              </group>
              <group
                name="Cylinder007_49"
                position={[12.42, -2.56, -3.09]}
                rotation={[-0.49, 0, 0]}
                scale={[0.13, 0.46, 0.13]}
              >
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.ASLI}
                />
              </group>
              <group
                name="Sphere023_50"
                position={[-8.72, -1.39, -8.37]}
                scale={0.14}
              >
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials.eynak}
                />
              </group>
              <group
                name="Sphere024_51"
                position={[-11.47, -1.61, -10.18]}
                scale={0.14}
              >
                <mesh
                  name="Object_65"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials.eynak}
                />
              </group>
              <group
                name="New_Project_(1)_52"
                position={[6.94, -7.51, -3.06]}
                rotation={[Math.PI / 2, 0, -0.28]}
                scale={43.29}
              >
                <mesh
                  name="Object_67"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={materials.ABR_DOOR}
                />
              </group>
              <group
                name="New_Project_(1)001_53"
                position={[10.23, -15.53, -2.16]}
                rotation={[Math.PI / 2, 0, 2.26]}
                scale={[34.68, 34.68, 41.74]}
              >
                <mesh
                  name="Object_69"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials.ABR_DOOR}
                />
              </group>
              <group
                name="cloud_PNG8_54"
                position={[-19.35, -0.13, 0.19]}
                rotation={[-Math.PI / 2, 0, -1.94]}
                scale={68.72}
              >
                <mesh
                  name="Object_71"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71.geometry}
                  material={materials.abr_1}
                />
              </group>
              <group
                name="cloud_PNG8001_55"
                position={[-0.52, -15.75, 0.98]}
                rotation={[-0.4, 0, -1.69]}
                scale={[69.55, 115.37, 68.72]}
              >
                <mesh
                  name="Object_73"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_73.geometry}
                  material={materials.abr_1}
                />
              </group>
              <group
                name="Plane021_56"
                position={[15.55, -11.24, 6.26]}
                rotation={[0, -0.28, -Math.PI / 2]}
                scale={[-2.56, 1.12, 2.14]}
              >
                <mesh
                  name="Object_75"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials["ABR.001"]}
                />
              </group>
              <group
                name="R_(3)_57"
                position={[-24.9, -0.21, 5.94]}
                rotation={[Math.PI / 2, 0, -1.87]}
                scale={[99.79, 89.89, 89.89]}
              >
                <mesh
                  name="Object_77"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77.geometry}
                  material={materials.material_27}
                />
              </group>
              <group
                name="cloud_PNG8002_58"
                position={[-1.66, -0.15, -26.67]}
                rotation={[-Math.PI / 2, 0, 3.06]}
                scale={68.72}
              >
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials.abr_1}
                />
              </group>
              <group
                name="cloud_PNG8003_59"
                position={[8.54, -34.95, -1.72]}
                rotation={[-3.06, 1.29, 2.12]}
                scale={[80.26, 116.77, 69.49]}
              >
                <mesh
                  name="Object_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials.abr_1}
                />
              </group>
              <group
                name="Plane022_60"
                position={[2.42, -11.61, -3.72]}
                rotation={[-Math.PI, -0.23, Math.PI / 2]}
                scale={[-2.28, 2.06, 2.38]}
              >
                <mesh
                  name="Object_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials.abr_2}
                />
              </group>
              <group
                name="Plane023_61"
                position={[2.42, -11.61, -3.72]}
                rotation={[-Math.PI, -0.23, Math.PI / 2]}
                scale={[-2.28, 2.06, 2.38]}
              >
                <mesh
                  name="Object_85"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85.geometry}
                  material={materials["ABR.001"]}
                />
              </group>
              <group
                name="Plane024_62"
                position={[19.35, -9.55, -8.95]}
                rotation={[-Math.PI, -0.23, -Math.PI / 2]}
                scale={[2.4, 0.72, 2.82]}
              >
                <mesh
                  name="Object_87"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials["ABR.001"]}
                />
              </group>
              <group
                name="Plane025_63"
                position={[-0.9, -5.71, 7.75]}
                rotation={[0, -0.32, -Math.PI / 2]}
                scale={[-1.34, 1.34, 1.15]}
              >
                <mesh
                  name="Object_89"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_89.geometry}
                  material={materials.material_29}
                />
              </group>
              <group
                name="Plane026_64"
                position={[-19.26, 4.12, -1.44]}
                rotation={[0.14, 0.85, -1.65]}
                scale={[-0.75, 0.75, 0.65]}
              >
                <mesh
                  name="Object_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials.material_29}
                />
              </group>
              <group
                name="Plane027_65"
                position={[-27.18, 3.01, 0.23]}
                rotation={[-Math.PI, -0.58, Math.PI / 2]}
                scale={[-3.55, 2.06, 2.38]}
              >
                <mesh
                  name="Object_93"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials.abr_2}
                />
              </group>
              <group
                name="cloud_PNG8004_66"
                position={[-3.49, -5.43, -15.63]}
                rotation={[-1.64, -0.08, -2.6]}
                scale={[48.98, 71.25, 42.4]}
              >
                <mesh
                  name="Object_95"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials.abr_1}
                />
              </group>
              <group
                name="���Pngtree���cute_cartoon_sun_with_fried_6461132_67"
                position={[-16.15, 9.67, -8.06]}
                rotation={[-2.81, -0.03, -1.35]}
                scale={6.69}
              >
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials.sun_strip}
                />
              </group>
              <group
                name="���Pngtree���cute_cartoon_sun_with_fried_6461132001_68"
                position={[-19.58, 7.9, 8.42]}
                rotation={[1.69, 0.02, -1.86]}
                scale={4.3}
              >
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials.sun_strip}
                />
              </group>
              <group
                name="Plane020_69"
                position={[17.51, -19.76, 6.68]}
                rotation={[0.17, -0.27, -1.51]}
                scale={[-4.53, 4.29, 3.71]}
              >
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials.material_29}
                />
              </group>
              <group
                name="cloud_PNG8005_70"
                position={[15.04, -20.38, -18.6]}
                rotation={[-1.55, 0.11, 1.05]}
                scale={[48.98, 71.25, 42.4]}
              >
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.abr_1}
                />
              </group>
              <group
                name="pngkit_ray-of-light-png_606483_(1)_71"
                position={[-35.91, -5, -4.2]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={68.92}
              >
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials.noore_elahi}
                />
              </group>
              <group
                name="Plane034_72"
                position={[13.38, 1.29, -0.61]}
                rotation={[-2.81, -1.29, -0.94]}
                scale={[-0.67, 0.51, 0.39]}
              >
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials.material_32}
                />
              </group>
              <group
                name="Sphere027_73"
                position={[7.42, -7.37, -3.85]}
                rotation={[0, 0.45, 0]}
                scale={[110.89, 103.2, 109.1]}
              >
                <mesh
                  name="Object_110"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.HALE}
                />
              </group>
              <group
                name="Cylinder005_74"
                position={[-10.29, 4.33, -8.1]}
                rotation={[-0.24, 0, 0]}
                scale={1.12}
              >
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials.kolah}
                />
              </group>
              <group
                name="Sphere025|Icosphere|Dupli|22_75"
                position={[0.06, -0.2, -0.55]}
                rotation={[-0.29, -0.09, -1.11]}
                scale={0}
              >
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Sphere025|Icosphere|Dupli|209_76"
                position={[0.09, -0.11, -0.18]}
                rotation={[-0.44, -0.83, -2.23]}
                scale={0}
              >
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Sphere025|Icosphere|Dupli|583_77"
                position={[0.4, 0.2, 0.37]}
                rotation={[2.7, -0.83, 0.37]}
                scale={0}
              >
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Sphere025|Icosphere|Dupli|752_78"
                position={[0.03, 0.35, 0.79]}
                rotation={[2.65, -0.09, 0.93]}
                scale={0}
              >
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Sphere025|Icosphere|Dupli|924_79"
                position={[-0.27, -0.31, 0.43]}
                rotation={[-2.54, 0.59, 1.12]}
                scale={0}
              >
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Sphere025|Icosphere|Dupli|927_80"
                position={[-0.48, -0.36, 0.51]}
                rotation={[-2.54, 0.59, 2.46]}
                scale={0}
              >
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Sphere025|Icosphere|Dupli|992_81"
                position={[-0.14, 0.56, 0.09]}
                rotation={[1.76, 0.23, 0.82]}
                scale={0}
              >
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials.material_0}
                />
              </group>
              <group
                name="Sphere025_574"
                position={[12.46, -10.62, -0.15]}
                scale={201.97}
              >
                <group
                  name="Sphere025|Icosphere|Dupli|100001_82"
                  position={[0.1, 0.08, -0.18]}
                  rotation={[0.71, -0.23, 0.61]}
                  scale={0}
                >
                  <mesh
                    name="Object_130"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_130.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1000001_83"
                  position={[-0.09, 0.05, 0.01]}
                  rotation={[-2.44, 0.75, 2.59]}
                  scale={0}
                >
                  <mesh
                    name="Object_132"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_132.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1004001_84"
                  position={[-0.19, 0.25, 0.2]}
                  rotation={[2.05, 0.51, 2.44]}
                  scale={0}
                >
                  <mesh
                    name="Object_134"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_134.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1006001_85"
                  position={[-0.21, 0.19, 0.08]}
                  rotation={[2.05, 0.51, 2.02]}
                  scale={0}
                >
                  <mesh
                    name="Object_136"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_136.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1009001_86"
                  position={[-0.03, 0.01, 0.01]}
                  rotation={[-2.23, 0.64, 0.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_138"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_138.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|101001_87"
                  position={[0.01, 0.26, -0.16]}
                  rotation={[0.71, -0.23, -1.92]}
                  scale={0}
                >
                  <mesh
                    name="Object_140"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_140.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1012001_88"
                  position={[-0.13, 0.16, 0.02]}
                  rotation={[2.23, 0.64, -2.6]}
                  scale={0}
                >
                  <mesh
                    name="Object_142"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_142.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1014001_89"
                  position={[-0.08, -0.07, 0.1]}
                  rotation={[-2.05, 0.51, -0.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_144"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_144.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1019001_90"
                  position={[-0.1, -0.03, 0.04]}
                  rotation={[2.7, 0.83, -0.44]}
                  scale={0}
                >
                  <mesh
                    name="Object_146"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_146.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1023001_91"
                  position={[-0.11, 0.15, 0.09]}
                  rotation={[1.94, 0.6, 2.83]}
                  scale={0}
                >
                  <mesh
                    name="Object_148"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_148.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1024001_92"
                  position={[-0.04, 0.11, 0.04]}
                  rotation={[1.94, 0.6, -2.26]}
                  scale={0}
                >
                  <mesh
                    name="Object_150"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_150.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1026001_93"
                  position={[-0.09, 0.29, 0.05]}
                  rotation={[1.94, 0.6, -0.88]}
                  scale={0}
                >
                  <mesh
                    name="Object_152"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_152.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1029001_94"
                  position={[-0.09, -0.06, 0.04]}
                  rotation={[-2.09, 0.75, -2.57]}
                  scale={0}
                >
                  <mesh
                    name="Object_154"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_154.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|103001_95"
                  position={[0.02, 0.08, -0.02]}
                  rotation={[0.71, -0.23, 2.06]}
                  scale={0}
                >
                  <mesh
                    name="Object_156"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_156.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1032001_96"
                  position={[-0.22, -0.1, 0.02]}
                  rotation={[-2.09, 0.75, 1.77]}
                  scale={0}
                >
                  <mesh
                    name="Object_158"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_158.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|104001_97"
                  position={[0.01, 0.12, -0.2]}
                  rotation={[0.71, -0.23, 1.2]}
                  scale={0}
                >
                  <mesh
                    name="Object_160"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_160.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1045001_98"
                  position={[-0.14, 0.11, 0.04]}
                  rotation={[2.57, 1.01, -0.31]}
                  scale={0}
                >
                  <mesh
                    name="Object_162"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_162.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1046001_99"
                  position={[-0.28, 0.06, 0.06]}
                  rotation={[2.57, 1.01, -1.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_164"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_164.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1057001_100"
                  position={[-0.03, -0.07, 0.1]}
                  rotation={[-2.94, 1.07, 0.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_166"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_166.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1058001_101"
                  position={[-0.27, -0.01, 0.11]}
                  rotation={[-2.94, 1.07, 2.41]}
                  scale={0}
                >
                  <mesh
                    name="Object_168"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_168.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1060001_102"
                  position={[-0.02, -0.06, -0.01]}
                  rotation={[-2.57, 1.01, 1.55]}
                  scale={0}
                >
                  <mesh
                    name="Object_170"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_170.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1063001_103"
                  position={[-0.22, -0.2, 0.18]}
                  rotation={[-2.3, 0.89, 1.17]}
                  scale={0}
                >
                  <mesh
                    name="Object_172"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_172.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1065001_104"
                  position={[-0.28, 0.12, -0.01]}
                  rotation={[2.82, 1.26, -1]}
                  scale={0}
                >
                  <mesh
                    name="Object_174"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_174.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1068001_105"
                  position={[0.03, 0.28, -0.03]}
                  rotation={[1.6, 0.09, -0.84]}
                  scale={0}
                >
                  <mesh
                    name="Object_176"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_176.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1069001_106"
                  position={[-0.1, -0.04, 0]}
                  rotation={[-1.6, 0.09, 1.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_178"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_178.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1070001_107"
                  position={[-0.18, 0.07, -0.04]}
                  rotation={[-2.82, 1.26, 0.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_180"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_180.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1072001_108"
                  position={[-0.06, -0.02, -0.07]}
                  rotation={[-2.34, 1.16, 0.89]}
                  scale={0}
                >
                  <mesh
                    name="Object_182"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_182.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1073001_109"
                  position={[-0.21, -0.05, 0.09]}
                  rotation={[-2.34, 1.16, 1.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_184"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_184.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1078001_110"
                  position={[-0.15, 0.16, 0.03]}
                  rotation={[1.73, 0.47, -0.96]}
                  scale={0}
                >
                  <mesh
                    name="Object_186"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_186.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1082001_111"
                  position={[-0.18, -0.17, 0.04]}
                  rotation={[-2.07, 1.01, -1.39]}
                  scale={0}
                >
                  <mesh
                    name="Object_188"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_188.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1083001_112"
                  position={[-0.26, -0.03, 0.14]}
                  rotation={[-2.07, 1.01, 2.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_190"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_190.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1089001_113"
                  position={[-0.24, 0.18, 0.02]}
                  rotation={[1.91, 0.83, -1.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_192"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_192.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1092001_114"
                  position={[-0.12, -0.18, -0.01]}
                  rotation={[-1.81, 0.65, 0.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_194"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_194.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1094001_115"
                  position={[-0.08, -0.03, -0.04]}
                  rotation={[2.07, 1.01, 1.96]}
                  scale={0}
                >
                  <mesh
                    name="Object_196"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_196.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1096001_116"
                  position={[-0.13, 0.14, 0]}
                  rotation={[2.07, 1.01, -1.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_198"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_198.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1097001_117"
                  position={[-0.04, 0.08, -0.08]}
                  rotation={[2.07, 1.01, 0.59]}
                  scale={0}
                >
                  <mesh
                    name="Object_200"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_200.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1099001_118"
                  position={[-0.31, 0.08, 0.14]}
                  rotation={[2.34, 1.16, 1.79]}
                  scale={0}
                >
                  <mesh
                    name="Object_202"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_202.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1101001_119"
                  position={[-0.33, 0.11, 0.02]}
                  rotation={[2.34, 1.16, -1.07]}
                  scale={0}
                >
                  <mesh
                    name="Object_204"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_204.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1102001_120"
                  position={[-0.19, 0.04, 0.02]}
                  rotation={[2.34, 1.16, 0.55]}
                  scale={0}
                >
                  <mesh
                    name="Object_206"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_206.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1103001_121"
                  position={[-0.1, -0.09, -0.02]}
                  rotation={[-1.69, 0.88, 2.55]}
                  scale={0}
                >
                  <mesh
                    name="Object_208"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_208.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|111001_122"
                  position={[0.11, -0.17, -0.26]}
                  rotation={[-0.33, -0.47, 0.92]}
                  scale={0}
                >
                  <mesh
                    name="Object_210"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_210.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1110001_123"
                  position={[-0.05, -0.02, 0.01]}
                  rotation={[-1.65, 0.69, 0.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_212"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_212.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1111001_124"
                  position={[-0.16, -0.1, 0.01]}
                  rotation={[-1.65, 0.69, -2.31]}
                  scale={0}
                >
                  <mesh
                    name="Object_214"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_214.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1117001_125"
                  position={[-0.09, 0.14, -0.04]}
                  rotation={[1.88, 1.26, -2.47]}
                  scale={0}
                >
                  <mesh
                    name="Object_216"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_216.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1120001_126"
                  position={[-0.1, -0.01, -0.04]}
                  rotation={[-1.6, 0.29, -1.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_218"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_218.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1126001_127"
                  position={[-0.14, 0.03, -0.03]}
                  rotation={[-2.36, 1.43, 1.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_220"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_220.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|113001_128"
                  position={[0.01, 0.01, -0.06]}
                  rotation={[1.13, -0.22, -0.59]}
                  scale={0}
                >
                  <mesh
                    name="Object_222"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_222.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1142001_129"
                  position={[-0.09, 0.11, -0.06]}
                  rotation={[1.65, 0.69, -1.04]}
                  scale={0}
                >
                  <mesh
                    name="Object_224"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_224.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1145001_130"
                  position={[-0.1, -0.02, -0.06]}
                  rotation={[1.65, 0.69, -1.07]}
                  scale={0}
                >
                  <mesh
                    name="Object_226"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_226.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1147001_131"
                  position={[-0.14, -0.07, -0.09]}
                  rotation={[-0.79, 1.43, 0.77]}
                  scale={0}
                >
                  <mesh
                    name="Object_228"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_228.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1149001_132"
                  position={[-0.23, -0.04, 0.01]}
                  rotation={[-0.79, 1.43, 1.25]}
                  scale={0}
                >
                  <mesh
                    name="Object_230"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_230.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|115001_133"
                  position={[0.03, -0.1, -0.21]}
                  rotation={[-0.54, -0.43, -1.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_232"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_232.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1150001_134"
                  position={[-0.17, 0.08, -0.1]}
                  rotation={[-0.79, 1.43, -1.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_234"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_234.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1151001_135"
                  position={[-0.17, 0.01, 0.07]}
                  rotation={[-0.79, 1.43, 0.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_236"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_236.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1155001_136"
                  position={[0, 0.16, -0.01]}
                  rotation={[1.54, 0.29, -1.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_238"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_238.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|116001_137"
                  position={[0.09, -0.11, -0.13]}
                  rotation={[-0.54, -0.43, -2.67]}
                  scale={0}
                >
                  <mesh
                    name="Object_240"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_240.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1160001_138"
                  position={[0.04, 0.09, -0.01]}
                  rotation={[1.52, 0.49, -2.37]}
                  scale={0}
                >
                  <mesh
                    name="Object_242"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_242.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1162001_139"
                  position={[-0.06, 0.01, 0.01]}
                  rotation={[-1.39, 1.07, 2.49]}
                  scale={0}
                >
                  <mesh
                    name="Object_244"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_244.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1167001_140"
                  position={[-0.1, 0.11, 0.04]}
                  rotation={[1.45, 0.88, -3.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_246"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_246.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1168001_141"
                  position={[-0.1, 0.16, 0.01]}
                  rotation={[1.45, 0.88, -1.95]}
                  scale={0}
                >
                  <mesh
                    name="Object_248"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_248.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|117001_142"
                  position={[-0.03, -0.1, -0.18]}
                  rotation={[-0.54, -0.43, 1.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_250"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_250.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1171001_143"
                  position={[-0.06, 0.03, 0.01]}
                  rotation={[-1.52, 0.49, -2.34]}
                  scale={0}
                >
                  <mesh
                    name="Object_252"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_252.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1173001_144"
                  position={[-0.06, -0.05, 0.01]}
                  rotation={[-1.54, 0.29, 2.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_254"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_254.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1176001_145"
                  position={[-0.03, 0.1, 0]}
                  rotation={[Math.PI / 4, 1.43, 0.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_256"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_256.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1178001_146"
                  position={[-0.21, -0.2, -0.01]}
                  rotation={[-1.34, 0.65, 2.49]}
                  scale={0}
                >
                  <mesh
                    name="Object_258"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_258.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1181001_147"
                  position={[-0.18, 0.03, -0.09]}
                  rotation={[1.07, 1.01, 1.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_260"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_260.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1182001_148"
                  position={[-0.09, -0.05, -0.03]}
                  rotation={[1.07, 1.01, -0.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_262"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_262.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1189001_149"
                  position={[0.02, -0.03, -0.02]}
                  rotation={[-1.48, 0.28, 0.26]}
                  scale={0}
                >
                  <mesh
                    name="Object_264"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_264.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1191001_150"
                  position={[-0.25, 0.11, -0.15]}
                  rotation={[0.33, 1.26, -1.28]}
                  scale={0}
                >
                  <mesh
                    name="Object_266"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_266.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1193001_151"
                  position={[-0.32, 0.05, -0.09]}
                  rotation={[0.33, 1.26, 1.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_268"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_268.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1197001_152"
                  position={[-0.19, -0.08, -0.16]}
                  rotation={[-0.33, 1.26, -2.45]}
                  scale={0}
                >
                  <mesh
                    name="Object_270"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_270.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1198001_153"
                  position={[-0.07, -0.09, -0.1]}
                  rotation={[-0.33, 1.26, 0.76]}
                  scale={0}
                >
                  <mesh
                    name="Object_272"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_272.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1208001_154"
                  position={[-0.29, -0.06, -0.13]}
                  rotation={[-0.8, 1.16, 2.73]}
                  scale={0}
                >
                  <mesh
                    name="Object_274"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_274.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1212001_155"
                  position={[-0.23, -0.21, -0.16]}
                  rotation={[-1.07, 1.01, 0.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_276"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_276.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1213001_156"
                  position={[-0.24, 0, -0.01]}
                  rotation={[-1.07, 1.01, 1.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_278"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_278.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1214001_157"
                  position={[-0.03, 0.04, -0.05]}
                  rotation={[-1.07, 1.01, 2.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_280"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_280.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|122001_158"
                  position={[0.05, -0.05, -0.22]}
                  rotation={[-0.75, -0.37, 1.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_282"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_282.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1221001_159"
                  position={[-0.13, -0.12, -0.11]}
                  rotation={[-1.23, 0.83, 0.76]}
                  scale={0}
                >
                  <mesh
                    name="Object_284"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_284.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1222001_160"
                  position={[-0.16, -0.11, -0.04]}
                  rotation={[-1.23, 0.83, 0.67]}
                  scale={0}
                >
                  <mesh
                    name="Object_286"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_286.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1223001_161"
                  position={[-0.06, -0.11, -0.02]}
                  rotation={[-1.23, 0.83, 3.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_288"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_288.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1230001_162"
                  position={[-0.12, 0.18, -0.07]}
                  rotation={[1.43, 0.26, 2.66]}
                  scale={0}
                >
                  <mesh
                    name="Object_290"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_290.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1233001_163"
                  position={[-0.02, 0.01, -0.06]}
                  rotation={[-0.57, 1.01, -2.23]}
                  scale={0}
                >
                  <mesh
                    name="Object_292"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_292.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1236001_164"
                  position={[-0.29, -0.06, -0.16]}
                  rotation={[-0.57, 1.01, 2.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_294"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_294.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|124001_165"
                  position={[0.07, -0.17, -0.13]}
                  rotation={[-0.75, -0.37, -2.76]}
                  scale={0}
                >
                  <mesh
                    name="Object_296"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_296.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1240001_166"
                  position={[-0.16, 0.13, -0.06]}
                  rotation={[1.32, 0.43, 2.74]}
                  scale={0}
                >
                  <mesh
                    name="Object_298"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_298.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1241001_167"
                  position={[-0.05, 0.03, -0.08]}
                  rotation={[1.32, 0.43, 2.33]}
                  scale={0}
                >
                  <mesh
                    name="Object_300"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_300.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1242001_168"
                  position={[-0.13, -0.13, -0.08]}
                  rotation={[-0.85, 0.89, 0.03]}
                  scale={0}
                >
                  <mesh
                    name="Object_302"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_302.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1250001_169"
                  position={[-0.2, -0.17, -0.06]}
                  rotation={[-1.05, 0.75, -0.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_304"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_304.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1253001_170"
                  position={[-0.14, 0.11, 0]}
                  rotation={[1.05, 0.75, -2.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_306"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_306.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1262001_171"
                  position={[-0.22, 0.1, -0.06]}
                  rotation={[0.57, 1.01, -0.07]}
                  scale={0}
                >
                  <mesh
                    name="Object_308"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_308.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1263001_172"
                  position={[-0.17, 0.06, -0.2]}
                  rotation={[0.57, 1.01, 0.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_310"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_310.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1264001_173"
                  position={[-0.02, -0.06, -0.02]}
                  rotation={[-1.43, 0.26, 2.49]}
                  scale={0}
                >
                  <mesh
                    name="Object_312"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_312.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1265001_174"
                  position={[-0.31, -0.03, -0.06]}
                  rotation={[0.21, 1.07, 1.62]}
                  scale={0}
                >
                  <mesh
                    name="Object_314"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_314.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1275001_175"
                  position={[-0.21, 0.08, -0.19]}
                  rotation={[-0.21, 1.07, -1.48]}
                  scale={0}
                >
                  <mesh
                    name="Object_316"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_316.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1276001_176"
                  position={[-0.24, -0.09, -0.16]}
                  rotation={[-0.21, 1.07, 2.78]}
                  scale={0}
                >
                  <mesh
                    name="Object_318"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_318.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1277001_177"
                  position={[-0.13, 0.1, 0]}
                  rotation={[-0.21, 1.07, -0.5]}
                  scale={0}
                >
                  <mesh
                    name="Object_320"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_320.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|128001_178"
                  position={[0.04, 0.01, -0.13]}
                  rotation={[0.75, -0.37, 2.75]}
                  scale={0}
                >
                  <mesh
                    name="Object_322"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_322.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1282001_179"
                  position={[-0.12, 0.13, -0.16]}
                  rotation={[0.7, 0.75, 2.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_324"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_324.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1283001_180"
                  position={[-0.09, -0.29, -0.04]}
                  rotation={[-1.24, 0.37, -2.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_326"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_326.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1284001_181"
                  position={[-0.04, -0.19, -0.07]}
                  rotation={[-1.24, 0.37, -1.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_328"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_328.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1286001_182"
                  position={[-0.18, 0.07, -0.07]}
                  rotation={[0.44, 0.83, 2.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_330"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_330.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1289001_183"
                  position={[-0.07, -0.28, -0.06]}
                  rotation={[-1.38, 0.23, -2.2]}
                  scale={0}
                >
                  <mesh
                    name="Object_332"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_332.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1295001_184"
                  position={[-0.21, 0, -0.05]}
                  rotation={[-0.15, 0.88, 1.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_334"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_334.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1298001_185"
                  position={[-0.13, -0.01, -0.07]}
                  rotation={[-0.15, 0.88, 2.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_336"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_336.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1299001_186"
                  position={[-0.24, 0.07, -0.2]}
                  rotation={[-0.15, 0.88, -0.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_338"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_338.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|130001_187"
                  position={[-0.08, 0.11, -0.05]}
                  rotation={[0.75, -0.37, -0.35]}
                  scale={0}
                >
                  <mesh
                    name="Object_340"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_340.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1303001_188"
                  position={[-0.17, 0.21, -0.09]}
                  rotation={[1.24, 0.37, -0.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_342"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_342.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1305001_189"
                  position={[-0.22, -0.16, -0.17]}
                  rotation={[-0.7, 0.75, 1.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_344"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_344.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1307001_190"
                  position={[-0.07, 0.02, 0.04]}
                  rotation={[-0.7, 0.75, -2.79]}
                  scale={0}
                >
                  <mesh
                    name="Object_346"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_346.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1314001_191"
                  position={[-0.07, 0.08, 0.01]}
                  rotation={[1.09, 0.51, 2.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_348"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_348.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1315001_192"
                  position={[-0.02, -0.11, -0.06]}
                  rotation={[-0.91, 0.64, 1.68]}
                  scale={0}
                >
                  <mesh
                    name="Object_350"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_350.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1318001_193"
                  position={[-0.03, 0.13, -0.09]}
                  rotation={[0.91, 0.64, -2.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_352"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_352.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|132001_194"
                  position={[0.15, 0.19, -0.26]}
                  rotation={[0.75, -0.37, 2.97]}
                  scale={0}
                >
                  <mesh
                    name="Object_354"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_354.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1320001_195"
                  position={[-0.1, 0, -0.01]}
                  rotation={[0.91, 0.64, -1.62]}
                  scale={0}
                >
                  <mesh
                    name="Object_356"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_356.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1322001_196"
                  position={[-0.01, -0.01, -0.08]}
                  rotation={[0.91, 0.64, -1.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_358"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_358.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1325001_197"
                  position={[-0.14, 0.01, -0.21]}
                  rotation={[-0.37, 0.65, -0.97]}
                  scale={0}
                >
                  <mesh
                    name="Object_360"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_360.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1326001_198"
                  position={[-0.03, -0.08, -0.11]}
                  rotation={[-0.37, 0.65, 0.85]}
                  scale={0}
                >
                  <mesh
                    name="Object_362"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_362.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1328001_199"
                  position={[-0.15, -0.05, -0.12]}
                  rotation={[-0.37, 0.65, -0.75]}
                  scale={0}
                >
                  <mesh
                    name="Object_364"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_364.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1331001_200"
                  position={[-0.15, -0.06, -0.25]}
                  rotation={[-0.6, 0.59, 2.9]}
                  scale={0}
                >
                  <mesh
                    name="Object_366"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_366.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1334001_201"
                  position={[-0.09, -0.01, -0.12]}
                  rotation={[-0.6, 0.59, -2.42]}
                  scale={0}
                >
                  <mesh
                    name="Object_368"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_368.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1336001_202"
                  position={[-0.11, 0.26, -0.11]}
                  rotation={[1, 0.42, 2.53]}
                  scale={0}
                >
                  <mesh
                    name="Object_370"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_370.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1339001_203"
                  position={[-0.17, -0.07, -0.07]}
                  rotation={[-0.81, 0.51, 1.57]}
                  scale={0}
                >
                  <mesh
                    name="Object_372"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_372.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1348001_204"
                  position={[-0.11, -0.23, -0.14]}
                  rotation={[-1, 0.42, 2.83]}
                  scale={0}
                >
                  <mesh
                    name="Object_374"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_374.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1350001_205"
                  position={[-0.16, 0.08, -0.23]}
                  rotation={[0.6, 0.59, -1.95]}
                  scale={0}
                >
                  <mesh
                    name="Object_376"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_376.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1351001_206"
                  position={[-0.1, -0.17, -0.13]}
                  rotation={[-1.18, 0.3, 0.9]}
                  scale={0}
                >
                  <mesh
                    name="Object_378"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_378.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1354001_207"
                  position={[-0.1, -0.02, -0.15]}
                  rotation={[0.37, 0.65, -1.87]}
                  scale={0}
                >
                  <mesh
                    name="Object_380"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_380.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1359001_208"
                  position={[-0.01, 0.04, -0.11]}
                  rotation={[0.37, 0.65, 0.02]}
                  scale={0}
                >
                  <mesh
                    name="Object_382"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_382.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|136001_209"
                  position={[0.08, 0.03, -0.08]}
                  rotation={[-0.94, -0.3, -2.37]}
                  scale={0}
                >
                  <mesh
                    name="Object_384"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_384.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1367001_210"
                  position={[-0.11, -0.04, -0.11]}
                  rotation={[0.13, 0.68, -2.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_386"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_386.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|137001_211"
                  position={[0.11, 0.18, -0.18]}
                  rotation={[0.54, -0.43, 2.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_388"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_388.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1375001_212"
                  position={[-0.1, -0.2, -0.16]}
                  rotation={[-1.13, 0.22, 0.28]}
                  scale={0}
                >
                  <mesh
                    name="Object_390"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_390.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1379001_213"
                  position={[-0.06, -0.11, -0.17]}
                  rotation={[-1.13, 0.22, 0.8]}
                  scale={0}
                >
                  <mesh
                    name="Object_392"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_392.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1381001_214"
                  position={[0, 0.12, -0.06]}
                  rotation={[0.33, 0.47, -2.23]}
                  scale={0}
                >
                  <mesh
                    name="Object_394"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_394.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1383001_215"
                  position={[-0.01, -0.13, -0.02]}
                  rotation={[-1.31, 0.14, 0.41]}
                  scale={0}
                >
                  <mesh
                    name="Object_396"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_396.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1384001_216"
                  position={[-0.08, -0.01, -0.26]}
                  rotation={[0.11, 0.49, 1.06]}
                  scale={0}
                >
                  <mesh
                    name="Object_398"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_398.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1385001_217"
                  position={[-0.05, -0.02, -0.1]}
                  rotation={[0.11, 0.49, -0.56]}
                  scale={0}
                >
                  <mesh
                    name="Object_400"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_400.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1386001_218"
                  position={[-0.17, 0.13, -0.26]}
                  rotation={[0.11, 0.49, 1.25]}
                  scale={0}
                >
                  <mesh
                    name="Object_402"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_402.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1387001_219"
                  position={[-0.07, 0.01, -0.07]}
                  rotation={[0.11, 0.49, -1.49]}
                  scale={0}
                >
                  <mesh
                    name="Object_404"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_404.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1388001_220"
                  position={[-0.03, 0.09, 0]}
                  rotation={[0.11, 0.49, -2.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_406"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_406.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1394001_221"
                  position={[-0.15, -0.06, -0.11]}
                  rotation={[-0.11, 0.49, -0.76]}
                  scale={0}
                >
                  <mesh
                    name="Object_408"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_408.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1395001_222"
                  position={[-0.08, 0.23, -0.11]}
                  rotation={[1.31, 0.14, 0.52]}
                  scale={0}
                >
                  <mesh
                    name="Object_410"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_410.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1398001_223"
                  position={[-0.06, 0.09, -0.01]}
                  rotation={[1.13, 0.22, 0.68]}
                  scale={0}
                >
                  <mesh
                    name="Object_412"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_412.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|140001_224"
                  position={[0.02, 0.02, -0.18]}
                  rotation={[0.54, -0.43, 0.46]}
                  scale={0}
                >
                  <mesh
                    name="Object_414"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_414.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1401001_225"
                  position={[0.02, 0.03, -0.05]}
                  rotation={[0.94, 0.3, -2.55]}
                  scale={0}
                >
                  <mesh
                    name="Object_416"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_416.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1403001_226"
                  position={[-0.2, -0.06, -0.17]}
                  rotation={[-0.75, 0.37, -1.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_418"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_418.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1407001_227"
                  position={[-0.03, 0.17, -0.11]}
                  rotation={[0.75, 0.37, -3.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_420"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_420.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|141001_228"
                  position={[0.06, 0.18, -0.13]}
                  rotation={[0.54, -0.43, 0.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_422"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_422.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1411001_229"
                  position={[-0.04, -0.05, 0.02]}
                  rotation={[-0.94, 0.3, 2.21]}
                  scale={0}
                >
                  <mesh
                    name="Object_424"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_424.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1416001_230"
                  position={[-0.18, 0.24, -0.21]}
                  rotation={[0.54, 0.43, -1.39]}
                  scale={0}
                >
                  <mesh
                    name="Object_426"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_426.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1417001_231"
                  position={[-0.11, 0.09, -0.06]}
                  rotation={[0.54, 0.43, -1.74]}
                  scale={0}
                >
                  <mesh
                    name="Object_428"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_428.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1423001_232"
                  position={[0, -0.02, -0.03]}
                  rotation={[-0.51, 0.26, 1.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_430"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_430.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1425001_233"
                  position={[-0.14, -0.2, -0.2]}
                  rotation={[-0.71, 0.23, 2.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_432"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_432.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1427001_234"
                  position={[-0.04, -0.11, -0.05]}
                  rotation={[-0.71, 0.23, 2.06]}
                  scale={0}
                >
                  <mesh
                    name="Object_434"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_434.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1428001_235"
                  position={[-0.06, -0.01, -0.08]}
                  rotation={[-0.71, 0.23, 1.96]}
                  scale={0}
                >
                  <mesh
                    name="Object_436"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_436.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|143001_236"
                  position={[0.03, -0.21, -0.09]}
                  rotation={[-1.13, -0.22, -3.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_438"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_438.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1431001_237"
                  position={[-0.06, 0.18, -0.18]}
                  rotation={[0.71, 0.23, -2.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_440"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_440.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1432001_238"
                  position={[-0.06, 0.15, -0.26]}
                  rotation={[0.71, 0.23, -2.94]}
                  scale={0}
                >
                  <mesh
                    name="Object_442"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_442.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1436001_239"
                  position={[-0.15, 0.1, -0.15]}
                  rotation={[0.51, 0.26, 0.44]}
                  scale={0}
                >
                  <mesh
                    name="Object_444"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_444.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1439001_240"
                  position={[-0.01, 0, -0.13]}
                  rotation={[0.51, 0.26, -0.52]}
                  scale={0}
                >
                  <mesh
                    name="Object_446"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_446.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1440001_241"
                  position={[0, -0.23, -0.06]}
                  rotation={[-1.1, 0.14, -2.92]}
                  scale={0}
                >
                  <mesh
                    name="Object_448"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_448.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1445001_242"
                  position={[-0.01, 0.03, -0.13]}
                  rotation={[0.31, 0.28, -2.42]}
                  scale={0}
                >
                  <mesh
                    name="Object_450"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_450.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1451001_243"
                  position={[-0.05, 0.12, -0.09]}
                  rotation={[1.48, 0.03, -1.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_452"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_452.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1459001_244"
                  position={[0, -0.06, -0.05]}
                  rotation={[0.29, 0.09, -2.32]}
                  scale={0}
                >
                  <mesh
                    name="Object_454"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_454.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|146001_245"
                  position={[0.07, 0.15, -0.07]}
                  rotation={[0.33, -0.47, -2.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_456"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_456.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1461001_246"
                  position={[0.03, 0.11, -0.31]}
                  rotation={[0.29, 0.09, -2.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_458"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_458.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1470001_247"
                  position={[-0.13, 0.07, -0.18]}
                  rotation={[0.1, 0.1, -1.84]}
                  scale={0}
                >
                  <mesh
                    name="Object_460"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_460.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1472001_248"
                  position={[-0.01, 0.02, -0.3]}
                  rotation={[0.1, 0.1, -0.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_462"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_462.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1473001_249"
                  position={[0, 0.05, -0.03]}
                  rotation={[0.1, 0.1, -1.83]}
                  scale={0}
                >
                  <mesh
                    name="Object_464"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_464.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1478001_250"
                  position={[-0.12, 0.05, -0.17]}
                  rotation={[-0.1, 0.1, -0.38]}
                  scale={0}
                >
                  <mesh
                    name="Object_466"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_466.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1480001_251"
                  position={[-0.01, -0.06, -0.17]}
                  rotation={[-0.29, 0.09, 0.63]}
                  scale={0}
                >
                  <mesh
                    name="Object_468"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_468.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1482001_252"
                  position={[-0.04, 0, -0.1]}
                  rotation={[-0.29, 0.09, 0.55]}
                  scale={0}
                >
                  <mesh
                    name="Object_470"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_470.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1488001_253"
                  position={[-0.06, 0.29, -0.15]}
                  rotation={[0.88, 0.06, -1.89]}
                  scale={0}
                >
                  <mesh
                    name="Object_472"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_472.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|149001_254"
                  position={[-0.01, 0.01, -0.12]}
                  rotation={[0.11, -0.49, 2.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_474"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_474.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1495001_255"
                  position={[0.01, 0.11, -0.1]}
                  rotation={[0.69, 0.08, 0.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_476"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_476.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1496001_256"
                  position={[-0.08, 0.03, -0.1]}
                  rotation={[0.69, 0.08, 0.03]}
                  scale={0}
                >
                  <mesh
                    name="Object_478"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_478.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|150001_257"
                  position={[0, 0.08, -0.16]}
                  rotation={[0.11, -0.49, -1.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_480"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_480.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1506001_258"
                  position={[0.03, 0.03, -0.03]}
                  rotation={[0.49, 0.09, -2.68]}
                  scale={0}
                >
                  <mesh
                    name="Object_482"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_482.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1508001_259"
                  position={[0.01, -0.02, -0.11]}
                  rotation={[0.49, 0.09, 1.45]}
                  scale={0}
                >
                  <mesh
                    name="Object_484"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_484.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|151001_260"
                  position={[0.05, 0.13, -0.07]}
                  rotation={[0.11, -0.49, 1.95]}
                  scale={0}
                >
                  <mesh
                    name="Object_486"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_486.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1510001_261"
                  position={[-0.04, -0.14, 0.02]}
                  rotation={[-1.08, 0.05, 0.48]}
                  scale={0}
                >
                  <mesh
                    name="Object_488"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_488.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|1511001_262"
                  position={[-0.03, -0.08, 0.02]}
                  rotation={[-1.08, 0.05, -2.52]}
                  scale={0}
                >
                  <mesh
                    name="Object_490"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_490.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|152001_263"
                  position={[0, 0.11, -0.19]}
                  rotation={[0.11, -0.49, 0.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_492"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_492.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|154001_264"
                  position={[0.15, 0.09, -0.15]}
                  rotation={[-0.11, -0.49, 2.49]}
                  scale={0}
                >
                  <mesh
                    name="Object_494"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_494.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|155001_265"
                  position={[0.16, 0.06, -0.16]}
                  rotation={[-0.11, -0.49, -1.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_496"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_496.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|156001_266"
                  position={[-0.08, -0.06, -0.05]}
                  rotation={[-0.11, -0.49, -0.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_498"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_498.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|163001_267"
                  position={[0.01, 0.2, -0.16]}
                  rotation={[0.6, -0.59, 2.7]}
                  scale={0}
                >
                  <mesh
                    name="Object_500"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_500.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|165001_268"
                  position={[0.13, 0.21, -0.24]}
                  rotation={[0.6, -0.59, 0.26]}
                  scale={0}
                >
                  <mesh
                    name="Object_502"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_502.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|17001_269"
                  position={[-0.02, 0.07, -0.05]}
                  rotation={[1.28, -0.03, -2.09]}
                  scale={0}
                >
                  <mesh
                    name="Object_504"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_504.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|170001_270"
                  position={[-0.01, -0.05, -0.04]}
                  rotation={[-1.34, -0.19, -1.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_506"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_506.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|178001_271"
                  position={[0.06, -0.03, 0.03]}
                  rotation={[-0.37, -0.65, -1.98]}
                  scale={0}
                >
                  <mesh
                    name="Object_508"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_508.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|184001_272"
                  position={[-0.04, -0.05, -0.08]}
                  rotation={[-0.6, -0.59, 2.73]}
                  scale={0}
                >
                  <mesh
                    name="Object_510"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_510.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|187001_273"
                  position={[0.09, 0.19, -0.22]}
                  rotation={[1, -0.42, 2.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_512"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_512.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|189001_274"
                  position={[0.08, 0.17, -0.15]}
                  rotation={[1, -0.42, 1.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_514"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_514.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|190001_275"
                  position={[0.09, -0.12, -0.06]}
                  rotation={[-0.81, -0.51, 2.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_516"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_516.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|193001_276"
                  position={[0.12, -0.19, -0.25]}
                  rotation={[-0.81, -0.51, -0.66]}
                  scale={0}
                >
                  <mesh
                    name="Object_518"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_518.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|194001_277"
                  position={[0.13, -0.1, -0.15]}
                  rotation={[-0.81, -0.51, -0.69]}
                  scale={0}
                >
                  <mesh
                    name="Object_520"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_520.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|198001_278"
                  position={[-0.01, -0.09, -0.05]}
                  rotation={[-1, -0.42, 0.67]}
                  scale={0}
                >
                  <mesh
                    name="Object_522"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_522.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|199001_279"
                  position={[0.15, -0.18, -0.2]}
                  rotation={[-1, -0.42, 3.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_524"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_524.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|202001_280"
                  position={[0.06, -0.14, -0.06]}
                  rotation={[-1, -0.42, 0.87]}
                  scale={0}
                >
                  <mesh
                    name="Object_526"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_526.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|205001_281"
                  position={[0.15, -0.06, -0.21]}
                  rotation={[-0.44, -0.83, 2.53]}
                  scale={0}
                >
                  <mesh
                    name="Object_528"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_528.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|206001_282"
                  position={[-0.07, 0.03, -0.09]}
                  rotation={[-0.44, -0.83, 2.66]}
                  scale={0}
                >
                  <mesh
                    name="Object_530"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_530.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|209001_283"
                  position={[0.06, -0.09, -0.19]}
                  rotation={[-0.44, -0.83, -2.23]}
                  scale={0}
                >
                  <mesh
                    name="Object_532"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_532.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|21001_284"
                  position={[0.04, 0.03, -0.02]}
                  rotation={[-0.29, -0.09, -0.31]}
                  scale={0}
                >
                  <mesh
                    name="Object_534"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_534.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|212001_285"
                  position={[0.23, -0.04, -0.19]}
                  rotation={[-0.44, -0.83, 2.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_536"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_536.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|214001_286"
                  position={[0.05, 0, -0.02]}
                  rotation={[1.24, -0.37, 0.87]}
                  scale={0}
                >
                  <mesh
                    name="Object_538"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_538.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|223001_287"
                  position={[0.01, -0.03, -0.06]}
                  rotation={[-1.09, -0.51, -2.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_540"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_540.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|224001_288"
                  position={[0.1, 0.03, -0.03]}
                  rotation={[-1.09, -0.51, -3.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_542"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_542.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|226001_289"
                  position={[0.11, 0.22, -0.14]}
                  rotation={[0.7, -0.75, -0.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_544"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_544.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|227001_290"
                  position={[0.13, 0.16, -0.03]}
                  rotation={[0.7, -0.75, -3.04]}
                  scale={0}
                >
                  <mesh
                    name="Object_546"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_546.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|229001_291"
                  position={[-0.03, -0.06, -0.02]}
                  rotation={[-1.24, -0.37, -2.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_548"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_548.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|233001_292"
                  position={[0.1, 0.13, -0.11]}
                  rotation={[0.44, -0.83, 2.04]}
                  scale={0}
                >
                  <mesh
                    name="Object_550"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_550.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|234001_293"
                  position={[0.16, 0.08, -0.24]}
                  rotation={[0.15, -0.88, -2.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_552"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_552.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|240001_294"
                  position={[0.16, 0.04, -0.19]}
                  rotation={[0.15, -0.88, 2.49]}
                  scale={0}
                >
                  <mesh
                    name="Object_554"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_554.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|242001_295"
                  position={[0.07, 0.1, -0.01]}
                  rotation={[-0.15, -0.88, 0.69]}
                  scale={0}
                >
                  <mesh
                    name="Object_556"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_556.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|243001_296"
                  position={[0.1, -0.06, -0.23]}
                  rotation={[-0.15, -0.88, -3.07]}
                  scale={0}
                >
                  <mesh
                    name="Object_558"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_558.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|244001_297"
                  position={[0.18, 0.05, -0.08]}
                  rotation={[-0.15, -0.88, 3.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_560"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_560.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|247001_298"
                  position={[-0.05, 0.24, -0.01]}
                  rotation={[1.38, -0.23, -2.5]}
                  scale={0}
                >
                  <mesh
                    name="Object_562"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_562.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|248001_299"
                  position={[0.13, 0.09, -0.08]}
                  rotation={[0.57, -1.01, -1.65]}
                  scale={0}
                >
                  <mesh
                    name="Object_564"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_564.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|249001_300"
                  position={[0.09, -0.02, 0.01]}
                  rotation={[0.57, -1.01, 2.56]}
                  scale={0}
                >
                  <mesh
                    name="Object_566"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_566.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|253001_301"
                  position={[0.19, 0.09, -0.15]}
                  rotation={[0.57, -1.01, -0.5]}
                  scale={0}
                >
                  <mesh
                    name="Object_568"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_568.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|255001_302"
                  position={[0.2, 0.06, -0.1]}
                  rotation={[0.57, -1.01, -0.35]}
                  scale={0}
                >
                  <mesh
                    name="Object_570"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_570.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|256001_303"
                  position={[0.17, 0.12, -0.09]}
                  rotation={[0.57, -1.01, -1.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_572"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_572.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|259001_304"
                  position={[0.03, -0.03, -0.14]}
                  rotation={[0.21, -1.07, -2.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_574"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_574.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|260001_305"
                  position={[0, -0.03, -0.11]}
                  rotation={[0.21, -1.07, -1.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_576"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_576.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|261001_306"
                  position={[0.04, 0.01, 0.06]}
                  rotation={[0.21, -1.07, -1.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_578"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_578.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|263001_307"
                  position={[0.24, -0.01, -0.18]}
                  rotation={[0.21, -1.07, 1.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_580"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_580.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|270001_308"
                  position={[0.03, 0.07, -0.03]}
                  rotation={[-0.21, -1.07, -3.09]}
                  scale={0}
                >
                  <mesh
                    name="Object_582"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_582.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|271001_309"
                  position={[-0.05, 0.19, 0]}
                  rotation={[1.43, -0.26, 1.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_584"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_584.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|272001_310"
                  position={[-0.05, 0.1, 0]}
                  rotation={[1.43, -0.26, 2.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_586"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_586.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|274001_311"
                  position={[0.03, -0.07, -0.05]}
                  rotation={[-0.57, -1.01, 2.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_588"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_588.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|275001_312"
                  position={[0.07, 0.04, -0.01]}
                  rotation={[-0.57, -1.01, -0.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_590"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_590.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|279001_313"
                  position={[-0.04, 0.17, -0.03]}
                  rotation={[1.32, -0.43, -0.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_592"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_592.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|280001_314"
                  position={[0.05, -0.05, 0]}
                  rotation={[-0.85, -0.89, -2.48]}
                  scale={0}
                >
                  <mesh
                    name="Object_594"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_594.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|282001_315"
                  position={[-0.02, 0, 0.01]}
                  rotation={[-0.85, -0.89, -3.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_596"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_596.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|284001_316"
                  position={[0.11, 0.12, -0.07]}
                  rotation={[1.2, -0.6, -0.78]}
                  scale={0}
                >
                  <mesh
                    name="Object_598"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_598.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|285001_317"
                  position={[0.09, 0.19, -0.03]}
                  rotation={[1.2, -0.6, 1.27]}
                  scale={0}
                >
                  <mesh
                    name="Object_600"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_600.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|288001_318"
                  position={[0.13, 0.23, -0.12]}
                  rotation={[1.2, -0.6, -0.95]}
                  scale={0}
                >
                  <mesh
                    name="Object_602"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_602.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|289001_319"
                  position={[0.06, 0.03, -0.13]}
                  rotation={[-1.05, -0.75, 1.33]}
                  scale={0}
                >
                  <mesh
                    name="Object_604"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_604.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|29001_320"
                  position={[-0.05, -0.13, -0.22]}
                  rotation={[-0.49, -0.09, 2.29]}
                  scale={0}
                >
                  <mesh
                    name="Object_606"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_606.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|291001_321"
                  position={[0.16, -0.15, -0.1]}
                  rotation={[-1.05, -0.75, 1.68]}
                  scale={0}
                >
                  <mesh
                    name="Object_608"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_608.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|292001_322"
                  position={[0.16, -0.12, -0.07]}
                  rotation={[-1.05, -0.75, 0.28]}
                  scale={0}
                >
                  <mesh
                    name="Object_610"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_610.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|295001_323"
                  position={[0.08, 0.22, -0.14]}
                  rotation={[1.05, -0.75, 0.76]}
                  scale={0}
                >
                  <mesh
                    name="Object_612"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_612.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|296001_324"
                  position={[0.2, 0.16, -0.16]}
                  rotation={[1.05, -0.75, -1.62]}
                  scale={0}
                >
                  <mesh
                    name="Object_614"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_614.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|298001_325"
                  position={[0.14, 0.21, -0.05]}
                  rotation={[0.85, -0.89, -1.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_616"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_616.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|299001_326"
                  position={[0.07, 0.1, -0.02]}
                  rotation={[0.85, -0.89, -2.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_618"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_618.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|30001_327"
                  position={[-0.01, 0.27, -0.11]}
                  rotation={[0.88, -0.06, -1.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_620"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_620.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|300001_328"
                  position={[0.25, -0.11, -0.12]}
                  rotation={[-1.07, -1.01, -1.79]}
                  scale={0}
                >
                  <mesh
                    name="Object_622"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_622.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|301001_329"
                  position={[0.18, 0, 0]}
                  rotation={[-1.07, -1.01, -0.97]}
                  scale={0}
                >
                  <mesh
                    name="Object_624"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_624.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|303001_330"
                  position={[0.13, 0.04, 0.03]}
                  rotation={[-1.07, -1.01, -1.99]}
                  scale={0}
                >
                  <mesh
                    name="Object_626"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_626.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|305001_331"
                  position={[0.23, -0.11, -0.16]}
                  rotation={[-1.07, -1.01, -0.25]}
                  scale={0}
                >
                  <mesh
                    name="Object_628"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_628.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|307001_332"
                  position={[0.17, 0.22, -0.04]}
                  rotation={[1.34, -0.65, 2.9]}
                  scale={0}
                >
                  <mesh
                    name="Object_630"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_630.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|308001_333"
                  position={[0.06, 0.2, -0.04]}
                  rotation={[1.34, -0.65, -2.09]}
                  scale={0}
                >
                  <mesh
                    name="Object_632"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_632.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|310001_334"
                  position={[0.12, 0.25, -0.06]}
                  rotation={[1.34, -0.65, -2.42]}
                  scale={0}
                >
                  <mesh
                    name="Object_634"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_634.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|312001_335"
                  position={[0.02, -0.08, -0.05]}
                  rotation={[-1.23, -0.83, 2.53]}
                  scale={0}
                >
                  <mesh
                    name="Object_636"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_636.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|315001_336"
                  position={[0.05, 0.03, -0.08]}
                  rotation={[-1.34, -0.65, 1.57]}
                  scale={0}
                >
                  <mesh
                    name="Object_638"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_638.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|316001_337"
                  position={[0.08, -0.21, -0.08]}
                  rotation={[-1.34, -0.65, 2.24]}
                  scale={0}
                >
                  <mesh
                    name="Object_640"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_640.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|319001_338"
                  position={[0.11, -0.04, -0.12]}
                  rotation={[-1.34, -0.65, 1.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_642"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_642.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|32001_339"
                  position={[0.01, -0.16, -0.23]}
                  rotation={[-0.69, -0.08, 2.42]}
                  scale={0}
                >
                  <mesh
                    name="Object_644"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_644.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|328001_340"
                  position={[-0.04, 0.07, -0.01]}
                  rotation={[0.8, -1.16, 0.38]}
                  scale={0}
                >
                  <mesh
                    name="Object_646"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_646.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|336001_341"
                  position={[0.06, 0, -0.02]}
                  rotation={[0.33, -1.26, -1.73]}
                  scale={0}
                >
                  <mesh
                    name="Object_648"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_648.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|337001_342"
                  position={[0.14, 0.08, -0.12]}
                  rotation={[0.33, -1.26, 1.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_650"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_650.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|339001_343"
                  position={[-0.02, 0, -0.06]}
                  rotation={[0.33, -1.26, -1.13]}
                  scale={0}
                >
                  <mesh
                    name="Object_652"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_652.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|34001_344"
                  position={[0, -0.15, -0.27]}
                  rotation={[-0.69, -0.08, 2.41]}
                  scale={0}
                >
                  <mesh
                    name="Object_654"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_654.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|340001_345"
                  position={[0.17, -0.04, -0.11]}
                  rotation={[0.33, -1.26, 1.2]}
                  scale={0}
                >
                  <mesh
                    name="Object_656"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_656.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|341001_346"
                  position={[0.07, 0.03, -0.12]}
                  rotation={[-0.33, -1.26, -2.36]}
                  scale={0}
                >
                  <mesh
                    name="Object_658"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_658.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|347001_347"
                  position={[-0.02, 0.01, 0.01]}
                  rotation={[-0.8, -1.16, 2.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_660"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_660.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|354001_348"
                  position={[0.2, 0.14, -0.08]}
                  rotation={[0.79, -1.43, -0.74]}
                  scale={0}
                >
                  <mesh
                    name="Object_662"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_662.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|355001_349"
                  position={[0.18, 0.01, -0.1]}
                  rotation={[Math.PI / 4, -1.43, 0.8]}
                  scale={0}
                >
                  <mesh
                    name="Object_664"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_664.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|356001_350"
                  position={[0.17, 0.07, -0.01]}
                  rotation={[-Math.PI / 4, -1.43, 2.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_666"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_666.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|36001_351"
                  position={[0.06, -0.11, -0.18]}
                  rotation={[-0.69, -0.08, 1.55]}
                  scale={0}
                >
                  <mesh
                    name="Object_668"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_668.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|366001_352"
                  position={[0.1, -0.09, -0.04]}
                  rotation={[-1.26, -1.26, -0.58]}
                  scale={0}
                >
                  <mesh
                    name="Object_670"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_670.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|369001_353"
                  position={[0.23, -0.06, -0.03]}
                  rotation={[-1.26, -1.26, -1.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_672"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_672.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|376001_354"
                  position={[0.16, 0.14, -0.08]}
                  rotation={[1.49, -0.69, -0.7]}
                  scale={0}
                >
                  <mesh
                    name="Object_674"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_674.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|381001_355"
                  position={[0.08, 0.02, -0.06]}
                  rotation={[-1.45, -0.88, 2.56]}
                  scale={0}
                >
                  <mesh
                    name="Object_676"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_676.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|383001_356"
                  position={[0.25, 0.18, 0]}
                  rotation={[1.45, -0.88, -3.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_678"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_678.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|387001_357"
                  position={[0.07, 0.01, -0.01]}
                  rotation={[-1.49, -0.69, 2.21]}
                  scale={0}
                >
                  <mesh
                    name="Object_680"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_680.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|389001_358"
                  position={[0.17, -0.19, -0.03]}
                  rotation={[-1.49, -0.69, 0.93]}
                  scale={0}
                >
                  <mesh
                    name="Object_682"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_682.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|391001_359"
                  position={[-0.06, 0.05, 0]}
                  rotation={[1.39, -1.07, -0.01]}
                  scale={0}
                >
                  <mesh
                    name="Object_684"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_684.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|394001_360"
                  position={[0.02, 0.02, -0.04]}
                  rotation={[-1.52, -0.49, 0.58]}
                  scale={0}
                >
                  <mesh
                    name="Object_686"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_686.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|396001_361"
                  position={[0.14, 0.13, -0.03]}
                  rotation={[1.26, -1.26, 2.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_688"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_688.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|399001_362"
                  position={[0.29, 0.06, -0.01]}
                  rotation={[1.26, -1.26, 1.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_690"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_690.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|4001_363"
                  position={[-0.03, -0.02, -0.16]}
                  rotation={[0.29, -0.09, 1.25]}
                  scale={0}
                >
                  <mesh
                    name="Object_692"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_692.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|400001_364"
                  position={[0.2, 0.19, 0.03]}
                  rotation={[1.26, -1.26, 0.48]}
                  scale={0}
                >
                  <mesh
                    name="Object_694"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_694.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|401001_365"
                  position={[0.14, 0.16, -0.03]}
                  rotation={[1.26, -1.26, 2.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_696"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_696.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|405001_366"
                  position={[0.05, 0, 0.03]}
                  rotation={[-1.69, -0.88, 1.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_698"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_698.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|406001_367"
                  position={[0.01, -0.01, 0.07]}
                  rotation={[-1.69, -0.88, -0.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_700"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_700.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|41001_368"
                  position={[0.01, 0.04, -0.09]}
                  rotation={[0.69, -0.08, -1]}
                  scale={0}
                >
                  <mesh
                    name="Object_702"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_702.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|410001_369"
                  position={[-0.05, -0.03, 0.03]}
                  rotation={[-1.65, -0.69, -1.02]}
                  scale={0}
                >
                  <mesh
                    name="Object_704"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_704.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|417001_370"
                  position={[0.1, 0.08, -0.03]}
                  rotation={[1.88, -1.26, 2.5]}
                  scale={0}
                >
                  <mesh
                    name="Object_706"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_706.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|418001_371"
                  position={[0.1, 0.08, 0.04]}
                  rotation={[2.36, -1.43, -0.02]}
                  scale={0}
                >
                  <mesh
                    name="Object_708"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_708.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|419001_372"
                  position={[0.12, 0, -0.05]}
                  rotation={[2.36, -1.43, 0.67]}
                  scale={0}
                >
                  <mesh
                    name="Object_710"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_710.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|422001_373"
                  position={[0.02, 0.04, 0.08]}
                  rotation={[-2.36, -1.43, 1.38]}
                  scale={0}
                >
                  <mesh
                    name="Object_712"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_712.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|425001_374"
                  position={[0.09, 0.25, -0.01]}
                  rotation={[1.6, -0.29, -1.92]}
                  scale={0}
                >
                  <mesh
                    name="Object_714"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_714.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|427001_375"
                  position={[0.03, 0.09, 0.05]}
                  rotation={[-1.88, -1.26, -1.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_716"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_716.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|431001_376"
                  position={[0.05, -0.1, -0.01]}
                  rotation={[-1.75, -1.07, 2.34]}
                  scale={0}
                >
                  <mesh
                    name="Object_718"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_718.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|438001_377"
                  position={[0.16, 0.1, 0.02]}
                  rotation={[2.82, -1.26, -0.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_720"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_720.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|439001_378"
                  position={[0.01, 0.17, -0.01]}
                  rotation={[1.6, -0.09, 0.56]}
                  scale={0}
                >
                  <mesh
                    name="Object_722"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_722.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|441001_379"
                  position={[0.08, 0.16, 0.02]}
                  rotation={[1.6, -0.09, -0.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_724"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_724.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|443001_380"
                  position={[0.22, 0.01, 0.01]}
                  rotation={[-2.82, -1.26, 2.34]}
                  scale={0}
                >
                  <mesh
                    name="Object_726"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_726.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|447001_381"
                  position={[0.07, 0.08, -0.01]}
                  rotation={[1.66, -0.28, -0.68]}
                  scale={0}
                >
                  <mesh
                    name="Object_728"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_728.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|448001_382"
                  position={[0.06, -0.01, 0.05]}
                  rotation={[-2.34, -1.16, -0.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_730"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_730.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|45001_383"
                  position={[0.05, 0.16, -0.1]}
                  rotation={[0.49, -0.09, 1.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_732"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_732.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|451001_384"
                  position={[0.19, 0.22, 0.01]}
                  rotation={[1.73, -0.47, 1]}
                  scale={0}
                >
                  <mesh
                    name="Object_734"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_734.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|452001_385"
                  position={[0.06, 0.15, -0.03]}
                  rotation={[1.73, -0.47, -3.03]}
                  scale={0}
                >
                  <mesh
                    name="Object_736"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_736.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|453001_386"
                  position={[0.19, -0.04, 0.05]}
                  rotation={[-2.07, -1.01, 1.94]}
                  scale={0}
                >
                  <mesh
                    name="Object_738"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_738.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|460001_387"
                  position={[0, 0.09, -0.05]}
                  rotation={[1.81, -0.65, -2.25]}
                  scale={0}
                >
                  <mesh
                    name="Object_740"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_740.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|468001_388"
                  position={[0, -0.12, 0.03]}
                  rotation={[-1.81, -0.65, 2.89]}
                  scale={0}
                >
                  <mesh
                    name="Object_742"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_742.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|47001_389"
                  position={[-0.01, -0.04, -0.08]}
                  rotation={[-0.9, -0.19, -2.4]}
                  scale={0}
                >
                  <mesh
                    name="Object_744"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_744.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|471001_390"
                  position={[0, 0.13, -0.05]}
                  rotation={[2.07, -1.01, 0.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_746"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_746.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|472001_391"
                  position={[0.17, 0.05, 0.09]}
                  rotation={[2.07, -1.01, 0.03]}
                  scale={0}
                >
                  <mesh
                    name="Object_748"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_748.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|480001_392"
                  position={[0.17, -0.01, -0.02]}
                  rotation={[2.34, -1.16, 0.95]}
                  scale={0}
                >
                  <mesh
                    name="Object_750"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_750.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|486001_393"
                  position={[-0.03, -0.09, 0.04]}
                  rotation={[-2.09, -0.75, 0.48]}
                  scale={0}
                >
                  <mesh
                    name="Object_752"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_752.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|490001_394"
                  position={[0.17, -0.1, 0.17]}
                  rotation={[-2.09, -0.75, 1.32]}
                  scale={0}
                >
                  <mesh
                    name="Object_754"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_754.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|494001_395"
                  position={[-0.01, 0.13, -0.07]}
                  rotation={[2.09, -0.75, -2.95]}
                  scale={0}
                >
                  <mesh
                    name="Object_756"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_756.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|496001_396"
                  position={[0.04, 0.09, 0.01]}
                  rotation={[2.09, -0.75, 1.57]}
                  scale={0}
                >
                  <mesh
                    name="Object_758"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_758.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|497001_397"
                  position={[0.02, 0.11, 0.06]}
                  rotation={[2.09, -0.75, 2.39]}
                  scale={0}
                >
                  <mesh
                    name="Object_760"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_760.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|498001_398"
                  position={[-0.03, -0.07, -0.05]}
                  rotation={[-1.94, -0.6, 1.62]}
                  scale={0}
                >
                  <mesh
                    name="Object_762"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_762.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|499001_399"
                  position={[0.16, -0.2, 0.02]}
                  rotation={[-1.94, -0.6, 1.7]}
                  scale={0}
                >
                  <mesh
                    name="Object_764"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_764.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|50001_400"
                  position={[-0.02, 0.16, -0.11]}
                  rotation={[0.51, -0.26, 1.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_766"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_766.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|501001_401"
                  position={[0.16, 0.21, 0.03]}
                  rotation={[2.3, -0.89, -2.51]}
                  scale={0}
                >
                  <mesh
                    name="Object_768"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_768.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|505001_402"
                  position={[0.17, 0.26, 0.15]}
                  rotation={[2.3, -0.89, 1.71]}
                  scale={0}
                >
                  <mesh
                    name="Object_770"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_770.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|508001_403"
                  position={[0.07, -0.22, 0.09]}
                  rotation={[-1.82, -0.43, -2.13]}
                  scale={0}
                >
                  <mesh
                    name="Object_772"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_772.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|517001_404"
                  position={[0.04, 0.11, -0.07]}
                  rotation={[2.57, -1.01, -2.17]}
                  scale={0}
                >
                  <mesh
                    name="Object_774"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_774.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|522001_405"
                  position={[0.12, 0.06, 0.18]}
                  rotation={[2.94, -1.07, 1.24]}
                  scale={0}
                >
                  <mesh
                    name="Object_776"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_776.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|525001_406"
                  position={[0.06, -0.01, 0.1]}
                  rotation={[-2.94, -1.07, 0.26]}
                  scale={0}
                >
                  <mesh
                    name="Object_778"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_778.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|526001_407"
                  position={[0.03, -0.03, -0.08]}
                  rotation={[-2.94, -1.07, 0.24]}
                  scale={0}
                >
                  <mesh
                    name="Object_780"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_780.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|529001_408"
                  position={[-0.04, -0.01, 0.03]}
                  rotation={[-2.94, -1.07, 0.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_782"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_782.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|533001_409"
                  position={[0.04, 0.03, 0.05]}
                  rotation={[-2.57, -1.01, 0.94]}
                  scale={0}
                >
                  <mesh
                    name="Object_784"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_784.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|535001_410"
                  position={[0.01, -0.03, -0.09]}
                  rotation={[-2.57, -1.01, -1.65]}
                  scale={0}
                >
                  <mesh
                    name="Object_786"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_786.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|536001_411"
                  position={[0.05, -0.08, -0.06]}
                  rotation={[-2.57, -1.01, 1.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_788"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_788.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|539001_412"
                  position={[-0.04, 0.14, 0.02]}
                  rotation={[1.82, -0.43, 2.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_790"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_790.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|54001_413"
                  position={[-0.01, 0.02, -0.03]}
                  rotation={[-1.1, -0.14, -0.96]}
                  scale={0}
                >
                  <mesh
                    name="Object_792"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_792.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|545001_414"
                  position={[0.11, -0.06, 0.05]}
                  rotation={[-2.3, -0.89, -1.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_794"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_794.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|547001_415"
                  position={[0.04, 0.11, 0.09]}
                  rotation={[1.94, -0.6, -0.56]}
                  scale={0}
                >
                  <mesh
                    name="Object_796"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_796.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|548001_416"
                  position={[0.13, 0.15, 0.05]}
                  rotation={[1.94, -0.6, -1.07]}
                  scale={0}
                >
                  <mesh
                    name="Object_798"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_798.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|549001_417"
                  position={[0.05, 0.02, 0.04]}
                  rotation={[1.63, -0.08, -2.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_800"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_800.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|552001_418"
                  position={[0.25, 0.08, 0.14]}
                  rotation={[-2.99, -0.88, -2.74]}
                  scale={0}
                >
                  <mesh
                    name="Object_802"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_802.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|554001_419"
                  position={[0.02, 0.02, 0.03]}
                  rotation={[1.76, -0.23, -1.92]}
                  scale={0}
                >
                  <mesh
                    name="Object_804"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_804.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|556001_420"
                  position={[0.04, 0.02, 0.06]}
                  rotation={[-2.7, -0.83, -0.38]}
                  scale={0}
                >
                  <mesh
                    name="Object_806"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_806.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|558001_421"
                  position={[0.1, -0.19, 0.16]}
                  rotation={[-2.44, -0.75, 2.63]}
                  scale={0}
                >
                  <mesh
                    name="Object_808"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_808.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|560001_422"
                  position={[0.06, 0.11, 0.04]}
                  rotation={[2.05, -0.51, 1.57]}
                  scale={0}
                >
                  <mesh
                    name="Object_810"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_810.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|562001_423"
                  position={[0.08, -0.04, 0.09]}
                  rotation={[-2.23, -0.64, 0.22]}
                  scale={0}
                >
                  <mesh
                    name="Object_812"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_812.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|567001_424"
                  position={[-0.01, 0.18, 0.04]}
                  rotation={[2.23, -0.64, -0.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_814"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_814.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|568001_425"
                  position={[0.1, 0.22, 0.16]}
                  rotation={[2.23, -0.64, -2.84]}
                  scale={0}
                >
                  <mesh
                    name="Object_816"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_816.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|57001_426"
                  position={[-0.08, 0.12, -0.02]}
                  rotation={[0.31, -0.28, -2.27]}
                  scale={0}
                >
                  <mesh
                    name="Object_818"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_818.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|574001_427"
                  position={[0.04, 0.03, 0.02]}
                  rotation={[2.44, -0.75, 0.23]}
                  scale={0}
                >
                  <mesh
                    name="Object_820"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_820.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|58001_428"
                  position={[-0.02, 0.06, -0.3]}
                  rotation={[0.31, -0.28, -1.39]}
                  scale={0}
                >
                  <mesh
                    name="Object_822"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_822.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|581001_429"
                  position={[0.02, -0.08, 0.04]}
                  rotation={[-1.9, -0.37, -2.59]}
                  scale={0}
                >
                  <mesh
                    name="Object_824"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_824.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|582001_430"
                  position={[0.01, -0.14, 0.03]}
                  rotation={[-1.9, -0.37, 0.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_826"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_826.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|59001_431"
                  position={[0.13, 0.16, -0.26]}
                  rotation={[0.31, -0.28, 2.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_828"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_828.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|591001_432"
                  position={[0.07, 0.01, 0.08]}
                  rotation={[2.99, -0.88, -2.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_830"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_830.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|593001_433"
                  position={[0.03, 0.24, 0.1]}
                  rotation={[2.33, -0.51, 2.01]}
                  scale={0}
                >
                  <mesh
                    name="Object_832"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_832.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|595001_434"
                  position={[0.12, 0.18, 0.19]}
                  rotation={[2.54, -0.59, -0.99]}
                  scale={0}
                >
                  <mesh
                    name="Object_834"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_834.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|596001_435"
                  position={[0.01, -0.1, 0.01]}
                  rotation={[-1.96, -0.3, -2.71]}
                  scale={0}
                >
                  <mesh
                    name="Object_836"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_836.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|6001_436"
                  position={[-0.01, 0.06, -0.18]}
                  rotation={[0.29, -0.09, -3.03]}
                  scale={0}
                >
                  <mesh
                    name="Object_838"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_838.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|608001_437"
                  position={[0.03, 0.08, 0.03]}
                  rotation={[3.02, -0.68, 1.43]}
                  scale={0}
                >
                  <mesh
                    name="Object_840"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_840.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|610001_438"
                  position={[0.03, 0.03, 0.04]}
                  rotation={[1.65, -0.06, -2.46]}
                  scale={0}
                >
                  <mesh
                    name="Object_842"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_842.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|611001_439"
                  position={[0.01, 0.18, 0.06]}
                  rotation={[1.65, -0.06, -1.89]}
                  scale={0}
                >
                  <mesh
                    name="Object_844"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_844.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|618001_440"
                  position={[-0.01, 0.02, -0.03]}
                  rotation={[1.8, -0.19, 0.13]}
                  scale={0}
                >
                  <mesh
                    name="Object_846"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_846.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|619001_441"
                  position={[-0.01, 0.25, 0.01]}
                  rotation={[1.8, -0.19, 2.17]}
                  scale={0}
                >
                  <mesh
                    name="Object_848"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_848.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|622001_442"
                  position={[0.1, -0.03, 0.2]}
                  rotation={[-2.77, -0.65, -1.94]}
                  scale={0}
                >
                  <mesh
                    name="Object_850"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_850.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|624001_443"
                  position={[0.16, -0.11, 0.13]}
                  rotation={[-2.77, -0.65, 1.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_852"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_852.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|625001_444"
                  position={[0.07, 0.26, 0.08]}
                  rotation={[1.96, -0.3, 2.36]}
                  scale={0}
                >
                  <mesh
                    name="Object_854"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_854.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|626001_445"
                  position={[-0.01, 0.01, 0.07]}
                  rotation={[-2.54, -0.59, -0.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_856"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_856.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|629001_446"
                  position={[0.08, -0.05, 0.19]}
                  rotation={[-2.54, -0.59, 0.32]}
                  scale={0}
                >
                  <mesh
                    name="Object_858"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_858.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|637001_447"
                  position={[0.06, 0.23, 0.06]}
                  rotation={[2.14, -0.42, 2]}
                  scale={0}
                >
                  <mesh
                    name="Object_860"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_860.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|640001_448"
                  position={[0.01, 0.03, 0.09]}
                  rotation={[-2.33, -0.51, 0.13]}
                  scale={0}
                >
                  <mesh
                    name="Object_862"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_862.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|645001_449"
                  position={[0.03, 0.08, 0.05]}
                  rotation={[1.83, -0.14, 0.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_864"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_864.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|651001_450"
                  position={[0.02, 0, 0.12]}
                  rotation={[-2.81, -0.47, 0.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_866"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_866.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|652001_451"
                  position={[0.16, 0.02, 0.16]}
                  rotation={[-2.81, -0.47, -2.56]}
                  scale={0}
                >
                  <mesh
                    name="Object_868"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_868.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|653001_452"
                  position={[0.1, -0.03, 0.04]}
                  rotation={[-2.81, -0.47, 2.95]}
                  scale={0}
                >
                  <mesh
                    name="Object_870"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_870.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|658001_453"
                  position={[0.09, 0.06, 0.09]}
                  rotation={[2.2, -0.3, -1.58]}
                  scale={0}
                >
                  <mesh
                    name="Object_872"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_872.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|66001_454"
                  position={[0, -0.1, -0.08]}
                  rotation={[-1.29, -0.08, 1.19]}
                  scale={0}
                >
                  <mesh
                    name="Object_874"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_874.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|661001_455"
                  position={[-0.01, 0.21, 0.15]}
                  rotation={[2.39, -0.37, -3.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_876"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_876.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|663001_456"
                  position={[-0.04, 0.09, 0.07]}
                  rotation={[2.39, -0.37, -1.81]}
                  scale={0}
                >
                  <mesh
                    name="Object_878"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_878.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|665001_457"
                  position={[-0.05, -0.17, 0.04]}
                  rotation={[-2.2, -0.3, -1.55]}
                  scale={0}
                >
                  <mesh
                    name="Object_880"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_880.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|669001_458"
                  position={[0, 0.09, -0.06]}
                  rotation={[2.6, -0.43, -0.33]}
                  scale={0}
                >
                  <mesh
                    name="Object_882"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_882.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|670001_459"
                  position={[-0.02, 0.13, 0.03]}
                  rotation={[2.6, -0.43, 1.9]}
                  scale={0}
                >
                  <mesh
                    name="Object_884"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_884.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|671001_460"
                  position={[0.08, 0.2, 0.12]}
                  rotation={[2.6, -0.43, -1.83]}
                  scale={0}
                >
                  <mesh
                    name="Object_886"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_886.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|673001_461"
                  position={[0.05, 0.04, 0.17]}
                  rotation={[2.81, -0.47, -1.27]}
                  scale={0}
                >
                  <mesh
                    name="Object_888"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_888.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|680001_462"
                  position={[0.1, 0.1, 0.09]}
                  rotation={[3.03, -0.49, -0.52]}
                  scale={0}
                >
                  <mesh
                    name="Object_890"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_890.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|683001_463"
                  position={[0.03, -0.29, 0.08]}
                  rotation={[-1.66, -0.05, 2.5]}
                  scale={0}
                >
                  <mesh
                    name="Object_892"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_892.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|689001_464"
                  position={[0.01, 0.14, 0.05]}
                  rotation={[2.63, -0.26, -1.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_894"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_894.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|695001_465"
                  position={[-0.02, 0.07, 0.26]}
                  rotation={[3.04, -0.29, -2.56]}
                  scale={0}
                >
                  <mesh
                    name="Object_896"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_896.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|697001_466"
                  position={[-0.01, 0.21, 0.05]}
                  rotation={[1.67, -0.03, 2.27]}
                  scale={0}
                >
                  <mesh
                    name="Object_898"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_898.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|698001_467"
                  position={[-0.04, 0, -0.06]}
                  rotation={[-1.67, -0.03, 2.48]}
                  scale={0}
                >
                  <mesh
                    name="Object_900"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_900.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|702001_468"
                  position={[-0.04, -0.03, 0.01]}
                  rotation={[-3.04, -0.29, 1.02]}
                  scale={0}
                >
                  <mesh
                    name="Object_902"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_902.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|703001_469"
                  position={[-0.03, -0.07, 0.28]}
                  rotation={[-2.84, -0.28, -1.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_904"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_904.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|708001_470"
                  position={[0.04, -0.12, 0.12]}
                  rotation={[-2.63, -0.26, 0.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_906"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_906.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|71001_471"
                  position={[-0.01, 0.04, -0.04]}
                  rotation={[-0.1, -0.29, 0.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_908"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_908.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|711001_472"
                  position={[0.11, -0.14, 0.27]}
                  rotation={[-2.44, -0.23, -0.84]}
                  scale={0}
                >
                  <mesh
                    name="Object_910"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_910.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|712001_473"
                  position={[-0.04, -0.04, 0.17]}
                  rotation={[-2.44, -0.23, -1.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_912"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_912.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|717001_474"
                  position={[0.02, 0.06, 0.09]}
                  rotation={[-2.85, -0.09, 2.12]}
                  scale={0}
                >
                  <mesh
                    name="Object_914"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_914.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|719001_475"
                  position={[-0.09, -0.02, 0.06]}
                  rotation={[-2.85, -0.09, 2.01]}
                  scale={0}
                >
                  <mesh
                    name="Object_916"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_916.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|72001_476"
                  position={[0.1, -0.01, -0.13]}
                  rotation={[-0.1, -0.29, -1.86]}
                  scale={0}
                >
                  <mesh
                    name="Object_918"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_918.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|721001_477"
                  position={[0.02, 0.09, 0.12]}
                  rotation={[2.06, -0.05, -1.63]}
                  scale={0}
                >
                  <mesh
                    name="Object_920"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_920.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|722001_478"
                  position={[-0.04, 0.09, 0.07]}
                  rotation={[2.06, -0.05, 2.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_922"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_922.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|730001_479"
                  position={[0, 0.22, 0.13]}
                  rotation={[2.26, -0.06, -0.83]}
                  scale={0}
                >
                  <mesh
                    name="Object_924"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_924.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|734001_480"
                  position={[-0.06, -0.17, 0.14]}
                  rotation={[-2.45, -0.08, -0.71]}
                  scale={0}
                >
                  <mesh
                    name="Object_926"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_926.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|736001_481"
                  position={[-0.01, -0.11, 0.24]}
                  rotation={[-2.45, -0.08, -0.85]}
                  scale={0}
                >
                  <mesh
                    name="Object_928"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_928.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|737001_482"
                  position={[-0.06, 0.25, 0.14]}
                  rotation={[2.45, -0.08, 0.85]}
                  scale={0}
                >
                  <mesh
                    name="Object_930"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_930.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|746001_483"
                  position={[-0.01, -0.07, -0.05]}
                  rotation={[-2.26, -0.06, 2.78]}
                  scale={0}
                >
                  <mesh
                    name="Object_932"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_932.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|75001_484"
                  position={[0.12, -0.09, -0.28]}
                  rotation={[-0.31, -0.28, 1.79]}
                  scale={0}
                >
                  <mesh
                    name="Object_934"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_934.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|751001_485"
                  position={[-0.09, 0.08, 0.2]}
                  rotation={[2.65, -0.09, -0.84]}
                  scale={0}
                >
                  <mesh
                    name="Object_936"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_936.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|753001_486"
                  position={[0.04, 0.13, 0.13]}
                  rotation={[2.65, -0.09, -0.21]}
                  scale={0}
                >
                  <mesh
                    name="Object_938"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_938.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|765001_487"
                  position={[0.07, 0.03, 0.09]}
                  rotation={[3.04, -0.1, -0.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_940"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_940.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|770001_488"
                  position={[-0.08, 0.01, 0.11]}
                  rotation={[-3.04, -0.1, -1.79]}
                  scale={0}
                >
                  <mesh
                    name="Object_942"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_942.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|771001_489"
                  position={[-0.07, 0.03, 0.28]}
                  rotation={[-3.04, -0.1, 1.29]}
                  scale={0}
                >
                  <mesh
                    name="Object_944"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_944.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|775001_490"
                  position={[-0.02, 0.17, 0.21]}
                  rotation={[2.85, 0.09, -1.1]}
                  scale={0}
                >
                  <mesh
                    name="Object_946"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_946.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|781001_491"
                  position={[-0.12, 0.14, 0.2]}
                  rotation={[2.85, 0.09, -2.57]}
                  scale={0}
                >
                  <mesh
                    name="Object_948"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_948.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|787001_492"
                  position={[-0.12, -0.05, 0.14]}
                  rotation={[-3.04, 0.1, 0.77]}
                  scale={0}
                >
                  <mesh
                    name="Object_950"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_950.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|788001_493"
                  position={[-0.08, 0.1, 0.07]}
                  rotation={[-3.04, 0.1, -2.65]}
                  scale={0}
                >
                  <mesh
                    name="Object_952"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_952.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|791001_494"
                  position={[-0.08, 0.07, 0.03]}
                  rotation={[-3.04, 0.1, -0.76]}
                  scale={0}
                >
                  <mesh
                    name="Object_954"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_954.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|793001_495"
                  position={[-0.13, -0.12, 0.2]}
                  rotation={[-2.85, 0.09, -1.49]}
                  scale={0}
                >
                  <mesh
                    name="Object_956"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_956.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|798001_496"
                  position={[-0.09, -0.06, 0.22]}
                  rotation={[-2.85, 0.09, 0.66]}
                  scale={0}
                >
                  <mesh
                    name="Object_958"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_958.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|801001_497"
                  position={[-0.03, 0.14, 0.02]}
                  rotation={[2.06, 0.05, 2.31]}
                  scale={0}
                >
                  <mesh
                    name="Object_960"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_960.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|804001_498"
                  position={[-0.05, 0.18, 0.05]}
                  rotation={[2.26, 0.06, 2.19]}
                  scale={0}
                >
                  <mesh
                    name="Object_962"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_962.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|808001_499"
                  position={[-0.03, -0.12, 0.16]}
                  rotation={[-2.45, 0.08, 3.07]}
                  scale={0}
                >
                  <mesh
                    name="Object_964"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_964.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|815001_500"
                  position={[0, 0.17, 0.27]}
                  rotation={[2.45, 0.08, -1.59]}
                  scale={0}
                >
                  <mesh
                    name="Object_966"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_966.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|820001_501"
                  position={[-0.02, -0.1, 0.15]}
                  rotation={[-2.26, 0.06, -0.15]}
                  scale={0}
                >
                  <mesh
                    name="Object_968"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_968.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|821001_502"
                  position={[-0.03, -0.24, 0.18]}
                  rotation={[-2.26, 0.06, 0.7]}
                  scale={0}
                >
                  <mesh
                    name="Object_970"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_970.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|824001_503"
                  position={[0.04, 0.1, 0.16]}
                  rotation={[2.65, 0.09, 0.35]}
                  scale={0}
                >
                  <mesh
                    name="Object_972"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_972.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|825001_504"
                  position={[-0.07, 0.05, 0.19]}
                  rotation={[2.65, 0.09, 2.25]}
                  scale={0}
                >
                  <mesh
                    name="Object_974"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_974.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|828001_505"
                  position={[-0.08, 0.2, 0.09]}
                  rotation={[2.05, 0.14, 0.2]}
                  scale={0}
                >
                  <mesh
                    name="Object_976"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_976.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|832001_506"
                  position={[-0.11, 0.04, 0.08]}
                  rotation={[-2.63, 0.26, -2.33]}
                  scale={0}
                >
                  <mesh
                    name="Object_978"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_978.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|833001_507"
                  position={[0, -0.15, 0.14]}
                  rotation={[-2.63, 0.26, 0.04]}
                  scale={0}
                >
                  <mesh
                    name="Object_980"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_980.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|837001_508"
                  position={[-0.1, 0.03, 0.06]}
                  rotation={[2.24, 0.19, -0.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_982"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_982.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|84001_509"
                  position={[0.12, -0.18, -0.23]}
                  rotation={[-0.51, -0.26, -1.11]}
                  scale={0}
                >
                  <mesh
                    name="Object_984"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_984.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|842001_510"
                  position={[-0.06, 0.15, 0.12]}
                  rotation={[2.44, 0.23, -0.09]}
                  scale={0}
                >
                  <mesh
                    name="Object_986"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_986.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|844001_511"
                  position={[-0.08, -0.09, 0.05]}
                  rotation={[-2.24, 0.19, -2.66]}
                  scale={0}
                >
                  <mesh
                    name="Object_988"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_988.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|846001_512"
                  position={[-0.07, 0.14, 0.05]}
                  rotation={[2.63, 0.26, -1.65]}
                  scale={0}
                >
                  <mesh
                    name="Object_990"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_990.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|847001_513"
                  position={[-0.02, -0.04, 0.08]}
                  rotation={[2.63, 0.26, -2.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_992"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_992.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|85001_514"
                  position={[-0.02, 0.26, -0.19]}
                  rotation={[0.9, -0.19, -1.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_994"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_994.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|854001_515"
                  position={[0.01, 0.15, 0.15]}
                  rotation={[2.84, 0.28, 1.58]}
                  scale={0}
                >
                  <mesh
                    name="Object_996"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_996.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|856001_516"
                  position={[-0.04, 0.03, 0.06]}
                  rotation={[2.84, 0.28, 2.83]}
                  scale={0}
                >
                  <mesh
                    name="Object_998"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_998.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|859001_517"
                  position={[-0.09, 0, 0.25]}
                  rotation={[2.84, 0.28, -1.57]}
                  scale={0}
                >
                  <mesh
                    name="Object_1000"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1000.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|86001_518"
                  position={[-0.05, 0.1, -0.07]}
                  rotation={[0.9, -0.19, 0.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_1002"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1002.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|860001_519"
                  position={[-0.06, 0.1, 0.02]}
                  rotation={[3.04, 0.29, 2.97]}
                  scale={0}
                >
                  <mesh
                    name="Object_1004"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1004.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|862001_520"
                  position={[-0.11, -0.02, 0]}
                  rotation={[3.04, 0.29, 1.44]}
                  scale={0}
                >
                  <mesh
                    name="Object_1006"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1006.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|865001_521"
                  position={[-0.05, -0.09, 0.02]}
                  rotation={[-1.67, 0.03, 3.13]}
                  scale={0}
                >
                  <mesh
                    name="Object_1008"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1008.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|871001_522"
                  position={[-0.03, 0.06, 0.17]}
                  rotation={[-3.04, 0.29, 1.41]}
                  scale={0}
                >
                  <mesh
                    name="Object_1010"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1010.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|876001_523"
                  position={[-0.02, 0, 0.25]}
                  rotation={[-2.84, 0.28, -2.68]}
                  scale={0}
                >
                  <mesh
                    name="Object_1012"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1012.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|881001_524"
                  position={[-0.05, 0, 0.16]}
                  rotation={[2.81, 0.47, -1.61]}
                  scale={0}
                >
                  <mesh
                    name="Object_1014"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1014.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|883001_525"
                  position={[-0.12, 0, 0.13]}
                  rotation={[3.03, 0.49, -1.81]}
                  scale={0}
                >
                  <mesh
                    name="Object_1016"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1016.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|884001_526"
                  position={[-0.16, 0.01, 0.12]}
                  rotation={[3.03, 0.49, -0.27]}
                  scale={0}
                >
                  <mesh
                    name="Object_1018"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1018.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|892001_527"
                  position={[-0.13, -0.02, 0.08]}
                  rotation={[-3.03, 0.49, 2.99]}
                  scale={0}
                >
                  <mesh
                    name="Object_1020"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1020.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|894001_528"
                  position={[-0.18, -0.12, 0.12]}
                  rotation={[-2.81, 0.47, 3.08]}
                  scale={0}
                >
                  <mesh
                    name="Object_1022"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1022.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|896001_529"
                  position={[-0.04, 0.25, 0.08]}
                  rotation={[2.01, 0.22, 0.81]}
                  scale={0}
                >
                  <mesh
                    name="Object_1024"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1024.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|897001_530"
                  position={[-0.07, -0.2, 0.21]}
                  rotation={[-2.6, 0.43, 1.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_1026"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1026.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|899001_531"
                  position={[-0.04, -0.05, 0.19]}
                  rotation={[-2.6, 0.43, -0.51]}
                  scale={0}
                >
                  <mesh
                    name="Object_1028"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1028.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|900001_532"
                  position={[-0.12, -0.1, 0.25]}
                  rotation={[-2.6, 0.43, -2.44]}
                  scale={0}
                >
                  <mesh
                    name="Object_1030"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1030.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|902001_533"
                  position={[-0.06, -0.05, 0.03]}
                  rotation={[-2.6, 0.43, 2.97]}
                  scale={0}
                >
                  <mesh
                    name="Object_1032"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1032.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|905001_534"
                  position={[-0.08, 0.16, 0.03]}
                  rotation={[2.2, 0.3, 1.92]}
                  scale={0}
                >
                  <mesh
                    name="Object_1034"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1034.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|908001_535"
                  position={[-0.22, 0.23, 0.21]}
                  rotation={[2.39, 0.37, -1.68]}
                  scale={0}
                >
                  <mesh
                    name="Object_1036"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1036.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|910001_536"
                  position={[-0.12, 0.13, 0.12]}
                  rotation={[2.39, 0.37, -1.79]}
                  scale={0}
                >
                  <mesh
                    name="Object_1038"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1038.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|912001_537"
                  position={[0, 0.07, -0.04]}
                  rotation={[2.39, 0.37, 2.42]}
                  scale={0}
                >
                  <mesh
                    name="Object_1040"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1040.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|915001_538"
                  position={[-0.08, -0.15, 0.19]}
                  rotation={[-2.2, 0.3, -1.02]}
                  scale={0}
                >
                  <mesh
                    name="Object_1042"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1042.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|916001_539"
                  position={[-0.2, 0.23, 0.15]}
                  rotation={[2.6, 0.43, -1.51]}
                  scale={0}
                >
                  <mesh
                    name="Object_1044"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1044.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|918001_540"
                  position={[-0.08, 0.06, 0.19]}
                  rotation={[2.6, 0.43, 1.69]}
                  scale={0}
                >
                  <mesh
                    name="Object_1046"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1046.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|919001_541"
                  position={[-0.05, 0.1, 0.21]}
                  rotation={[2.6, 0.43, 2.37]}
                  scale={0}
                >
                  <mesh
                    name="Object_1048"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1048.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|92001_542"
                  position={[-0.06, -0.04, 0.01]}
                  rotation={[-0.71, -0.23, 0.85]}
                  scale={0}
                >
                  <mesh
                    name="Object_1050"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1050.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|926001_543"
                  position={[-0.18, -0.11, 0.05]}
                  rotation={[-2.54, 0.59, 0.8]}
                  scale={0}
                >
                  <mesh
                    name="Object_1052"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1052.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|931001_544"
                  position={[-0.13, 0.31, 0.09]}
                  rotation={[2.14, 0.42, 2.04]}
                  scale={0}
                >
                  <mesh
                    name="Object_1054"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1054.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|933001_545"
                  position={[-0.04, -0.08, 0.12]}
                  rotation={[-2.33, 0.51, -2.82]}
                  scale={0}
                >
                  <mesh
                    name="Object_1056"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1056.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|934001_546"
                  position={[-0.12, -0.12, 0.06]}
                  rotation={[-2.33, 0.51, 0.43]}
                  scale={0}
                >
                  <mesh
                    name="Object_1058"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1058.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|935001_547"
                  position={[-0.15, -0.19, 0.12]}
                  rotation={[-2.33, 0.51, -2.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_1060"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1060.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|936001_548"
                  position={[-0.05, 0, 0.13]}
                  rotation={[-2.33, 0.51, 1.34]}
                  scale={0}
                >
                  <mesh
                    name="Object_1062"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1062.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|937001_549"
                  position={[-0.16, -0.17, 0.15]}
                  rotation={[-2.33, 0.51, -1.66]}
                  scale={0}
                >
                  <mesh
                    name="Object_1064"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1064.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|942001_550"
                  position={[-0.11, -0.18, 0.1]}
                  rotation={[-2.14, 0.42, 0.44]}
                  scale={0}
                >
                  <mesh
                    name="Object_1066"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1066.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|946001_551"
                  position={[-0.19, 0.22, 0.22]}
                  rotation={[2.54, 0.59, -2.54]}
                  scale={0}
                >
                  <mesh
                    name="Object_1068"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1068.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|947001_552"
                  position={[-0.14, 0.11, 0.12]}
                  rotation={[2.54, 0.59, 3.05]}
                  scale={0}
                >
                  <mesh
                    name="Object_1070"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1070.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|948001_553"
                  position={[-0.03, 0.12, 0.11]}
                  rotation={[2.54, 0.59, 1.39]}
                  scale={0}
                >
                  <mesh
                    name="Object_1072"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1072.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|951001_554"
                  position={[-0.16, 0.06, 0.12]}
                  rotation={[2.54, 0.59, 1.84]}
                  scale={0}
                >
                  <mesh
                    name="Object_1074"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1074.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|952001_555"
                  position={[-0.03, 0.03, 0.12]}
                  rotation={[2.54, 0.59, 0.81]}
                  scale={0}
                >
                  <mesh
                    name="Object_1076"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1076.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|953001_556"
                  position={[-0.03, -0.07, -0.02]}
                  rotation={[-1.96, 0.3, -0.18]}
                  scale={0}
                >
                  <mesh
                    name="Object_1078"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1078.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|959001_557"
                  position={[-0.22, 0.11, 0.09]}
                  rotation={[3.02, 0.68, 1.01]}
                  scale={0}
                >
                  <mesh
                    name="Object_1080"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1080.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|960001_558"
                  position={[0.01, 0.02, 0.03]}
                  rotation={[3.02, 0.68, -0.7]}
                  scale={0}
                >
                  <mesh
                    name="Object_1082"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1082.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|963001_559"
                  position={[-0.08, -0.25, 0.06]}
                  rotation={[-1.65, 0.06, -2.07]}
                  scale={0}
                >
                  <mesh
                    name="Object_1084"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1084.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|964001_560"
                  position={[-0.08, -0.03, -0.01]}
                  rotation={[-3.02, 0.68, -1.3]}
                  scale={0}
                >
                  <mesh
                    name="Object_1086"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1086.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|965001_561"
                  position={[-0.24, -0.03, 0.2]}
                  rotation={[-3.02, 0.68, -1.74]}
                  scale={0}
                >
                  <mesh
                    name="Object_1088"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1088.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|969001_562"
                  position={[-0.17, 0, 0.01]}
                  rotation={[-3.02, 0.68, 0.72]}
                  scale={0}
                >
                  <mesh
                    name="Object_1090"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1090.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|970001_563"
                  position={[-0.12, 0, 0.15]}
                  rotation={[-3.02, 0.68, 1.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_1092"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1092.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|974001_564"
                  position={[-0.07, 0, 0.07]}
                  rotation={[-2.77, 0.65, -1.24]}
                  scale={0}
                >
                  <mesh
                    name="Object_1094"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1094.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|975001_565"
                  position={[0, 0.08, 0.05]}
                  rotation={[-2.77, 0.65, 1.46]}
                  scale={0}
                >
                  <mesh
                    name="Object_1096"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1096.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|979001_566"
                  position={[-0.21, 0.13, 0.21]}
                  rotation={[2.99, 0.88, -2.19]}
                  scale={0}
                >
                  <mesh
                    name="Object_1098"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1098.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|980001_567"
                  position={[-0.1, 0.1, -0.06]}
                  rotation={[2.99, 0.88, -1.16]}
                  scale={0}
                >
                  <mesh
                    name="Object_1100"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1100.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|984001_568"
                  position={[-0.17, -0.01, 0]}
                  rotation={[-2.99, 0.88, -2.81]}
                  scale={0}
                >
                  <mesh
                    name="Object_1102"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1102.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|988001_569"
                  position={[-0.03, -0.02, -0.02]}
                  rotation={[-2.99, 0.88, 1.29]}
                  scale={0}
                >
                  <mesh
                    name="Object_1104"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1104.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|994001_570"
                  position={[-0.1, 0.07, -0.05]}
                  rotation={[-2.7, 0.83, -2.17]}
                  scale={0}
                >
                  <mesh
                    name="Object_1106"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1106.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|995001_571"
                  position={[-0.14, 0.06, 0.04]}
                  rotation={[-2.7, 0.83, 1.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_1108"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1108.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|997001_572"
                  position={[-0.11, 0.06, -0.05]}
                  rotation={[-2.7, 0.83, 2.64]}
                  scale={0}
                >
                  <mesh
                    name="Object_1110"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1110.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <group
                  name="Sphere025|Icosphere|Dupli|998001_573"
                  position={[0.03, -0.01, 0.05]}
                  rotation={[-2.7, 0.83, -2.14]}
                  scale={0}
                >
                  <mesh
                    name="Object_1112"
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_1112.geometry}
                    material={materials["setare.001"]}
                  />
                </group>
                <mesh
                  name="Object_128"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.material_35}
                />
              </group>
              <group
                name="Plane018_575"
                position={[14.64, -13.95, 4.63]}
                rotation={[0, -0.28, -Math.PI / 2]}
                scale={[-3.27, 1.43, 2.73]}
              >
                <mesh
                  name="Object_1114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1114.geometry}
                  material={materials["ABR.001"]}
                />
              </group>
              <group
                name="Cylinder008_576"
                position={[-28.17, 10.84, 0.37]}
                scale={[0.45, 0.11, 0.45]}
              >
                <mesh
                  name="Object_1116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1116.geometry}
                  material={materials.fanoos}
                />
              </group>
              <group name="Cylinder009_577" position={[11.32, -1.82, -0.6]}>
                <mesh
                  name="Object_1118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_1118.geometry}
                  material={materials.badan}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../PrincePlanet.glb");

export default PrincePlanet