import { IFormItem } from "@/components/page-cpns/generate-item";

const formConfigMenu: IFormItem[] = [
  {
    type: "a-input",
    label: "模块名称",
    prop: "menuName",
    required: true
  },

  {
    type: "a-input",
    label: "路由地址",
    prop: "menuPath",
    required: true
  },
  {
    type: "a-input",
    label: "组件路径",
    prop: "componentPath",
    required: true
  }
];

export default formConfigMenu;
