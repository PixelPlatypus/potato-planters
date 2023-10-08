import React, { useState, useRef, useEffect } from "react";

import { Canvas } from "@react-three/fiber";

import EarthModel from "../../components/EarthModel";

import WelcomeText from "../../components/WelcomeText";
import styles from "./landing.module.css";

function Landing() {
  const [smokeParticles, setSmokeParticles] = useState([]);

  const smokeRef = useRef(null);

  const handleMouseMove = (event) => {
    const x = event.clientX;

    const y = event.clientY;

    const newParticle = {
      id: Date.now(),

      x,

      y,
    };

    setSmokeParticles((prev) => [...prev, newParticle]);

    // After a short delay, remove the particle to create a fading trail

    setTimeout(() => {
      setSmokeParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 800);
  };

  useEffect(() => {
    smokeRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      // smokeRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={smokeRef}
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(img/space.jpeg)",
      }}
    >
      {smokeParticles.map((particle) => (
        <div
          key={particle.id}
          className={styles.smokeParticle}
          style={{ left: particle.x, top: particle.y }}
        ></div>
      ))}

      <Canvas>
        <ambientLight intensity={0.4} />

        <pointLight position={[10, 10, 10]} />

        <EarthModel />
      </Canvas>

      <WelcomeText />
    </div>
  );
}

export default Landing;
