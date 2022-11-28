import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";

export default function Rotation(props: any) {
  const [position, setPostion] = useState(0);

  const rotate = (left: boolean) => {
    let index;

    if (left) {
      index = position + 1 < props.positions.length ? position + 1 : 0;
    } else {
      index =
        position - 1 < 0
          ? (index = props.positions.length - 1)
          : (index = position - 1);
    }

    props.setModel(props.positions[index]);

    setPostion(index);
  };

  return (
    <>
      <div
        className={
          "relative top-[-1rem] h-[full] w-[15vh] grid grid-cols-2 grid-rows-1 place-content-center gap-4"
        }
      >
        <Button
          position="col-start-1 row-start-1 hover:rotate-[-20deg]"
          icon={faRotateLeft}
          // click={() => rotate(true)}
        />
        <Button
          position="col-start-2 row-start-1 hover:rotate-[20deg]"
          icon={faRotateRight}
          // click={() => rotate(false)}
        />
      </div>
    </>
  );
}

function Button(props: any) {
  return (
    <button
      onClick={props.click}
      className={`p-[0.1rem] ${props.position} hover:scale-110 duration-300`}
    >
      <FontAwesomeIcon icon={props.icon} className={`fa-solid ${props.icon}`} />
    </button>
  );
}
