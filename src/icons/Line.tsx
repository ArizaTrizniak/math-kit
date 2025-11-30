import * as React from "react";
import type {IconProps} from "../types";
export const LineIcon : React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="line_svg__\u0421\u043B\u043E\u0439_1"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    {...props}
  >
    <style>
      {
        ".line_svg__st0{display:none}.line_svg__st1,.line_svg__st2{fill:none}.line_svg__st1{display:inline;stroke-miterlimit:1}.line_svg__st2{stroke-miterlimit:10}.line_svg__st2,.line_svg__st3{display:inline}.line_svg__st4{fill:none;stroke-miterlimit:10}"
      }
    </style>
    <path d="M3.18 20.82 20.82 3.18" className="line_svg__st4" />
  </svg>
);
