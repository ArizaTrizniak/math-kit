import React from "react";
import type { IconProps } from "./types";

export const IconBase: React.FC<IconProps & { children: React.ReactNode }> = (
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      children,
      className,
      ...rest
  }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...rest}
        >
            {children}
        </svg>
    );
};
