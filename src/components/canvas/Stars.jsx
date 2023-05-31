import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// import * as random from "maath/random/dist/maath-random.esm";
import * as random from "maath/random";

const Stars = (props) => {
  const ref = useRef();
  const [sphere] = useState(
    () =>
      // random.inSphere(new Float32Array(5000), { radius: 1.2 })
      random.inSphere(new Float32Array(6000), { radius: 1.2 })
    // ***** Float32Array(6000) icindeki sayinin 3'e bolunebilen bir sayi olmasi gerekiyor
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: "-1",
      }}
      //  className="w-full h-auto absolute inset-0 z-[-1]"
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
