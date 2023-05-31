import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const MarvelNew = () => {
  const todo = useGLTF("./ironman/scene.gltf");

  return (
    <mesh>
      {/* <hemisphereLight intensity={0.15} groundColor="black" /> */}
      {/* <hemisphereLight intensity={0.15} groundColor="gray" /> */}
      <hemisphereLight intensity={0.15} />
      {/* <spotLight
        position={[-20, 50, 10]}
        // position={[10, 10, 20]}
        angle={0.12}
        penumbra={1}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <pointLight intensity={1} />
      <primitive
        object={todo.scene}
        scale={0.5} // 3d objenin buyuklugu
        position={[0, 0, 0]} // x y z koordinatlari
        // position={[0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Marvel = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      //   camera={{ position: [40, -15, -20], fov: 25 }}
      // camera={{ position: [5, 3, 4], fov: 25 }} // objenin durdugu sekli burdan olusturuyoruz
      camera={{ position: [5, 3, 4], fov: 25 }} // objenin durdugu sekli burdan olusturuyoruz
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
        <Stage environment="city" intensity={80}>
          <MarvelNew />
        </Stage>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Marvel;
