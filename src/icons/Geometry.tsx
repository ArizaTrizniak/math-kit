import * as React from "react";
import type { SVGProps } from "react";
import type {IconProps} from "../types";
export const GeometryIcon : React.FC<IconProps> = ({
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
    <path strokeMiterlimit={10} d="M6.933 15.5V2L20.5 15.5z" />
    <path
      strokeMiterlimit={10}
      d="M7 12.5h3v3M3.859 8.855c.183-1.422-.234-2.798-.932-3.074s-1.412.652-1.595 2.074.234 2.797.931 3.073c.698.277 1.412-.652 1.596-2.073ZM18.93 6.792c-5.112 1.545-5.39-6.06.07-4.606M14.651 23c.745 0 1.349-.672 1.349-1.5s-.604-1.5-1.349-1.5-1.349.672-1.349 1.5.604 1.5 1.35 1.5ZM12.493 17c0 3.75.9 4.5 0 6"
    />
    <path
      strokeMiterlimit={10}
      d="M4.852 5C4.01 7.993 3.394 11.382 5 10.965"
    />
  </svg>
);
