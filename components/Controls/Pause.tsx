import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Button from "./Button";

export default function Paused(props: any) {
  const [icon, setIcon] = useState(faPause);
  const play = () => {
    props.setPlay(props.play ? false : true);
    setIcon(props.play ? faPlay : faPause);
  };

  return (
    <>
      <div
        className={`${
          props.play ? "h-[2rem] lg:h-[2.5rem]" : "h-[1.7rem] lg:h-[2.1rem]"
        } flex items-center`}
      >
        <Button icon={icon} click={() => play()} />
      </div>
    </>
  );
}
