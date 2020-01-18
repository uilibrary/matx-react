import React from "react";
import { Icon } from "@material-ui/core";

const RectangleAvatar = ({ color = "primary", icon, textIcon, style }) => {
  return (
    <div
      className={`rectangle-box bg-light-${color} flex flex-center flex-middle`}
      style={style}
    >
      {textIcon ? (
        <h5 className={`font-weight-500 m-0 text-${color}`}>{textIcon}</h5>
      ) : (
        <Icon className={`text-${color}`}>{icon}</Icon>
      )}
    </div>
  );
};

export default RectangleAvatar;
