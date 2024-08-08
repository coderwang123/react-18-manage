import React, { memo } from "react";
import { ISvg } from "./type";
import classNames from "classnames";

export const SvgAudit: React.FC<ISvg> = memo((props) => {
  return (
    <span className={classNames(["anticon", " anticon-desktop", "ant-menu-item-icon"])}>
      <svg
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="45369"
        width={props?.width ?? "1em"}
        height={props?.height ?? "1em"}
      >
        <path
          d="M963.84 1024H60.16C26.88 1024 0 995.285 0 960s26.923-64 60.16-64h903.68c33.195 0 60.16 28.715 60.16 64 0 35.413-26.965 64-60.16 64zM692.352 510.464a270.035 270.035 0 0 1-28.16 20.565 85.419 85.419 0 0 0-37.803 72.278c0 48.256 38.699 87.253 86.315 87.253h169.088a140.8 140.8 0 0 1 100.864 42.368c25.77 25.856 40.661 61.568 41.301 99.115H0v-0.086C0 753.75 62.635 690.475 139.904 690.56h172.8a86.784 86.784 0 0 0 86.187-87.253 85.547 85.547 0 0 0-38.016-72.278 289.152 289.152 0 0 1-128.512-291.84C251.776 124.501 337.45 32.981 449.536 7.211a282.197 282.197 0 0 1 240.64 55.594A288.725 288.725 0 0 1 797.099 287.83a288.17 288.17 0 0 1-104.107 222.336c-0.17 0.128-0.427 0.214-0.64 0.299z"
          fill={props?.color ?? "currentColor"}
          p-id="45370"
        />
      </svg>
    </span>
  );
});
export default SvgAudit;
