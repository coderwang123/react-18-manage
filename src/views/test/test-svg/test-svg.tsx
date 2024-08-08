import React from "react";
import { generateIconSvg } from "@/utils/comm";

const TestSvg = () => {
  return (
    <div>
      {generateIconSvg("svg-audit")}
      <h2>
        svg 组件化渲染
        {/*<Row>*/}
        {/*  <h2>系统</h2>*/}
        {/*  <Space>*/}
        {/*    <SvgSys />*/}
        {/*    <SvgSysMenu />*/}
        {/*    <SvgSysRole />*/}
        {/*    <SvgSysOrg />*/}
        {/*    <SvgSysUser />*/}
        {/*  </Space>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*  <h2>审核</h2>*/}
        {/*  <Space>*/}
        {/*    <SvgAudit />*/}
        {/*    <SvgAuditTeamFirst />*/}
        {/*    <SvgAuditTeamSecond />*/}
        {/*    <SvgAuditRiskFirst />*/}
        {/*    <SvgAuditRiskSecond />*/}
        {/*    <SvgAuditRiskFinally />*/}
        {/*  </Space>*/}
        {/*</Row>*/}
        {/*<Row>*/}
        {/*  <h2>订单</h2>*/}
        {/*  <Space>*/}
        {/*    <SvgOrder />*/}
        {/*  </Space>*/}
        {/*</Row>*/}
      </h2>
    </div>
  );
};

export default TestSvg;
