import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ForestModel2(props) {
  const { nodes, materials } = useGLTF("../forest2.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[-5540.25, 1.46, -18.28]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundPlatform_0.geometry}
              material={materials.m_GroundPlatform}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundPath_0.geometry}
              material={materials.m_GroundPath}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundGravel_0.geometry}
              material={materials.m_GroundGravel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundPicnic_0.geometry}
              material={materials.m_GroundPicnic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTransitionRiver_0.geometry}
              material={materials.m_GroundTransitionRiver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTransitionsPath_0.geometry}
              material={materials.m_GroundTransitionsPath}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundEmbankment_0.geometry}
              material={materials.m_GroundEmbankment}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundRocks_0.geometry}
              material={materials.m_GroundRocks}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTransitionGravel_0.geometry}
              material={materials.m_GroundTransitionGravel}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTrail_0.geometry}
              material={materials.m_GroundTrail}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTransitionTrail_0.geometry}
              material={materials.m_GroundTransitionTrail}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundFloor_0.geometry}
              material={materials.m_GroundFloor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTransitionFloor_0.geometry}
              material={materials.m_GroundTransitionFloor}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundRiver_0.geometry}
              material={materials.m_GroundRiver}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTransitionPicnic_0.geometry}
              material={materials.m_GroundTransitionPicnic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Landscape_m_GroundTransitionsRock_0.geometry}
              material={materials.m_GroundTransitionsRock}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.GodRays_m_Grunges_0.geometry}
            material={materials.m_Grunges}
          />
          <group position={[0, 321.05, 158.73]}>
            <group
              position={[133.46, 932.53, 537.42]}
              rotation={[Math.PI / 2, 0, -2.3]}
              scale={0.55}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker1_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[76.9, 697.09, 442.39]}
              rotation={[Math.PI / 2, 0, -0.76]}
              scale={0.43}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker2_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[48.77, 602.73, 486.9]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker3_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-654.22, 1706.39, 243.81]}
              rotation={[1.61, -0.16, 1.03]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker4_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-672.92, 1675.67, 207.53]}
              rotation={[1.56, -0.13, 1.06]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker5_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-665.66, 1606.54, 176.86]}
              rotation={[1.52, -0.13, 1.07]}
              scale={0.95}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker6_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-188.69, 693.1, 885.77]}
              rotation={[Math.PI / 2, 0, 0.94]}
              scale={0.39}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker7_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[6.81, 704.59, 543.04]}
              rotation={[Math.PI / 2, 0, -0.64]}
              scale={0.41}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker8_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-39.91, 1271.1, 427.55]}
              rotation={[Math.PI / 2, 0, 0.43]}
              scale={0.76}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker9_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-224.43, 609.25, 887.07]}
              rotation={[Math.PI / 2, 0, 0.52]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker10_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[233.61, 821.74, 295.67]}
              rotation={[1.37, -0.21, -0.77]}
              scale={0.51}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker11_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-213.83, 680.95, 924.39]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker13_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-662.54, 1054.53, 426.73]}
              rotation={[1.46, -0.04, -2.13]}
              scale={0.55}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker14_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-667.56, 1270.26, 251.96]}
              rotation={[1.46, -0.11, 1.04]}
              scale={0.7}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker15_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-634.57, 1317.22, 334.69]}
              rotation={[1.56, -0.15, 1.05]}
              scale={0.73}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker16_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-539.82, 1363.98, 557.33]}
              rotation={[1.52, -0.09, -2.08]}
              scale={0.79}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker17_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-634.37, 759.58, 516.98]}
              rotation={[1.52, -0.11, -2.06]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker18_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-723.31, 453.58, 49.41]}
              rotation={[1.59, -0.06, 1.95]}
              scale={0.19}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker19_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-626.31, 889.61, -1271.66]}
              rotation={[1.46, 0.1, 2.95]}
              scale={0.45}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker20_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-637.19, 783.4, -1228.62]}
              rotation={[1.5, 0.06, 3.01]}
              scale={0.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker21_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-1072.69, 847.73, -957.75]}
              rotation={[1.53, 0.01, 0.9]}
              scale={0.42}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker22_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-276.17, 999.84, -902.05]}
              rotation={[1.34, -0.61, -2.09]}
              scale={0.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker23_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-363.2, 988.66, -856.06]}
              rotation={[1.49, -0.51, -2.12]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker24_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-312.52, 1166.72, -1016.36]}
              rotation={[1.58, 0, -1.87]}
              scale={0.55}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker25_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-350.75, 1123.97, -1152.91]}
              rotation={[Math.PI / 2, 0, 1.29]}
              scale={0.53}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker26_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-347.03, 911.99, -1132.5]}
              rotation={[Math.PI / 2, 0, 1.25]}
              scale={0.39}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker27_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-495.26, 2273.74, -1391.01]}
              rotation={[1.56, 0.05, 1.32]}
              scale={1.34}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker28_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-378.74, 1338.23, -1122.38]}
              rotation={[1.66, 0.01, 1.29]}
              scale={0.67}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker29_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-307.46, 1040.63, -1106.16]}
              rotation={[1.56, -0.06, 2.86]}
              scale={0.5}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker30_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-496.94, 940.39, -1058.38]}
              rotation={[Math.PI / 2, 0, -0.24]}
              scale={0.41}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker31_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-541.12, 1665.91, -959.45]}
              rotation={[1.63, -0.01, -0.29]}
              scale={0.89}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker32_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-442.61, 1368.75, -1062.95]}
              rotation={[1.48, 0.05, -1.86]}
              scale={0.67}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker33_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-400.31, 912.89, -1016.74]}
              rotation={[1.7, -0.04, 1.32]}
              scale={0.41}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker34_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-407.27, 848.02, -976.44]}
              rotation={[1.59, 0.03, -1.84]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker35_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-421.76, 1702.69, -966.16]}
              rotation={[1.52, 0.04, -1.82]}
              scale={0.89}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Sticker36_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[172.38, 92.87, -1167.61]}
              rotation={[0, 0.23, 0]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight7_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[141.41, 92.91, -1176.76]}
              rotation={[0, 0.28, 0]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft7_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[133.33, 95.15, -1155.46]}
              rotation={[0, 0.23, 0]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight6_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[69.99, 94.03, -1154.65]}
              rotation={[0, 0.28, 0]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft6_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[93.71, 93.19, -1141.77]}
              rotation={[0, 0.17, 0]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight5_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[9.1, 93.1, -1145.53]}
              rotation={[0, 0.28, 0]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft5_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-588.43, 92.94, -471.82]}
              rotation={[-Math.PI, 1.49, -Math.PI]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft4_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-542.25, 93.4, -342.93]}
              rotation={[-Math.PI, 1.19, -Math.PI]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight4_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-570.66, 92.96, -347.89]}
              rotation={[-Math.PI, 1.26, -Math.PI]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft3_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-543.65, 93.01, -319.04]}
              rotation={[-Math.PI, 1.19, -Math.PI]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight3_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-570.89, 92.78, -305.84]}
              rotation={[-Math.PI, 1.26, -Math.PI]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft2_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-530, 92.99, -252.45]}
              rotation={[-Math.PI, 1.19, -Math.PI]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight2_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-553.75, 72.11, -249.81]}
              rotation={[-Math.PI, 1.26, -Math.PI]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft1_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-515.39, 51.12, -198.9]}
              rotation={[-Math.PI, 1.19, -Math.PI]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight1_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-494.37, 14.05, -142.22]}
              rotation={[-Math.PI, 1.19, -Math.PI]}
              scale={0.31}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepRight_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-537.31, 31.53, -193.8]}
              rotation={[-Math.PI, 1.26, -Math.PI]}
              scale={0.33}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_FootstepLeft_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[388.65, 936.57, -685.6]}
              rotation={[1.57, -0.02, -0.33]}
              scale={0.74}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteCrack_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[306.69, 790.14, -961.42]}
              rotation={[1.57, -0.06, -0.31]}
              scale={0.56}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteDamage1_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[329.51, 657.99, -731.19]}
              rotation={[1.57, 0.02, -1.87]}
              scale={0.46}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteDamage2_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-215.5, 725.57, -838.05]}
              rotation={[1.57, 0.02, -1.87]}
              scale={0.46}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteDamage3_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[62.85, 1001.81, -965.62]}
              rotation={[1.57, -0.02, -1.86]}
              scale={0.74}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteCrack1_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[77.3, 554.64, -893.09]}
              rotation={[1.57, -0.06, -0.21]}
              scale={0.38}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteDamage4_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-23.85, 721.2, -1096.79]}
              rotation={[1.57, 0.02, -0.29]}
              scale={0.46}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteDamage5_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[84.39, 1001.65, -659.77]}
              rotation={[1.57, -0.02, 2.88]}
              scale={0.74}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteCrack2_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-69.07, 1001.86, -1131.53]}
              rotation={[1.57, -0.02, 2.88]}
              scale={0.74}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteCrack3_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[96.91, 701.48, -1189.89]}
              rotation={[1.57, 0.02, -1.87]}
              scale={0.46}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_ConcreteDamage6_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[251.54, 796.79, -945.81]}
              rotation={[1.52, 0.02, -1.86]}
              scale={0.59}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage1_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-67.43, 1273.16, 648.02]}
              rotation={[1.54, 0.04, -0.43]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage2_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[169.8, 788.15, -910.81]}
              rotation={[1.59, -0.02, -0.32]}
              scale={0.59}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage3_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[81.82, 788.61, -1106.8]}
              rotation={[1.59, -0.02, -0.31]}
              scale={[0.75, 0.59, 0.59]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage4_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[213.98, 610.57, -1104.73]}
              rotation={[1.59, -0.02, -1.9]}
              scale={[0.58, 0.45, 0.45]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage5_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[217.67, 612.94, -1210.38]}
              rotation={[1.59, -0.02, 2.85]}
              scale={[0.58, 0.45, 0.45]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage6_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[34.05, 612.36, -1153.71]}
              rotation={[1.59, -0.02, 2.85]}
              scale={[0.58, 0.45, 0.45]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage7_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[57.31, 785.93, -580.39]}
              rotation={[1.59, -0.02, -0.32]}
              scale={0.59}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage8_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[176.64, 786.83, -565.81]}
              rotation={[1.59, -0.02, -1.87]}
              scale={0.59}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage9_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[257.47, 1293.48, -677.66]}
              rotation={[1.56, 0.01, -0.32]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage10_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[343.72, 1294.39, -648.32]}
              rotation={[1.56, 0.01, -1.88]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage11_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[167.13, 1289.79, -590.77]}
              rotation={[1.56, 0.01, -1.88]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage12_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[174.67, 1291.26, -931.72]}
              rotation={[1.56, 0.01, -0.32]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage13_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[18.77, 1222.62, -412.21]}
              rotation={[1.56, 0.01, -1.88]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage14_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-207.4, 1233.58, -340.75]}
              rotation={[1.56, 0.01, -1.88]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage15_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-66.45, 1250.64, -440.42]}
              rotation={[1.56, 0.01, -0.32]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage16_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-273.93, 1250.75, -375.74]}
              rotation={[1.56, 0.01, -0.32]}
              scale={[0.31, 0.36, 0.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leakage17_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[135.65, 1070.9, 556.04]}
              rotation={[1.55, 0, -1.98]}
              scale={0.65}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt3_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-23.2, 1417.6, -562.42]}
              rotation={[1.58, 0, -0.3]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt1_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[169.79, 1156.48, 622.63]}
              rotation={[1.55, 0, -1.98]}
              scale={0.65}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt4_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-219.33, 1160.94, 790.31]}
              rotation={[1.55, 0, -1.98]}
              scale={0.65}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt5_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-23.2, 1320.36, -563.11]}
              rotation={[1.58, 0, -0.3]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt6_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[66.27, 1320.57, -592.09]}
              rotation={[1.58, 0, -0.3]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt7_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[66.27, 1417.8, -591.4]}
              rotation={[1.58, 0, -0.3]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt8_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[136.19, 1278.04, -647.05]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt9_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[136.19, 1375.27, -646.36]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt10_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[90.8, 1279.08, -793.88]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt11_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[90.8, 1376.32, -793.2]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt12_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[155.52, 1441.24, -919.72]}
              rotation={[1.58, 0, -0.32]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt13_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[62.07, 1441.02, -889.04]}
              rotation={[1.58, 0, -0.32]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt14_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-166.54, 1394.67, -518.8]}
              rotation={[1.58, 0, -0.3]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt15_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[266.95, 1681.82, -913.01]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt16_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[239.32, 1419.04, -996.9]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt17_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[239.32, 1320.7, -997.6]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt18_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[210.03, 1321.37, -1092.38]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt19_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[210.03, 1419.71, -1091.68]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt20_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[71.51, 1443.06, -1175.65]}
              rotation={[1.58, 0, -0.32]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt21_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-21.95, 1442.84, -1144.97]}
              rotation={[1.58, 0, -0.32]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt22_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-493.81, 1682.07, -677.86]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt23_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-484.84, 1393.81, -641.17]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt24_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
            <group
              position={[-455.84, 1393.14, -547.33]}
              rotation={[1.58, 0, -1.87]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_DecalDirt25_m_Grunges_0.geometry}
                material={materials.m_Grunges}
              />
            </group>
          </group>
          <group position={[1526.96, 260.94, -594.77]}>
            <group
              position={[-1777.42, 89.86, 607.86]}
              rotation={[2.33, 0.88, 2.96]}
              scale={123.17}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks1_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group
              position={[-1442.32, 71.58, 544.8]}
              rotation={[-2.69, 0.56, -0.15]}
              scale={86.66}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks2_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group
              position={[-2654.49, 297.3, 531.05]}
              rotation={[-2.87, -0.63, -1.78]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks3_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group
              position={[-1685.17, 25.59, -512.68]}
              rotation={[-0.16, 0.38, 0.1]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks4_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group
              position={[-1622.32, 6.98, -513]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks5_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group
              position={[-1575.13, 22.81, -474.65]}
              rotation={[2.77, 0.39, -2.89]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks6_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group
              position={[-1580.86, -30.65, -550.33]}
              rotation={[2.1, -1.34, -0.48]}
              scale={100}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks7_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group
              position={[-1144.87, -61.35, -402.45]}
              rotation={[0.4, -0.46, -0.21]}
              scale={136.69}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_LargeRocks8_m_Rocks_0.geometry}
                material={materials.m_Rocks}
              />
            </group>
            <group position={[-205.02, -35.04, 79.86]}>
              <group
                position={[-1185.25, 85.45, 1176.78]}
                rotation={[-0.17, -0.53, 1.03]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock1_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1135.99, 87.29, 1136.4]}
                rotation={[-3.09, -0.54, -1.88]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock2_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1100.95, 82.37, 1094.88]}
                rotation={[1.52, -0.09, -2.68]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock3_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1095.38, 80.04, 1025.78]}
                rotation={[2.09, 0.02, 1.74]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock4_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1104.02, 80.17, 967]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock5_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1101.61, 80.79, 920.14]}
                rotation={[-0.25, 0.11, 2.53]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock6_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1096.57, 80.43, 874.49]}
                rotation={[-0.3, -0.79, 0.94]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock7_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1090.01, 77.8, 816.15]}
                rotation={[2.18, 0.4, 2.87]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock8_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1089.11, 75.61, 777.37]}
                rotation={[-0.4, -1.08, 0.64]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock9_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1089.03, 73.64, 718.46]}
                rotation={[1.99, -1.24, -2.93]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock10_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1095.33, 74.33, 668.15]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock11_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1092.35, 68.52, 617.49]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock12_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1104.06, 63.86, 557.1]}
                rotation={[-0.24, 0.64, -0.09]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock13_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1132.4, 67.37, 516.98]}
                rotation={[-0.23, -0.17, 0.33]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock14_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1167.09, 73.84, 496.01]}
                rotation={[1.53, -0.31, 1.35]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock15_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1485.1, 90.87, 496.2]}
                rotation={[2.34, -0.32, 2.56]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock16_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1440.98, 88.74, 497.62]}
                rotation={[-0.17, -0.73, 0.48]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock17_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1414.43, 87.64, 526.56]}
                rotation={[-0.46, -0.99, 0.56]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock18_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1370, 87.15, 578.64]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock19_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-430.84, -38.86, -69.27]}
                rotation={[0.51, 0.45, -2.65]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock20_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-448.98, -35.94, -51.66]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock21_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-594.16, -4.81, -260.54]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock22_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-612.42, 23.21, -221.39]}
                rotation={[1.39, 0.55, 2.71]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock23_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-977.72, -41.58, -530.02]}
                rotation={[-0.61, -0.63, 0.5]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock24_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-941.51, -67.64, -537.24]}
                rotation={[-1.09, -0.04, 1.11]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock25_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1826.33, 148.09, -393.19]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock26_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-871.85, -58.4, -491.88]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock27_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-887.71, -6.97, -345.21]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock28_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-917.61, -65.38, -523.32]}
                rotation={[-2.71, -0.31, -1]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock29_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1764.29, 83.55, -521.61]}
                rotation={[0.18, 0.02, 0.61]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock30_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-540.92, -112.15, 1161.8]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock31_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1664.23, 122.8, 1352.9]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock32_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-570.85, -119.99, 1160.9]}
                rotation={[-0.24, 0.25, 0.5]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock33_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1366.97, 56.36, -609.08]}
                rotation={[-2.03, -0.26, -0.22]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock34_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1585.2, 118.35, 1458.86]}
                rotation={[-2.73, -0.48, -1.38]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock35_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1906.15, 154.11, 1229.82]}
                rotation={[3.06, 0.42, 2.73]}
                scale={64.28}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock36_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1924.06, 158.11, 1249.65]}
                rotation={[3.02, 0.47, 0.66]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock37_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-315.65, -79.73, 849.66]}
                rotation={[-2.09, -1.12, 2.95]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock38_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1453.44, 77.11, 1590.06]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock39_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1458.77, 47.87, -631.86]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock40_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1945.68, 163.22, 1261.67]}
                rotation={[-2.95, 0.22, 0.22]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock41_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2468.93, 326.15, 514.42]}
                rotation={[1.42, -1.12, 1.11]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock42_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1476.41, 74.9, -568.36]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock43_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1325.93, 26.57, -588.17]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock44_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2281.44, 236.09, 877.61]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock45_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-326.54, -88.57, 884.13]}
                rotation={[3.06, -0.9, -0.06]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock46_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2411.75, 319.49, 501.44]}
                rotation={[-2.52, -0.64, -1.12]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock47_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2503.74, 351.99, 247.78]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock48_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2337.66, 317.32, -7.68]}
                rotation={[-2.87, -1.24, 0.17]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock49_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2331.79, 318.31, 6.59]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock50_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-308.12, -56.22, 438.01]}
                rotation={[-0.24, 0.64, 0.24]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock51_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-289.78, -44.1, 429.23]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock52_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-307.74, -62.69, 520.04]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock53_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1786.7, 179.34, 748.45]}
                rotation={[1.78, -0.55, -2.45]}
                scale={72.2}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock54_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1794.31, 176.82, 776.88]}
                rotation={[-0.35, -1.43, 0.29]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock55_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-881.48, 1.63, -234.67]}
                rotation={[0.03, -0.75, 0.45]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock56_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-969.38, 43.29, 148.67]}
                rotation={[-0.46, -0.99, 0.56]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock57_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-963.68, 41.56, 178.8]}
                rotation={[0.92, 1.25, 0.59]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock58_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1315.15, 87.51, 243.34]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock59_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1339.93, 89.21, 251.99]}
                rotation={[-0.24, 0.64, -0.09]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock60_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1159.27, 62.35, 64.38]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock61_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1128.53, 57.46, 70.83]}
                rotation={[-0.23, -0.17, 0.33]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock62_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-990.56, 17.15, -66.2]}
                rotation={[0.49, 1.11, 1.81]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock63_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1615.5, 97.73, 193.28]}
                rotation={[2.34, -0.32, 2.56]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock64_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1588.12, 95.27, 187.76]}
                rotation={[-2.77, -0.83, -1.63]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock65_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1612.69, 97.37, 160.36]}
                rotation={[-0.46, -0.99, 0.56]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock66_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1500.17, 87.32, 165.23]}
                rotation={[-0.17, -0.73, 0.48]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock67_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1475.01, 85.23, 163.46]}
                rotation={[2.34, -0.32, 2.56]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock68_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1775.88, 140.98, 198.53]}
                rotation={[-0.71, 0.53, 0.31]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock69_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1803.81, 150.07, 214.77]}
                rotation={[-1.42, -1.21, -0.4]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock70_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1814.01, 152.38, 182.67]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock71_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2100.8, 179.87, 590.2]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock72_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2119.76, 187.37, 567.74]}
                rotation={[-0.24, 0.64, -0.09]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock73_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2103.15, 172.21, 557.9]}
                rotation={[-0.13, 0.48, 2.5]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock74_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2244.67, 210.84, -2.6]}
                rotation={[1.52, -0.09, -2.68]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock75_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2241.63, 208.64, 25.69]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock76_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2215.4, 202.17, 225.5]}
                rotation={[-0.3, -0.79, 0.94]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock77_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2240.67, 208.99, 63.9]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock78_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2208.82, 201.5, 250.01]}
                rotation={[-0.46, -0.99, 0.56]}
                scale={74.48}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock79_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-2255.45, 231.2, 32.12]}
                rotation={[2.34, -0.32, 2.56]}
                scale={100}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_SmallRock80_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
            </group>
            <group position={[384.27, 65.67, -149.68]}>
              <group
                position={[-1510.71, -321.1, 1647.55]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock1_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1494.2, -311.17, 1580.35]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock2_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1454.86, -325.47, 1502.61]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock3_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1432.91, -299.5, 1432.67]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock4_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1397.69, -288.64, 1374.6]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock5_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1363.42, -314.14, 1327.57]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock6_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1337.25, -287.39, 1280.34]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock7_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1308.72, -270.56, 1228.99]}
                rotation={[-1.37, -0.01, -0.22]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock8_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1274.43, -266.08, 1149.45]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock9_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1264.68, -261.02, 1077.88]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock10_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1246.6, -285.43, 971.35]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock11_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1233.76, -278.86, 889.15]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock12_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1237.38, -268.58, 821.47]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock13_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1242.03, -276.67, 678.22]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock14_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1246.26, -251.73, 604.14]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock15_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1332.56, -329.9, 1496.08]}
                rotation={[-3.1, 0, -2.47]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock16_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1231.42, -260.91, 539.28]}
                rotation={[-1.81, -0.93, -2.1]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock17_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1241.81, -226.98, 427.63]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock18_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1255.32, -231.46, 360.73]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock19_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1280, -235.37, 267.98]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock20_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1313.03, -231.09, 179.17]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock21_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1363.82, -229.77, 119.49]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock22_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1393.76, -206.89, 43.3]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock23_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1391.71, -195.39, -20.57]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock24_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1375.01, -213.4, -73.12]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock25_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1366.37, -175.12, -144.2]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock26_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1356.24, -195.85, -210.42]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock27_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1252.02, -212.35, -116.48]}
                rotation={[-1, -0.27, 0.76]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock28_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1265.57, -213.9, -22.76]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock29_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1259.18, -204.85, 56.78]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock30_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1226.9, -224.78, 133.72]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock31_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1212.98, -268.85, 211.24]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock32_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1153.3, -249.24, 264.87]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock33_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1126.65, -255.54, 341.79]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock34_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1127.19, -264.34, 422.66]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock35_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1131.62, -273.88, 499.08]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock36_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1121.27, -274.87, 567.3]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock37_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1105.26, -265.2, 644.34]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock38_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1103.03, -284.11, 738.02]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock39_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1102.99, -291.73, 807.88]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock40_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1101.33, -292.66, 888.78]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock41_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1105.67, -306.21, 949.19]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock42_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1116.8, -285.46, 1006.47]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock43_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1131.82, -291.16, 1063.22]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock44_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1152.24, -290.62, 1130.02]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock45_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1175.59, -291.94, 1188.28]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock46_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1194.36, -286.57, 1256.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock47_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1220.14, -282, 1326.84]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock48_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1253.81, -289.1, 1375.56]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock49_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1297.09, -297.62, 1458.4]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock50_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1365.27, -309.98, 1612.27]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock51_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1406.11, -363, 1655.05]}
                rotation={[-1.37, -0.01, -0.22]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock52_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
              <group
                position={[-1247.21, -256.28, 745.5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={34.45}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.geo_CreekRock53_m_Rocks_0.geometry}
                  material={materials.m_Rocks}
                />
              </group>
            </group>
            <group position={[194.29, -42.58, 1461.68]} scale={0.2}>
              <group
                position={[-10600.74, 581.25, -4346.67]}
                rotation={[-Math.PI / 2, 0.3, -1.56]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock1_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-10447.69, 527.96, -4613.66]}
                rotation={[-1.66, 0.25, 1.1]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock2_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-10081.58, 436.69, -4763.46]}
                rotation={[-1.59, -0.02, 0.01]}
                scale={420.03}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock3_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-9676.45, 415.21, -4839.3]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={405.28}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock4_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-9272.55, 404.17, -4767.84]}
                rotation={[-1.55, 0.09, 0.01]}
                scale={387.77}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock5_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-8917.69, 365.34, -4541.56]}
                rotation={[-1.58, -0.03, 0]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock6_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-8614.69, 371.67, -4315.88]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock7_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-8728.87, 318.12, -4909.58]}
                rotation={[-1.56, 0.05, -0.21]}
                scale={466.85}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock8_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-8288.7, 303.58, -5047.4]}
                rotation={[-1.51, 0.1, -1.46]}
                scale={308.65}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock9_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-7898.52, 211.39, -5055.7]}
                rotation={[-1.61, 0.32, 0.17]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock10_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-7517.79, 122.22, -4977.98]}
                rotation={[-1.64, 0.32, -0.18]}
                scale={300.98}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock11_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-7183.82, 37.05, -4807.84]}
                rotation={[-1.53, 0.19, 0.02]}
                scale={253.44}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock12_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-7012.18, -20.02, -4547.73]}
                rotation={[-1.56, 0.22, 0.42]}
                scale={322.9}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock13_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6875.1, -14.47, -4204.23]}
                rotation={[-1.63, 0.17, 1.43]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock14_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6845.51, 8.98, -3862.09]}
                rotation={[-1.65, 0.42, 0.23]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock15_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6831.81, 25.13, -3566.97]}
                rotation={[-1.59, 0.37, -0.08]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock16_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6846.27, 26.79, -3225.56]}
                rotation={[-1.58, 0.33, -0.03]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock17_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6817.68, 27.13, -2839.49]}
                rotation={[-1.56, 0.18, -0.11]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock18_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6882.93, 22.68, -2438.81]}
                rotation={[-1.47, 0.28, -0.22]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock19_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6930.78, 72.61, -2019.58]}
                rotation={[-1.72, 0.29, 0.03]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock20_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-6947.62, 106.15, -1680.85]}
                rotation={[-1.6, 0.18, -0.05]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock21_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-7021.87, 137.62, -1355.82]}
                rotation={[-1.49, 0.26, 1.41]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock22_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-7076.9, 149.14, -1031.91]}
                rotation={[-Math.PI / 2, 0.19, 0]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock23_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-7250.55, 131.88, -780.07]}
                rotation={[-1.49, 0.22, 0.26]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock24_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-9575.3, 573.99, -1074.25]}
                rotation={[-1.81, -0.12, 0.73]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock25_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-9870.28, 589.09, -971.87]}
                rotation={[-1.81, -0.13, -0.03]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock26_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
              <group
                position={[-10185.68, 544.52, -909.53]}
                rotation={[-1.66, -0.09, 0.05]}
                scale={333.79}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_PathRock27_m_GroundSteppingStones_0.geometry
                  }
                  material={materials.m_GroundSteppingStones}
                />
              </group>
            </group>
          </group>
          <group
            position={[392.59, 40.59, 0]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water1_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 43.66, 0.27]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water2_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 47.86, 0.65]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water3_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 53.42, 1.14]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water4_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 57.57, 1.51]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water5_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 63.09, 2]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water6_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 67.21, 2.37]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water7_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 71.29, 2.73]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water8_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 76.17, 3.16]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water9_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[392.59, 81, 3.59]}
            rotation={[0.09, 0, 0]}
            scale={39.1}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Water10_m_Water_0.geometry}
              material={materials.m_Water}
            />
          </group>
          <group
            position={[901.4, 274.72, -229.7]}
            rotation={[-2.55, -0.35, 3.13]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flying5_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[1080.02, 213.92, -101.37]}
            rotation={[-Math.PI, -1.44, -Math.PI]}
            scale={0.82}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flat1_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[1043.45, 327.24, -258.36]}
            rotation={[-0.07, -1.05, 0.24]}
            scale={0.69}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flying4_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[985.71, 412.84, -337.5]}
            rotation={[-0.07, -1.05, 0.24]}
            scale={0.96}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flying3_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[867.08, 331.62, -348.55]}
            rotation={[2.24, -0.68, 2.14]}
            scale={1.27}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flying2_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[993.81, 250.38, -403.41]}
            rotation={[1.6, -1.06, 1.4]}
            scale={1.14}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flying1_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group position={[916.01, 310.81, -496.21]} scale={1.43}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flying_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[825.22, 280.69, -597.53]}
            rotation={[-Math.PI, -1.44, -Math.PI]}
            scale={1.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flat_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[369.33, 316.7, 886.73]}
            rotation={[-Math.PI, -1.44, -Math.PI]}
            scale={0.82}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flat2_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[-247.26, 350.42, -1102.84]}
            rotation={[-Math.PI, -1.44, -Math.PI]}
            scale={0.82}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flat3_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[-1115.37, 606.8, -39.83]}
            rotation={[-Math.PI, -1.44, -Math.PI]}
            scale={0.82}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flat4_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group
            position={[-523.09, 493.5, 272.25]}
            rotation={[-Math.PI, -1.44, -Math.PI]}
            scale={0.82}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes
                  .geo_EasternTigerSwallowtail_Flat5_m_EasternTigerSwallowtail_0
                  .geometry
              }
              material={materials.m_EasternTigerSwallowtail}
            />
          </group>
          <group position={[987.14, 91.27, 207.66]} rotation={[0, -0.99, 0]}>
            <group position={[273.93, 310.81, 881.71]} scale={1.43}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying6_m_EasternTigerSwallowtail_0
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[343.63, 412.84, 1040.43]}
              rotation={[-0.07, -1.05, 0.24]}
              scale={0.96}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying7_m_EasternTigerSwallowtail_0
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[351.73, 250.38, 974.51]}
              rotation={[1.6, -1.06, 1.4]}
              scale={1.14}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying9_m_EasternTigerSwallowtail_0
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[225, 331.62, 1029.37]}
              rotation={[2.24, -0.68, 2.14]}
              scale={1.27}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying10_m_EasternTigerSwallowtail_0
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[259.32, 274.72, 1148.23]}
              rotation={[-2.55, -0.35, 3.13]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying11_m_EasternTigerSwallowtail_0
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
          </group>
          <group position={[449.92, 87.61, -1872.87]} rotation={[0, -0.99, 0]}>
            <group position={[273.93, 310.81, 881.71]} scale={1.43}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying6_m_EasternTigerSwallowtail_0_1
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[343.63, 412.84, 1040.43]}
              rotation={[-0.07, -1.05, 0.24]}
              scale={0.96}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying7_m_EasternTigerSwallowtail_0_1
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[351.73, 250.38, 974.51]}
              rotation={[1.6, -1.06, 1.4]}
              scale={1.14}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying9_m_EasternTigerSwallowtail_0_1
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[225, 331.62, 1029.37]}
              rotation={[2.24, -0.68, 2.14]}
              scale={1.27}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying10_m_EasternTigerSwallowtail_0_1
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[259.32, 274.72, 1148.23]}
              rotation={[-2.55, -0.35, 3.13]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying11_m_EasternTigerSwallowtail_0_1
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
          </group>
          <group position={[-1694.28, 350.74, -707.46]} rotation={[0, 0.33, 0]}>
            <group position={[273.93, 310.81, 881.71]} scale={1.43}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying6_m_EasternTigerSwallowtail_0_2
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[351.73, 250.38, 974.51]}
              rotation={[1.6, -1.06, 1.4]}
              scale={1.14}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying9_m_EasternTigerSwallowtail_0_2
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[225, 331.62, 1029.37]}
              rotation={[2.24, -0.68, 2.14]}
              scale={1.27}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying10_m_EasternTigerSwallowtail_0_2
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[259.32, 274.72, 1148.23]}
              rotation={[-2.55, -0.35, 3.13]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying11_m_EasternTigerSwallowtail_0_2
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
          </group>
          <group position={[-1133.5, 235.07, -628]} rotation={[0, 0.33, 0]}>
            <group position={[273.93, 310.81, 881.71]} scale={1.43}>
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying6_m_EasternTigerSwallowtail_0_3
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[351.73, 250.38, 974.51]}
              rotation={[1.6, -1.06, 1.4]}
              scale={1.14}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying9_m_EasternTigerSwallowtail_0_3
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[225, 331.62, 1029.37]}
              rotation={[2.24, -0.68, 2.14]}
              scale={1.27}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying10_m_EasternTigerSwallowtail_0_3
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
            <group
              position={[259.32, 274.72, 1148.23]}
              rotation={[-2.55, -0.35, 3.13]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes
                    .geo_EasternTigerSwallowtail_Flying11_m_EasternTigerSwallowtail_0_3
                    .geometry
                }
                material={materials.m_EasternTigerSwallowtail}
              />
            </group>
          </group>
          <group position={[5466.83, 0, 0]}>
            <group position={[-4758.15, 117.78, -829.95]} scale={1.36}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4712.52, 73.72, 177.82]}
              rotation={[-Math.PI, -0.42, -Math.PI]}
              scale={0.96}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog1_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4694.16, 94.67, -114.98]}
              rotation={[-Math.PI, -0.42, -Math.PI]}
              scale={0.43}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog2_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4831.71, 111.29, 35.34]}
              rotation={[0.22, 0.86, 0.02]}
              scale={0.96}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog3_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4965.73, 84.31, 537.29]}
              rotation={[0.22, 0.86, 0.02]}
              scale={0.53}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog4_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5078.01, 76.83, 685.03]}
              rotation={[0.06, 0.8, 0.3]}
              scale={1.21}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog5_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4923.36, 59.07, 994.65]}
              rotation={[2.72, -0.55, 2.79]}
              scale={0.65}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog6_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5742.67, 291.62, -1181.17]}
              rotation={[-2.44, 1.21, 2.69]}
              scale={0.64}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog7_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5497.29, 282.05, -1342.61]}
              rotation={[-0.12, 0.65, 0.12]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Frog8_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
          </group>
          <group position={[5466.83, 0, 0]}>
            <group
              position={[-5158.9, -113.44, -557.7]}
              rotation={[1.44, 1.31, -1.39]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird1_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5602.02, -287.15, -22.63]}
              rotation={[-Math.PI, 0.89, -Math.PI]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird2_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-6367.3, 300.67, 338.66]}
              rotation={[-Math.PI, 0.89, -Math.PI]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird3_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5826.02, 300.68, -169.31]}
              rotation={[0, 1.52, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird4_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4386.94, 299.34, 964.59]}
              rotation={[0, -0.54, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird5_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-6835.32, -49.46, 163.13]}
              rotation={[-Math.PI, 0.54, -Math.PI]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird6_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-6705.93, 150.44, -136.67]}
              rotation={[-Math.PI, 1.27, -Math.PI]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird7_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-6028.66, 302.46, -504.86]}
              rotation={[0, 0.98, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird8_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5744.57, 294.18, -431.67]}
              rotation={[0.22, 0.58, -0.23]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird9_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5942.81, 288.73, -1316.7]}
              rotation={[0.22, 0.58, -0.23]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird10_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5381.61, 260.81, -590.98]}
              rotation={[0.18, -0.22, -0.07]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird11_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-7161.38, 170.39, -815.05]}
              rotation={[2.95, 0.32, 3.09]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird12_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-5381.94, 586.35, 351.29]}
              rotation={[0.54, -1.46, 0.5]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird13_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4987.17, 586.35, -18.03]}
              rotation={[0.11, -1, 0.05]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird14_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4587.24, 578.49, -148.63]}
              rotation={[0.11, -1, 0.05]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird15_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4208.68, 585.27, -1025.35]}
              rotation={[0.06, -0.22, -0.03]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Bird16_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
          </group>
          <group position={[5466.83, 0, 0]}>
            <group
              position={[-4914.56, 129.75, -720.32]}
              rotation={[0, 1.34, 0]}
              scale={0.82}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish1_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4823.84, 124.99, -607.27]}
              rotation={[0, 1.47, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish2_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4604.94, 85.47, -481.31]}
              rotation={[0, 0.85, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish3_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4600.91, 100.75, 242.25]}
              rotation={[0, 1.56, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish4_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4600.38, 94.57, 449.53]}
              rotation={[0, 1.47, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish5_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4846.86, 138.26, -27.55]}
              rotation={[0, 1.45, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish6_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4667.7, 62.71, 220.95]}
              rotation={[0, 1.47, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish7_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4735.49, 67.47, 114.84]}
              rotation={[-Math.PI, 1.52, -Math.PI]}
              scale={0.82}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish8_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4668.76, 75.99, 794.63]}
              rotation={[0, 1.45, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish9_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4785.17, 41.75, 1262.26]}
              rotation={[0, 1.36, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish10_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4617.09, 59.82, 434.62]}
              rotation={[0, 0.39, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish11_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4610.66, 56.1, 1028.74]}
              rotation={[0, 1.56, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish12_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4923.61, 8.91, 1617.16]}
              rotation={[0, 1.45, 0]}
              scale={1.36}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish13_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
            <group
              position={[-4992.43, 0.39, 920.6]}
              rotation={[-Math.PI, 1.52, -Math.PI]}
              scale={0.82}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Fish14_m_Animals_0.geometry}
                material={materials.m_Animals}
              />
            </group>
          </group>
          <group position={[68.63, 5.26, 240.7]} rotation={[0.11, 0.24, -0.09]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface250_m_Deer_0.geometry}
              material={materials.m_Deer}
            />
          </group>
          <group
            position={[347.55, 55.51, -28.21]}
            rotation={[0.03, 0.01, -0.03]}
            scale={0.65}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface416_m_Deer_0.geometry}
              material={materials.m_Deer}
            />
          </group>
          <group position={[-2290.58, 262.43, 1074.35]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern19_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2091.71, 287.13, 973.17]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern18_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2071.84, 1076.99, 1712.05]}
            rotation={[0.13, 0.16, -0.37]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed22_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2221.65, 223.94, 1378.59]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant39_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2212.76, 298.52, 1233.09]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant37_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2508.88, 851.24, 1431.06]}
            rotation={[0.57, -0.01, -0.26]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern17_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[230.06, 304.35, 723.86]}
            rotation={[2.06, 0.48, -1.32]}
            scale={14.92}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant13_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2794.97, 283.52, 1307.22]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant21_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1802.73, 244.73, 1117.99]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant40_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2242.71, 263.57, 1153.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed21_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[29.4, 421.97, 733.7]}
            rotation={[2.55, 0.3, -1.83]}
            scale={14.92}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant14_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[367.68, 374.64, 853.94]}
            rotation={[1.7, 0.91, -0.75]}
            scale={14.92}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant2_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2800.09, 298.26, 1196.31]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant22_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2187.58, 236.2, 1335.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant38_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2626.88, 737.63, 1078.73]}
            rotation={[0.79, -0.14, -0.13]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern44_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1921.18, 839.16, 1579.71]}
            rotation={[0.58, 0.03, -0.37]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern45_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2311.52, 364.87, 959.81]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant71_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2228.41, 1002.81, 1856.32]}
            rotation={[0.13, 0.16, -0.37]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed34_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2120.28, 1058.28, 1963.88]}
            rotation={[0.44, 0.07, -0.47]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed35_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2111.19, 294.72, 1134.92]}
            rotation={[0.34, -0.09, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant72_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2666.44, 1226.96, 1963.12]}
            rotation={[0.26, 0.15, -0.4]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant73_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2519.99, 423.52, 977.16]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant74_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3375.75, 1376.82, 1688.93]}
            rotation={[0.26, 0.15, -0.4]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant82_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3112.8, 1324.66, 1874.94]}
            rotation={[0.26, 0.15, -0.4]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant83_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3317.54, 1366.53, 1650.3]}
            rotation={[0.26, 0.15, -0.4]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant84_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3107.62, 582.88, 665.05]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant85_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3063.86, 571.41, 676.23]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant86_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2751.63, 526.92, 755.29]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant87_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2830.63, 541.13, 723.07]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant88_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3234.58, 600.38, 688.53]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant89_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2963.14, 572.04, 840.56]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant90_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2881.58, 551.93, 871.54]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant91_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3305.72, 928.35, 908.16]}
            rotation={[-0.01, 0, -0.2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern52_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2972.91, 92.07, 455.52]}
            rotation={[0.46, -0.16, 0.17]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern53_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2919.92, 537.59, 881.64]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant95_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3024.36, 1289.36, 1920.64]}
            rotation={[0.26, 0.15, -0.4]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant96_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3263.81, 604.72, 662.51]}
            rotation={[0.49, -0.22, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant98_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2270.27, 966.28, 1599.65]}
            rotation={[0.58, 0.03, -0.37]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern54_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2146.77, 386.72, 1048.33]}
            rotation={[0.34, -0.09, -0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant102_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2290.36, 309.5, 1277.44]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant104_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-954.79, 917.75, -1496.9]}
            rotation={[-0.14, -1.17, -0.35]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern55_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2094.68, 43.75, -3062.57]}
            rotation={[-0.64, -1.14, -0.42]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern58_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2081.77, 117.14, 806.22]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern16_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1465.15, 115.24, 624.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern15_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1658.39, 105.96, 864.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed9_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1772.43, 115.72, 1038.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed10_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2056.02, 117.67, 724.84]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern14_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2129.74, 120.31, 978.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant18_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1980.29, 115.92, 735.73]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern34_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2285.12, 106.03, 1077.66]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant50_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1485, 141.55, 446.71]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed27_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1485.62, 158.04, 409.17]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed28_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2773.86, 313.48, 1239.21]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant103_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3100.76, 340.55, -807.66]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed51_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2868.54, 313.11, -803.52]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed55_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2104.06, 1155.94, 585.03]}
            rotation={[0.06, 0.08, -0.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern81_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2415.28, 170.48, 579.64]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant177_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1775.74, 160.09, 255.35]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern82_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2163.77, 782.11, 567.95]}
            rotation={[0.01, 0.08, -0.23]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern83_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1998.56, 161.51, 415.83]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed72_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1930.15, 109.95, 515.28]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern85_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1605.63, 184.7, 400.81]} scale={0.91}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern33_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1819.38, 175.17, 492.46]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern32_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1920.04, 143.99, 799.52]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant48_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1031.18, 157.1, 569.01]} scale={0.74}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant47_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1632.93, -415.27, 767.33]}
            rotation={[-0.17, -0.08, 0.21]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern35_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1079.75, 147.6, 264.46]} scale={0.91}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern36_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1375.4, 148, -83.55]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern40_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1991.39, 505.12, 1003.87]}
            rotation={[0.04, -0.01, -0.14]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern47_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1585.21, 1096.55, 1040.31]}
            rotation={[0.21, -0.02, -0.43]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern48_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2413.16, 303.6, -1068.99]} scale={0.91}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern62_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2573.6, 273.42, -1116.36]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern66_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1832.12, 199.56, -918.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern69_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1968.95, 878.48, 516.35]}
            rotation={[-0.14, 0.12, -0.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern78_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2849.69, 306.46, -238.89]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant8_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2181.99, 301.33, -403.91]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern11_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2231.49, 272.77, -453.51]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern8_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2415.62, 293.72, 17.46]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed4_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2645.54, 255.86, -318.02]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant9_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2412.88, 292.16, -315.87]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern9_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1152.35, 303.36, -138.14]} scale={0.59}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant7_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2390.78, 293.68, -36.15]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed5_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2348.33, 279.91, -43.7]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed6_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2468.91, 275.47, -372.23]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern10_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2392.94, 297.87, -67.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed7_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2397.3, 276.5, -292.42]} scale={0.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant11_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2112.03, 314.4, -359.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern7_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1832.23, 249.37, -472.65]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern12_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2214.56, 268.93, -63.94]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed8_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2471.79, 287.38, -396.36]} scale={0.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant10_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2421.39, 307.19, 97.87]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant12_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1768.28, 142.83, 1.18]} scale={0.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant61_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1125.92, 1602.67, 12.25]}
            rotation={[0.12, -0.04, -0.59]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern39_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1565.63, 139.26, 164.13]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed29_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1549.62, 150.34, 195.31]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed30_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-337.65, 1775.52, 210.65]}
            rotation={[0.09, 0.54, -0.87]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern41_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1598.21, 192.52, -269.94]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant64_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1609.61, 196.54, -224.81]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant65_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1553.57, 155.31, -282.01]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant66_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1713.19, 192.59, -326.8]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed31_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1772.93, 193.78, -320.34]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed32_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1693.42, 189.65, -366.73]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed33_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1732.35, 260.85, -692.37]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern42_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1688.02, 317.22, -542.75]}
            rotation={[-0.88, 0.12, 0.04]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern43_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2391.37, -360.44, -517.96]}
            rotation={[-0.45, 0.12, 0.31]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern68_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2488.5, 216.56, -1117.42]} scale={0.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant141_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1983.76, 216.17, -769.46]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern70_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2145.13, 297.5, 673.73]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern73_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1030.44, 301.93, 727.15]} scale={0.59}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant153_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2232.2, 288.75, 985.71]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant154_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2295.69, 284.69, 864.53]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed58_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2358.53, 285.19, 916.23]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed59_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2902.36, 336.35, 43.89]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed63_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2377.59, 231.21, -801.73]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern77_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2174.49, 820.43, 561.36]}
            rotation={[-0.09, 0.15, -0.2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant162_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2178.9, 831.93, 601.6]}
            rotation={[-0.09, 0.15, -0.2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant163_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2391.01, 296.96, 225.79]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed64_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3032.27, 341.7, 50.65]} scale={0.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant164_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2078.41, 825.58, 879.88]}
            rotation={[-0.09, 0.15, -0.2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant165_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2044.45, 803.25, 909.55]}
            rotation={[-0.09, 0.15, -0.2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant166_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2311.95, 262.14, 476.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed65_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2289.47, 270.96, 437.74]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed66_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2263.5, 275.43, 440.68]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed67_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1238.46, 316.52, -283.17]} scale={0.59}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant169_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2708.25, 308.91, -292.2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern79_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1015.11, 282.04, -144.05]} scale={0.59}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant170_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2793.54, 299.71, -99.32]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant171_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2596.4, 266.54, -102.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant172_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1882.89, 265.64, -235.37]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern80_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2315.69, 297.8, 74.11]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant173_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2268.18, 290.89, 71.98]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant174_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2364.92, 286.86, 2.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed68_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2365.05, 286.46, -14.12]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed69_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2059.04, -261.65, -176.44]}
            rotation={[0.15, -0.07, 0.19]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed70_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2126.69, -18.98, -279.63]}
            rotation={[0.28, -0.11, 0.11]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed71_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1134.02, 250.32, -179.04]} scale={0.65}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant175_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3315.1, 292.67, -880.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant16_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1644.88, 1131.38, -1280.75]}
            rotation={[-0.57, 0.03, -0.41]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern13_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1511.78, 216.75, -615.19]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern6_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2147.29, 250.59, -482.61]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant15_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1656.79, 245.6, -355.9]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant17_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1975.2, 1042.4, -704.76]} rotation={[0, 0, -0.29]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant19_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1390.25, 121.76, 296.6]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern38_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2166.03, -309.39, -1071.34]}
            rotation={[-0.31, -0.2, 0.14]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant67_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1430.94, 149.05, -258.97]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern46_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2764.65, 348.45, -967.88]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern67_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1433.93, 111.49, 369.37]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern84_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1571.25, 114.24, 566.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant43_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1357.81, 138.51, 183.75]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern30_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1463.24, 156.14, 432.31]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant44_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1597.99, 159.47, 330.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed24_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2045.11, 127.08, 299.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant46_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1882.13, 144.41, 465.27]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant45_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1597.77, 108.24, 542.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant42_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1531.85, 155.89, 385.73]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed25_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1539.32, 149.61, 441.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed23_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1225.42, 115.95, 352.63]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant41_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1815.56, 142.14, 73.32]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern31_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1363.57, 129.23, 973.65]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant51_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1344.12, 110.61, 834.88]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant52_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1557.21, 105.89, 932.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant53_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1669.73, 103.73, 934.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant54_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1773.45, 112.93, 1193.49]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant55_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1040.52, 150.55, 201.83]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant57_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1723.18, 154.13, 115.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern37_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1433.95, 176.87, 523.28]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant58_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1510.29, 174.56, 401.92]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed26_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1912.32, 165.61, 230.02]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant59_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2113.89, 110.96, 757.28]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant60_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3516.81, 359.67, -743.09]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant62_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1471.51, 153.89, 327.36]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant63_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-982.31, 1078.36, -262.19]}
            rotation={[0.05, 0.13, -0.47]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant68_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1032.85, 1065.56, -321.91]}
            rotation={[0.05, 0.13, -0.47]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant69_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1439.27, 165.67, 70]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant75_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1425.81, 153.79, 35.23]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant76_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1156.09, -211.63, 48.84]}
            rotation={[-0.08, 0.13, 0.2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant77_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2999.76, 320.28, -783.26]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed50_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2584.06, 292.82, -908.91]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant132_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2743.5, 234.36, -902.29]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant133_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2655.33, 250.71, -1074.51]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern63_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3255.88, 332.36, -847.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant134_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2845.19, 258.4, -872.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed52_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2533.73, 237.92, -1068.05]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern64_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2171.17, 207.85, -745.55]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant135_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2870.32, 339.3, -729.55]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed53_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2688.81, 328.21, -987.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern65_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2535.8, 314.81, -852.08]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant136_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3315.4, 278.91, -812.09]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant137_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2343.03, 213.91, -861.39]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed54_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3036.99, 357.17, -686.1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant138_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2822.34, 269.24, -763.51]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant139_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2856.26, 274.98, -754.41]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant140_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2800.82, 257.91, -781.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant142_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2818.15, 231.45, -834.82]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant143_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1951.4, 203.36, -523.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant144_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2475.94, 209.45, -704.33]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant145_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1982.24, 210.65, -521.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant146_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1617.78, 672.47, -871.37]}
            rotation={[-0.05, -0.09, -0.22]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant147_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1756.68, 25.47, 681.21]}
            rotation={[-0.07, 0.13, 0.13]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant167_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2902.02, 316.12, -131.7]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant168_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2409.59, 170.83, 376.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant176_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1898.29, 151.08, 517.89]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant178_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1971.66, 193.36, 537.54]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant179_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1600.37, 184.63, 422.53]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant180_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2897.62, 341.11, 1191.94]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed12_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2835.55, 338.17, 1113.55]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed15_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2953.57, 347.55, 1083.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed14_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2799.82, 345.82, 918.77]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern22_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2933.83, 351.74, 1253.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed13_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2820.45, 381.05, 916.17]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern20_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3517.07, 377.96, 1078.89]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant24_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2931.99, 340.81, 1265.7]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed11_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2954.92, 341.79, 985.7]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern21_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2519.99, 365.07, 1158.82]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant23_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2415.55, 346.07, 1016.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant79_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2721.03, 388.59, 958.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant80_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3649.39, 410.49, 1066.11]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant81_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3014.27, 403.7, 840.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern49_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3087.18, 366.58, 1235.83]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed36_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3044.11, 355.6, 1246.39]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed37_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2662.45, 388.99, 1046.96]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant93_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2358.93, 346.7, 1164.16]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant94_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2994.62, 337.55, 1267.54]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed38_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2975.65, 421.18, 894.31]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant97_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3737.3, 417.82, 1060.93]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant99_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3477.29, 489.99, 564.78]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant31_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3536.49, 549.14, 447.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant29_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3438.72, 470.9, 688.85]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant33_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3497.37, 536.67, -393.96]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern28_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3719.51, 564.9, 323.63]} scale={0.88}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant28_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3534.4, 541.76, 45.34]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern25_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3265.92, 1576.67, 764.75]}
            rotation={[-0.04, 0.13, -0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed20_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2745.35, 453.57, 400.78]} scale={0.74}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern29_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2460.59, 466.19, 582.52]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant36_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3354.16, 455.99, 775.43]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant32_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3448.83, 1370.11, 549.7]}
            rotation={[0.14, 0.05, -0.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed16_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3311.68, 1110.41, 262.37]}
            rotation={[0.05, 0.02, -0.25]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern26_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3060.02, 471.3, 400.04]} scale={0.7}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant34_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3781.27, 718.94, 549.59]}
            rotation={[0.08, 0.07, -0.09]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern23_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3416.68, 1332.86, 741.58]}
            rotation={[0.14, 0.05, -0.36]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed19_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3520.58, 539.68, 416.66]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant30_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3108.04, 501.09, 268.36]} scale={0.7}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant26_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3123.62, 460.11, 439.98]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern27_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-4043.21, 552.06, 324.86]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant27_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3890.71, 465.82, 683.67]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant35_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3664.64, 532.04, 340.09]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed17_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2595.24, 561.6, 234.28]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant25_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3730.63, 570.37, -163.79]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern24_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3300.02, 1617.01, 632.28]}
            rotation={[-0.04, 0.13, -0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed18_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2014.03, 380.61, -405.62]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant49_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2646.17, 417.05, 762.94]} scale={0.74}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern50_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2435.04, 140.06, 889.53]}
            rotation={[0.08, -0.01, 0.14]}
            scale={0.74}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern51_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2687.74, 393.1, 871.77]} scale={0.7}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant92_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3333.11, 989.14, 603.82]}
            rotation={[0.01, -0.09, -0.22]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant106_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3177.96, 1555.11, 993.79]}
            rotation={[-0.04, 0.13, -0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed39_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3153.14, 1552.05, 995.37]}
            rotation={[-0.04, 0.13, -0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed40_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3328.5, 539.27, 805.11]}
            rotation={[0.12, 0.01, -0.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed41_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3002.67, 1660.71, 1057.58]}
            rotation={[0.08, 0.09, -0.52]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed42_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3181.53, 419.3, 1014.26]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant107_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3263.03, 531.66, 955.43]}
            rotation={[0.12, 0.01, -0.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed43_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2835.91, 288.69, 125.5]}
            rotation={[0.14, -0.02, 0.08]}
            scale={0.7}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant108_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3252.41, 451.58, 503.52]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant109_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3030.42, 1539.58, 654.1]}
            rotation={[-0.04, 0.13, -0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed44_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3604.51, 572.49, -242.46]} rotation={[0, 0.01, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern56_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2608.64, 569.46, -92.4]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant110_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3744.31, 579.11, 72.66]} scale={0.88}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant111_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3766.1, 562.07, 131.77]} scale={0.88}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant112_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2564.14, 10.01, 74.62]}
            rotation={[-0.07, 0.07, 0.39]}
            scale={0.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant113_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3497.78, -261.26, 61.04]}
            rotation={[-0.1, 0.04, 0.34]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern57_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3632.57, 578.73, 111.73]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant114_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3658.64, 560.53, 123.21]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant115_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3650.17, 578.77, 82.54]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant116_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-4121.79, 201.87, -283.54]}
            rotation={[-0.08, -0.08, 0.12]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant117_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2432.63, -22.03, -189.26]}
            rotation={[-0.07, 0.07, 0.39]}
            scale={0.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant118_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3734.48, 1433.49, -1133.13]}
            rotation={[0.12, -0.34, -0.28]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant119_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3542.57, 509.46, -155.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant120_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3531.05, 502.31, -190.08]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant121_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2473.72, 676.15, -425.38]}
            rotation={[0.05, -0.05, -0.09]}
            scale={0.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant122_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3222.19, 517.99, 1030.2]}
            rotation={[0.12, 0.01, -0.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed45_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2972.51, 1006.63, 1837.14]}
            rotation={[-0.17, 0.39, -0.16]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed46_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2018.11, 381.09, -359.45]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant123_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2849.86, -353.12, -727.87]}
            rotation={[0.23, -0.05, 0.32]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern59_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2752, 995.96, 519.69]}
            rotation={[0.24, 0.28, -0.34]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed47_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3065.47, 260.06, -746.85]}
            rotation={[0.14, -0.02, 0.08]}
            scale={0.7}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant124_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3227.85, 1512.97, -176.57]}
            rotation={[-0.04, 0.13, -0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed48_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3447.49, 435.74, -317.99]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant125_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2676.39, 208.47, -1079.25]}
            rotation={[0.14, -0.02, 0.08]}
            scale={0.7}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant126_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3064.26, 378.54, -648.21]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant127_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2848.43, 1474.29, -528.2]}
            rotation={[-0.04, 0.13, -0.44]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed49_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3425.47, -5.84, -1017.67]}
            rotation={[-0.08, -0.08, 0.12]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant130_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1873.97, -175.93, -686.26]}
            rotation={[-0.07, 0.07, 0.39]}
            scale={0.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant131_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2962.28, 434.34, -1209.03]}
            rotation={[-0.25, -0.06, -0.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern60_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2986.34, 281.8, -1274.6]}
            rotation={[-0.11, -0.15, 0.03]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern61_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2989.44, 403.49, 210.41]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern71_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3097.57, 406.66, 454.98]} scale={0.88}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant149_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1990.53, 390.36, 291.38]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant150_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2931.93, 399.74, 525.93]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant151_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2924.94, 390.1, 493.94]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant152_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3004.38, 492.75, 427.74]}
            rotation={[0.12, 0.01, -0.06]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed56_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2659.42, 1634.18, 721.08]}
            rotation={[0.08, 0.09, -0.52]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed57_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2818.9, -327.4, -24.57]}
            rotation={[0.23, -0.05, 0.32]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern72_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2816.05, -354.99, -542.03]}
            rotation={[0.23, -0.05, 0.32]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern74_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-3046.31, 366.3, -36]} scale={0.88}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant155_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-1928.88, 365.52, -114.64]} scale={0.71}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant156_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2916.46, 371.14, 128.49]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant157_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2873.4, 357.01, 101.89]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant158_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2646.08, 1598.11, 324.02]}
            rotation={[0.08, 0.09, -0.52]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed60_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2824.51, 1002.6, 342.28]}
            rotation={[0.05, 0.02, -0.25]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern75_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2413.56, 925.41, -319.49]}
            rotation={[0.23, -0.07, -0.27]}
            scale={0.71}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant159_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-3194.11, 1779.84, 145.11]}
            rotation={[0.08, 0.09, -0.52]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed61_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2815.17, 334.85, -230.21]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Fern76_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2767.56, 323.69, 42.61]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant160_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2766.74, 320.56, 86.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant161_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2605, 1584.65, 323.43]}
            rotation={[0.08, 0.09, -0.52]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Weed62_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2780.72, 338.71, 342.02]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant181_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-2762.43, 336.95, 310.26]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant182_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[212.86, 338.83, 820.24]}
            rotation={[0, 0.27, 0]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves3_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[287.04, 296.28, 854.5]}
            rotation={[0, 0.27, 0]}
            scale={1.81}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves4_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[168.81, 338.83, 808.04]}
            rotation={[-Math.PI, 1.42, -Math.PI]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves5_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[146.5, 338.83, 781.1]}
            rotation={[-Math.PI, 1.42, -Math.PI]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves6_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[159.43, 338.83, 751.06]}
            rotation={[0, 1.15, 0]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves7_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[244.12, 318.37, 811.19]}
            rotation={[0, 0.27, 0]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves8_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[192.25, 318.37, 773.75]}
            rotation={[-Math.PI, 1.42, -Math.PI]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves9_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[190.69, 318.37, 742.01]}
            rotation={[0, 1.15, 0]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves10_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[270.34, 297.8, 798.96]}
            rotation={[0, 0.27, 0]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves11_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[226.29, 297.8, 786.75]}
            rotation={[-Math.PI, 1.42, -Math.PI]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves12_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[233.71, 297.8, 757.88]}
            rotation={[0, 1.15, 0]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves13_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[217.63, 591.5, 905.57]}
            rotation={[1.24, 1.11, -0.56]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves14_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[212.18, 590.67, 908.51]}
            rotation={[0.8, 0.28, -0.25]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves15_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[152.07, 586.62, 937.5]}
            rotation={[1.8, 1.25, -1.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves16_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[126.66, 576.28, 960.24]}
            rotation={[1.8, 1.25, -1.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves17_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[96.95, 577.97, 972.24]}
            rotation={[1.8, 1.25, -1.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves18_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-33.75, 591.5, 1014.76]}
            rotation={[1.24, 1.11, -0.56]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves19_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-39.2, 590.67, 1017.7]}
            rotation={[0.8, 0.28, -0.25]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves20_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-124.72, 576.28, 1069.43]}
            rotation={[1.8, 1.25, -1.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves21_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-99.31, 586.62, 1046.7]}
            rotation={[1.8, 1.25, -1.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves22_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-154.43, 577.97, 1081.44]}
            rotation={[1.8, 1.25, -1.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves23_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-2.46, 577.97, 1018.89]}
            rotation={[1.8, 1.25, -1.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves24_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-166.59, 43.95, 1439.33]}
            rotation={[3.08, 0, 3.11]}
          >
            <group
              position={[70.27, 590.67, 600.79]}
              rotation={[0.8, 0.28, -0.25]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves25_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[75.71, 591.5, 597.85]}
              rotation={[1.24, 1.11, -0.56]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves26_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-15.25, 576.28, 652.52]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves27_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[10.15, 586.62, 629.79]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves28_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-44.96, 577.97, 664.53]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves29_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-144.37, 577.97, 711.17]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves30_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-181.11, 590.67, 709.99]}
              rotation={[0.8, 0.28, -0.25]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves31_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-175.67, 591.5, 707.05]}
              rotation={[1.24, 1.11, -0.56]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves32_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-241.23, 586.62, 738.98]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves33_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-296.34, 577.97, 773.72]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves34_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-266.63, 576.28, 761.72]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves35_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
          </group>
          <group
            position={[-121.53, 361.26, 702.64]}
            rotation={[-2.21, 0.94, 2.59]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves36_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-178.88, 357.78, 725.65]}
            rotation={[-2.95, 1.19, -3.04]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves37_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-241.24, 359.39, 651.13]}
            rotation={[-3.13, 1.13, -3.12]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves38_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-283.07, 357.33, 649.16]}
            rotation={[2.91, 1.08, -3.08]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves39_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-266.43, 364.29, 677.98]}
            rotation={[3.11, 1.25, -2.99]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves40_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-149.05, 397.59, 105.31]}
            rotation={[3.02, 1.15, -3]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves41_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-141.39, 397.24, 94.64]}
            rotation={[0.03, 0.37, -0.06]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves42_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-92.19, 394.57, 79.75]}
            rotation={[0.03, 0.37, -0.06]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves43_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-191.24, 368.46, 75.66]}
            rotation={[2.93, 1.31, -2.92]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves44_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[328.25, 276.82, 570.33]}
            rotation={[0.47, 1.08, -0.59]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves45_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[324.51, 272.64, 535.6]}
            rotation={[0.14, 1.08, -0.15]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves46_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[293.7, 273.93, 559.22]}
            rotation={[-0.23, 1.08, 0.18]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves47_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[384.04, 243.35, 287.88]}
            rotation={[0.47, 1.08, -0.59]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves48_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[399.86, 248.76, 259.14]}
            rotation={[0.9, 1.03, -0.8]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves49_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[369.89, 258.89, 280.12]}
            rotation={[-0.23, 1.08, 0.18]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves50_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[367.35, 258.28, 193.11]}
            rotation={[0.9, 1.03, -0.8]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves51_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[337.38, 254.81, 214.09]}
            rotation={[-0.23, 1.08, 0.18]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves52_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[351.53, 252.87, 221.85]}
            rotation={[0.47, 1.08, -0.59]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves53_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[361.96, 264.12, 330.34]}
            rotation={[0.9, 1.03, -0.8]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves54_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[331.99, 260.65, 351.32]}
            rotation={[-0.23, 1.08, 0.18]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves55_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[346.14, 258.71, 359.08]}
            rotation={[0.47, 1.08, -0.59]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves56_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-9.74, 321.32, -151.2]}
            rotation={[0.94, 1.24, -1.02]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves57_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-47.15, 313.97, -141.23]}
            rotation={[-0.23, 1.08, 0.18]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves58_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-17.87, 320.21, -127]}
            rotation={[0.2, 1, -0.2]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves59_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-310.25, 333.68, -118.78]}
            rotation={[-0.23, 1.08, 0.18]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves60_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-269.24, 338.23, -132.29]}
            rotation={[0.5, 1.15, -0.44]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves61_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-283.81, 343.47, -102.61]}
            rotation={[0.47, 1.08, -0.59]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves62_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-357.68, 348.99, -96.26]}
            rotation={[0.5, 0.91, -0.65]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves63_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-319.83, 341.06, -108.39]}
            rotation={[0.24, 1.19, -0.2]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves64_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-335.78, 338.16, -77.4]}
            rotation={[0.07, 1.21, -0.13]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves65_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[976.7, 151.77, 355.29]}
            rotation={[0.21, 1.09, 0.11]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves66_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[996.68, 161.64, 349.69]}
            rotation={[1.14, 1, -0.92]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves67_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[227.49, 312.48, 375.23]}
            rotation={[1.09, 0.84, -1.35]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves68_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-110.56, 320.21, -30.09]}
            rotation={[0.2, 1, -0.2]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves69_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-153.95, 315.98, -37.57]}
            rotation={[-0.06, 1.49, -0.08]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves70_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[892.4, 116.26, 529.95]}
            rotation={[0.66, 1.15, -0.54]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves71_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[897.59, 117.12, 500.76]}
            rotation={[0.83, 1.09, -0.81]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves72_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[1014.62, 195.67, -119.01]}
            rotation={[0.92, 1.22, -1.33]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves73_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[983.43, 177.33, -106.17]}
            rotation={[-2.51, 1.21, 2.03]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves74_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[870.21, 204.82, -572.48]}
            rotation={[2.28, 0.99, -2.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves75_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[852.51, 198.9, -556.81]}
            rotation={[2.5, 1.31, -2.26]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves76_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[427.51, 488.97, -174.49]}
            rotation={[-0.08, 1.07, 0.1]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves77_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[425.48, 488.97, -215]}
            rotation={[-0.08, 1.07, 0.1]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves78_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[419.95, 506.63, -367.92]}
            rotation={[0.19, 1.08, -0.02]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves79_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[421.36, 500.52, -327.59]}
            rotation={[0.09, 1.08, 0.05]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves80_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[304.42, 301.19, -561.1]}
            rotation={[-0.23, 1.08, 0.18]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves81_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[314.93, 191.06, -1064.63]}
            rotation={[-1.62, 1.07, 0.94]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves82_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[314.93, 220.14, -1036.87]}
            rotation={[-1.62, 1.07, 0.94]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves83_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[336.39, 220.14, -1054.64]}
            rotation={[-1.62, 1.07, 0.94]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves84_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[340.5, 193.31, -1066.29]}
            rotation={[2.92, 1.17, 2.14]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves85_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[260.52, 415.42, -553.09]}
            rotation={[0.06, 1.06, -0.06]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves87_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[231.44, 415.42, -541.3]}
            rotation={[0.06, 1.06, -0.06]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves88_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[233.92, 414.94, -714.63]}
            rotation={[3.11, 0.81, -3.1]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves89_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[239.54, 414.94, -677.35]}
            rotation={[3.11, 0.81, -3.1]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves90_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-359.07, 1362.62, 337.24]}
            rotation={[1.67, 0.27, 2.89]}
          >
            <group
              position={[70.27, 590.67, 600.79]}
              rotation={[0.8, 0.28, -0.25]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves25_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[75.71, 591.5, 597.85]}
              rotation={[1.24, 1.11, -0.56]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves26_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-15.25, 576.28, 652.52]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves27_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[10.15, 586.62, 629.79]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves28_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-44.96, 577.97, 664.53]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves29_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-81.45, 598.56, 657.15]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves91_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-111.71, 586.27, 672.91]}
              rotation={[1.81, 1.32, -0.86]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves92_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-148.7, 605.87, 666.33]}
              rotation={[1.13, 1.2, -0.19]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves93_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-145.36, 574.51, 668.36]}
              rotation={[-1.67, 1.02, 2.71]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves94_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-485.1, 818.64, 627.8]}
              rotation={[1.92, 1.23, -1.04]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves95_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-494.91, 819.17, 630.7]}
              rotation={[1.92, 1.23, -1.04]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves96_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
          </group>
          <group
            position={[-428.69, 1416.73, -1451.06]}
            rotation={[1.55, -0.33, -0.29]}
          >
            <group
              position={[75.21, 583.14, 608.51]}
              rotation={[0.8, 0.28, -0.25]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves25_m_Plants_0_2.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[81.53, 584.33, 608.32]}
              rotation={[1.24, 1.11, -0.56]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves26_m_Plants_0_2.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-15.25, 576.28, 652.52]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves27_m_Plants_0_2.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[10.15, 586.62, 629.79]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves28_m_Plants_0_2.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-44.96, 577.97, 664.53]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves29_m_Plants_0_2.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-81.45, 598.56, 657.15]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves91_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-111.71, 586.27, 672.91]}
              rotation={[1.81, 1.32, -0.86]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves92_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-148.7, 605.87, 666.33]}
              rotation={[1.13, 1.2, -0.19]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves93_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[-141.05, 594.49, 681.9]}
              rotation={[2.93, 1.32, -2.02]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves94_m_Plants_0_1.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[109.25, 573.56, 611.51]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves97_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[574.36, 562.53, 458.02]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves98_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[540.33, 572.11, 455.01]}
              rotation={[0.8, 0.28, -0.25]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves99_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[475.27, 575.59, 476.29]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves100_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[449.86, 565.25, 499.03]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves101_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[420.16, 566.94, 511.03]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves102_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[383.67, 587.53, 503.66]}
              rotation={[1.8, 1.25, -1.05]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves103_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[353.41, 575.24, 519.42]}
              rotation={[1.81, 1.32, -0.86]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves104_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
            <group
              position={[324.13, 575.11, 534.6]}
              rotation={[-2.95, 1.12, -2.53]}
              scale={4.05}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Leaves105_m_Plants_0.geometry}
                material={materials.m_Plants}
              />
            </group>
          </group>
          <group
            position={[-370.53, 350.46, 759.24]}
            rotation={[2.83, 1.16, -2.85]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves106_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-374.22, 353.15, 795.38]}
            rotation={[2.83, 1.16, -2.85]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves107_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-387.9, 353.15, 780.95]}
            rotation={[2.83, 1.16, -2.85]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves108_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-434.25, 543.26, 842.67]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves109_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-454.92, 545.53, 826.87]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves110_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-491.24, 545.53, 828.85]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves111_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-540.96, 545.53, 799.18]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves112_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-562.6, 545.53, 783.36]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves113_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-490.82, 565.05, 730.8]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves114_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-469.18, 565.05, 746.61]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves115_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-439.1, 565.05, 761.1]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves116_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-417.46, 565.05, 776.91]}
            rotation={[-2.56, 1.24, 2.74]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves117_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-791.77, 690.13, 675.56]}
            rotation={[-2.54, 1.04, 2.64]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves118_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-807.75, 695.93, 649.33]}
            rotation={[-0.99, 1.3, 1.17]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves119_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-751.29, 697.34, 693.31]}
            rotation={[-2.34, 1.05, 2.42]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves120_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-767.24, 691.46, 705.05]}
            rotation={[-2.41, 1.11, 2.55]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves121_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1091.62, 557.91, -60.17]}
            rotation={[1.18, 0.46, -1.83]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves122_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1099.35, 557.91, -60.17]}
            rotation={[1.18, 0.46, -1.83]}
            scale={4.05}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Leaves123_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[57.66, 9.57, 76.39]} scale={0.91}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant56_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-165.83, -245.83, -1156.93]}
            rotation={[-0.36, 0.52, 0.23]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant70_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[529.73, 254.46, -29.35]}
            rotation={[0.2, -0.83, -0.05]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant78_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group position={[-930.59, 222.18, 245.1]} scale={0.91}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant100_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1125.85, 520.43, -12.56]}
            rotation={[0.21, -0.16, -0.06]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant101_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1325.69, 483.63, 334.13]}
            rotation={[0.2, 0.25, -0.12]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant105_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[-1977.77, 717.48, -818.91]}
            rotation={[0.26, 0.23, -0.14]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant128_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[194.53, 519.84, -1707.99]}
            rotation={[0.48, -1.47, 0.09]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant129_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <group
            position={[917.64, 383.7, -1807.63]}
            rotation={[0.48, -1.47, 0.09]}
            scale={0.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plant148_m_Plants_0.geometry}
              material={materials.m_Plants}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus1_m_BarkPine_0.geometry}
            material={materials.m_BarkPine}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus1_m_PinusLeaves_0.geometry}
            material={materials.m_PinusLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus2_m_BarkPine_0.geometry}
            material={materials.m_BarkPine}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus2_m_PinusLeaves_0.geometry}
            material={materials.m_PinusLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus3_m_BarkPine_0.geometry}
            material={materials.m_BarkPine}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus3_m_PinusLeaves_0.geometry}
            material={materials.m_PinusLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus4_m_BarkPine_0.geometry}
            material={materials.m_BarkPine}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus4_m_PinusLeaves_0.geometry}
            material={materials.m_PinusLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus5_m_BarkPine_0.geometry}
            material={materials.m_BarkPine}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pinus5_m_PinusLeaves_0.geometry}
            material={materials.m_PinusLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine1_m_BarkSpruce_0.geometry}
            material={materials.m_BarkSpruce}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine1_m_SpruceLeaves_0.geometry}
            material={materials.m_SpruceLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine2_m_BarkSpruce_0.geometry}
            material={materials.m_BarkSpruce}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine2_m_SpruceLeaves_0.geometry}
            material={materials.m_SpruceLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine3_m_SpruceBark_0.geometry}
            material={materials.m_SpruceBark}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine3_m_BarkSpruce_0.geometry}
            material={materials.m_BarkSpruce}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine3_m_PinusLeaves_0.geometry}
            material={materials.m_PinusLeaves}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine3_m_SpruceLeaves_0.geometry}
            material={materials.m_SpruceLeaves}
          />
          <group position={[-2027.66, 260.09, 633.49]} scale={1.12}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pine4_m_BarkSpruce_0.geometry}
              material={materials.m_BarkSpruce}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pine4_m_SpruceLeaves_0.geometry}
              material={materials.m_SpruceLeaves}
            />
          </group>
          <group
            position={[-344.4, 385.18, 881.66]}
            rotation={[-0.64, 1.5, 0.69]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pine5_m_BarkSpruce_0.geometry}
              material={materials.m_BarkSpruce}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pine5_m_SpruceLeaves_0.geometry}
              material={materials.m_SpruceLeaves}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine6_m_BarkSpruce_0.geometry}
            material={materials.m_BarkSpruce}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Pine6_m_SpruceLeaves_0.geometry}
            material={materials.m_SpruceLeaves}
          />
          <group
            position={[-186.03, -16.57, 1489.15]}
            rotation={[0, -0.04, -1.79]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_fallenTree_m_SpruceBark_0.geometry}
              material={materials.m_SpruceBark}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_fallenTree_m_BarkSpruce_0.geometry}
              material={materials.m_BarkSpruce}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_PicnicLog_m_Log1_0.geometry}
            material={materials.m_Log1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseWindows_0.geometry}
            material={materials.m_HouseWindows}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_Glass_0.geometry}
            material={materials.m_Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_FairyLight_0.geometry}
            material={materials.m_FairyLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseFence_0.geometry}
            material={materials.m_HouseFence}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseRoof_0.geometry}
            material={materials.m_HouseRoof}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseTrim_0.geometry}
            material={materials.m_HouseTrim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseUnique3_0.geometry}
            material={materials.m_HouseUnique3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseWalls_0.geometry}
            material={materials.m_HouseWalls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseUnique1_0.geometry}
            material={materials.m_HouseUnique1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_House_m_HouseWood_0.geometry}
            material={materials.m_HouseWood}
          />
          <group
            position={[-512.49, 350.23, 672.49]}
            rotation={[3.11, 0.56, -3.1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Shed_m_Shed_0.geometry}
              material={materials.m_Shed}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_HouseWindows_0.geometry}
            material={materials.m_HouseWindows}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_Glass_0.geometry}
            material={materials.m_Glass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_FairyLight_0.geometry}
            material={materials.m_FairyLight}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_HouseRoof_0.geometry}
            material={materials.m_HouseRoof}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_HouseTrim_0.geometry}
            material={materials.m_HouseTrim}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_HouseUnique3_0.geometry}
            material={materials.m_HouseUnique3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_HouseWalls_0.geometry}
            material={materials.m_HouseWalls}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_SideHouse_m_HouseWood_0.geometry}
            material={materials.m_HouseWood}
          />
          <group
            position={[26.88, 431.25, 825.36]}
            rotation={[-1, 0.19, 0.66]}
            scale={[0.83, 0.89, 0.83]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Trashbag1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[162.59, 289.16, 613.13]}
            rotation={[-2.75, 1.21, 2.96]}
            scale={[0.83, 0.89, 0.83]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Trashbag2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[452.18, 17.05, -502]} rotation={[0, -1.2, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Book1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[475.91, 22.49, -545.27]} rotation={[0, -1.01, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Book2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[404.03, 50.27, -799.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Book3_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[374.01, 65.7, -844.52]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Coffee1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[211.16, 463.5, -625.1]} scale={[0.32, 0.01, 0.32]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Coaster1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[204.15, 463.34, -645.62]}
            scale={[0.32, 0.01, 0.32]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Coaster2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[367.01, 65.54, -865.04]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Coffee2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-110.62, 394.37, 155.96]}
            rotation={[-Math.PI, 1.07, -Math.PI]}
            scale={[0.56, 0.02, 0.27]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_MapBooklet_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[81.06, 334.93, 441.48]} scale={[0.08, 0.11, 0.08]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Can1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[5.96, 338.4, 468.68]} scale={[0.08, 0.11, 0.08]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Can2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-169.76, 398.36, 216.7]}
            rotation={[-0.05, -0.38, -0.1]}
            scale={[0.69, 1, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Map_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[-3.7, 337.23, 404.67]} scale={[0.07, 0.13, 0.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Bottle1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[-28.32, 341.15, 443.37]} scale={[0.07, 0.13, 0.07]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Bottle2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[226.54, 469.98, -649.17]}
            scale={[0.27, 0.01, 0.27]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Plate1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[188.06, 469.99, -620.05]}
            scale={[0.27, 0.01, 0.27]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Plate2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-183.63, 410.79, 176.97]}
            scale={[0.09, 0.27, 0.09]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_BearSpray_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[-3.61, 2.65, 22.29]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Compas_m_Glass_0.geometry}
              material={materials.m_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Compas_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-153.1, 247, 502.37]}
            rotation={[-Math.PI, 1.49, -Math.PI]}
            scale={1.18}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_GasCan_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group position={[-1976.6, 395.73, 184.3]} scale={[1.42, 1, 1.42]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Knife_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[1229.86, 467.14, -1472.07]}
            rotation={[-Math.PI, -0.71, -Math.PI]}
            scale={0.86}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Camera_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-3402.01, 402.2, 198.26]}
            rotation={[-0.08, 0, 0]}
            scale={[2.28, 2.39, 2.28]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Binoculars_m_Glass_0.geometry}
              material={materials.m_Glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Binoculars_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-218.95, 324.2, 310.06]}
            rotation={[0, 1.22, -0.03]}
            scale={1.07}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Bucket_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[193.89, 437.08, -624.61]}
            scale={[0.27, 0.01, 0.27]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Plate3_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[202.74, 429.24, -648.18]}
            scale={[0.32, 0.01, 0.32]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Coaster3_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[202.74, 430.37, -648.18]}
            rotation={[0, -0.45, 0]}
            scale={[0.32, 0.01, 0.32]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Coaster4_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[287.22, 292.49, 915.72]}
            rotation={[0, 1.22, -0.03]}
            scale={1.07}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Bucket1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-481.37, 256.43, -1121.59]}
            rotation={[-Math.PI, 1.49, -Math.PI]}
            scale={1.18}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_GasCan1_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-396.29, 165.23, -1094.47]}
            rotation={[-2.12, 0.97, 2.13]}
            scale={1.18}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_GasCan2_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-1.67, 336.63, 397.14]}
            rotation={[0.73, -0.15, 0.39]}
            scale={[0.07, 0.13, 0.07]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Bottle3_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[-29.44, 339.97, 541.28]}
            rotation={[-0.63, 0.72, -1.34]}
            scale={[0.07, 0.13, 0.07]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Bottle4_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[82.97, 334.93, 431.69]}
            rotation={[0, 0, 1.62]}
            scale={[0.08, 0.11, 0.08]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Can3_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[16.37, 338.08, 525.77]}
            rotation={[0, 0, 1.62]}
            scale={[0.08, 0.11, 0.08]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Can4_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[121.72, 335.15, 463.46]}
            rotation={[0.1, 0.83, 1.2]}
            scale={[0.08, 0.11, 0.08]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Can5_m_ExtraProps_0.geometry}
              material={materials.m_ExtraProps}
            />
          </group>
          <group
            position={[45.59, 321.84, 349.91]}
            rotation={[-0.06, 0.37, 0.02]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_LoungeChair1_m_LoungeChair_0.geometry}
              material={materials.m_LoungeChair}
            />
          </group>
          <group
            position={[-77.74, 329.34, 479.09]}
            rotation={[-0.15, 1.32, 0.07]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_LoungeChair2_m_LoungeChair_0.geometry}
              material={materials.m_LoungeChair}
            />
          </group>
          <group
            position={[-130.48, 339.47, 712]}
            rotation={[0.13, -1.07, -0.18]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_LoungeChair3_m_LoungeChair_0.geometry}
              material={materials.m_LoungeChair}
            />
          </group>
          <group
            position={[-217.49, 384.46, 781.15]}
            rotation={[2.17, -0.17, 2.76]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_LoungeChair4_m_LoungeChair_0.geometry}
              material={materials.m_LoungeChair}
            />
          </group>
          <group position={[7809.3, 0, 2927.85]} rotation={[0, 1.44, 0]}>
            <group
              position={[1279.87, 442.34, -9073.37]}
              rotation={[0.05, 0.44, 0.26]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WireFence1_m_WireFence_0.geometry}
                material={materials.m_WireFence}
              />
            </group>
            <group
              position={[1614.11, 448.81, -8877.9]}
              rotation={[0.09, 0.64, 0.06]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WireFence2_m_WireFence_0.geometry}
                material={materials.m_WireFence}
              />
            </group>
            <group
              position={[1853.89, 509.04, -9049.54]}
              rotation={[0.13, 0.34, 0.12]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WireFence3_m_WireFence_0.geometry}
                material={materials.m_WireFence}
              />
            </group>
            <group
              position={[2119.59, 546.62, -9145.22]}
              rotation={[0.15, 0.66, 0.02]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WireFence4_m_WireFence_0.geometry}
                material={materials.m_WireFence}
              />
            </group>
            <group
              position={[1541.57, 527.09, -9192.5]}
              rotation={[0.05, 0.44, 0.26]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WireFence5_m_WireFence_0.geometry}
                material={materials.m_WireFence}
              />
            </group>
          </group>
          <group
            position={[8709.79, 90.39, 2795.64]}
            rotation={[-Math.PI, 1.38, -Math.PI]}
          >
            <group
              position={[3843.65, 284.3, -8665.9]}
              rotation={[2.93, 1.26, -2.79]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WoodFence1_m_WoodFence_0.geometry}
                material={materials.m_WoodFence}
              />
            </group>
            <group
              position={[3800.59, 328.01, -8860.48]}
              rotation={[0.41, 1, -0.3]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WoodFence2_m_WoodFence_0.geometry}
                material={materials.m_WoodFence}
              />
            </group>
            <group
              position={[3928.14, 342.91, -9032.69]}
              rotation={[0.21, 0.48, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_WoodFence3_m_WoodFence_0.geometry}
                material={materials.m_WoodFence}
              />
            </group>
          </group>
          <group
            position={[43.11, 364.38, 340.27]}
            rotation={[-0.54, 0.39, 0.15]}
            scale={3.86}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pillow1_m_Pillow1_0.geometry}
              material={materials.m_Pillow1}
            />
          </group>
          <group
            position={[-85.34, 372.99, 474.86]}
            rotation={[-1.32, 1.06, 1.21]}
            scale={3.86}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pillow2_m_Pillow1_0.geometry}
              material={materials.m_Pillow1}
            />
          </group>
          <group
            position={[170.47, 463.43, -728.16]}
            rotation={[-0.54, 0.39, 0.15]}
            scale={3.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pillow3_m_Pillow2_0.geometry}
              material={materials.m_Pillow2}
            />
          </group>
          <group
            position={[194.37, 461.98, -746.45]}
            rotation={[-0.49, 0.26, 0.14]}
            scale={3.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pillow4_m_Pillow1_0.geometry}
              material={materials.m_Pillow1}
            />
          </group>
          <group
            position={[141.99, 461.87, -729.88]}
            rotation={[-0.54, 0.39, 0.15]}
            scale={3.31}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Pillow5_m_Pillow1_0.geometry}
              material={materials.m_Pillow1}
            />
          </group>
          <group
            position={[425.1, 348.46, 332.14]}
            rotation={[0, -0.85, 0]}
            scale={0.97}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FirePit_m_FirePit_0.geometry}
              material={materials.m_FirePit}
            />
          </group>
          <group position={[-26.33, 322.3, 396.34]} rotation={[0, 1.43, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_TrashCan_m_Trashcan_0.geometry}
              material={materials.m_Trashcan}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Fence_m_Fence_0.geometry}
            material={materials.m_Fence}
          />
          <group
            position={[-147.05, 318.49, 167.22]}
            rotation={[0.05, 0.92, -0.08]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Picnic_m_PicnicTable_0.geometry}
              material={materials.m_PicnicTable}
            />
          </group>
          <group
            position={[448.5, 242.73, -273.9]}
            rotation={[-2.77, 1.54, 2.84]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Swing_m_Swing_0.geometry}
              material={materials.m_Swing}
            />
          </group>
          <group
            position={[-548.22, 367.89, 644.95]}
            rotation={[0.15, 0.04, -0.21]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Bike_m_Bike_0.geometry}
              material={materials.m_Bike}
            />
          </group>
          <group
            position={[-761.85, 412.47, 582.63]}
            rotation={[2.93, 1.05, -2.87]}
            scale={0.97}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_HikeBoard_m_Hikeboard_0.geometry}
              material={materials.m_Hikeboard}
            />
          </group>
          <group position={[-745.14, 443.89, 212.64]} rotation={[0, 1.21, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Sign_m_Sign_0.geometry}
              material={materials.m_Sign}
            />
          </group>
          <group
            position={[192.67, 414.25, -631.26]}
            rotation={[0, 0.29, 0]}
            scale={[2.57, 1, 1.49]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Carpet_m_Carpet_0.geometry}
              material={materials.m_Carpet}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Bench_m_HouseFence_0.geometry}
            material={materials.m_HouseFence}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Bench_m_Bench_0.geometry}
            material={materials.m_Bench}
          />
          <group
            position={[-445.68, 378.33, 794.58]}
            rotation={[-Math.PI, 0.56, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_woodBox_m_WoodBox_0.geometry}
              material={materials.m_WoodBox}
            />
          </group>
          <group
            position={[7324.61, 99.35, 1971.73]}
            rotation={[-Math.PI, 0.91, -Math.PI]}
          >
            <group
              position={[5680.84, 423.37, -5400.38]}
              rotation={[-1.43, -0.37, 0.38]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter22_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5774.11, 288.99, -5449.19]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull5_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5670.26, 420.91, -5393.65]}
              rotation={[-1.07, -0.91, 0.6]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter19_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5694.72, 302.36, -5416.49]}
              rotation={[2.18, 1, 2.45]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight9_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5670.26, 430.06, -5389.28]}
              rotation={[0.48, -1.18, 2.02]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter18_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5681.12, 291.4, -5416.49]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight8_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5672, 420.97, -5400.38]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter21_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5674.61, 429.36, -5393.28]}
              rotation={[-0.95, -1.01, 0.71]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter20_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5787.88, 295.35, -5456.4]}
              rotation={[-1.84, 0.63, -2.7]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf7_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5759.92, 299.7, -5446.47]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull6_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5809.27, 288.99, -5455.71]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull8_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5699.58, 293.65, -5419.93]}
              rotation={[-1.94, 0.77, 0.5]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight10_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5790.75, 282.73, -5455.89]}
              rotation={[-3.12, 1.22, -1.59]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf6_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5657.98, 437.16, -5386.57]}
              rotation={[1.76, 0.48, 2.74]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter16_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5687.6, 295.5, -5416.49]}
              rotation={[-1.68, 0.29, 0.37]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight7_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5775.8, 305.72, -5448.71]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull7_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5762.8, 282.73, -5444.91]}
              rotation={[-3.12, 1.22, -1.59]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf8_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5642.8, 420.97, -5382.71]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter14_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5689.91, 429.36, -5400.38]}
              rotation={[2.32, 1.08, 2.33]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter23_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5649.3, 423.37, -5385.52]}
              rotation={[-1.43, -0.37, 0.38]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter15_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5749.18, 289.23, -5443.14]}
              rotation={[1.78, 0.5, -0.41]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf9_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5794.76, 289.57, -5459.36]}
              rotation={[2.23, 1.03, -0.74]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf5_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5657.61, 429.36, -5387.58]}
              rotation={[2.32, 1.08, 2.33]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter17_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5685.76, 290.34, -5416.49]}
              rotation={[-2.32, 1.08, 0.82]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight6_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5744.23, 288.99, -5431.78]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull9_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5699.58, 284.72, -5419.93]}
              rotation={[-1.94, 0.77, 0.5]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight11_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5694.72, 293.43, -5416.49]}
              rotation={[2.18, 1, 2.45]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight12_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5687.6, 286.57, -5416.49]}
              rotation={[-1.68, 0.29, 0.37]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight13_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5681.12, 282.47, -5416.49]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight14_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5685.76, 281.41, -5416.49]}
              rotation={[-2.32, 1.08, 0.82]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logEight15_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5695.59, 426.34, -5407.69]}
              rotation={[-1.85, 0.64, 0.45]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter24_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5688.4, 429.36, -5403]}
              rotation={[-0.95, -1.01, 0.71]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter25_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5682.44, 444.1, -5395.58]}
              rotation={[1.76, 0.48, 2.74]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logQuarter26_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5748.86, 304.84, -5432.15]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull10_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5750.77, 314.38, -5442.54]}
              rotation={[-3.07, 1.16, -1.66]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf10_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5760.39, 306.82, -5446.71]}
              rotation={[2.23, 1.03, -0.74]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf11_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5800.3, 302.73, -5457.73]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull11_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5788.86, 314.24, -5454.98]}
              rotation={[-1.12, -0.87, -2.57]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf12_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5767.57, 319.6, -5445.69]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull12_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5758.16, 323.91, -5445.99]}
              rotation={[-2.15, 0.88, -2.47]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf13_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5789.18, 314.74, -5463.17]}
              rotation={[2, 0.85, -0.55]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf14_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5779.03, 322.28, -5450.76]}
              rotation={[1.42, -0.39, -0.38]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logHalf15_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
            <group
              position={[5773.06, 333.21, -5447.71]}
              rotation={[-Math.PI / 2, 0, 0.35]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__logFull13_m_Log_0.geometry}
                material={materials.m_Log}
              />
            </group>
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.geo_Wire1_m_FairyLight_0.geometry}
            material={materials.m_FairyLight}
          />
          <group position={[-336.58, 574.86, 771.76]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_1_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-344.32, 571.84, 718.87]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_2_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-348.19, 571.1, 668.57]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_3_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-353.35, 571.55, 619.55]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_4_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-357.22, 573.39, 569.24]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_5_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-365.31, 577.86, 512.59]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_6_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-369.51, 580.49, 449.47]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_7_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-378.26, 582.98, 391.21]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_8_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-383.12, 588.52, 336.18]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_9_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-389.59, 598.25, 279.54]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_10_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-396.06, 605.93, 221.27]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_11_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-402.54, 616.69, 164.63]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_12_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-410.63, 632.85, 103.13]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_13_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-417.1, 651.65, 41.63]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_14_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-423.58, 671.81, -18.26]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_15_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-431.67, 696.97, -82.99]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_16_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[-436.53, 722.25, -147.73]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_17_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[192.96, 260.24, 272.64]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FairyLightsWire1_18_m_FairyLight_0.geometry}
              material={materials.m_FairyLight}
            />
          </group>
          <group position={[70.94, 0, -173.35]} rotation={[0, 0.39, 0]}>
            <group position={[-130.95, 0, 133.93]} rotation={[0, -0.39, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.geo_Wire2_m_FairyLight_0.geometry}
                material={materials.m_FairyLight}
              />
            </group>
            <group position={[-20.85, 0.02, -48.34]} rotation={[0, 0.1, 0]}>
              <group position={[-401.45, 743.83, -217.35]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_1_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-394.97, 722.22, -160.7]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_2_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-390.12, 696.94, -95.97]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_3_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-382.03, 671.78, -31.23]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_4_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-375.55, 651.63, 28.65]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_5_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-369.08, 632.82, 90.16]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_6_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-360.99, 616.67, 151.66]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_7_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-354.51, 605.91, 208.3]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_8_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-348.04, 598.22, 266.57]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_9_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-341.56, 588.5, 323.21]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_10_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-336.71, 582.96, 378.24]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_11_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-327.96, 580.47, 436.5]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_12_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-323.76, 577.83, 499.62]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_13_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-315.67, 573.37, 556.27]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_14_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-311.8, 571.52, 606.58]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_15_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-306.64, 571.07, 655.59]} scale={0.97}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_16_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-302.77, 571.82, 705.9]} scale={0.97}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_17_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
              <group position={[-295.03, 574.83, 758.79]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={
                    nodes.geo_FairyLightsWire2_18_m_FairyLight_0.geometry
                  }
                  material={materials.m_FairyLight}
                />
              </group>
            </group>
          </group>
          <group position={[39.13, -104.63, -44.13]} scale={1.26}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot1_m_PlantPotPlants_0.geometry}
              material={materials.m_PlantPotPlants}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot1_m_PlantPot_0.geometry}
              material={materials.m_PlantPot}
            />
          </group>
          <group position={[-90.93, -43, 25.7]} scale={1.2}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot2_m_PlantPotPlants_0.geometry}
              material={materials.m_PlantPotPlants}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot2_m_PlantPot_0.geometry}
              material={materials.m_PlantPot}
            />
          </group>
          <group position={[-115.74, -63.51, 112.14]} scale={1.26}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot3_m_PlantPotPlants_0.geometry}
              material={materials.m_PlantPotPlants}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot3_m_PlantPot_0.geometry}
              material={materials.m_PlantPot}
            />
          </group>
          <group position={[56.94, -119.3, 79.06]} scale={1.29}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot4_m_PlantPotPlants_0.geometry}
              material={materials.m_PlantPotPlants}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot4_m_PlantPot_0.geometry}
              material={materials.m_PlantPot}
            />
          </group>
          <group position={[10.46, -96.55, 74.6]} scale={1.23}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot5_m_PlantPotPlants_0.geometry}
              material={materials.m_PlantPotPlants}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_PlantPot5_m_PlantPot_0.geometry}
              material={materials.m_PlantPot}
            />
          </group>
          <group position={[359.78, -29.24, -58.65]} rotation={[0, 0.44, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_FBFSign_m_FBFSign_0.geometry}
              material={materials.m_FBFSign}
            />
          </group>
          <group
            position={[-659.76, -16.02, 1185.82]}
            rotation={[-1.17, -1.27, -0.04]}
            scale={1.33}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_Axe_m_Axe_0.geometry}
              material={materials.m_Axe}
            />
          </group>
          <group
            position={[186.19, -123.95, 232.34]}
            rotation={[0, 0.29, 0]}
            scale={1.27}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.geo_CoffeeTable_m_CoffeeTable_0.geometry}
              material={materials.m_CoffeeTable}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../forest2.glb");

export default ForestModel2

 