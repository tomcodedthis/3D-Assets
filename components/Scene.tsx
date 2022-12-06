import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrbitControls,
  Loader,
  GizmoHelper,
  GizmoViewport,
  GizmoViewcube,
} from "@react-three/drei";
import Lambo from "./Models/Lambo";
import Porsche from "./Models/Porsche";
import Datsun from "./Models/Datsun";

export default function Scene(props: any) {
  return (
    <main className={"w-full h-[90%] cursor-move"}>
      <Suspense fallback={<Loader />}>
        <Canvas frameloop="demand">
          <ambientLight intensity={4} />
          <pointLight position={[0, 2, 10]} intensity={1.5} />
          <pointLight position={[0, 2, -10]} intensity={1.5} />

          <GizmoHelper
            alignment={`${
              props.smallScreen ? "bottom-center" : "bottom-right"
            }`}
            margin={props.smallScreen ? [90, 90] : [100, 100]}
          >
            <group scale={props.smallScreen ? 0.75 : 1}>
              <GizmoViewcube
                color="grey"
                font="28px Arial, sans-serif"
                hoverColor="white"
              />
            </group>
            <group
              scale={props.smallScreen ? 1.5 : 2}
              position={props.smallScreen ? [-25, -25, -25] : [-35, -35, -35]}
            >
              <GizmoViewport axisHeadScale={0.7} hideNegativeAxes />
            </group>
          </GizmoHelper>

          <PerspectiveCamera makeDefault position={[2, 2, 12]} />
          <OrbitControls
            makeDefault
            rotateSpeed={0.4}
            autoRotate={props.play}
          />

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
