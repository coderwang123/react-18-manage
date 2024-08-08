import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IATreeSelect extends Partial<Pick<IFormItem, "prop">> {
  placeholder?: string;
  treeData?: any[];
  fieldNames?: {
    label: string;
    value: string;
    children: string;
  };
  onChange?: any;
  value?: any;
  disabled?: boolean;
}
