import React, { memo } from "react";
import StyledInput from "./style";
import { IAInput } from "@/components/ant-form-cpns";

export const AInput: React.FC<IAInput> = memo((props) => {
  // console.log("a-input props ===>", props);
  // console.log("AInput props ====>", props);
  const { onChange } = props;
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.value = e.target.value?.trim();
    if (onChange) onChange(e.target.value.length > 0 ? e.target.value : undefined);
  };
  return <StyledInput id={props?.prop ?? ""} allowClear {...props} onBlur={handleBlur} autoComplete="off" />;
});

export default AInput;
