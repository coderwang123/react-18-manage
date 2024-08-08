import React, { memo } from "react";
import { ISvg } from "./type";
import classNames from "classnames";

export const SvgSysRole: React.FC<ISvg> = memo((props) => {
  return (
    <span className={classNames(["anticon", " anticon-desktop", "ant-menu-item-icon"])}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="27489"
        width={props?.width ?? "1em"}
        height={props?.height ?? "1em"}
      >
        <path
          d="M152 453.106L494.497 601.59a44 44 0 0 0 34.444 0.238l0.56-0.238 342.497-148.483L872 779c0 99.411-161.177 217-360 217-196.834 0-356.773-115.249-359.952-214.012L152 779V453.106zM532.64 32.229l457.26 242.896c21.461 11.4 29.617 38.039 18.217 59.5a44 44 0 0 1-21.356 19.728L529.502 552.59a44 44 0 0 1-35.004 0L37.238 354.353c-22.295-9.666-32.534-35.576-22.868-57.871a44 44 0 0 1 19.728-21.357L491.358 32.23a44 44 0 0 1 41.283 0z"
          fill={props?.color ?? "currentColor"}
          p-id="27490"
        />
      </svg>
    </span>
  );
});
export default SvgSysRole;
