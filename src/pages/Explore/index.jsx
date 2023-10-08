import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Experience } from "../../components/Experience";

function Explore() {
  return (
    <>
      <Canvas style={{position: 'absolute', top: 0, left: 0, height: '100vh'}}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={20} damping={0.5}>
          <Experience />
        </ScrollControls>
        <EffectComposer>
          <Noise opacity={0.3} />
        </EffectComposer>
      </Canvas>
      {/* <Hero /> */}
    </>
  );
}

export default Explore;
