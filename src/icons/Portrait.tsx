import * as React from "react";
import type {IconProps} from "../types";
export const PortraitIcon: React.FC<IconProps> = ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="portrait_svg__\u0421\u043B\u043E\u0439_1"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    {...props}
  >
    <style>
      {
        ".portrait_svg__st0{display:none}.portrait_svg__st1{fill:none;stroke-miterlimit:1}.portrait_svg__st1,.portrait_svg__st2{display:inline}.portrait_svg__st2,.portrait_svg__st4{fill:none;stroke-miterlimit:10}"
      }
    </style>
    <path
      d="M16.65 20.61H7.4c-.56 0-1.01-.46-1.01-1.01V4.41c0-.56.46-1.01 1.01-1.01h9.25c.56 0 1.01.46 1.01 1.01V19.6c0 .55-.46 1.01-1.01 1.01z"
      className="portrait_svg__st4"
    />
  </svg>
);
