import Link from "next/link";
import React from "react";
import Paused from "./Controls/Pause";
import Position from "./Controls/Position";
import Rotation from "./Controls/Rotation";

export default function Footer(props: any) {
  return (
    <>
      <footer
        className={
          "w-full h-[10vh] flex justify-between items-center gap-2 px-8 text-xl font-medium"
        }
      >
        <Credit />
        <Paused {...props} />

        <div className="h-full flex gap-12">
          <Rotation {...props} />
          <Position {...props} />
        </div>
      </footer>
    </>
  );
}

function Credit() {
  return (
    <div className="relative top-[-0.5rem] flex gap-2 bg-white">
      <Link
        href={"https://github.com/tomcodedthis"}
        className="font-bold underline underline-offset-2"
      >
        tomcodedthis
      </Link>
    </div>
  );
}
