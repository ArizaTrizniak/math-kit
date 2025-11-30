import * as React from "react";
import type {IconProps} from "../types";
export const TriangleIcon: React.FC<IconProps> = ({
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
      d="M12 19.24H3.91c-.18 0-.29-.19-.2-.35l4.05-7.01 4.05-7.01c.09-.15.31-.15.4 0l4.05 7.01 4.05 7.01c.09.15-.02.35-.2.35z"
    />
  </svg>
);