import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Position() {
  return (
    <>
      <div
        className={
          "relative top-[-3rem] h-[14vh] aspect-square grid grid-cols-3 grid-rows-3 place-items-center"
        }
      >
        <Button icon={faArrowUp} position="col-start-2 row-start-1" />
        <Button icon={faArrowRight} position="col-start-3 row-start-2" />
        <Button icon={faArrowDown} position="col-start-2 row-start-3" />
        <Button icon={faArrowLeft} position="col-start-1 row-start-2" />
      </div>
    </>
  );
}

function Button(props: any) {
  return (
    <button
      className={`${props.position} p-[0.1rem] hover:scale-125 duration-300`}
    >
      <FontAwesomeIcon icon={props.icon} className={`w-full`} />
    </button>
  );
}
