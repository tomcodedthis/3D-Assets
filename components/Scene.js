import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function Scene(props) {
  return (
    <main className={"w-[100%] h-[90vh]"}>
      <Canvas frameloop="demand">
        <Suspense fallback="loading...">
          <ambientLight intensity={2} />
          <pointLight position={[0, 2, 10]} intensity={1.5} />
          <pointLight position={[0, 2, -10]} intensity={1.5} />

          <PerspectiveCamera makeDefault position={[2, 2, 12]} />
          <OrbitControls rotateSpeed={0.4} autoRotate={props.play} />
          <Model
            src={"../model-scenes/scene.gltf"}
            positions={props.positions}
            model={props.model}
            setModel={props.setModel}
          />
        </Suspense>
      </Canvas>
    </main>
  );
}
