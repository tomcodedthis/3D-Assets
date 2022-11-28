import React from "react";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { degToRad } from "three/src/math/MathUtils";
import Footer from "../components/Footer";
import Scene from "../components/Scene";
import THREE from "three";

export default function Home() {
  // const rotation = new THREE.Euler(degToRad(110), degToRad(178), degToRad(5), "XYZ")
  // const rotation = new THREE.Vector3(-2, 1, 0)
  const [positions] = useState({
    rotation: [degToRad(110), degToRad(178), degToRad(5)],
    position: [-2, 1, 0],
  });
  const [model, setModel] = useState(positions);
  const [camera, setCamera] = useState({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  });
  const [play, setPlay] = useState(true);

  return (
    <>
      <Head>
        <title>3D Assets Demo</title>
        <meta name="description" content="3D Assets demo by tomcodedthis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        src="https://kit.fontawesome.com/e31209f1bd.js"
        crossOrigin="anonymous"
      />

      <Scene
        camera={camera}
        setCamera={setCamera}
        model={model}
        setModel={setModel}
        positions={positions}
        play={play}
      />

      <Footer
        camera={camera}
        setCamera={setCamera}
        model={model}
        setModel={setModel}
        positions={positions}
        play={play}
        setPlay={setPlay}
      />
    </>
  );
}
