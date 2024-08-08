import type { IPageButton } from "@/components/page-cpns";

export const buttonConfigHandle: IPageButton[] = [
  {
    name: "新增组织",
    code: "add",
    permission: "web:org:add",
    icon: "PlusOutlined"
  }
];

export const buttonConfigTable: IPageButton[] = [
  {
    name: "+子组织",
    code: "addChild",
    permission: "web:org:addChild"
  },
  {
    name: "编辑",
    code: "edit",
    permission: "web:org:edit"
  },
  {
    code: "disabled",
    permission: "web:org:disabled",
    renderName: (row) => (row.status == 1 ? "禁用" : "启用")
  }
];
