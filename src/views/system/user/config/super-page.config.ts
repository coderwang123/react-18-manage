import { ISuperPage } from "@/components/page-cpns";
import { buttonConfigHandle, buttonConfigTable } from "./button.config";

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
        label: "员工姓名",
        prop: "employeeName"
      },
      {
        type: "a-input-number",
        label: "员工手机号",
        prop: "phone"
      },
      {
        type: "a-select",
        label: "角色",
        prop: "roleId",
        configASelect: {
          fieldNames: {
            label: "roleName",
            value: "roleId"
          },
          options: []
        }
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
      }
    ]
  },

  configTable: {
    rowKey: "id",
    configList: [
      {
        type: "normal",
        title: "员工姓名",
        dataIndex: "employeeName",
        width: 100
      },
      {
        type: "normal",
        title: "员工手机号",
        dataIndex: "phone",
        width: 130
      },
      {
        type: "tooltip",
        title: "角色",
        dataIndex: "roleName",
        width: 250
      },
      {
        type: "tooltip",
        title: "所属组织",
        dataIndex: "organizationName",
        width: 250
      },
      {
        type: "normal",
        title: "创建时间",
        dataIndex: "createTime",
        width: 150
      },
      {
        type: "translateList",
        title: "账号状态", // 1启用 0禁用
        dataIndex: "status",
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
        type: "handle",
        title: "操作",
        dataIndex: "",
        btnOptions: buttonConfigTable
      }
    ]
  }
};
