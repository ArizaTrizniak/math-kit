import * as React from "react";
import type {IconProps} from "../types";
export const MathSymbolsIcon: React.FC<IconProps> = ({
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
      d="M3 21c7.773-.04.818-7.844 6-8"
    />
    <path
      fill="#000"
      strokeMiterlimit={10}
      d="M12 4.057 12.171 4l1.19 2.594h4.66L19.208 4l.181.057L15.804 12h-.209zm1.436 2.708 2.254 4.987 2.254-4.996z"
    />
    <path
      strokeMiterlimit={10}
      d="M12 16.698c2.776-2.231 4.813 1.794 7-.35M14 16v5"
    />
    <path
      strokeMiterlimit={10}
      d="M17 17c0 4 0 4.007 2 4M5.95 4c-4.035.01-3.885 3.01.17 3M5.95 7H9M5.95 4H9M9 10H3"
    />
  </svg>
);
