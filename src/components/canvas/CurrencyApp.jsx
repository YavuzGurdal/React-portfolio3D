import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Money from "./Money";

const CurrencyApp = (props) => {
  return (
    <Canvas camera={{ fov: 25, position: [300, 300, -200] }}>
      <OrbitControls enableZoom={false} autoRotate />
      <directionalLight position={[3, 2, 1]} />
      <Stage environment="city" intensity={0.6}>
        <Money />
      </Stage>
    </Canvas>
  );
};

export default CurrencyApp;
