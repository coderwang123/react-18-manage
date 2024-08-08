import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Col, Form, Row, Space, theme } from "antd";
import { DownOutlined } from "@ant-design/icons";
import type { IPageSearch } from "./type";

import { BtnPrimary, BtnSolid } from "@/components/ant-comm-cpns";

import { generateFormItem } from "@/components/page-cpns/generate-item";
import StyledPageSearch from "@/components/page-cpns/page-search/style";

function calcSearchCol(num: number, expand: boolean, list: any[]) {
  const total = expand ? list?.length : list.length > 2 ? 2 : list.length;
  let res: number = 24;
  const column = 24 / num; // 拿到 列个数  num:8 column 3、num: 12 column: 2

  const mod = total % column; // 余数
  if (mod == 0) {
    // 刚好 站整个一栏
    res = 24;
  } else {
    const cha = list.length >= 2 ? mod : mod - 1;
    res = 24 - mod * num;
  }
  return res;
}

// xs	屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// sm	屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// md	屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// lg	屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// xl	屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// xxl	屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object -
const labelCol = {
  xs: { span: 6 },
  sm: { span: 6 },
  md: { span: 6 },
  lg: { span: 6 },
  xl: { span: 6 },
  xxl: { span: 4 }
};

const gridCol = {
  xs: { span: 24 },
  sm: { span: 24 },
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 8 },
  xxl: { span: 8 }
};

export const PageSearch: React.FC<IPageSearch> = memo((props) => {
  // console.log("渲染了 --- Page Search props---", props);

  const { configList = [] } = props;
  const { token } = theme.useToken();

  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  const formStyle: React.CSSProperties = {
    maxWidth: "none",
    // background: "#ccc",
    borderRadius: token.borderRadiusLG
    // padding: 24
  };

  const count = expand ? configList?.length : 2;

  const handleCol = useMemo(
    () => ({
      xs: { span: calcSearchCol(24, expand, configList) },
      sm: { span: calcSearchCol(24, expand, configList) },
      md: { span: calcSearchCol(12, expand, configList) },
      lg: { span: calcSearchCol(12, expand, configList) },
      xl: { span: calcSearchCol(8, expand, configList) },
      xxl: { span: calcSearchCol(8, expand, configList) }
    }),
    [expand]
  );
  const initialValues = useMemo(() => {
    const obj: any = {};
    configList?.forEach((item) => {
      obj[item.prop] = item.defaultValue;
    });
    console.log("默认值 ====》", obj);
    return obj;
  }, configList);

  const onFinish = useCallback((values: any) => {
    // console.log("page search --- onFinish ---", values);
    const res = form.getFieldsValue(true);
    props?.handleSearch?.(res);
  }, []);

  useEffect(() => {
    const res = form.getFieldsValue(true);
    props?.handleSearch?.(res);
  }, []);

  return (
    configList?.length > 0 && (
      <StyledPageSearch
        form={form}
        initialValues={initialValues}
        labelCol={{ flex: props?.labelWidth ?? "80px" }}
        labelAlign="left"
        labelWrap
        style={formStyle}
        onFinish={onFinish}
        size={"middle"}
        className={"page-search"}
      >
        <Row gutter={24}>
          {configList?.map((item, i) => {
            if (i < count) {
              return (
                <Col className={"item-col"} {...gridCol} key={i}>
                  {generateFormItem(item)}
                </Col>
              );
            }
          })}
          <Col className={"item-col"} {...handleCol}>
            <div style={{ textAlign: "right", marginBottom: "24px" }}>
              <Space>
                <BtnPrimary
                  code={"search"}
                  name={"查 询"}
                  icon={"SearchOutlined"}
                  handleCustomBtn={() => {
                    form?.submit();
                  }}
                />
                <BtnSolid
                  code={"reset"}
                  name={"重 置"}
                  icon={"ReloadOutlined"}
                  handleCustomBtn={() => {
                    form.resetFields();
                    form?.submit();
                  }}
                />

                {configList?.length > 2 && (
                  <a
                    style={{ fontSize: 12 }}
                    onClick={() => {
                      setExpand(!expand);
                      props?.handleChangeExpand?.(!expand);
                    }}
                  >
                    <DownOutlined rotate={expand ? 180 : 0} /> {expand ? "收起" : "展开"}
                  </a>
                )}
              </Space>
            </div>
          </Col>
        </Row>
      </StyledPageSearch>
    )
  );
});

export default PageSearch;
