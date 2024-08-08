import React, { memo } from "react";
import { ISvg } from "./type";
import classNames from "classnames";

export const SvgAuditRiskSecond: React.FC<ISvg> = memo((props) => {
  return (
    <span className={classNames(["anticon", " anticon-desktop", "ant-menu-item-icon"])}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="152224"
        width={props?.width ?? "1em"}
        height={props?.height ?? "1em"}
      >
        <path
          d="M128 480v32c0-10.784 0.736-21.408 1.6-32H128zM128 544h1.6c-0.864-10.56-1.6-21.216-1.6-32v32zM894.368 480c0.896 10.592 1.632 21.216 1.632 32v-32h-1.632zM896 544v-32c0 10.784-0.736 21.44-1.632 32H896z"
          p-id="152225"
          fill={props?.color ?? "currentColor"}
        />
        <path
          d="M217.824 312.224l316.8 316.768-90.56 90.496-316.736-316.768z"
          p-id="152226"
          fill={props?.color ?? "currentColor"}
        />
        <path
          d="M806.176 176.48l90.496 90.496L444.16 719.488l-90.528-90.496z"
          p-id="152227"
          fill={props?.color ?? "currentColor"}
        />
        <path
          d="M128 864h768v64H128zM128 768h768v64H128z"
          p-id="152228"
          fill={props?.color ?? "currentColor"}
        />
      </svg>
    </span>
  );
});
export default SvgAuditRiskSecond;