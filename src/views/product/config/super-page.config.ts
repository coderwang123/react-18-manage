import { ISuperPage } from "@/components/page-cpns";
import { buttonConfigHandle, buttonConfigTable } from "./button.config";
import { dist_product_type } from "@/dicts/dicts";

export const superPageConfig: ISuperPage = {
  configHandle: {
    configList: buttonConfigHandle
  },

  configSearch: {
    gridCol: 3,
    labelWidth: "90px",
    configList: [
      {
        type: "a-input",
        label: "产品名称",
        prop: "productName"
      },

      {
        type: "a-select",
        label: "产品类型",
        prop: "productType",
        configASelect: {
          options: [],
          fieldNames: {
            label: "key",
            value: "value"
          }
        }
      }
    ]
  },

  configTable: {
    rowKey: "id",
    configList: [
      {
        type: "normal",
        title: "产品ID",
        dataIndex: "id",
        width: 100
      },
      {
        type: "normal",
        title: "产品名称",
        dataIndex: "productName",
        width: 140
      },
      {
        type: "translateList",
        title: "产品类型",
        dataIndex: "productType",
        width: 130,
        configTranslateList: {
          fieldNames: {
            label: "key",
            value: "value"
          },
          options: []
        }
      },
      {
        type: "translateList",
        title: "状态", // 1启用 0禁用
        dataIndex: "productStatus",
        width: 100,
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
        type: "time",
        title: "创建时间",
        dataIndex: "createTime",
        width: 150
      },
      {
        type: "time",
        title: "更新时间",
        dataIndex: "updateTime",
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
