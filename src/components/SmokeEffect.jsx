import React from "react";

function SmokeEffect({ x, y }) {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: "120px",
        height: "120px",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.2), transparent 70%)",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        animation: "smokeAnimation 2s infinite",
      }}
    ></div>
  );
}

export default SmokeEffect;
