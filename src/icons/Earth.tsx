import * as React from "react";
import {IconProps} from "../types";

export const EarthIcon : React.FC<IconProps> = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 4v2a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2 2 2 0 1 0 4 0 2 2 0 0 1 2-2h1m0 8h-3a2 2 0 0 0-2 2v2m-4 0v-2a2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-2-2H3"
    />
  </svg>
);