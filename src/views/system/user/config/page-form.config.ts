import type { IPageFrom } from "@/components/page-cpns";

export const pageFormConfig: IPageFrom = {
  gridCol: 1,
  labelWidth: "90px",
  configList: [
    {
      type: "a-input",
      label: "员工姓名",
      prop: "employeeName",
      required: true,
      configAInput: {
        disabled: false
      }
    },
    {
      type: "a-input-number",
      label: "手机号",
      prop: "phone",
      required: true,
      configAInputNumber: {
        disabled: false
      }
    },
    {
      type: "a-tree-select",
      label: "所属组织",
      prop: "organizationId",
      required: true,
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
      label: "所属角色",
      prop: "roleIds",
      required: true,
      configASelect: {
        mode: "multiple",
        fieldNames: {
          label: "roleName",
          value: "roleId"
        },
        options: []
      }
    }
  ]
};
