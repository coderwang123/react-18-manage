import React, { memo } from "react";
import StyledTimePicker from "./style";
import { IATime } from "@/components/ant-form-cpns";

export const ATime: React.FC<IATime> = memo((props) => {
  return (
    <StyledTimePicker
      id={props?.prop ?? ""}
      {...props}
      allowClear
      getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
    />
  );
});

export default ATime;
