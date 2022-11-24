import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import Model from './Model';
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";

export default function Scene() {
  const [position, setPosition] = useState({
    x: -3,
    y: 1,
    z: -0.3
  })
  const [rotation, setRotation] = useState({
    x: 0.4,
    y: 3.8,
    z: 0
  })

  return (
    <main className={'w-[100%] h-[90vh]'}>
      <Canvas >
        <PerspectiveCamera position={Object.values(position)} rotation={Object.values(rotation)}>
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <Model />
          <OrbitControls />
        </PerspectiveCamera>
      </Canvas>
    </main>
  )
}

function convertToRad(degrees) {
  return degrees * (Math.PI / 180)
}

function convertToDeg(radius) {
  return radius / (Math.PI / 180)
}