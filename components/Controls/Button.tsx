import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Button(props: any) {
  return (
    <button
      onClick={props.click}
      className={`h-full w-full ${props.classes} opacity-70 hover:opacity-100 hover:scale-110 duration-300`}
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={`fa-solid ${props.icon} w-full h-full`}
      />
    </button>
  );
}
