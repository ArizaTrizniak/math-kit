import * as React from "react";
import type { SVGProps } from "react";
import type {IconProps} from "../types";
export const FrameIcon: React.FC<IconProps> = ({
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
      d="M21 6.255v11.49c0 .696-.481 1.255-1.056 1.255H4.056C3.471 19 3 18.429 3 17.745V6.255C3 5.559 3.481 5 4.056 5h15.888C20.519 4.988 21 5.56 21 6.255Z"
      shapeRendering="crispEdges"
    />
  <path
    d="M5 9V7h2M7.015 17l-2 .015-.015-2M17 7.017 19 7l.017 2M19.01 15.01l-.01 2-2-.01"
  />
  </svg>
);
