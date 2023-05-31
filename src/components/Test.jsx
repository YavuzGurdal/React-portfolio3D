import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { styled } from "styled-components";
import CubeTest from "./CubeTest";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} />
        {/* <OrbitControls enableZoom={false} autoRotate /> */}
        {/* cismin hareket etmesini sagliyor */}
        {/* autoRotate cismin surekli hareket etmesini sagliyor */}
        <ambientLight intensity={1} />
        {/* isik ayari icin */}
        <directionalLight position={[3, 2, 1]} />
        {/* hangi yonlerden isigin gelecegini belirliyorum */}
        <CubeTest />
      </Canvas>
    </Container>
  );
};

export default Test;
