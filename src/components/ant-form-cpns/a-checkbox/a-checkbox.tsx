import React, { memo } from "react";
import { Checkbox } from "antd";
import { IACheckbox } from "@/components/ant-form-cpns";

export const ACheckbox: React.FC<IACheckbox> = memo((props) => {
  const { options, fieldNames, ...rest } = props ?? {};
  return (
    <Checkbox.Group {...rest}>
      {options?.map((item: any, index: number) => (
        <Checkbox value={item?.[fieldNames?.value ?? "value"]} key={index}>
          {item?.[fieldNames?.label ?? "label"]}
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
});

export default ACheckbox;
