import { faRotateLeft, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { degToRad } from "three/src/math/MathUtils";
import Button from "./Button";

export default function Rotation(props: any) {
  const rotate = (left: boolean) => {
    left
      ? props.setOrbitRotation({
          z: degToRad((props.orbitRotation.z -= 45)),
          ...props.orbitRotation,
        })
      : props.setOrbitRotation({
          z: degToRad((props.orbitRotation.z += 45)),
          ...props.orbitRotation,
        });

    props.setOrbit({
      rotation: [
        degToRad(props.orbitRotation.x),
        degToRad(props.orbitRotation.y),
        degToRad(props.orbitRotation.z),
      ],
    });
  };

  return (
    <>
      <div className={"h-[65%] flex items-center gap-2"}>
        <Button
          classes="hover:rotate-[-10deg]"
          icon={faRotateLeft}
          // click={() => rotate(true)}
        />
        <Button
          classes="hover:rotate-[10deg]"
          icon={faRotateRight}
          // click={() => rotate(false)}
        />
      </div>
    </>
  );
}
