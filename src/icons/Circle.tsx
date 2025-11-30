import * as React from "react";
import type {IconProps} from "../types";
export const CircleIcon : React.FC<IconProps> = ({
     size = 24,
     color = "currentColor",
     strokeWidth = 2,
     ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="circle_svg__\u0421\u043B\u043E\u0439_1"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    {...props}
  >
    <style>
      {
        ".circle_svg__st0{display:none}.circle_svg__st1,.circle_svg__st2{fill:none}.circle_svg__st1{display:inline;stroke-miterlimit:1}.circle_svg__st2{stroke-miterlimit:10}.circle_svg__st2,.circle_svg__st3{display:inline}.circle_svg__st4,.circle_svg__st6{fill:none;stroke-miterlimit:10}.circle_svg__st6{display:none}"
      }
    </style>
    <path
      d="M12 19.72c-4.26 0-7.72-3.46-7.72-7.72S7.74 4.28 12 4.28s7.72 3.46 7.72 7.72-3.46 7.72-7.72 7.72z"
      className="circle_svg__st4"
    />
  </svg>
);
