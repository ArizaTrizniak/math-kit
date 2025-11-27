import * as React from "react";
import type { IconProps } from "../types";
export const TextIcon:React.FC<IconProps> = ({
     size = 24,
     color = "black",
     strokeWidth = 2,
     ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={size}
    height={size}
    {...props}
  >
    <path
      stroke="#000"
      strokeMiterlimit={10}
      d="M6.25 11.128h3.833M15.833 7.295h4.792M15.833 11.128h4.792M3.375 14.961h17.25M3.375 18.708h17.25M4.881 3.213l6.572.087M8.167 11.042V3.375M5.292 3.375v.958M15.833 3.461l4.6.07M.5 3.375C.5 1.785 2.642.5 5.292.5M23.5 3.375C23.5 1.785 21.358.5 18.708.5M.5 18.708A4.787 4.787 0 0 0 5.292 23.5M23.5 18.708a4.787 4.787 0 0 1-4.792 4.792M11.042 3.375v.958"
    />
  </svg>
);
