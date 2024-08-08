import type { IPageButton } from "@/components/page-cpns";

export const buttonConfigHandle: IPageButton[] = [
  {
    name: "新增员工",
    code: "add",
    permission: "web:emp:add",
    icon: "PlusOutlined"
  }
];

export const buttonConfigTable: IPageButton[] = [
  {
    name: "编辑",
    code: "edit",
    permission: "web:emp:edit"
  },
  {
    code: "disabled",
    permission: "web:emp:disabled",
    renderName: (row) => (row.status == 1 ? "禁用" : "启用")
  }
  // {
  //   name: "重置密码",
  //   code: "reset",
  //   permission: "web:emp:reset:password"
  // }
];
