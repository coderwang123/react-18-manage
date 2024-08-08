import type { IPageButton } from "@/components/page-cpns";

// isClaim: 0 未认领，1 认领
export const buttonConfigRiskSecond: IPageButton[] = [
  {
    name: "认领",
    code: "claim",
    permission: "web:risk-second:claim",
    renderShow: (row) => row.isClaim == 0
  },
  {
    name: "退认领",
    code: "claim:return",
    permission: "web:risk-second:claim:return",

    renderShow: (row) => row.isClaim == 1
  },
  {
    name: "审核",
    code: "audit",
    permission: "web:risk-second:audit",

    renderShow: (row) => row.isClaim == 1
  }
];
