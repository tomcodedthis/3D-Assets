import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import Footer from "../components/Footer";
import Scene from "../components/Scene";

export default function Home() {
  const [positions] = useState([
    {
      rotation: {
        x: -0.7,
        y: 0,
        z: 3.125,
      },
      position: {
        x: -2,
        y: 1.5,
        z: -3,
      },
    },
    {
      rotation: {
        x: 5.3,
        y: 0,
        z: 2.4,
      },
      position: {
        x: -0.5,
        y: 2.5,
        z: -2.5,
      },
    },
    {
      rotation: {
        x: 5.3,
        y: 0,
        z: -2.4,
      },
      position: {
        x: -3,
        y: 1,
        z: 0,
      },
    },
  ]);
  const [model, setModel] = useState(positions[0]);
  const [camera, setCamera] = useState({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
  });

  return (
    <>
      <Head>
        <title>3D Assets Demo</title>
        <meta name="description" content="3D Assets demo by tomcodedthis" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://kit.fontawesome.com/e31209f1bd.js"
          crossorigin="anonymous"
        />
      </Head>

      <Scene
        camera={camera}
        setCamera={setCamera}
        model={model}
        setModel={setModel}
        positions={positions}
      />

      <Footer
        camera={camera}
        setCamera={setCamera}
        model={model}
        setModel={setModel}
        positions={positions}
      />
    </>
  );
}
