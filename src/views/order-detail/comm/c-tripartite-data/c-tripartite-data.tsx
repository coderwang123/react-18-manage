import React, { memo, useCallback, useEffect } from "react";

import { Button } from "antd";

import type { ICTripartiteData } from "./type";
import StyledCTripartiteData from "./style";

import { withPerBtn } from "@/hoc";
import { BtnLink } from "@/components/ant-comm-cpns";
const PerButton = withPerBtn(BtnLink);

const CTripartiteData: React.FC<ICTripartiteData> = (props) => {
  const theadList = ["数据源", "结果", "详情", "三方数据"];

  const tbodyList = [
    {
      dataSource: "人（待定）",
      result: "建议复审",
      detail_1: (
        <Button type="link" disabled={true}>
          查看报告
        </Button>
      ),
      detail_2: (
        <Button type="link" disabled={true}>
          发起查询
        </Button>
      )
    },
    {
      dataSource: "车300车况定价",
      result: props.car300Info.che300DealerPrice ? `实际额度${props.car300Info.che300DealerPrice}(万)` : "",
      detail_1: (
        <Button type="link" onClick={() => props.handleCheckReport()} disabled={!props.car300Info.orderNo}>
          查看报告
        </Button>
      ),
      detail_2: (
        <PerButton
          code={""}
          permission={props?.per300List?.[0]?.permission ?? ""}
          name={"发起查询"}
          handleCustomBtn={({ code }) => props.handleSendSearch()}
        />
      )
    },
    {
      dataSource: "车300事故车核查",
      result: props.car300Info.che300Accident ? `${props.car300Info.che300Accident}` : "",
      detail_1: (
        <Button type="link" disabled={true}>
          查看报告
        </Button>
      ),
      detail_2: (
        <PerButton
          code={""}
          permission={props?.per300List?.[2]?.permission ?? ""}
          name={"发起查询"}
          handleCustomBtn={({ code }) => props.handleSendSearchAccident()}
        />
      )
    }
  ];

  return (
    <StyledCTripartiteData>
      <h2>三方数据</h2>
      <div className={"table-wrap"}>
        <table>
          <thead>
            <tr>
              {theadList.map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tbodyList.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.dataSource}</td>
                  <td>{item.result}</td>
                  <td>{item.detail_1}</td>
                  <td>{item.detail_2}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </StyledCTripartiteData>
  );
};

export default memo(CTripartiteData);
