import { IModuleItem } from "@/components/page-cpns";
import { dict_status_comm, dict_status_load } from "@/dicts/dicts";

export const moduleOrderConfig: IModuleItem = {
  title: "订单信息",
  column: 3,
  configList: [
    {
      type: "normal",
      label: "订单编号",
      prop: "orderNumber"
    },
    {
      type: "normal",
      label: "产品",
      prop: "productName"
    },
    {
      type: "normal",
      label: "所属团队",
      prop: "orgName"
    },
    {
      type: "normal",
      label: "客户经理",
      prop: "creator"
    },
    {
      type: "normal",
      label: "预审提交时间",
      prop: "createdAt"
    },
    {
      type: "normal",
      label: "资方",
      prop: "financialResource"
    },
    {
      type: "translate",
      label: "是否放款",
      prop: "isLoand",
      configOptionsTranslate: {
        options: dict_status_load
      }
    },
    {
      type: "normal",
      label: "放款时间",
      prop: "loanTime"
    }
  ]
};
