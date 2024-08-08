import type {
  IAInput,
  IAInputNumber,
  IASelect,
  IATime,
  IATimeRange,
  IADate,
  IADateRange,
  IACascader,
  IATreeSelect,
  IARadio,
  IACheckbox,
  IARate,
  IASlider,
  IATextarea
} from "@/components/ant-form-cpns";
import { ReactNode } from "react";
import dayjs, { Dayjs } from "dayjs";

export interface IFormItem {
  [index: string]: any;
  type:
    | "custom"
    | "a-input"
    | "a-input-number"
    | "a-textarea"
    | "a-select"
    | "a-time"
    | "a-time-range"
    | "a-date"
    | "a-date-range"
    | "a-cascader"
    | "a-tree-select"
    | "a-radio"
    | "a-checkbox"
    | "a-rate"
    | "a-slider";

  label: string;
  prop: string;
  required?: boolean; // 描述：必填样式设置。如不设置，则会根据校验规则自动生成、默认值：	false
  rules?: any[];
  gridCol?: number;
  defaultValue?: any;

  moduleTitle?: string;
  moduleSlot?: (params?: any) => ReactNode;

  configAInput?: IAInput;
  configAInputNumber?: IAInputNumber;
  configATextarea?: IATextarea;
  configASelect?: IASelect;
  configATime?: IATime;
  configATimeRange?: IATimeRange;
  configADate?: IADate;
  configADateRange?: IADateRange;
  configACascader?: IACascader;
  configATreeSelect?: IATreeSelect;
  configARadio?: IARadio;
  configACheckbox?: IACheckbox;
  configARate?: IARate;
  configASlider?: IASlider;
}
