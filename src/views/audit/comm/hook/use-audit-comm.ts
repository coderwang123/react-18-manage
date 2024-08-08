import { useNavigate } from "react-router-dom";
import useLoginStore from "@/store/login";
import { useShallow } from "zustand/react/shallow";
import useCommStore from "@/store/comm/comm";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ApiAudit from "@/apis/audit";
import { formatTime } from "@/utils/comm";
import { TBtnParams } from "@/components/page-cpns";
import { modal, Msg } from "@/utils/ant-methods";
import { pageSearchConfig } from "@/views/audit/comm/config/page-search.config";
import { getPageTableConfig } from "@/views/audit/comm/config/page-table.config";

interface IUseAuditComm {
  taskType: string;
  detailUrl: string;
}
export default function useAuditComm(props: IUseAuditComm) {
  const navigate = useNavigate();

  const userInfo = useLoginStore(useShallow((state) => state.userInfo));

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
    const { configList = [], ...rest } = pageSearchConfig;

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
  const queryParams = useRef<any>({
    page: 1,
    size: 10,
    taskType: props.taskType,
    isClaim: 0, // 0 未认领，1 认领
    userId: undefined
  });

  // 初始化 --- table 数据
  const [tableData, setTableData] = useState<any[]>([]);

  // 初始化 --- table 总条数
  const [total, setTotal] = useState<any>(0);

  // 初始化 --- table api
  async function getList() {
    const res = await ApiAudit.list(queryParams.current);
    setTableData(res?.data?.records ?? []);
    setTotal(res?.data?.total ?? 0);
  }

  // 搜索
  const handleSearch = useCallback(async (params?: any) => {
    const { time, ...rest } = params;

    if (time && time.length > 0) {
      rest.beginCreatedAt = formatTime(time[0]);
      rest.endCreatedAt = formatTime(time[1]);
    }

    queryParams.current = { ...queryParams.current, page: 1, size: 10, ...rest };
    await getList();
  }, []);

  // 切换分页
  const handleChangePagination = useCallback(async (params?: any) => {
    Object.assign(queryParams.current, params);
    await getList();
  }, []);
  // 切换 tab
  const handleTabChange = useCallback(async (isClaim: string) => {
    queryParams.current.isClaim = isClaim;
    queryParams.current.userId = isClaim == "1" ? userInfo?.id : undefined;
    await getList();
  }, []);

  const handleCustomBtn = useCallback((params: TBtnParams) => {
    const { code, row } = params;
    switch (code) {
      case "claim":
        modal({
          content: `是否认领 当前单号：${row?.orderNumber} 客户姓名：${row?.customerName} 此订单？`,
          async handleModalSure() {
            if (!userInfo?.id) return Msg.error("请先登录~");
            await ApiAudit.claim({ employeeId: userInfo?.id, orderId: row?.id, taskType: props.taskType });
            Msg.success("认领成功~");
            row.orderId = row?.id;
            await ApiAudit.create(row);
            await getList();
          }
        });
        break;

      case "claim:return":
        modal({
          content: `是否退认领 当前单号：${row?.orderNumber} 客户姓名：${row?.customerName} 此订单？`,
          async handleModalSure() {
            if (!userInfo?.id) return Msg.error("请先登录~");
            await ApiAudit.claimReturn({
              employeeId: userInfo?.id,
              orderId: row?.id,
              taskType: props.taskType
            });
            Msg.success("退认领成功~");
            await getList();
          }
        });
        break;

      case "audit":
        modal({
          content: `是否审核 当前单号：${row?.orderNumber} 客户姓名：${row?.customerName} 此订单？`,
          async handleModalSure() {
            navigate(props.detailUrl, {
              state: {
                orderId: row?.id,
                isAudit: true,
                taskType: props.taskType
              }
            });
          }
        });
        break;
    }
  }, []);

  return {
    pageSearchConfig: newPageSearchConfig,
    pageTableConfig: getPageTableConfig(props.taskType),
    queryParams,
    tableData,
    total,
    handleSearch,
    handleChangePagination,
    handleTabChange,
    handleCustomBtn
  };
}
