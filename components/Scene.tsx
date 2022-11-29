import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function Scene(props: any) {
  return (
    <main className={"w-[100%] h-[90vh] bg-white"}>
      <Canvas frameloop="demand">
        <Suspense fallback="loading...">
          <ambientLight intensity={2} />
          <pointLight position={[0, 2, 10]} intensity={1.5} />
          <pointLight position={[0, 2, -10]} intensity={1.5} />

          <PerspectiveCamera makeDefault position={[2, 2, 12]} />
          <OrbitControls rotateSpeed={0.4} autoRotate={props.play} />
          <Model {...props} />
        </Suspense>
      </Canvas>
    </main>
  );
}
