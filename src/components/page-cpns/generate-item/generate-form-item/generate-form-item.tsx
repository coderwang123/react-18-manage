import React from "react";
import {
  AInput,
  AInputNumber,
  ASelect,
  ATime,
  ATimeRange,
  ADate,
  ADateRange,
  ACascader,
  ATreeSelect,
  ARadio,
  ACheckbox,
  ARate,
  ASlider,
  ATextarea
} from "@/components/ant-form-cpns";

import type { IFormItem } from "./type";
import withAntdFormItem from "../../../../hoc/with-antd-form-item";

export function generateFormItem(props: IFormItem) {
  // console.log("生成 generate FormItem --- props ---", props);
  const { type } = props;
  function getItem() {
    switch (type) {
      case "a-input":
        return withAntdFormItem(props)(AInput);

      case "a-input-number":
        return withAntdFormItem(props)(AInputNumber);

      case "a-textarea":
        return withAntdFormItem(props)(ATextarea);

      case "a-select":
        return withAntdFormItem(props)(ASelect);

      case "a-time":
        return withAntdFormItem(props)(ATime);

      case "a-time-range":
        return withAntdFormItem(props)(ATimeRange);

      case "a-date":
        return withAntdFormItem(props)(ADate);

      case "a-date-range":
        return withAntdFormItem(props)(ADateRange);

      case "a-cascader":
        return withAntdFormItem(props)(ACascader);

      case "a-tree-select":
        return withAntdFormItem(props)(ATreeSelect);

      case "a-radio":
        return withAntdFormItem(props)(ARadio);

      case "a-checkbox":
        return withAntdFormItem(props)(ACheckbox);

      case "a-rate":
        return withAntdFormItem(props)(ARate);

      case "a-slider":
        return withAntdFormItem(props)(ASlider);
      default:
        return <></>;
    }
  }
  return getItem();
  // <Form.Item label={label} name={prop} htmlFor={prop} rules={[{ required: required }]}>
  //   {getItem()}
  // </Form.Item>
}
