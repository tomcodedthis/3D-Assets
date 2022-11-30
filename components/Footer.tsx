import Link from "next/link";
import React from "react";
import Paused from "./Controls/Pause";
import Rotation from "./Controls/Rotation";
import ModelSwitch from "./Controls/ModelSwitch";

export default function Footer(props: any) {
  return (
    <>
      <footer
        className={
          "w-full h-[10vh] flex justify-between items-center gap-2 px-6 pb-4 text-xl font-medium"
        }
      >
        <Credit />

        <div className="h-full flex items-center gap-10">
          <Paused {...props} />
          <Rotation {...props} />
          <ModelSwitch {...props} />
        </div>
      </footer>
    </>
  );
}

function Credit() {
  return (
    <div className="">
      <Link
        href={"https://github.com/tomcodedthis"}
        className="font-bold underline underline-offset-2"
      >
        tomcodedthis
      </Link>
    </div>
  );
}
