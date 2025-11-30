import * as React from "react";
import type {IconProps} from "../types";
export const AngleMarkIcon: React.FC<IconProps> = ({
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
    <g clipPath="url(#angle-mark_svg__a)">
      <path d="M13.767 5.536 4 17.502l14.7-.046" />
      <path
        strokeMiterlimit={10}
        d="M10.174 10c3.043.976 4.304 4.321 2.254 7.36"
      />
    </g>
    <defs>
      <clipPath id="angle-mark_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
