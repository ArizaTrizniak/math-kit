import * as React from "react";
import type {IconProps} from "../types";
export const RectanglesIcon: React.FC<IconProps> = ({
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
      d="M15 2.25H3a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75h12a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75M8.25 10.5H3a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75h5.25A.75.75 0 0 0 9 15v-3.75a.75.75 0 0 0-.75-.75M15 10.5h-2.25a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75v-3.75a.75.75 0 0 0-.75-.75"
    />
  </svg>
);
