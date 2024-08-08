import React, { memo } from "react";
import StyledDateRangePicker from "./style";
import { IADateRange } from "@/components/ant-form-cpns";

export const ADateRange: React.FC<IADateRange> = memo((props) => {
  const { defaultValue } = props;

  return (
    <StyledDateRangePicker
      popupClassName={"custom-date-picker-dropdown"}
      showTime={{ format: "HH:mm:ss" }}
      format="YYYY-MM-DD HH:mm:ss"
      allowClear
      defaultValue={defaultValue}
      getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
      {...props}
    />
  );
});

export default ADateRange;
