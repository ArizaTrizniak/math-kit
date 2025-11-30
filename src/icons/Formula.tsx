import * as React from "react";
import type {IconProps} from "../types";
export const FormulaIcon: React.FC<IconProps> = ({
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
      d="M12 3.3c-8.68.05 0 17.4-8.68 17.4"
    />
    <path
      strokeMiterlimit={10}
      d="M4 8.593c1.87-2.14 6.32 2.36 8.01.3M12.37 12c-3.18 1.5-3.14 6.9 0 8.24M18 12c3.18 1.5 3.14 6.9 0 8.24M13 14c2.727 0 2.605 5 0 5"
    />
    <path strokeMiterlimit={10} d="M17 14c-2.726 0-2.607 5 0 5" />
  </svg>
);
