import React, { memo } from "react";
import { ISvg } from "./type";
import classNames from "classnames";

export const SvgSysUser: React.FC<ISvg> = memo((props) => {
  return (
    <span className={classNames(["anticon", " anticon-desktop", "ant-menu-item-icon"])}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="19357"
        width={props?.width ?? "1em"}
        height={props?.height ?? "1em"}
      >
        <path
          d="M896 1024c0-247.424-136.576-320-384-320s-384 72.576-384 320H0c0-318.144 193.856-448 512-448s512 129.856 512 448h-128zM512 512a256 256 0 1 1 256-256 256 256 0 0 1-256 256z m0-384a128 128 0 1 0 128 128 128 128 0 0 0-128-128z"
          p-id="19358"
          fill={props?.color ?? "currentColor"}
        />
      </svg>
    </span>
  );
});
export default SvgSysUser;
