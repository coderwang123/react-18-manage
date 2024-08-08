import type { IPageButton } from "@/components/page-cpns";

// isClaim: 0 未认领，1 认领
export const buttonConfigTeamFirst: IPageButton[] = [
  {
    name: "认领",
    code: "claim",
    permission: "web:team-first:claim",
    renderShow: (row) => row.isClaim == 0
  },
  {
    name: "退认领",
    code: "claim:return",
    permission: "web:team-first:claim:return",

    renderShow: (row) => row.isClaim == 1
  },
  {
    name: "审核",
    code: "audit",
    permission: "web:team-first:audit",

    renderShow: (row) => row.isClaim == 1
  }
];
