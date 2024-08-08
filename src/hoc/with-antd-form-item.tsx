import React from "react";
import { IFormItem } from "@/components/page-cpns/generate-item/generate-form-item/type";
import { Form } from "antd";

export function withAntdFormItem(props: IFormItem) {
  return (OriginalComponent: React.FunctionComponent<any> | React.ComponentClass<any>) => {
    const { type, label, prop, required, rules, gridCol } = props;

    let placeholder: string | [string, string] = "";
    let requiredMsg: string = "";

    if (type === "a-input" || type === "a-input-number" || type === "a-textarea") {
      placeholder = `请输入${props.label}`;
      requiredMsg = required ? `请输入${props.label}` : "";
    }

    if (type === "a-time-range") {
      placeholder = ["请选择开始时间", "请选择结束时间"];
      requiredMsg = required ? `请选择开始时间-结束时间` : "";
    }
    if (type === "a-date-range") {
      placeholder = ["请选择开始日期", "请选择结束日期"];
      requiredMsg = required ? `请选择开始日期-结束日期` : "";
    }

    if (type?.includes("select") || type == "a-cascader") {
      placeholder = `请选择${props.label}`;
      requiredMsg = required ? `请选择${props.label}` : "";
    }

    const commStyle = {
      style: { width: "100%" }
    };

    // console.log("hoc_a_props ===> ", rest);

    // 匹配 config
    let configKey: string = "";

    Object.keys(props).forEach((key) => {
      if (key.includes("configA")) {
        configKey = key;
      }
    });

    // console.log("props?.[configKey]", props?.[configKey]);

    // 拿到 childPorps 注入进去
    const childProps = {
      placeholder,
      prop,
      ...commStyle, // 注入 style
      ...props?.[configKey]
    };

    return (
      <Form.Item
        label={label}
        name={prop}
        htmlFor={prop}
        required={required}
        rules={[{ required: required ?? false, message: requiredMsg }, ...(props!.rules ?? [])]}
      >
        <OriginalComponent {...childProps} />
      </Form.Item>
    );
  };
}

// 使用高阶组件
export default withAntdFormItem;
