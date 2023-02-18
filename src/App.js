import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { ContactShadows } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Noise } from "@react-three/postprocessing";
import { Glitch } from "@react-three/postprocessing";
import { GlitchMode } from "postprocessing";
import CarLowPoly from "./CarLowPoly";
import Interface from "./Interface";

function App() {
  return (
    <>
      <Canvas>
        <Environment
          re
          files="/drachenfels_cellar_2k.hdr"
          ground={{ height: 32 / 8, radius: 130 / 8 }}
        />

        <ContactShadows
          renderOrder={2}
          frames={1}
          resolution={1024}
          scale={120}
          blur={2}
          opacity={0.6}
          far={100}
        />
        <CarLowPoly />
        <OrbitControls
          maxPolarAngle={Math.PI / 2.5}
          maxDistance={13}
          minDistance={7.5}
        />
        <PerspectiveCamera makeDefault position={[-70, 100, 120]} fov={55} />

        <EffectComposer
          multisampling={0}
          depthTexture={false}
          depthWrite={false}
          depthTest={false}
        >
          <Vignette
            eskil={false}
            offset={0.1}
            darkness={1.1}
            blendFunction={BlendFunction.NORMAL}
          />
          <Noise opacity={0.2} />
          <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[0.6, 1.0]} // min and max glitch duration
            strength={[0.01, 0.9]} // min and max glitch strength
            mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
        </EffectComposer>
      </Canvas>
      <Interface />
    </>
  );
}

export default App;
