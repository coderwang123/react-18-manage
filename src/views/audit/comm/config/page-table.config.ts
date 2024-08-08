import type { IPageTableConfig } from "@/components/page-cpns";
import { HandleList } from "@/utils/comm";
import { dict_status_order } from "@/dicts/dicts";
import { buttonConfigTeamFirst } from "@/views/audit/comm/config/button-team-first.config";
import { buttonConfigRiskFirst } from "@/views/audit/comm/config/button-risk-first.config";
import { buttonConfigTeamSecond } from "@/views/audit/comm/config/button-team-second.config";
import { buttonConfigRiskSecond } from "@/views/audit/comm/config/button-risk-second.config";
import { buttonConfigRiskFinally } from "@/views/audit/comm/config/button-risk-finally.config";

function getButtonConfig(taskType: string) {
  switch (taskType) {
    case "3": // 团队初审
      return buttonConfigTeamFirst;

    case "4": // 风控一审
      return buttonConfigRiskFirst;

    case "6": // 团队复核
      return buttonConfigTeamSecond;

    case "7": // 风控复审
      return buttonConfigRiskSecond;

    case "8": // 风控终审
      return buttonConfigRiskFinally;
  }
}

export function getPageTableConfig(taskType: string): IPageTableConfig {
  return {
    rowKey: "id",
    configList: [
      {
        type: "normal",
        title: "订单号",
        dataIndex: "orderNumber",
        width: 120
      },
      // {
      //   type: "normal",
      //   title: "订单号-2",
      //   dataIndex: "orderNumber",
      //   width: 120
      // },
      {
        type: "normal",
        title: "客户姓名",
        dataIndex: "customerName",
        width: 80
      },
      {
        type: "normal",
        title: "车型",
        dataIndex: "modelName",
        width: 220
      },
      {
        type: "normal",
        title: "贷款金额（元）",
        dataIndex: "loanAmount",
        width: 110
      },
      {
        type: "normal",
        title: "所属组织",
        dataIndex: "organization",
        width: 220
      },
      {
        type: "normal",
        title: `到达${HandleList.getLabel(dict_status_order, taskType)}时间`,
        dataIndex: "modifiedAt",
        width: 150
      },

      {
        type: "handle",
        title: "操作",
        dataIndex: "",
        width: 210,
        btnOptions: getButtonConfig(taskType)
      }
    ]
  };
}
