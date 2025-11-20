import * as React from "react";
import type { SVGProps } from "react";
export const TextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M9.5 1.5v20m-3.429 0h6.858M17.5 4.833V1.5h-16v3.333"
    />
  </svg>
);
