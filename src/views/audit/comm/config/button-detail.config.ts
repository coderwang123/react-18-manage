import type { IPageButton } from "@/components/page-cpns";

export const detailConfigRiskFirst: IPageButton[] = [
  {
    name: "风控初审-查询车300车况定价",
    code: "audit",
    permission: "web:risk-first:querycar300"
  },
  {
    name: "风控初审-查询客户大数据",
    code: "audit",
    permission: "web:risk-first:querybigdata"
  },
  {
    name: "风控初审-车300事故车核查",
    code: "audit",
    permission: "web:risk-first:car300-accident-check"
  }
];

export const detailConfigRiskSecond: IPageButton[] = [
  {
    name: "风控复审-查询车300车况定价",
    code: "audit",
    permission: "web:risk-second:querycar300"
  },
  {
    name: "风控复审-查询客户大数据",
    code: "audit",
    permission: "web:risk-second:querybigdata"
  },
  {
    name: "风控复审-车300事故车核查",
    code: "audit",
    permission: "web:risk-second:car300-accident-check"
  }
];
export const detailConfigRiskFinally: IPageButton[] = [
  {
    name: "风控终审-查询车300车况定价",
    code: "audit",
    permission: "web:risk-finally:querycar300"
  },
  {
    name: "风控终审-查询客户大数据",
    code: "audit",
    permission: "web:risk-finally:querybigdata"
  },
  {
    name: "风控终审-车300事故车核查",
    code: "audit",
    permission: "web:risk-finally:car300-accident-check"
  }
];

export const detailConfigTeamFirst: IPageButton[] = [
  {
    name: "团队初审-查询车300车况定价",
    code: "audit",
    permission: "web:team-first:querycar300"
  },
  {
    name: "团队初审-查询客户大数据",
    code: "audit",
    permission: "web:team-first:querybigdata"
  },
  {
    name: "团队初审-车300事故车核查",
    code: "audit",
    permission: "web:team-first:car300-accident-check"
  }
];

export const detailConfigTeamSecond: IPageButton[] = [
  {
    name: "团队复审-查询车300车况定价",
    code: "audit",
    permission: "web:team-second:querycar300"
  },
  {
    name: "团队复审-查询客户大数据",
    code: "audit",
    permission: "web:team-second:querybigdata"
  },
  {
    name: "团队复审-车300事故车核查",
    code: "audit",
    permission: "web:team-second:car300-accident-check"
  }
];

export const detailConfigOrderDetail: IPageButton[] = [
  {
    name: "订单-查询车300车况定价",
    code: "audit",
    permission: "web:order:querycar300"
  },
  {
    name: "订单-查询客户大数据",
    code: "audit",
    permission: "web:order:querybigdata"
  },
  {
    name: "订单-车300事故车核查",
    code: "audit",
    permission: "web:order:car300-accident-check"
  }
];

export function getConfigDetailPer300(taskType?: string) {
  switch (taskType) {
    case "4":
      return detailConfigRiskFirst;
    case "7":
      return detailConfigRiskSecond;
    case "8":
      return detailConfigRiskFinally;
    case "3":
      return detailConfigTeamFirst;
    case "6":
      return detailConfigTeamSecond;
    default:
      return detailConfigOrderDetail;
  }
}
