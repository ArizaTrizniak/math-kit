import * as React from "react";
import type {IconProps} from "../types";
export const ArcIcon: React.FC<IconProps> = ({
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
    <g clipPath="url(#arc_svg__a)">
      <path d="m4 17.502 9.881-12.05S18 6.5 19 11s-.742 6.554-.742 6.554z" />
      <path
        strokeMiterlimit={10}
        d="M9.232 10.794c1.957.438 3.417 3.339 2.913 6.46"
      />
    </g>
    <defs>
      <clipPath id="arc_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
