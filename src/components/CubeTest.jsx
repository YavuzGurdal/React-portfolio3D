import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const CubeTest = () => {
  const textRef = useRef(); // bununla hello kelimesine ulasiyorum

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    // yaziyi hareket ettirmek icin yazdim.
    // * 2 hizini artiriyor
  );

  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      {/* args={[2, 2, 2]} ile cismin buyuklugunu ayarliyorum */}

      {/* renk ve bazi ozellikler icin ekliyorum */}
      {/* <meshStandardMaterial color="red"> */}
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={1} color={"#555"}>
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default CubeTest;
