import type { IFormItem } from "@/components/page-cpns/generate-item";

const formConfigMenu: IFormItem[] = [
  {
    type: "a-input",
    label: "菜单名称",
    prop: "menuName",
    required: true,
    gridCol: 12
  },
  {
    type: "a-input",
    label: "菜单图标",
    prop: "icon",
    required: true,
    gridCol: 12
  },
  {
    type: "a-input",
    label: "路由地址",
    prop: "menuPath",
    required: true,
    gridCol: 12
  },
  {
    type: "a-input",
    label: "组件路径",
    prop: "componentPath",
    required: true,
    gridCol: 12
  },

  {
    type: "a-radio",
    label: "是否显示",
    prop: "hidden",
    required: true,
    gridCol: 12,
    configARadio: {
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
  }
];

export default formConfigMenu;
