import type { IModalForm } from "@/components/page-cpns";
import formConfigCatalog from "./modal-form-web/form-catalog.config";
import formConfigMenu from "./modal-form-web/form-menu.config";
import formConfigButton from "./modal-form-web/form-button.config";

const modalFormWebConfig: IModalForm = {
  gridCol: 1,
  configList: [
    {
      type: "a-radio",
      label: "类型",
      prop: "menuType",
      required: true,
      gridCol: 12,
      configARadio: {
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
    },
    {
      type: "a-tree-select",
      label: "上级",
      prop: "parentId",
      required: true,
      gridCol: 12,
      configATreeSelect: {
        treeData: [],
        fieldNames: {
          label: "menuName",
          value: "id",
          children: "child"
        }
      }
    },
    {
      type: "a-input",
      label: "排序",
      prop: "menuSort",
      required: true,
      gridCol: 12
    }
  ]
};

const moreModalFormWebConfig: IModalForm = {
  moreConfigList: [
    {
      code: "0",
      configList: formConfigCatalog
    },
    {
      code: "1",
      configList: formConfigMenu
    },
    {
      code: "2",
      configList: formConfigButton
    }
  ]
};
export { modalFormWebConfig, moreModalFormWebConfig };
