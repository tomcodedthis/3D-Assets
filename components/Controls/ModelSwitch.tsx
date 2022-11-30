import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "./Button";

export default function ModelSwitch(props: any) {
  const current = props.currentModel;
  const models = props.modelArray;

  const switchModel = (next: boolean) => {
    next ? nextModel() : prevModel();
  };

  const nextModel = () => {
    current + 1 < models.length
      ? props.setCurrent(current + 1)
      : props.setCurrent(0);
  };

  const prevModel = () => {
    current - 1 < 0
      ? props.setCurrent(models.length - 1)
      : props.setCurrent(current - 1);
  };

  return (
    <>
      <div
        className={"h-[2rem] lg:h-[2.5rem] flex items-center gap-2 lg:gap-4"}
      >
        <Button
          icon={faAngleLeft}
          classes=""
          click={() => switchModel(false)}
        />
        <Button
          icon={faAngleRight}
          classes=""
          click={() => switchModel(true)}
        />
      </div>
    </>
  );
}
