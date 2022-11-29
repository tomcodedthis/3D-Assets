import { faRotateLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import React from "react";
import Button from "./Button";

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
      <div className={"h-[70%] flex items-center gap-2"}>
        <Button
          classes="hover:rotate-[-10deg]"
          icon={faRotateLeft}
          click={() => rotate(true)}
        />
        <Button
          classes="hover:rotate-[10deg]"
          icon={faRotateRight}
          click={() => rotate(false)}
        />
      </div>
    </>
  );
}
