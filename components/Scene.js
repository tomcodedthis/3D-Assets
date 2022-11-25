import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function Scene(props) {
  return (
    <main className={"w-[100%] h-[90vh]"}>
      <Canvas>
        <Suspense fallback="loading...">
          <PerspectiveCamera position={Object.values(props.camera.position)}>
            <ambientLight intensity={2} />
            <pointLight position={[0, 30, 20]} />
            <Model
              src={"../model-scenes/scene.gltf"}
              positions={props.positions}
              model={props.model}
              setModel={props.setModel}
            />

            <OrbitControls rotateSpeed={0.5} />
          </PerspectiveCamera>
        </Suspense>
      </Canvas>
    </main>
  );
}

function convertToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function convertToDeg(radius) {
  return radius / (Math.PI / 180);
}
