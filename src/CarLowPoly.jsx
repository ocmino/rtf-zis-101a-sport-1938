/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/zis101asport1938.gltf
Author: Comrade1280 (https://sketchfab.com/comrade1280)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/zis-101a-sport-1938-a361c0f7b7e041fc8f3437a5cbec681a
Title: ZIS-101A Sport (1938)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

const CarLowPoly = (props) => {
  const { nodes, materials } = useGLTF("/models/zis101asport1938.gltf");

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.07}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 30.96, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Body_body01_0.geometry}
              material={materials.body01}
            />
            <mesh
              geometry={nodes.Body_body01_0_1.geometry}
              material={materials.body01}
            />
          </group>
          <group position={[0, 30.96, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.interior_intr01_0.geometry}
              material={materials.intr01}
            />
            <mesh
              geometry={nodes.interior_intr01_0_1.geometry}
              material={materials.intr01}
            />
          </group>
          <mesh
            geometry={nodes.floor_floor01_0.geometry}
            material={materials.floor01}
            position={[0, 0, -0.47]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.7, 0.8, 0.8 ]}
          />
          <mesh
            geometry={nodes.RearWheelR_rwheel01_0.geometry}
            material={materials.rwheel01}
            position={[-30.77, 14.21, -58.7]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.FrontWheelR_frwheel01_0.geometry}
            material={materials.frwheel01}
            position={[-30.77, 14.21, 74.92]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.FrontWheelL_frwheel01_0.geometry}
            material={materials.frwheel01}
            position={[30.77, 14.21, 74.92]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.roof_roof01_0.geometry}
            material={materials.roof01}
            position={[0, 30.96, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.LightsL_lights01_0.geometry}
            material={materials.lights01}
            position={[19.98, 24.03, -1.93]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.LightsR_lights01_0.geometry}
            material={materials.lights01}
            position={[-19.98, 24.03, -1.93]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.RearWheelL_rwheel01_0.geometry}
            material={materials.rwheel01}
            position={[30.77, 14.21, -58.7]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.STwheel_stwheel01_0.geometry}
            material={materials.stwheel01}
            position={[13.08, 38.26, 13.09]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.instruments_instr01_0.geometry}
            material={materials.instr01}
            position={[0, 39.66, 23.62]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.DoorL_body01_0.geometry}
            material={materials.body01}
            position={[26.02, 28.23, 5.55]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.DoorR_body01_0.geometry}
            material={materials.body01}
            position={[-26.02, 28.23, 5.55]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.IndoorL_intr01_0.geometry}
            material={materials.intr01}
            position={[24.65, 28.6, 6.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.IndoorR_intr01_0.geometry}
            material={materials.intr01}
            position={[-24.65, 28.6, 6.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.wingshild_Glass_0.geometry}
            material={materials.Glass}
            position={[0, 30.96, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.rearGlass_Glass_0.geometry}
            material={materials.Glass}
            position={[0, 30.96, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.instrGlass_InstrGlass_0.geometry}
            material={materials.InstrGlass}
            position={[0, 39.66, 23.62]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.StWGlass_StWGlass_0.geometry}
            material={materials.StWGlass}
            position={[13.08, 38.26, 13.09]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Buttons_ButtonGlass_0.geometry}
            material={materials.ButtonGlass}
            position={[0, 30.96, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.BtakeLight_BRKGlass_0.geometry}
            material={materials.BRKGlass}
            position={[19.98, 24.03, -1.93]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.TurnLight_TRNGlass_0.geometry}
            material={materials.TRNGlass}
            position={[19.98, 24.03, -1.93]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.HeadLight_HDLight_0.geometry}
            material={materials.HDLight}
            position={[19.98, 24.03, -1.93]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.Object001_body01_0.geometry}
            material={materials.body01}
            position={[0, 30.96, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  );
};

export default CarLowPoly;

useGLTF.preload("/models/zis101asport1938.gltf");
