import * as React from "react";
import {IconProps} from "../types";

export const ImportContentIcon : React.FC<IconProps> = ({
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
      d="M6.635 10V4H13.5m0 0 6 6m-6-6v6h6m0 0v11H6.635v-5.5m6.23-2.5H4m8.865 0L10.5 10.5m2.365 2.5L10.5 15.5"
    />
  </svg>
);