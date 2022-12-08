import Link from "next/link";
import React, { useState } from "react";
import Paused from "./Controls/Pause";
import ModelSwitch from "./Controls/ModelSwitch";
import Mode from "./Controls/Mode";
import UploadBtn from "./Controls/Upload/UploadBtn";
import UploadBox from "./Controls/Upload/UploadBox";

export default function Footer(props: any) {
  const [uploadShown, setUploadShown] = useState(true);
  return (
    <>
      <footer
        className={
          "z-10 w-full h-[75px] flex flex-col-reverse sm:flex-row justify-between items-center gap-4 sm:gap-6 px-4 md:px-6 pb-4 text-xl"
        }
      >
        <UploadBtn darkMode={props.darkMode} setUploadShown={setUploadShown} />
        <UploadBox
          darkMode={props.darkMode}
          uploadShown={uploadShown}
          setUploadShown={setUploadShown}
        />

        <Credit />

        <div className="h-full flex items-center gap-6 lg:gap-10">
          <Paused {...props} />
          <ModelSwitch {...props} />
          <Mode darkMode={props.darkMode} setDarkMode={props.setDarkMode} />
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
