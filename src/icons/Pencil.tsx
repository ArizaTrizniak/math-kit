import * as React from "react";
import type {IconProps} from "../types";
export const PencilIcon : React.FC<IconProps> = ({
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
      d="M7 20.93c2.99-3.76 22.96 1.034 9.229-8.93M13 7 5 2.5l-1.5 3L11 11"
    />
    <path
      strokeMiterlimit={2.613}
      d="m13.523 9.826-.576 1.128L11.12 11c-.497.023.715-2.394.715-2.394s1.172-2.048 1.39-1.519L14 8.997z"
    />
    <path
      strokeMiterlimit={10}
      d="m14 9 .5.963L15 11h-2l.5-1.037z"
    />
  </svg>
);
