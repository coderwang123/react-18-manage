import React, { memo } from "react";

import BScroll from "@/components/b-scroll/b-scroll";

import { ATabs } from "@/components/ant-data-show-cpns";

import { PageSearch, PageTable, SuperPage } from "@/components/page-cpns";

import useAuditComm from "@/views/audit/comm/hook/use-audit-comm";

const RiskFirst: React.FC = () => {
  const {
    pageSearchConfig,
    pageTableConfig,
    queryParams,
    tableData,
    total,
    handleSearch,
    handleChangePagination,
    handleTabChange,
    handleCustomBtn
  } = useAuditComm({ taskType: "4", detailUrl: "/audit/risk-first/order-detail" });

  return (
    <>
      <ATabs
        items={[
          {
            key: "0",
            label: "待认领订单"
          },
          {
            key: "1",
            label: "待审核订单"
          }
        ]}
        handleTabChange={handleTabChange}
      />
      <div className={"app-container"} style={{ height: "calc(100% - 65px)" }}>
        <SuperPage
          configSearch={{ ...pageSearchConfig, handleSearch }}
          configTable={{
            ...pageTableConfig,
            data: tableData,
            isShowPagination: false
          }}
          configPagination={{
            current: queryParams.current.page,
            pageSize: queryParams.current.size,
            total,
            handleChangePagination
          }}
          handleCustomBtn={handleCustomBtn}
        />
      </div>
    </>
  );
};

export default memo(RiskFirst);
