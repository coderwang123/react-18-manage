import React, { memo } from "react";
import StyledInputNumber from "./style";
import { IAInputNumber } from "@/components/ant-form-cpns";

export const AInputNumber: React.FC<IAInputNumber> = memo((props) => {
  return <StyledInputNumber id={props?.prop ?? ""} {...props} />;
});

export default AInputNumber;
