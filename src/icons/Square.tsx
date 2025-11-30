import * as React from "react";
import type {IconProps} from "../types";
export const SquareIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="square_svg__\u0421\u043B\u043E\u0439_1"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    fill="none"
    {...props}
  >
    <style>
      {
        ".square_svg__st0{display:none}.square_svg__st1,.square_svg__st2{fill:none}.square_svg__st1{display:inline;stroke-miterlimit:1}.square_svg__st2{stroke-miterlimit:10}.square_svg__st2,.square_svg__st3{display:inline}.square_svg__st4,.square_svg__st6{fill:none;stroke-miterlimit:10}.square_svg__st6{display:none}"
      }
    </style>
    <path
      d="M19.16 19.72H4.84c-.31 0-.55-.25-.55-.55V4.84c0-.31.25-.55.55-.55h14.33c.31 0 .55.25.55.55v14.33c0 .3-.25.55-.56.55z"
      className="square_svg__st4"
    />
  </svg>
);
