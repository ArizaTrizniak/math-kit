import * as React from "react";
import type {IconProps} from "../types";
export const PolylineIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    fill="none"
    {...props}
  >
    <path
      strokeMiterlimit={10}
      d="M5 20V4.571l6.708 8.572L13.919 4 20 4.571V11"
    />
  </svg>
);
