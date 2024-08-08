import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShallow } from "zustand/react/shallow";

import { modal, Msg } from "@/utils/ant-methods";

import { SuperPage } from "@/components/page-cpns";
import { superPageConfig } from "./config/super-page.config";

import useCommStore from "@/store/comm/comm";
import ApiUser from "@/apis/system/user";

const User: React.FC = (props) => {
  const navigate = useNavigate();

  // 初始化 --- options
  const commStore = useCommStore(
    useShallow((state) => {
      return {
        treeOrg: state.treeOrg,
        listRole: state.listRole,
        apiTreeOrg: state.apiTreeOrg,
        apiListRole: state.apiListRole
      };
    })
  );

  // 初始化 --- options
  useEffect(() => {
    commStore.apiTreeOrg();
    commStore.apiListRole();
  }, []);

  // 初始化 --- 搜索栏
  const newPageSearchConfig = useMemo(() => {
    const { configList = [], ...rest } = superPageConfig?.configSearch ?? {};

    const newConfigList = configList?.map((item) => {
      if (item.prop === "organizationId") {
        item!.configATreeSelect!.treeData = commStore.treeOrg;
        return item;
      }
      if (item.prop === "roleId") {
        item!.configASelect!.options = commStore.listRole;
        return item;
      }

      return item;
    });
    return {
      configList: newConfigList,
      ...rest
    };
  }, [commStore.treeOrg, commStore.listRole]);

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
    const res = await ApiUser.list(queryParams.current);
    setTableData(res?.data?.records ?? []);
    setTotal(res?.data?.total ?? 0);
  }

  // 搜索
  const handleSearch = useCallback(async (params?: any) => {
    queryParams.current = { page: 1, size: 10, ...params };
    await getList();
  }, []);

  // 切换分页
  const handleChangePagination = useCallback(async (params?: any) => {
    Object.assign(queryParams.current, params);
    await getList();
  }, []);

  // 操作栏
  const handleCustomBtn = useCallback((params: any) => {
    const { code, row } = params;

    switch (code) {
      case "add":
        navigate("/system/user/add", {
          state: {
            code
          }
        });
        break;

      case "edit":
        navigate("/system/user/edit", {
          state: {
            code,
            row
          }
        });
        break;

      case "disabled":
        modal({
          content: `是否${row?.status == "1" ? "禁用" : "启用"} 当前用户： ${row?.employeeName}?`,

          handleModalSure: async () => {
            const params = {
              employeeId: row?.id,
              status: row?.status == 1 ? 0 : 1
            };
            await ApiUser.editStatus(params);
            Msg.success(`${row?.status == "1" ? "禁用" : "启用"} 状态成功~`);
            await getList();
          },

          handleModalCancel: () => {
            Msg.error("已取消当前操作~");
          }
        });
        break;
    }
  }, []);

  return (
    <div className={"app-container"}>
      <SuperPage
        configSearch={{ ...newPageSearchConfig, handleSearch }}
        configHandle={superPageConfig.configHandle}
        configTable={{
          ...superPageConfig.configTable,
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
  );
};

export default memo(User);
