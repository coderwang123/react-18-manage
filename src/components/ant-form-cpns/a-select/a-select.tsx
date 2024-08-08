import React, { memo } from "react";
import StyledSelect from "./style";
import { IASelect } from "@/components/ant-form-cpns";

export const ASelect: React.FC<IASelect> = memo((props) => {
  const {
    fieldNames = {
      label: "label",
      value: "value"
    },
    ...rest
  } = props ?? {};

  return (
    <StyledSelect
      allowClear
      showSearch
      optionFilterProp={fieldNames?.label ?? "label"}
      fieldNames={fieldNames}
      getPopupContainer={(triggerNode) => triggerNode.parentElement || document.body}
      {...rest}
    />
  );
});

export default ASelect;
