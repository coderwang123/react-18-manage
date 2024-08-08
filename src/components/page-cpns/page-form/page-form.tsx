import React, { Fragment, memo, useCallback, useEffect } from "react";
import { Col, Form, Row, Space, theme } from "antd";
import type { IPageFrom } from "./type";

import CommTitle from "@/components/comm-title/comm-title";
import BScroll from "@/components/b-scroll/b-scroll";
import { BtnPrimary, BtnSolid } from "@/components/ant-comm-cpns";

import { generateFormItem } from "@/components/page-cpns/generate-item";
import { StyledPageForm } from "./style";
import { PageHandle } from "@/components/page-cpns";

// interface ITitle {
//   title?: string;
// }
// const ModuleTitle: React.FC<ITitle> = ({ title }) => {
//   return (
//     title && (
//       <StyledModuleTitle>
//         <span></span>
//         <p>{title ?? ""}</p>
//       </StyledModuleTitle>
//     )
//   );
// };

function getCol(gridCol?: number) {
  return gridCol ? 24 / gridCol : 12;
}

export const PageForm: React.FC<IPageFrom> = memo((props) => {
  const { configList, initialValues, title, isShowTitle = true, moduleList } = props;
  const gutter = 24;
  // const col = gridCol ? 24 / gridCol : 12;

  const [form] = Form.useForm();

  const formStyle: React.CSSProperties = {
    width: `calc(${props?.width ?? "50%"})`,
    boxSizing: "border-box",
    // border: "2px solid red",
    padding: props?.formPadding ?? "24px 15px 0",
    position: "relative",
    zIndex: 999999
  };

  useEffect(() => {
    // console.log("表单 回填 ==========》", initialValues);
    // 设置表单的初始值
    form.setFieldsValue(initialValues);
  }, [initialValues, form]);

  const onFinish = useCallback((values: any) => {
    props?.handlePageFormSure?.(values);
  }, []);

  const onFinishFailed = useCallback((error: any) => {}, []);

  const onValuesChange = useCallback((changedFields: any, allFields: any) => {
    // console.log(changedFields, allFields);
    props?.handlePageFormChangeValues?.(allFields);
  }, []);

  return (
    <StyledPageForm>
      {isShowTitle && <CommTitle title={title} />}

      <BScroll style={{ height: "calc(100% - 64px)" }}>
        <Form
          form={form}
          initialValues={initialValues}
          labelCol={{ flex: props?.labelWidth ?? "110px" }}
          labelAlign="right"
          labelWrap
          colon={false}
          scrollToFirstError={true}
          style={formStyle}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          onValuesChange={onValuesChange}
          validateTrigger={"onChange"}
        >
          {moduleList ? (
            moduleList?.map((module, mIndex) => {
              return (
                <Fragment key={mIndex}>
                  {module?.title && <PageHandle title={module?.title} />}
                  <Row gutter={gutter} key={mIndex + 1}>
                    {module?.configList?.map((item, index) => {
                      return (
                        <Fragment key={`${item?.prop ?? index}}`}>
                          {item.type != "custom" ? (
                            <Col span={item.gridCol ?? getCol(module.gridCol)}>{generateFormItem(item)}</Col>
                          ) : (
                            <Col span={item.gridCol ?? getCol(module.gridCol)}>
                              {item?.moduleTitle && <PageHandle title={item?.moduleTitle} />}
                              {item?.moduleSlot?.()}
                            </Col>
                          )}
                        </Fragment>
                      );
                    })}
                    {module.slotCustom?.()}
                  </Row>
                </Fragment>
              );
            })
          ) : (
            <Row gutter={gutter}>
              {configList?.map((item, i) => {
                return (
                  <Col span={item.gridCol ?? getCol(props.gridCol)} key={i}>
                    {generateFormItem(item)}
                  </Col>
                );
              })}
            </Row>
          )}
          {/*{configList?.map((item, i) => {*/}
          {/*  return (*/}
          {/*    <Col span={item.gridCol ?? col} key={i}>*/}
          {/*      {generateFormItem(item)}*/}
          {/*    </Col>*/}
          {/*  );*/}
          {/*})}*/}
          <Row key={"zzz"}>
            <div className={"handle-wrap"}>
              <BtnSolid
                name={"取消"}
                handleCustomBtn={() => {
                  form.resetFields();
                  props.handlePageFormCancel?.();
                }}
                style={{ width: "180px" }}
                code={""}
              />
              <BtnPrimary
                name={"提 交"}
                code={""}
                style={{ width: "250px" }}
                handleCustomBtn={() => {
                  form?.submit();
                }}
              />
            </div>
          </Row>
        </Form>
      </BScroll>
    </StyledPageForm>
  );
});

export default PageForm;
