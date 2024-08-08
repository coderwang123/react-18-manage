import { ISuperPage } from "@/components/page-cpns";
import { buttonConfigHandle, buttonConfigTable } from "./button.config";
import { dict_status_order } from "@/dicts/dicts";
import dayjs from "dayjs";
import { formatTime } from "@/utils/comm";

export const superPageConfig: ISuperPage = {
  configHandle: {
    configList: buttonConfigHandle
  },

  configSearch: {
    gridCol: 3,
    labelWidth: "75px",
    configList: [
      {
        type: "a-input",
        label: "订单号",
        prop: "orderNumber"
      },
      {
        type: "a-input",
        label: "客户姓名",
        prop: "customerName"
      },
      {
        type: "a-input",
        label: "身份证号",
        prop: "idcardNumber"
      },
      {
        type: "a-tree-select",
        label: "所属组织",
        prop: "organizationId",
        configATreeSelect: {
          fieldNames: {
            label: "orgName",
            value: "id",
            children: "childList"
          },
          treeData: []
        }
      },
      {
        type: "a-select",
        label: "订单状态",
        prop: "status",
        configASelect: {
          options: dict_status_order
        }
      },
      {
        type: "a-input",
        label: "车架号",
        prop: "vinNumber"
      },
      {
        type: "a-select",
        label: "是否关闭",
        prop: "isClosed",
        configASelect: {
          options: [
            {
              label: "是",
              value: 1
            },
            {
              label: "否",
              value: 0
            }
          ]
        }
      },
      {
        type: "a-date-range",
        label: "预计提交时间",
        prop: "time",
        defaultValue: [
          process.env.NODE_ENV == "production"
            ? dayjs(`${formatTime(new Date(), "YYYY-MM-DD")} 00:00:00`)
            : dayjs(`${formatTime(new Date("2024-05-01"), "YYYY-MM-DD")} 00:00:00`),
          dayjs(`${formatTime(new Date(), "YYYY-MM-DD")} 23:59:59`)
        ]
      }
    ]
  },

  configTable: {
    rowKey: "orderNumber",
    configList: [
      {
        type: "normal",
        title: "订单号",
        dataIndex: "orderNumber",
        width: 150
      },
      {
        type: "normal",
        title: "组织",
        dataIndex: "orgName",
        width: 220
      },
      {
        type: "normal",
        title: "客户姓名",
        dataIndex: "customerName",
        width: 100
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
        width: 140
      },
      {
        type: "normal",
        title: "订单状态",
        dataIndex: "statusString",
        width: 100
      },
      {
        type: "translateList",
        title: "是否关闭",
        dataIndex: "isClosed", // 1关闭 0开启
        width: 100,
        configTranslateList: {
          isUseTag: true,
          configTags: [
            {
              code: 0,
              color: "#87d068"
            },
            {
              code: 1,
              color: "#f50"
            }
          ],
          options: [
            {
              label: "关闭",
              value: 1
            },
            {
              label: "开启",
              value: 0
            }
          ]
        }
      },
      {
        type: "normal",
        title: "预审提交时间",
        dataIndex: "createdAt",
        width: 150
      },

      {
        type: "handle",
        title: "操作",
        dataIndex: "",
        btnOptions: buttonConfigTable
      }
    ]
  }
};
