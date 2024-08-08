import type { IPageFrom } from "@/components/page-cpns";

import { Dispatch, SetStateAction } from "react";
import { OptionType } from "dayjs";
import ApiComm from "@/apis/comm";

export const pageFormConfig: IPageFrom = {
  gridCol: 1,
  labelWidth: "130px",
  configList: [
    {
      type: "a-input",
      label: "父组织",
      prop: "parentName",
      configAInput: {
        disabled: true
      }
      // type: "a-tree-select",
      // label: "父组织",
      // prop: "parentId",
      // required: true,
      // configATreeSelect: {
      //   fieldNames: {
      //     label: "orgName",
      //     value: "id",
      //     children: "childList"
      //   },
      //   treeData: []
      // }
    },
    {
      type: "a-input",
      label: "组织名称",
      prop: "orgName",
      required: true
    },
    {
      type: "a-input",
      label: "组织负责人",
      prop: "headName",
      required: true
    },
    {
      type: "a-input-number",
      label: "负责人手机号",
      prop: "headPhone",
      required: true
    },
    {
      type: "a-input",
      label: "负责人身份证号",
      prop: "headIdCrad",
      required: true
    },
    {
      type: "a-cascader",
      label: "业务地区",
      prop: "area",
      required: true,
      configACascader: {
        handleLoadData: async (
          currentOptions: any[],
          setCurrentOptions: Dispatch<SetStateAction<any[]>>,
          selectedOptions: OptionType[]
        ) => {
          const lv = selectedOptions.length;
          const targetOption: any = selectedOptions[selectedOptions.length - 1];

          if (lv < 2) {
            const res = await ApiComm.listArea({ areaCode: targetOption.areaCode, level: lv + 1 });
            targetOption.children = res?.data ?? [];
            setCurrentOptions([...currentOptions]);
          }
        },
        options: [],
        fieldNames: {
          label: "areaName",
          value: "areaCode",
          children: "children"
        }
      }
    }
  ]
};
