import Head from "next/head";
import Link from "next/link";
import Scene from "../components/Scene";

export default function Home() {
  return (
    <>
      <Head>
        <title>3D Assets Demo</title>
        <meta name="description" content="3D Assets demo by tomcodedthis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Scene />

      <footer
        className={
          "w-full h-[10vh] flex justify-center items-center gap-2 text-xl font-medium"
        }
      >
        Made with 🔥 by
        <Link
          href={"https://github.com/tomcodedthis"}
          className="font-bold underline underline-offset-2"
        >
          tomcodedthis
        </Link>
      </footer>
    </>
  );
}
