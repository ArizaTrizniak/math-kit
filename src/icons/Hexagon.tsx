import * as React from "react";
import type {IconProps} from "../types";
export const HexagonIcon: React.FC<IconProps> = ({
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
    <path d="M20 7.5 12 3 4 7.433V17l8 4 8-4z" />
  </svg>
);
