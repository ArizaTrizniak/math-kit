import * as React from "react";
import type {IconProps} from "../types";

export const UngroupIcon : React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
})  => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="ungroup_svg__\u0421\u043B\u043E\u0439_1"
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
        ".ungroup_svg__st0{display:none}.ungroup_svg__st1,.ungroup_svg__st2.ungroup_svg__st1{display:inline;stroke-miterlimit:1}.ungroup_svg__st2{stroke-miterlimit:10}.ungroup_svg__st2,.ungroup_svg__st3{display:inline}.ungroup_svg__st4,.ungroup_svg__st6{stroke-miterlimit:10}.ungroup_svg__st6{display:none}"
      }
    </style>
    <path
      d="M13.17 14.05H4.15a.85.85 0 0 1-.85-.85V4.17c0-.47.38-.85.85-.85h9.03c.47 0 .85.38.85.85v9.03c0 .47-.39.85-.86.85z"
      className="ungroup_svg__st4"
    />
    <path
      d="M19.98 20.68H10.7c-.4 0-.73-.33-.73-.73v-9.27c0-.4.33-.73.73-.73h9.27c.4 0 .73.33.73.73v9.27c.01.41-.32.73-.72.73z"
      className="ungroup_svg__st4"
    />
  </svg>
);
