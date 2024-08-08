import { IPageDetail } from "@/components/page-cpns";

export const pageDetailConfig: IPageDetail = {
  title: "基础信息",
  span: 8,
  configList: [
    {
      type: "normal",
      label: "产品ID",
      prop: "id"
    },
    {
      type: "normal",
      label: "产品名称",
      prop: "productName"
    },
    {
      type: "translate",
      label: "产品类型",
      prop: "productType",
      configOptionsTranslate: {
        options: [],
        findKeyLabel: "key",
        findKeyValue: "value"
      }
    },
    {
      type: "normal",
      label: "产品期数",
      prop: "periodsStr"
    },
    {
      type: "translate",
      label: "抵押方式",
      prop: "mortgageType",
      configOptionsTranslate: {
        options: [],
        findKeyLabel: "key",
        findKeyValue: "value"
      }
    },
    {
      type: "translate",
      label: "还款方式",
      prop: "repayType",
      configOptionsTranslate: {
        options: [],
        findKeyLabel: "key",
        findKeyValue: "value"
      }
    }
  ]
};
