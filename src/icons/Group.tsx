import * as React from "react";
import type {IconProps} from "../types";

export const GroupIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="group_svg__\u0421\u043B\u043E\u0439_1"
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
        ".group_svg__st0{display:none}.group_svg__st1,.group_svg__st2.group_svg__st1{display:inline;stroke-miterlimit:1}.group_svg__st2{stroke-miterlimit:10}.group_svg__st2,.group_svg__st3{display:inline}.group_svg__st4,.group_svg__st6{stroke-miterlimit:10}.group_svg__st6{display:none}"
      }
    </style>
    <path
      d="M3.39 13.18v-9.2c0-.31.25-.56.56-.56h9.49c.31 0 .56.25.56.56v5.27c0 .31.25.56.56.56h6.04v10.22c0 .31-.25.56-.56.56h-9.49a.56.56 0 0 1-.56-.56v-5.17a.56.56 0 0 0-.56-.56H3.39z"
      className="group_svg__st4"
    />
  </svg>
);
