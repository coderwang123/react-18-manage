import type { IPageSearch } from "@/components/page-cpns";

export const pageSearchConfig: IPageSearch = {
  gridCol: 3,
  configList: [
    {
      type: "a-input",
      label: "订单号",
      prop: "orderNumber"
    },
    {
      type: "a-input",
      label: "客户姓名",
      prop: "customerName"
    },
    {
      type: "a-input",
      label: "身份证号",
      prop: "idcardNumber"
    },
    {
      type: "a-tree-select",
      label: "所属组织",
      prop: "organizationId",
      configATreeSelect: {
        fieldNames: {
          label: "orgName",
          value: "id",
          children: "childList"
        },
        treeData: []
      }
    }
  ]
};
