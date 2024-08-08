import type { IFormItem } from "@/components/page-cpns/generate-item";

const formConfigButton: IFormItem[] = [
  {
    type: "a-input",
    label: "按钮名称",
    prop: "menuName",
    required: true,
    gridCol: 12
  },
  {
    type: "a-input",
    label: "按钮权限",
    prop: "menuPermission",
    required: true,
    gridCol: 12
  }
];

export default formConfigButton;
