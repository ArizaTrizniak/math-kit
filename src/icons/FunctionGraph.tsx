import * as React from "react";
import type {IconProps} from "../types";
export const FunctionGraphIcon : React.FC<IconProps> = ({
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
      d="M12 5v15M4 12h15M11.98 4.5l.04.09.04.09h-.16l.04-.09zM19.18 12.08l-.09.03-.09.04V12l.09.04zM8 8.071C8 18.701 16.124 18.61 15.999 8"
    />
  </svg>
);
