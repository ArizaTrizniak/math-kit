import * as React from "react";
import type {IconProps} from "../types";
export const LandscapeIcon: React.FC<IconProps> = ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2,
      ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="landscape_svg__\u0421\u043B\u043E\u0439_1"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    {...props}
  >
    <style>
      {
        ".landscape_svg__st0{display:none}.landscape_svg__st1{fill:none;stroke-miterlimit:1}.landscape_svg__st1,.landscape_svg__st2{display:inline}.landscape_svg__st2,.landscape_svg__st4{fill:none;stroke-miterlimit:10}"
      }
    </style>
    <path
      d="M20.63 7.38v9.25c0 .56-.46 1.01-1.01 1.01H4.43c-.56 0-1.01-.46-1.01-1.01V7.38c0-.56.46-1.01 1.01-1.01h15.19c.55-.01 1.01.45 1.01 1.01z"
      className="landscape_svg__st4"
    />
  </svg>
);
