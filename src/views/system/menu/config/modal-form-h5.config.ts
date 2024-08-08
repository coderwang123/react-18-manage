import type { IModalForm } from "@/components/page-cpns";
import formConfigMenu from "@/views/system/menu/config/modal-form-h5/form-menu.config";
import formConfigButton from "@/views/system/menu/config/modal-form-h5/form-button.config";

const modalFormH5Config: IModalForm = {
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
            label: "模块",
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
        treeData: [
          {
            menuName: "主目录",
            id: 0,
            child: []
          }
        ],
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
      required: true
    }
  ]
};

const moreModalFormH5Config: IModalForm = {
  moreConfigList: [
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
export { modalFormH5Config, moreModalFormH5Config };
