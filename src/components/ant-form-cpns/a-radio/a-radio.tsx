import React, { memo } from "react";
import { Radio } from "antd";
import { IARadio } from "@/components/ant-form-cpns";

export const ARadio: React.FC<IARadio> = memo((props) => {
  const { options, fieldNames, ...rest } = props ?? {};
  return (
    <Radio.Group {...rest}>
      {options?.map?.((item: any, index: number) => (
        <Radio value={item?.[fieldNames?.value ?? "value"]} key={index}>
          {item?.[fieldNames?.label ?? "label"]}
        </Radio>
      ))}
    </Radio.Group>
  );
});

export default ARadio;
