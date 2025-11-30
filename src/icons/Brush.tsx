import * as React from "react";
import type {IconProps} from "../types";
export const BrushIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
})  => (
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
      d="m5.123 18.114 13-.114-.062-7a2 2 0 0 0-2.018-1.983l-3 .027-.03-3.5a1.5 1.5 0 1 0-3 .026l.03 3.5-3 .026a2 2 0 0 0-1.982 2.018z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m17.57 12.004-12 .105M7.618 17.592l-.017-2M10.118 17.57l-.03-3.5M15.618 17.522l-.009-1"
    />
  </svg>
);
