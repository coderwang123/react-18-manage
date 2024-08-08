import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { SuperPage } from "@/components/page-cpns";
import { superPageConfig } from "./config/super-page.config";

import useCommStore from "@/store/comm/comm";
import { useShallow } from "zustand/react/shallow";
import { DownloadFile, formatTime } from "@/utils/comm";
import { modal, Msg } from "@/utils/ant-methods";
import ApiOrder from "@/apis/order";

const Order: React.FC = (props) => {
  const navigate = useNavigate();

  // 初始化 --- options
  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeOrg: state.treeOrg,
        apiTreeOrg: state.apiTreeOrg
      };
    })
  );

  // 初始化 --- options
  useEffect(() => {
    commStore.apiTreeOrg();
  }, []);

  // 初始化 --- 搜索栏
  const newPageSearchConfig = useMemo(() => {
    const { configList = [], ...rest } = superPageConfig?.configSearch ?? {};

    const newConfigList = configList?.map((item) => {
      if (item.prop === "organizationId") {
        item!.configATreeSelect!.treeData = commStore.treeOrg;
        return item;
      }

      return item;
    });
    return {
      configList: newConfigList,
      ...rest
    };
  }, [commStore.treeOrg]);

  // 初始化 --- table 参数
  const queryParams = useRef({
    page: 1,
    size: 10
  });

  // 初始化 --- table 数据
  const [tableData, setTableData] = useState<any[]>([]);

  // 初始化 --- table 总条数
  const [total, setTotal] = useState<any>(0);

  // 初始化 --- table api
  async function getList() {
    const res = await ApiOrder.list(queryParams.current);
    setTableData(res?.data?.records ?? []);
    setTotal(res?.data?.total ?? 0);
  }

  // 搜索
  const handleSearch = useCallback(async (params?: any) => {
    console.log("查询 ===========》 逻辑", params);
    const { time, ...rest } = params;

    if (time && time.length > 0) {
      rest.beginCreatedAt = formatTime(time[0]);
      rest.endCreatedAt = formatTime(time[1]);
    }
    queryParams.current = { page: 1, size: 10, ...rest };
    await getList();
  }, []);

  // 切换分页
  const handleChangePagination = useCallback(async (params?: any) => {
    console.log("分页 ===========》 逻辑");
    Object.assign(queryParams.current, params);
    await getList();
  }, []);

  const handleCustomBtn = useCallback(
    async (params: any) => {
      let res: any;
      const { code, row } = params;

      switch (code) {
        case "detail":
          navigate("/order-detail", {
            state: {
              orderId: row?.id,
              isAudit: false
            }
          });
          break;

        case "close":
          modal({
            content: `是否${row?.isClosed == "1" ? "开启" : "关闭"} 当前订单号： ${row?.orderNumber}?`,

            handleModalSure: async () => {
              await ApiOrder.close({ orderId: row?.id });
              // 1关闭 0开启
              Msg.success(`${row?.isClosed == "1" ? "已开启" : "已关闭"} 当前订单 ： ${row?.orderNumber} ~`);
              await getList();
            },

            handleModalCancel: () => {
              Msg.error("已取消当前操作~");
            }
          });
          break;

        case "export":
          const { page, size, ...rest } = queryParams.current;
          res = await ApiOrder.export(rest);
          DownloadFile.byStream(res, "订单列表");
          break;
      }
    },
    [queryParams.current]
  );

  return (
    <div className={"app-container"}>
      <SuperPage
        configHandle={superPageConfig.configHandle}
        configSearch={{ ...newPageSearchConfig, handleSearch }}
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

export default memo(Order);
