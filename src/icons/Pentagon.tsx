import * as React from "react";
import type {IconProps} from "../types";
export const PentagonIcon: React.FC<IconProps> = ({
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
    <path d="M21 10.448 12 3l-9 7.366L6.375 21h10.688z" />
  </svg>
);
