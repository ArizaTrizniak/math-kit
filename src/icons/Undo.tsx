import * as React from "react";
import type { SVGProps } from "react";
export const UndoIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      d="M1 2.25V8.5h6.563M22 11c-.653-5.625-4.42-10-10.5-10-3.582 0-7.781 2.835-9.573 6.875"
    />
  </svg>
);
