import React from "react";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as UpArrow } from "../../../assets/icons/upArrow.svg";
import { ReactComponent as DownArrow } from "../../../assets/icons/downArrow.svg";

const Icon = ({
  className,
  name,
  width = "2.4rem",
  height = "2.4rem",
  color,
  style,
}) => {
  const icons = {
    Plus,
    UpArrow,
    DownArrow,
  };

  const IconItem = icons[name];

  return (
    <div className={className} style={style}>
      <IconItem width={width} height={height} color={color} />
    </div>
  );
};
export default Icon;
