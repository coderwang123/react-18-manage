import type { IPageButton } from "@/components/page-cpns";

export const buttonConfigHandle: IPageButton[] = [
  {
    name: "新增-弹窗",
    code: "add:modal",
    permission: "test-page:add:modal",
    icon: "PlusOutlined"
  },
  {
    name: "新增-跳页",
    code: "add:page",
    permission: "test-page:add:page",
    icon: "PlusOutlined"
  }
];

export const buttonConfigTable: IPageButton[] = [
  {
    name: "编辑-弹窗",
    code: "edit:modal",
    permission: "test-page:edit:modal"
  },
  {
    name: "编辑-跳页",
    code: "edit:page",
    permission: "test-page:edit:page"
  },
  {
    name: "删除",
    code: "remove",
    permission: "test-page:remove"
  },
  {
    name: "详情",
    code: "detail",
    permission: "test-page:detail"
  },

  {
    name: "详情-多模块",
    code: "detail:module",
    permission: "test-page:detail:module"
  },

  {
    name: "是否显示~",
    code: "detail:module",
    permission: "test-page:detail:module",
    renderShow: (row) => row.status != 3
  },

  {
    code: "detail:module",
    permission: "test-page:detail:module",
    renderName: (row) => (row.status == 1 ? "A" : "B")
  }
];
