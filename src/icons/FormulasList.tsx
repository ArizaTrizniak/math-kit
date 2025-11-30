import * as React from "react";
import {IconProps} from "../types";
export const FormulasListIcon: React.FC<IconProps> = ({
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
      d="M9.174 8C5 8.022 9.174 16.04 5 16.04"
    />
    <path
      strokeMiterlimit={10}
      d="M5.5 10.25c.814-.904 2.755.996 3.496.121M14.727 9.728c2.846 0 2.719 4.02 0 4.02"
    />
    <path
      strokeMiterlimit={10}
      d="M18.9 9.728c-2.852 0-2.71 4.02 0 4.02"
    />
    <path
      d="M3 19.516V5s1.85-1 4-1c1.744 0 4.5 1 5 1s3.256-1 5-1c2.15 0 4 1 4 1v14.516c-3.28-1.695-8.5.484-9 .484s-6.28-2.179-9-.484Z"
    />
    <path
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M12 5v14"
    />
  </svg>
);
