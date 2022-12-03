import Link from "next/link";
import React from "react";
import Paused from "./Controls/Pause";
import ModelSwitch from "./Controls/ModelSwitch";

export default function Footer(props: any) {
  return (
    <>
      <footer
        className={
          "w-full h-[10%] flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-6 px-4 md:px-6 pb-4 text-xl"
        }
      >
        <Credit />

        <div className="h-full flex items-center gap-6 lg:gap-10">
          <Paused {...props} />
          <ModelSwitch {...props} />
        </div>
      </footer>
    </>
  );
}

function Credit() {
  return (
    <div className="text-base sm:text-xl lg:text-2xl">
      <Link
        href={"https://github.com/tomcodedthis"}
        target={"_blank"}
        className="font-semibold underline underline-offset-2 opacity-80 hover:opacity-100"
      >
        tomcodedthis
      </Link>
    </div>
  );
}
