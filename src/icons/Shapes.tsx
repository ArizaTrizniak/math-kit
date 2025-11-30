import * as React from "react";
import type {IconProps} from "../types";
export const ShapesIcon: React.FC<IconProps> = ({
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
    {...props}
  >
    <path
      fill ="none"
      strokeMiterlimit={10}
      d="m13 14 7 6M20 4h-7v7h7zM6.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM6.355 14.08a.172.172 0 0 1 .29 0l1.666 2.838 1.666 2.838c.066.106-.017.244-.141.244H3.164c-.124 0-.207-.138-.14-.244l1.665-2.838z"
    />
  </svg>
);
