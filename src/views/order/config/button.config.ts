import type { IPageButton } from "@/components/page-cpns";

export const buttonConfigHandle: IPageButton[] = [
  {
    name: "数据导出",
    code: "export",
    permission: "web:order:export",
    icon: "DownloadOutlined"
  }
];

export const buttonConfigTable: IPageButton[] = [
  {
    name: "关闭订单",
    code: "close",
    permission: "web:order:close",
    renderShow: (row) => row.isClosed == 0
  },
  {
    name: "详情",
    code: "detail",
    permission: "web:order:detail"
  }
];
