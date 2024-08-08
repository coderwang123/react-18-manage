import React, { memo } from "react";
import StyledDatePicker from "./style";
import { IADate } from "@/components/ant-form-cpns";

export const ADate: React.FC<IADate> = memo((props) => {
  return (
    <StyledDatePicker
      id={props?.prop ?? ""}
      {...props}
      allowClear
      getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
    />
  );
});

export default ADate;
