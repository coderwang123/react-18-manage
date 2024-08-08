import React, { memo } from "react";
import { ISvg } from "./type";
import classNames from "classnames";

export const SvgSysOrg: React.FC<ISvg> = memo((props) => {
  return (
    <span className={classNames(["anticon", " anticon-desktop", "ant-menu-item-icon"])}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="12364"
        width={props?.width ?? "1em"}
        height={props?.height ?? "1em"}
      >
        <path
          d="M361.99 98.4m18.54 0l262.92 0q18.54 0 18.54 18.54l0 262.92q0 18.54-18.54 18.54l-262.92 0q-18.54 0-18.54-18.54l0-262.92q0-18.54 18.54-18.54Z"
          fill={props?.color ?? "currentColor"}
          p-id="12365"
        />
        <path
          d="M98.01 728.47m18.54 0l162.92 0q18.54 0 18.54 18.54l0 162.92q0 18.54-18.54 18.54l-162.92 0q-18.54 0-18.54-18.54l0-162.92q0-18.54 18.54-18.54Z"
          fill={props?.color ?? "currentColor"}
          p-id="12366"
        />
        <path
          d="M413.01 728.47m18.54 0l162.92 0q18.54 0 18.54 18.54l0 162.92q0 18.54-18.54 18.54l-162.92 0q-18.54 0-18.54-18.54l0-162.92q0-18.54 18.54-18.54Z"
          fill={props?.color ?? "currentColor"}
          p-id="12367"
        />
        <path
          d="M728.01 728.47m18.54 0l162.92 0q18.54 0 18.54 18.54l0 162.92q0 18.54-18.54 18.54l-162.92 0q-18.54 0-18.54-18.54l0-162.92q0-18.54 18.54-18.54Z"
          fill={props?.color ?? "currentColor"}
          p-id="12368"
        />
        <path
          d="M202.34 744.08h-20V564.72a30.28 30.28 0 0 1 30.25-30.25h600a30.28 30.28 0 0 1 30.24 30.25v177.83h-20V564.72a10.26 10.26 0 0 0-10.24-10.25h-600a10.26 10.26 0 0 0-10.25 10.25z"
          fill={props?.color ?? "currentColor"}
          p-id="12369"
        />
        <path d="M502.01 395.57h20v343.91h-20z" fill={props?.color ?? "currentColor"} p-id="12370" />
      </svg>
    </span>
  );
});
export default SvgSysOrg;
