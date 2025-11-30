import * as React from "react";
import type {IconProps} from "../types";
export const DeleteIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="delete_svg__\u0421\u043B\u043E\u0439_1"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    {...props}
  >
    <style>
      {
        ".delete_svg__st0{display:none}.delete_svg__st1{fill:none;stroke-miterlimit:1}.delete_svg__st1,.delete_svg__st2{display:inline}.delete_svg__st2,.delete_svg__st4{fill:none;stroke-miterlimit:10}"
      }
    </style>
    <path
      d="M6.03 6.36h11.96M9.86 5.46c0-1.19.96-2.15 2.15-2.15M14.16 5.46c0-1.19-.96-2.15-2.15-2.15M10.75 5.46h2.52M5.41 7.25l1.06 11.39M18.61 7.25l-1.07 11.39M17.55 18.54c-.18 2.15-.82 2.16-2.25 2.16M4.62 7.24H19.3M8.35 9.58l.81 8.78M15.67 9.7l-.82 8.77M12.01 9.45v9.04M6.46 18.53c.18 2.15.83 2.16 2.25 2.16M8.47 20.7h7.04"
      className="delete_svg__st4"
    />
  </svg>
);
