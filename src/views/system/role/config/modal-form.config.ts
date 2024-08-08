import type { IModalForm } from "@/components/page-cpns";

export const modalFormConfig: IModalForm = {
  gridCol: 3,
  configList: [
    {
      type: "a-input",
      label: "角色名称",
      prop: "roleName",
      required: true,
      gridCol: 24
    }
  ]
};
