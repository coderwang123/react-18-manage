import type { IPageButton } from "@/components/page-cpns";

// isClaim: 0 未认领，1 认领
export const buttonConfigRiskFinally: IPageButton[] = [
  {
    name: "认领",
    code: "claim",
    permission: "web:risk-finally:claim",
    renderShow: (row) => row.isClaim == 0
  },
  {
    name: "退认领",
    code: "claim:return",
    permission: "web:risk-finally:claim:return",

    renderShow: (row) => row.isClaim == 1
  },
  {
    name: "审核",
    code: "audit",
    permission: "web:risk-finally:audit",

    renderShow: (row) => row.isClaim == 1
  }
];