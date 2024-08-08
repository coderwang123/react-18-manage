import React, { memo } from "react";
import StyledTimeRangePicker from "./style";
import { IATimeRange } from "@/components/ant-form-cpns";

export const ATimeRange: React.FC<IATimeRange> = memo((props) => {
  return (
    <StyledTimeRangePicker
      id={props?.prop ?? ""}
      {...props}
      allowClear
      getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
    />
  );
});

export default ATimeRange;
