import * as React from "react";
import {IconProps} from "../types";
export const LineCurveIcon: React.FC<IconProps> = ({
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
      d="M4.535 7.494c-1.029-1.797-.514-3.781 1.03-4.321 1.522-.533 4.713.129 4.713 2.524 0 1.833-6.772 8.984-5.079 11.38.757 1.07 1.129 1.197 1.693 1.197 1.693 0 8.031-10.976 11.286-8.384 2.258 1.796.764 4.087-.564 4.79-1.011.537-7.07 3.278-4.514 5.99 1.128 1.198 5.643-1.198 7.9-1.883"
    />
  </svg>
);
