import * as React from "react";
import type {IconProps} from "../types";
export const ExportContentIcon: React.FC<IconProps> = ({
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
      d="M8.135 10V4H15m0 0 6 6m-6-6v6h6m0 0v11H8.135v-5.5M11.73 13H3m0 0 2.5 2.5M3 13l2.5-2.5"
    />
  </svg>
);
