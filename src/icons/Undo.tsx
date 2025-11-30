import * as React from "react";
import type {IconProps} from "../types";
export const UndoIcon: React.FC<IconProps> = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8v5.695m0 0h5.925m-5.925 0c2.298-1.983 4.427-4.227 7.649-4.663a9.2 9.2 0 0 1 5.539.983A8.7 8.7 0 0 1 21 14"
    />
  </svg>
);
