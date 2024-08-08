import type { IPageButton } from "@/components/page-cpns";

export const buttonConfigHandle: IPageButton[] = [
  {
    name: "新增",
    code: "add",
    permission: "web:menu:add",
    icon: "PlusOutlined"
  }
];

export const buttonConfigTableWeb: IPageButton[] = [
  {
    name: "子菜单",
    code: "addChild",
    permission: "web:menu:addChild"
  },
  {
    name: "编辑",
    code: "edit",
    permission: "web:menu:edit"
  },
  {
    name: "删除",
    code: "delete",
    permission: "web:menu:delete"
  }
];

export const buttonConfigTableH5: IPageButton[] = [
  {
    name: "子菜单",
    code: "addChild",
    permission: "web:menu:addChild"
  },
  {
    name: "编辑",
    code: "edit",
    permission: "web:menu:edit"
  },
  {
    name: "删除",
    code: "delete",
    permission: "web:menu:delete"
  }
];
