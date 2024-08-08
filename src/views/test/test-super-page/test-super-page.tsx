import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useModal } from "@/hooks";
import { modal, Msg } from "@/utils/ant-methods";

import BScroll from "@/components/b-scroll/b-scroll";
import { SuperPage } from "@/components/page-cpns";
import { superPageConfig } from "./config/super-page.config";
import { fakeTestTable } from "@/fake-data";
import { formatTime } from "@/utils/comm";

const TestSuperPage: React.FC = () => {
  const navigate = useNavigate();
  const [isShowModelForm, setIsShowModelForm] = useState(false);

  // 初始化 --- table 参数
  const queryParams = useRef({
    page: 1,
    size: 10
  });

  // 初始化 --- table 数据
  const [tableData, setTableData] = useState<any[]>(fakeTestTable);

  // 初始化 --- table 总条数
  const [total, setTotal] = useState<any>(0);

  // 搜索逻辑
  const handleSearch = useCallback(async (params?: any) => {
    console.log("查询 ===========》 逻辑", params);
  }, []);

  // 按钮逻辑
  const handleCustomBtn = useCallback((params: any) => {
    console.log("handleCustomBtn params", params);
    const { code, row } = params;
    // console.log("handleCustomBtn rowData ===?>", row);

    switch (code) {
      case "add:modal":
        console.log("add:modal =========");
        // setIsShowModelForm(true);
        break;

      case "add:page":
        console.log("add:page =========");
        // navigate("/test/test-page/add");
        break;

      case "edit:modal":
        console.log("edit:modal =========");
        // setIsShowModelForm(true);
        break;

      case "edit:page":
        console.log("edit:page =========");
        // navigate("/test/test-page/edit");
        // setIsShowModelForm(true);
        break;

      case "detail":
        console.log("detail =========");
        // navigate("/test/test-page/detail");
        // setIsShowModelForm(true);
        break;
      case "detail:module":
        console.log("detail:module =========");
        // navigate("/test/test-page/detail-module");
        // setIsShowModelForm(true);
        break;

      case "remove":
        modal({
          content: `是否删除${row.id}?`,
          handleModalSure: () => {
            console.log("钱钱钱");
            Msg.success("我是 success");
          },

          handleModalCancel: () => {
            console.log("handleCancel");

            Msg.success("我是 error");
          }
        });
        break;
    }
  }, []);

  // 切换分页
  const handleChangePagination = useCallback(async (params?: any) => {
    console.log("分页 ===========》 逻辑", params);
    // Object.assign(queryParams.current, params);
  }, []);

  return (
    <div className={"app-container"}>
      <SuperPage
        configHandle={superPageConfig.configHandle}
        configSearch={{ ...superPageConfig.configSearch, handleSearch, handleReset: handleSearch }}
        configTable={{
          ...superPageConfig.configTable,
          data: tableData,
          isShowPagination: false
        }}
        configPagination={{
          ...superPageConfig.configPagination,
          current: queryParams.current.page,
          pageSize: queryParams.current.size,
          total,
          handleChangePagination
        }}
        handleCustomBtn={handleCustomBtn}
      />
    </div>
  );
};

export default memo(TestSuperPage);
