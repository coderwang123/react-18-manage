import { ISuperPage } from "@/components/page-cpns";
import { buttonConfigHandle, buttonConfigTable } from "./button.config";

export const superPageConfig: ISuperPage = {
  configHandle: {
    configList: buttonConfigHandle
  },

  configSearch: {
    gridCol: 3,
    configList: [
      {
        type: "a-select",
        label: "组织状态",
        prop: "status",
        configASelect: {
          options: [
            {
              label: "启用",
              value: 1
            },
            {
              label: "禁用",
              value: 0
            }
          ]
        }
      }
    ]
  },

  configTable: {
    rowKey: "id",
    expandable: {
      childrenColumnName: "childList"
    },
    configList: [
      {
        type: "normal",
        title: "组织名称",
        dataIndex: "orgName"
      },
      {
        type: "normal",
        title: "负责人",
        dataIndex: "headName"
      },
      {
        type: "normal",
        title: "负责人手机号",
        dataIndex: "headPhone"
      },
      {
        type: "translateList",
        title: "组织状态", // 1启用 0禁用
        dataIndex: "status",
        configTranslateList: {
          isUseTag: true,
          configTags: [
            {
              code: 0,
              color: "#f50"
            },
            {
              code: 1,
              color: "#87d068"
            }
          ],
          options: [
            {
              label: "启用",
              value: 1
            },
            {
              label: "禁用",
              value: 0
            }
          ]
        }
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
