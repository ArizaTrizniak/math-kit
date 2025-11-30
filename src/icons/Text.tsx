import * as React from "react";
import type {IconProps} from "../types";
export const TextIcon: React.FC<IconProps> = ({
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
    {...props}
  >
    <g strokeMiterlimit={10} clipPath="url(#text_svg__a)">
      <path d="M14 4h8M14 8h8M14 12h8M2 16h20M2 20h20M3 4h8M7 12V4M5 12h4" />
    </g>
    <defs>
      <clipPath id="text_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
