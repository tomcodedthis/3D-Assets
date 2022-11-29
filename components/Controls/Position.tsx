import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./Button";

export default function Position() {
  return (
    <>
      <div className={"h-[80%] flex items-center gap-2"}>
        <Button icon={faAngleLeft} classes="" />
        <Button icon={faAngleRight} classes="" />
      </div>
    </>
  );
}
