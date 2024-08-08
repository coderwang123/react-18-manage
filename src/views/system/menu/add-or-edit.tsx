import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Col, Form, Row, theme } from "antd";

import AModal from "@/components/ant-comm-cpns/a-modal/a-modal";
import type { IModalForm } from "@/components/page-cpns/modal-form/type";

import { generateFormItem } from "@/components/page-cpns/generate-item";
import type { IFormItem } from "@/components/page-cpns/generate-item";

const AddOrEdit: React.FC<IModalForm> = (props) => {
  const {
    gridCol,
    labelWidth,
    formPadding,
    initialValues,
    configList,
    moreConfigList,
    slotCustom,
    handleModalFormSure,
    handleModalFormCancel,
    ...rest
  } = props;

  console.log("AddOrEdit --- initialValues ---", initialValues);
  const gutter = 24;
  const col = gridCol ? 24 / gridCol : 12;
  const { token } = theme.useToken();

  const [form] = Form.useForm();

  const formStyle: React.CSSProperties = {
    maxWidth: "none",
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: formPadding ?? "24px 10px 0"
  };

  useEffect(() => {
    console.log("监听 -------------------", configList, moreConfigList);
    if (initialValues.menuSource == 1) {
      generateConfig(initialValues?.menuType ?? 0);
    }

    if (initialValues.menuSource == 2) {
      generateConfig(initialValues?.menuType ?? 1);
    }
  }, [form, configList, moreConfigList]);

  const [allConfigList, setAllConfigList] = useState<IFormItem[]>([]);

  const curtType = useRef<string | number>();
  function handleChangeValues(changedValues: any, allValues: any) {
    if (allValues["menuType"] != curtType.current && initialValues.menuSource == "1") {
      generateConfig(allValues["menuType"]);
      curtType.current = allValues["menuType"];
    }
  }

  function generateConfig(type: string) {
    const curtConfigList = moreConfigList?.find((con) => con.code == type)?.configList;

    // 插入动态 configList
    const alls: any[] = [];
    configList?.forEach?.((item: any) => {
      if (item.prop == "parentId") {
        alls.push(item);
        curtConfigList && alls.push(...curtConfigList);
      } else {
        alls.push(item);
      }
    });
    console.log("-- 动态 alls -------------", alls);
    setAllConfigList(alls);

    // 便利keys
    // const resetKeys = alls.map((item: IFormItem) => item.prop).filter((item: string) => item != "menuType");
    const { menuType, ...rest } = initialValues;
    // form.resetFields(resetKeys);
    form.setFieldsValue(rest);
  }

  const handleModalSure = useCallback(async () => {
    console.log("modal form --- handleOk ---");
    form?.submit?.();
  }, []);

  const onFinish = useCallback((values: any) => {
    console.log("modal form --- onFinish ---", values);
    handleModalFormSure?.(values);
  }, []);

  const handleModalCancel = useCallback(() => {
    console.log("modal form --- handleOk ---");
    handleModalFormCancel?.();
  }, []);

  return (
    <AModal {...rest} handleModalSure={handleModalSure} handleModalCancel={handleModalCancel}>
      <Form
        form={form}
        initialValues={initialValues}
        labelCol={{ flex: labelWidth ?? "90px" }}
        labelAlign="right"
        labelWrap
        colon={false}
        scrollToFirstError={true}
        style={formStyle}
        onFinish={onFinish}
        onValuesChange={handleChangeValues}
      >
        <Row gutter={gutter}>
          {allConfigList?.map?.((item, i) => {
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
};

export default memo(AddOrEdit);
