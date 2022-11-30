import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls, Loader } from "@react-three/drei";
import Lambo from "./Models/Lambo";
import Porsche from "./Models/Porsche";
import Datsun from "./Models/Datsun";

export default function Scene(props: any) {
  return (
    <main className={"w-full h-[90%] bg-white"}>
      <Suspense fallback={<Loader />}>
        <Canvas frameloop="demand">
          <ambientLight intensity={4} />
          <pointLight position={[0, 2, 10]} intensity={1.5} />
          <pointLight position={[0, 2, -10]} intensity={1.5} />

          <PerspectiveCamera makeDefault position={[2, 2, 12]} />
          <OrbitControls rotateSpeed={0.4} autoRotate={props.play} />

          {props.currentModel === 0 ? (
            <Datsun {...props} />
          ) : props.currentModel === 1 ? (
            <Lambo {...props} />
          ) : (
            <Porsche {...props} />
          )}
        </Canvas>
      </Suspense>
    </main>
  );
}
