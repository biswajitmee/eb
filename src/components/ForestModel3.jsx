import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ForestModel3(props) {
  const { nodes, materials } = useGLTF("../forest3.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, -554.1, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Groundplane_M_Dirt_0.geometry}
              material={materials.M_Dirt}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Groundplane_M_Sand_0.geometry}
              material={materials.M_Sand}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Groundplane_M_SandPathEnd_0.geometry}
              material={materials.M_SandPathEnd}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Groundplane_M_SandPath_0.geometry}
              material={materials.M_SandPath}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.G_Groundplane_M_GrassDirtSandTransition_0.geometry
              }
              material={materials.M_GrassDirtSandTransition}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Groundplane_M_GrassDirtTransition_0.geometry}
              material={materials.M_GrassDirtTransition}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Groundplane_M_SandGrassTransition_0.geometry}
              material={materials.M_SandGrassTransition}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Groundplane_M_Grass_0.geometry}
              material={materials.M_Grass}
            />
          </group>
          <group position={[0, -456.46, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Water_M_WaterFoam_0.geometry}
              material={materials.M_WaterFoam}
            />
          </group>
          <group position={[0, 15.38, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Boat_M_Boat_0.geometry}
              material={materials.M_Boat}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Bridge_M_BalconyFloor_0.geometry}
            material={materials.M_BalconyFloor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Bridge_M_Logs_0.geometry}
            material={materials.M_Logs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Bridge_M_SandyLogs_0.geometry}
            material={materials.M_SandyLogs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_House_M_BalconyFloor_0.geometry}
            material={materials.M_BalconyFloor}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_House_M_HousePlanks_0.geometry}
            material={materials.M_HousePlanks}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_House_M_Logs_0.geometry}
            material={materials.M_Logs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_House_M_DoorsWindowsCement_0.geometry}
            material={materials.M_DoorsWindowsCement}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_House_M_HouseWalls_0.geometry}
            material={materials.M_HouseWalls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_House_M_StoneBricks_0.geometry}
            material={materials.M_StoneBricks}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_House_M_HouseRoof_0.geometry}
            material={materials.M_HouseRoof}
          />
          <group position={[7.36, 0, -0.91]} rotation={[0, 0.02, 0]}>
            <group position={[9.29, 34.8, -14.12]} rotation={[0, 0.06, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.G_Chair1_M_Chair_0.geometry}
                material={materials.M_Chair}
              />
            </group>
            <group position={[81.9, 34.8, -77.86]} rotation={[0, 0.45, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.G_Chair2_M_Chair_0.geometry}
                material={materials.M_Chair}
              />
            </group>
            <group position={[0, 34.8, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.G_Chair3_M_Chair_0.geometry}
                material={materials.M_Chair}
              />
            </group>
            <group position={[0, 34.8, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.G_Table_M_Table_0.geometry}
                material={materials.M_Table}
              />
            </group>
            <group
              position={[-1350.01, 268.7, -102.35]}
              rotation={[0, 0.86, 0]}
              scale={[1.61, 2.08, 1.61]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.G_Drawing1_M_Decals_0.geometry}
                material={materials.M_Decals}
              />
            </group>
          </group>
          <group position={[-167.7, 268.78, 520.6]} rotation={[0, -0.89, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_WorkshopHut_M_HutWalls_0.geometry}
              material={materials.M_HutWalls}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_WorkshopHut_M_HousePlanks_0.geometry}
              material={materials.M_HousePlanks}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_WorkshopHut_M_HutUndersidePlanks_0.geometry}
              material={materials.M_HutUndersidePlanks}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_WorkshopHut_M_Logs_0.geometry}
              material={materials.M_Logs}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_WorkshopHut_M_DoorsWindowsCement_0.geometry}
              material={materials.M_DoorsWindowsCement}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_WorkshopHut_M_HutRoof_0.geometry}
              material={materials.M_HutRoof}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Ladder_M_Logs_0.geometry}
            material={materials.M_Logs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Ladder_M_SandyLogs_0.geometry}
            material={materials.M_SandyLogs}
          />
          <group
            position={[104.2, 21.81, 36.78]}
            rotation={[0.02, -0.14, 0.03]}
          >
            <group
              position={[-68.33, 337.73, -88.83]}
              rotation={[0.03, 0.02, 0.05]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plank_4_M_Planks_0.geometry}
                material={materials.M_Planks}
              />
            </group>
            <group
              position={[-57.86, 356.75, -96.21]}
              rotation={[0.05, 0.02, 0.07]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plank_5_M_Planks_0.geometry}
                material={materials.M_Planks}
              />
            </group>
            <group
              position={[-732.85, -80.1, 553.32]}
              rotation={[-0.93, 0.47, -0.8]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plank_6_M_Planks_0.geometry}
                material={materials.M_Planks}
              />
            </group>
            <group
              position={[-734.68, -75.73, 521.38]}
              rotation={[-0.9, 0.42, -0.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plank_7_M_Planks_0.geometry}
                material={materials.M_Planks}
              />
            </group>
            <group
              position={[93.03, -88.33, 509.68]}
              rotation={[-2.26, -0.41, 2.34]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plank_8_M_Planks_0.geometry}
                material={materials.M_Planks}
              />
            </group>
            <group
              position={[-1051.33, 753.31, 179.45]}
              rotation={[0.56, 0.54, -1.88]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plank_9_M_Planks_0.geometry}
                material={materials.M_Planks}
              />
            </group>
            <group
              position={[-949.19, 220.82, 210.87]}
              rotation={[0.12, 1.42, -0.15]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plank_10_M_Planks_0.geometry}
                material={materials.M_Planks}
              />
            </group>
          </group>
          <group
            position={[-22.74, -18.07, 13.34]}
            rotation={[-0.03, -0.01, -0.08]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Workbench_M_Workbench_0.geometry}
              material={materials.M_Workbench}
            />
          </group>
          <group position={[-1.85, -1.49, 6.86]} rotation={[0, -0.04, -0.06]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Plank1_M_Planks_0.geometry}
              material={materials.M_Planks}
            />
          </group>
          <group
            position={[-51.17, 61.17, -50.95]}
            rotation={[0.06, 0.11, 0.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Plank2_M_Planks_0.geometry}
              material={materials.M_Planks}
            />
          </group>
          <group position={[62.56, 8.02, 22.95]} rotation={[0, -0.09, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Plank3_M_Planks_0.geometry}
              material={materials.M_Planks}
            />
          </group>
          <group
            position={[-33.21, -63.35, 31.49]}
            rotation={[-0.1, 0.03, -0.05]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Bucket_M_Bucket_0.geometry}
              material={materials.M_Bucket}
            />
          </group>
          <group
            position={[-242.25, 453.84, 590.83]}
            rotation={[-1.64, 0.01, 2.65]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Hammer_M_Hammer_0.geometry}
              material={materials.M_Hammer}
            />
          </group>
          <group
            position={[367.56, 1711.73, 1646.88]}
            rotation={[Math.PI / 2, 0, -2.26]}
            scale={[2.35, 2.08, 2.35]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Drawing2_M_Decals_0.geometry}
              material={materials.M_Decals}
            />
          </group>
          <group
            position={[379.46, 951.3, 509.44]}
            rotation={[-0.75, -0.24, 0.6]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_ThatchDecal1_M_Decals_0.geometry}
              material={materials.M_Decals}
            />
          </group>
          <group
            position={[125.3, 604.75, 244.46]}
            rotation={[0.73, -0.2, -0.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_ThatchDecal2_M_Decals_0.geometry}
              material={materials.M_Decals}
            />
          </group>
          <group position={[-167.78, 268.73, 520.67]} rotation={[0, -0.89, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_ThatchDecal3_M_Decals_0.geometry}
              material={materials.M_Decals}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_StorageShed_M_DoorsWindowsCement_0.geometry}
            material={materials.M_DoorsWindowsCement}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_StorageShed_M_StorageShedRoof_0.geometry}
            material={materials.M_StorageShedRoof}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_StorageShed_M_StorageShedWalls_0.geometry}
            material={materials.M_StorageShedWalls}
          />
          <group
            position={[-70.14, 799.69, -136.6]}
            rotation={[-1.43, 0.03, 0.09]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_CurrogatedPlate2_M_StorageShedRoof_0.geometry}
              material={materials.M_StorageShedRoof}
            />
          </group>
          <group
            position={[-114.67, 907.58, -262.71]}
            rotation={[-1.57, 0.04, -0.08]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_CurrogatedPlate1_M_StorageShedRoof_0.geometry}
              material={materials.M_StorageShedRoof}
            />
          </group>
          <group position={[85.21, -108.49, -1112.77]} rotation={[0, 1.17, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Bucket2_M_Bucket_0.geometry}
              material={materials.M_Bucket}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree1_M_SandyLogs_0.geometry}
            material={materials.M_SandyLogs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree1_M_PalmLeaf_0.geometry}
            material={materials.M_PalmLeaf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree1_M_PalmTreeBark_0.geometry}
            material={materials.M_PalmTreeBark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree2_M_PalmLeaf_0.geometry}
            material={materials.M_PalmLeaf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree2_M_PalmTreeBark_0.geometry}
            material={materials.M_PalmTreeBark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree3_M_PalmLeaf_0.geometry}
            material={materials.M_PalmLeaf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree3_M_PalmTreeBark_0.geometry}
            material={materials.M_PalmTreeBark}
          />
          <group
            position={[-206.66, 45.3, -450.93]}
            rotation={[-3.09, -0.68, -3.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Tree4_M_SandyLogs_0.geometry}
              material={materials.M_SandyLogs}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Tree4_M_PalmLeaf_0.geometry}
              material={materials.M_PalmLeaf}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.G_Tree4_M_PalmTreeBark_0.geometry}
              material={materials.M_PalmTreeBark}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree5_M_PalmLeaf_0.geometry}
            material={materials.M_PalmLeaf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree5_M_PalmTreeBark_0.geometry}
            material={materials.M_PalmTreeBark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree6_M_PalmLeaf_0.geometry}
            material={materials.M_PalmLeaf}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Tree6_M_PalmTreeBark_0.geometry}
            material={materials.M_PalmTreeBark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Vegetation_M_Vegetation_0.geometry}
            material={materials.M_Vegetation}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Rocks_M_Rocks_0.geometry}
            material={materials.M_Rocks}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.G_Clothes_M_Decals_0.geometry}
            material={materials.M_Decals}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../forest3.glb");

export default ForestModel3