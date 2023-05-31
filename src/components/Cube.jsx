import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef(); // bununla hello kelimesine ulasiyorum

  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    // yaziyi hareket ettirmek icin yazdim.
    // * 2 hizini artiriyor
  );

  return (
    <mesh>
      <boxGeometry />

      {/* renk ve bazi ozellikler icin ekliyorum */}
      {/* <meshStandardMaterial color="red"> */}
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={3} color={"#555"}>
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;
