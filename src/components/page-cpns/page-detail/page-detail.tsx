import React, { Fragment, memo } from "react";
import { Col, Row } from "antd";
import classNames from "classnames";

import { generateDetailItem } from "@/components/page-cpns/generate-item";

import type { IPageDetail } from "./type";
import { StyledPageDetail, StyledPageDetailTitle } from "./style";

interface ITitle {
  title?: string;
}
const PageDetailTitle: React.FC<ITitle> = ({ title }) => {
  return (
    title && (
      <StyledPageDetailTitle>
        <span></span>
        <p>{title ?? ""}</p>
      </StyledPageDetailTitle>
    )
  );
};

function getGridCol(maxSpan?: number) {
  return {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 12 },
    xl: { span: 8 },
    xxl: { span: maxSpan ?? 6 }
  };
}

function calcLastCol(num: number, list: any[]) {
  const total = list.length;
  let res: number = 24;
  const column = 24 / num; // 拿到 列个数  num:8 column 3、num: 12 column: 2

  const mod = total % column; // 余数
  // console.log("mod ===>", mod);
  if (mod == 0) {
    // 刚好 站整个一栏
    res = num;
    // console.log("整个 -----------", res);
  } else {
    res = 24 - (mod - 1) * num;
  }
  // console.log("res ====>", res);
  return res;
}

function getLastCol(list: any[], maxSpan?: number) {
  const colInfo = {
    xs: { span: calcLastCol(24, list) },
    sm: { span: calcLastCol(24, list) },
    md: { span: calcLastCol(24, list) },
    lg: { span: calcLastCol(12, list) },
    xl: { span: calcLastCol(8, list) },
    xxl: { span: calcLastCol(maxSpan ?? 6, list) }
  };
  // console.log("colInfo =====>", colInfo);
  return colInfo;
}

export const PageDetail: React.FC<IPageDetail> = memo((props) => {
  // console.log("-------- detail ------", props);
  const { configList, configModule, detailInfo, title, ...rest } = props;

  return (
    <div className={"app-container"}>
      {configList && (
        <>
          <PageDetailTitle title={title} />
          <StyledPageDetail>
            {configList?.map((item, index) => {
              const el = generateDetailItem(item, detailInfo);
              return (
                <Col
                  key={index}
                  {...(index < configList?.length - 1
                    ? getGridCol(props.span)
                    : getLastCol(configList, props.span))}
                >
                  <span className={classNames(["label"])}>{el.label}</span>
                  <p className={classNames(["value"])}>{el.value}</p>
                </Col>
              );
            })}
          </StyledPageDetail>
        </>
      )}

      {configModule?.map((module, i) => {
        const { configList: moduleConfigList, title: moduleTitle, ...moduleReset } = module;
        return (
          <Fragment key={i}>
            <PageDetailTitle title={moduleTitle} />

            <StyledPageDetail $marginBottom={i < configModule?.length - 1 ? "20px" : "0"}>
              {moduleConfigList?.map((item, j) => {
                const el = generateDetailItem(item, detailInfo);

                return (
                  <Col
                    key={i + j}
                    {...(j < moduleConfigList?.length - 1
                      ? getGridCol(props.span)
                      : getLastCol(moduleConfigList, props.span))}
                  >
                    <span className={classNames(["label"])}>{el.label}</span>
                    <p className={classNames(["value"])}>{el.value}</p>
                  </Col>
                );
              })}
            </StyledPageDetail>
          </Fragment>
        );
      })}

      {props.customSlot?.()}
    </div>
  );
});

export default PageDetail;
