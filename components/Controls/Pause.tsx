import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";

export default function Paused(props: any) {
  const [icon, setIcon] = useState(faPause);
  const play = () => {
    props.setPlay(props.play ? false : true);
    setIcon(props.play ? faPlay : faPause);
  };

  return (
    <>
      <div className={"relative top-[-1rem] h-[10vh] w-[5vh]"}>
        <Button icon={icon} click={() => play()} />
      </div>
    </>
  );
}

function Button(props: any) {
  return (
    <button
      onClick={props.click}
      className={`h-full w-full p-[0.1rem] hover:scale-110 duration-300`}
    >
      <FontAwesomeIcon icon={props.icon} className={`fa-solid ${props.icon}`} />
    </button>
  );
}
