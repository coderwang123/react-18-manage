import React, { memo, useCallback, useEffect } from "react";
import { Col, Form, Row, theme } from "antd";
import type { IModalForm } from "./type";

import AModal from "@/components/ant-comm-cpns/a-modal/a-modal";
import { generateFormItem } from "@/components/page-cpns/generate-item";

export const ModalForm: React.FC<IModalForm> = memo((props) => {
  // console.log("渲染了 --- Modal Form props---", props);

  const {
    gridCol,
    labelWidth,
    formPadding,
    initialValues,
    configList,
    slotCustom,
    handleModalFormSure,
    handleModalFormCancel,
    ...rest
  } = props;

  const gutter = 24;
  const col = gridCol ? 24 / gridCol : 12;
  const { token } = theme.useToken();

  const [form] = Form.useForm();

  const formStyle: React.CSSProperties = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: props?.formPadding ?? "24px 24px 0"
  };

  useEffect(() => {
    // 设置表单的初始值
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const handleModalSure = useCallback(() => {
    // console.log("modal form --- handleOk ---");
    form?.submit?.();
  }, []);
  const onFinish = useCallback((values: any) => {
    // console.log("modal form --- onFinish ---", values);
    handleModalFormSure?.(values);
  }, []);

  const handleModalCancel = useCallback(() => {
    // console.log("modal form --- handleOk ---");
    handleModalFormCancel?.();
  }, []);

  return (
    <AModal {...rest} handleModalSure={handleModalSure} handleModalCancel={handleModalCancel}>
      <Form
        form={form}
        initialValues={initialValues}
        labelCol={{ flex: labelWidth ?? "110px" }}
        labelAlign="right"
        labelWrap
        colon={false}
        scrollToFirstError={true}
        style={formStyle}
        onFinish={onFinish}
        validateTrigger={"onChange"}
      >
        <Row gutter={gutter}>
          {configList?.map((item, i) => {
            return (
              <Col span={item.gridCol ?? col} key={i}>
                {generateFormItem(item)}
              </Col>
            );
          })}
          {slotCustom?.()}
        </Row>
      </Form>
    </AModal>
  );
});

export default ModalForm;
