import * as React from "react";
import type { SVGProps } from "react";
import type {IconProps} from "../types";
export const FrameIcon: React.FC<IconProps> = ({
    size = 24,
    color = "currentColor",
    strokeWidth = 2,
    ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke={color}
    width={size}
    height={size}
    strokeWidth={strokeWidth}
    fill="none"
    {...props}
  >
    <g clipPath="url(#frame_svg__a)">
      <g filter="url(#frame_svg__b)">
        <path
          strokeMiterlimit={10}
          d="M21 6.255v11.49c0 .696-.481 1.255-1.056 1.255H4.056C3.471 19 3 18.429 3 17.745V6.255C3 5.559 3.481 5 4.056 5h15.888C20.519 4.988 21 5.56 21 6.255Z"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M5 9V7h2M7.015 17l-2 .015-.015-2M17 7.017 19 7l.017 2M19.01 15.01l-.01 2-2-.01"
      />
    </g>
    <defs>
      <clipPath id="frame_svg__a">
        <path d="M0 0h24v24H0z" />
      </clipPath>
      <filter
        id="frame_svg__b"
        width={27}
        height={23}
        x={-1.5}
        y={4.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_38_30" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_38_30"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
