import type { IPageButton } from "@/components/page-cpns";

export const buttonConfigHandle: IPageButton[] = [
  {
    name: "新增产品",
    code: "add",
    permission: "web:product:add",
    icon: "PlusOutlined"
  }
];

export const buttonConfigTable: IPageButton[] = [
  {
    code: "disabled",
    permission: "web:product:editStatus",
    renderName: (row) => (row.productStatus == 1 ? "禁用" : "启用")
  },
  {
    name: "编辑",
    code: "edit",
    permission: "web:product:edit"
  },
  {
    name: "删除",
    code: "del",
    permission: "web:product:delete"
  },
  {
    name: "详情",
    code: "detail",
    permission: "web:product:detail"
  }
  // {
  //   name: "重置密码",
  //   code: "reset",
  //   permission: "web:emp:reset:password"
  // }
];
