
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ForestModel4(props) {
  const { nodes, materials } = useGLTF("../forest4.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-3073.57, 398.23, 0]}>
            <group
              position={[2546.12, -486.96, -398.74]}
              rotation={[0.4, 0.65, -0.18]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wood_plate_PlyWood_0.geometry}
                material={materials.PlyWood}
              />
            </group>
            <group
              position={[3064.18, -310.53, -747.7]}
              rotation={[0.31, -Math.PI / 2, 0]}
              scale={2.14}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Rake1_Rake_0.geometry}
                material={materials.Rake}
              />
            </group>
            <group
              position={[4001.85, -976.18, -102.49]}
              rotation={[-3.12, -0.02, 1.15]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Supboard_Supboard_and_NewsPaper_0.geometry}
                material={materials.Supboard_and_NewsPaper}
              />
            </group>
            <group
              position={[2567.39, -153.75, -793.01]}
              rotation={[1.65, 0, 1.76]}
              scale={[59.67, 2.46, 37.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Paradise_sign_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[2212.44, -235.71, 729.1]}
              rotation={[0, 0.85, 0]}
              scale={[0.87, 0.78, 0.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table_Table_and_Chairs_0.geometry}
                material={materials.Table_and_Chairs}
              />
            </group>
            <group
              position={[1944.9, -759.08, 1193.71]}
              rotation={[-3.07, -0.53, 3.12]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Warning_sign_Wave_Sign_0.geometry}
                material={materials.Wave_Sign}
              />
            </group>
            <group
              position={[1875.05, -216.26, -1573.32]}
              rotation={[0, -0.4, -0.07]}
              scale={0.85}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.MailBox1_MailBox_0.geometry}
                material={materials.MailBox}
              />
            </group>
            <group
              position={[2637.32, -579.21, -138.91]}
              rotation={[2.13, -0.02, 3.02]}
              scale={2.65}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate1_Crate_0.geometry}
                material={materials.Crate}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table_props_Plant_pot_0.geometry}
                material={materials.Plant_pot}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Table_props_Plants1_0.geometry}
                material={materials.Plants1}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shed_props_Table_and_Chairs_0.geometry}
                material={materials.Table_and_Chairs}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shed_props_Plant_pot_0.geometry}
                material={materials.Plant_pot}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shed_props_Rake_0.geometry}
                material={materials.Rake}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shed_props_Crate_0.geometry}
                material={materials.Crate}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Shed_props_Kayak_and_Peddle_0.geometry}
                material={materials.Kayak_and_Peddle}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Dead_nature_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Dead_nature_HouseDecals_2_0.geometry}
                material={materials.HouseDecals_2}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Car_Supboard_and_NewsPaper_0.geometry}
                material={materials.Supboard_and_NewsPaper}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Car_Car1_0.geometry}
                material={materials.Car1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Car_Kayak_and_Peddle_0.geometry}
                material={materials.Kayak_and_Peddle}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tarp1_Tarp_0.geometry}
                material={materials.Tarp}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tarp1_HouseDecals_2_0.geometry}
                material={materials.HouseDecals_2}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Stairs_Wood_1_0.geometry}
                material={materials.Wood_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Stairs_Wood_2_0.geometry}
                material={materials.Wood_2}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plants_Plants1_0.geometry}
                material={materials.Plants1}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Water_WaterDecals_0.geometry}
                material={materials.WaterDecals}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Water_Water1_0.geometry}
                material={materials.Water1}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Default_Material_0.geometry}
                material={materials.Default_Material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Dark_room_0.geometry}
                material={materials.Dark_room}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_lambert1_0.geometry}
                material={materials.lambert1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Roof_CarPort_0.geometry}
                material={materials.Roof_CarPort}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Brick_0.geometry}
                material={materials.Brick}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Wood_3_0.geometry}
                material={materials.Wood_3}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_House_Wall_0.geometry}
                material={materials.House_Wall}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_pasted__pasted__Brench1_0.geometry}
                material={materials.pasted__pasted__Brench1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_House_Roof_0.geometry}
                material={materials.House_Roof}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_PlyWood_0.geometry}
                material={materials.PlyWood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_White_Wood_2_0.geometry}
                material={materials.White_Wood_2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Wood_1_0.geometry}
                material={materials.Wood_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_White_Wood_1_0.geometry}
                material={materials.White_Wood_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Drainpipe_0.geometry}
                material={materials.Drainpipe}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_HouseDecals_2_0.geometry}
                material={materials.HouseDecals_2}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_HouseDecals_3_0.geometry}
                material={materials.HouseDecals_3}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.House1_Moose_art_0.geometry}
                material={materials.Moose_art}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_Rocks_0.geometry}
                material={materials.Rocks}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_Trail_0.geometry}
                material={materials.Trail}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_Sand_0.geometry}
                material={materials.Sand}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_Pebbles_0.geometry}
                material={materials.Pebbles}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_Break_GRGT_0.geometry}
                material={materials.Break_GRGT}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_Break_GPPS_0.geometry}
                material={materials.Break_GPPS}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_Grass_0.geometry}
                material={materials.Grass}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Base_HouseDecals_3_0.geometry}
                material={materials.HouseDecals_3}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plant_pots_Plant_pot_0.geometry}
                material={materials.Plant_pot}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plant_pots_Plants1_0.geometry}
                material={materials.Plants1}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wood_Sturcture_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wood_Sturcture_PlyWood_0.geometry}
                material={materials.PlyWood}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wood_Sturcture_Wood_1_0.geometry}
                material={materials.Wood_1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Wood_Sturcture_Wood_2_0.geometry}
                material={materials.Wood_2}
              />
            </group>
            <group
              position={[2079.48, -542.21, 479.57]}
              rotation={[0.19, 0.36, -0.05]}
              scale={99.14}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_1_pasted__pasted__Brench1_0.geometry}
                material={materials.pasted__pasted__Brench1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_1_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_1_pasted__pasted__Filled_branch_0.geometry}
                material={materials.pasted__pasted__Filled_branch}
              />
            </group>
            <group
              position={[3543.24, -659.97, -458.24]}
              rotation={[-3.1, -0.97, -3.1]}
              scale={88.12}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_2_pasted__pasted__Brench1_0.geometry}
                material={materials.pasted__pasted__Brench1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_2_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_2_pasted__pasted__Filled_branch_0.geometry}
                material={materials.pasted__pasted__Filled_branch}
              />
            </group>
            <group
              position={[1477.7, -326.62, -1474.19]}
              rotation={[-0.03, 0, 0]}
              scale={99.14}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_4_pasted__pasted__Brench1_0.geometry}
                material={materials.pasted__pasted__Brench1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_4_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_4_pasted__pasted__Filled_branch_0.geometry}
                material={materials.pasted__pasted__Filled_branch}
              />
            </group>
            <group
              position={[2700.53, -159.03, -1054.26]}
              rotation={[-3.13, 0.22, -3.12]}
              scale={86.58}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_5_pasted__pasted__Brench1_0.geometry}
                material={materials.pasted__pasted__Brench1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_5_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_5_pasted__pasted__Filled_branch_0.geometry}
                material={materials.pasted__pasted__Filled_branch}
              />
            </group>
            <group
              position={[3835.19, -160.02, -100.27]}
              rotation={[2.66, 1.51, -2.64]}
              scale={107.3}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_6_pasted__pasted__Brench1_0.geometry}
                material={materials.pasted__pasted__Brench1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_6_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_6_pasted__pasted__Filled_branch_0.geometry}
                material={materials.pasted__pasted__Filled_branch}
              />
            </group>
            <group
              position={[1551.53, -581.22, 13.65]}
              rotation={[0.02, -0.17, 0.05]}
              scale={104.78}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_7_pasted__pasted__Brench1_0.geometry}
                material={materials.pasted__pasted__Brench1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_7_Tree_Bark_0.geometry}
                material={materials.Tree_Bark}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Tree_7_pasted__pasted__Filled_branch_0.geometry}
                material={materials.pasted__pasted__Filled_branch}
              />
            </group>
            <group
              position={[3120.06, 537.19, 136.75]}
              rotation={[-3.06, -1.02, 1.62]}
              scale={0.69}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Chair_1_Table_and_Chairs_0.geometry}
                material={materials.Table_and_Chairs}
              />
            </group>
            <group
              position={[2157.3, -228.81, 10.58]}
              rotation={[0, 0.15, 0]}
              scale={0.69}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Chair_3_Table_and_Chairs_0.geometry}
                material={materials.Table_and_Chairs}
              />
            </group>
            <group
              position={[2302.98, -228.81, 599.53]}
              rotation={[0, 0.88, 0]}
              scale={0.69}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Chair_2_Table_and_Chairs_0.geometry}
                material={materials.Table_and_Chairs}
              />
            </group>
            <group
              position={[2552.36, -184.15, 100.35]}
              rotation={[0, 0.44, 0]}
              scale={0.69}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Chair_4_Table_and_Chairs_0.geometry}
                material={materials.Table_and_Chairs}
              />
            </group>
            <group
              position={[2690.11, -627.63, -36.4]}
              rotation={[-1.23, -0.04, 1.35]}
              scale={[3.54, 8.19, 3.54]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RedBull_6_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[3202.79, -317.14, -712.43]}
              rotation={[1.12, 0.31, 1]}
              scale={[3.54, 8.19, 3.54]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RedBull_3_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[3021.29, -187.93, 14.26]}
              rotation={[0, -0.54, 0]}
              scale={[3.49, 8.09, 3.49]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RedBull_1_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[2438.83, -464.32, -453.39]}
              rotation={[3.02, -0.8, 1.99]}
              scale={[2.55, 5.91, 2.55]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RedBull_4_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[2200.36, -682.13, 300.89]}
              rotation={[-2.01, -1.25, 2.58]}
              scale={[2.55, 5.91, 2.55]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RedBull_5_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[3013.08, -192.68, 17.02]}
              rotation={[0, -1.18, Math.PI / 2]}
              scale={[3.49, 8.09, 3.49]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.RedBull_2_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[2677.64, -949.8, 447.27]}
              rotation={[-0.18, -0.24, 0.13]}
              scale={0.42}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fish_3_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[3375.46, -925.04, 726.9]}
              rotation={[0.17, 0.84, 0]}
              scale={0.42}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fish_2_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[3160.6, -843.11, 212.56]}
              rotation={[-0.06, -0.21, -0.02]}
              scale={0.6}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Fish_1_FIsh_and_random_tex_0.geometry}
                material={materials.FIsh_and_random_tex}
              />
            </group>
            <group
              position={[2408.74, -690.25, 306.95]}
              rotation={[0.09, 0.1, -0.51]}
              scale={35.7}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kayak_2_Kayak_and_Peddle_0.geometry}
                material={materials.Kayak_and_Peddle}
              />
            </group>
            <group
              position={[2590.88, -701.18, 252.3]}
              rotation={[0.14, -0.37, -0.16]}
              scale={35.7}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kayak_1_Kayak_and_Peddle_0.geometry}
                material={materials.Kayak_and_Peddle}
              />
            </group>
            <group position={[3073.57, -398.23, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Paddels_kayaks_Kayak_and_Peddle_0.geometry}
                material={materials.Kayak_and_Peddle}
              />
            </group>
            <group
              position={[3008.66, -196.08, -7.92]}
              rotation={[-2.16, -1.48, -2.24]}
              scale={[38.51, 38.51, 54.51]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.NewsPaper_1_Supboard_and_NewsPaper_0.geometry}
                material={materials.Supboard_and_NewsPaper}
              />
            </group>
            <group
              position={[2947.81, -650.23, 22.83]}
              rotation={[0.69, 1.2, -0.52]}
              scale={[38.51, 38.51, 54.51]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.NewsPaper_3_Supboard_and_NewsPaper_0.geometry}
                material={materials.Supboard_and_NewsPaper}
              />
            </group>
            <group
              position={[2276.34, -364.66, -635.25]}
              rotation={[0, 0.53, 0]}
              scale={[38.51, 38.51, 54.51]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.NewsPaper_2_Supboard_and_NewsPaper_0.geometry}
                material={materials.Supboard_and_NewsPaper}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../forest4.glb");

export default ForestModel4