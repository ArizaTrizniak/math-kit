import * as React from "react";
import {IconProps} from "../types";
export const SvgShapes1:React.FC<IconProps> = ({
   size = 24,
   color = "black",
   strokeWidth = 2,
   ...props
  }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="shapes1_svg__\u0421\u043B\u043E\u0439_1"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    width={size}
    height={size}
    {...props}
  >
    <style>
      {
        ".shapes1_svg__st0{display:none}.shapes1_svg__st1{fill:none;stroke:#000;stroke-miterlimit:1}.shapes1_svg__st1,.shapes1_svg__st2{display:inline}.shapes1_svg__st2,.shapes1_svg__st4{fill:none;stroke:#000;stroke-width:.4;stroke-miterlimit:10}"
      }
    </style>
    <path
      d="m13.4 13.4 7.44 7.44M12.71 3.37h7.92v7.92h-7.92z"
      className="shapes1_svg__st4"
    />
    <circle cx={7.33} cy={7.33} r={3.96} className="shapes1_svg__st4" />
    <path
      d="M7.37 13.5c.08-.13.27-.13.35 0l2.01 3.49 2.01 3.49c.08.13-.02.3-.17.3H3.52c-.15 0-.25-.17-.17-.3l2.01-3.49z"
      className="shapes1_svg__st4"
    />
  </svg>
);

