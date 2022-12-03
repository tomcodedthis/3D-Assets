import React, { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useState } from "react";
import { degToRad } from "three/src/math/MathUtils";
import Footer from "../components/Footer";
import Scene from "../components/Scene";

export default function Home() {
  const [smallScreen, setScreen] = useState(true);
  const [play, setPlay] = useState(true);
  const [currentModel, setCurrent] = useState(0);
  const [modelArray] = useState(["datsun", "lambo", "porsche"]);
  const [defaultPosition] = useState([
    {
      position: [-2, 1, 0],
      rotation: [degToRad(110), degToRad(178), degToRad(5)],
      scale: 1,
    },
    {
      position: [0.2, 1, 0],
      rotation: [degToRad(290), degToRad(0), degToRad(2)],
      scale: 1.2,
    },
    {
      position: [0.2, 1, 0],
      rotation: [degToRad(290), degToRad(0), degToRad(4)],
      scale: 0.004,
    },
  ]);

  const setScreenSize = () => {
    window.innerWidth < 640 ? setScreen(true) : setScreen(false);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, [setScreenSize]);

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

      <div className="h-[100vh]">
        <Scene
          smallScreen={smallScreen}
          play={play}
          currentModel={currentModel}
          defaultPosition={defaultPosition}
        />

        <Footer
          play={play}
          setPlay={setPlay}
          currentModel={currentModel}
          setCurrent={setCurrent}
          modelArray={modelArray}
        />
      </div>
    </>
  );
}
