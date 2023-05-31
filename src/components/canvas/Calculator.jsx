import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Calc = () => {
  const calculator = useGLTF("./calculator/scene.gltf");

  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor="black" /> */}
      <hemisphereLight intensity={0.5} groundColor="white" />
      {/* <spotLight
        // position={[-20, 50, 10]}
        position={[10, 10, 100]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <pointLight intensity={1} />
      <primitive
        object={calculator.scene}
        scale={1} // 3d objenin buyuklugu
        // scale={0.0015} // 3d objenin buyuklugu
        position={[0, 0, 0]} // x y z koordinatlari
        // position={[0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Calculator = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      //   camera={{ position: [40, -15, -20], fov: 25 }}
      // camera={{ position: [-4, -3, 5], fov: 25 }} // objenin durdugu sekli burdan olusturuyoruz
      camera={{ position: [4, 1, 6], fov: 25 }} // objenin durdugu sekli burdan olusturuyoruz
      // camera={{ position: [7, 4, 6], fov: 25 }} // objenin durdugu sekli burdan olusturuyoruz
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate

          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
          // yukaridaki ikisi sadece x yorungesinde hareket etmesini sagliyor
        />
        <Stage environment="city" intensity={1}>
          <Calc />
        </Stage>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Calculator;
