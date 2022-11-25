import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function Scene() {
  const [camera, setCamera] = useState({
    position: {
      x: -3,
      y: 1,
      z: -0.3,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });
  const [asset, setAsset] = useState({
    position: {
      x: -3,
      y: 1,
      z: -0.3,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  return (
    <main className={"w-[100%] h-[90vh]"}>
      <Canvas>
        <Suspense>
          <PerspectiveCamera
            position={Object.values(camera.position)}
            rotation={Object.values(camera.rotation)}
            fov={20}
          >
            <ambientLight intensity={2} />
            <pointLight position={[5, 30, 30]} />
            <Model asset={asset} setAsset={setAsset} />
            <OrbitControls />
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
