import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { Experience } from "../../components/Experience";
import AudioPlayer from "../../components/AudioPlayer";
import { TextSection } from "../../components/TextSection";

function Explore() {
  return (
    <>
      <AudioPlayer />
      <Canvas
        style={{ position: "absolute", top: 0, left: 0, height: "100vh" }}
      >
        <TextSection
          text={{ title: "Scroll To Explore" }}
          opacity={0.6}
          transparent
          scale={[1, 1, 1]}
          position={[-1.33, 0.1, -10]}
        />
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
