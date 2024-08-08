import type { IPageFrom } from "@/components/page-cpns";
import { HandleList } from "@/utils/comm";
import { dict_status_order } from "@/dicts/dicts";
export function getPageFormConfig(taskType: string): IPageFrom {
  return {
    gridCol: 2,
    width: "100%",
    isShowTitle: false,
    configList: [
      {
        type: "a-select",
        label: `${HandleList.getLabel(dict_status_order, taskType)}结果`,
        prop: "status",
        required: true,
        configASelect: {
          options: [
            {
              label: "通过",
              value: "1"
            },
            {
              label: "退回",
              value: "0"
            }
          ]
        }
      },
      {
        type: "a-textarea",
        label: `${HandleList.getLabel(dict_status_order, taskType)}备注`,
        prop: "reason"
      }
    ]
  };
}
