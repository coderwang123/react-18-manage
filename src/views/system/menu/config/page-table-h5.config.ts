import type { IPageTableConfig } from "@/components/page-cpns";
import { buttonConfigTableH5 } from "./button.config";
export const pageTableH5Config: IPageTableConfig = {
  rowKey: "id",
  expandable: {
    childrenColumnName: "child"
  },
  configList: [
    {
      type: "translateList",
      title: "类型",
      dataIndex: "menuType",
      width: 200,
      configTranslateList: {
        isUseTag: true,
        configTags: [
          {
            code: 0,
            color: "#108ee9"
          },
          {
            code: 1,
            color: "#87d068"
          },
          {
            code: 2,
            color: "#ccc"
          }
        ],
        options: [
          {
            label: "目录",
            value: 0
          },
          {
            label: "菜单",
            value: 1
          },
          {
            label: "按钮",
            value: 2
          }
        ]
      }
      // width: 500
    },
    {
      type: "normal",
      title: "名称",
      dataIndex: "menuName",
      width: 200
    },

    {
      type: "normal",
      title: "路由地址",
      dataIndex: "menuPath",
      width: 200
      // width: 500
    },
    {
      type: "normal",
      title: "组件路径",
      dataIndex: "componentPath",
      width: 200
      // width: 500
    },

    {
      type: "normal",
      title: "排序",
      dataIndex: "menuSort",
      width: 200
      // width: 500
    },

    {
      type: "handle",
      title: "操作",
      dataIndex: "",
      btnOptions: buttonConfigTableH5
    }
  ]
};
