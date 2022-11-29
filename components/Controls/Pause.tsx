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
      <div className={`${props.play ? "h-[85%]" : "h-[75%]"}`}>
        <Button icon={icon} click={() => play()} />
      </div>
    </>
  );
}
