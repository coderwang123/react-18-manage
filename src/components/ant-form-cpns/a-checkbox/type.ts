import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IACheckbox extends Partial<Pick<IFormItem, "prop">> {
  onChange?: any;
  value?: any;
  placeholder?: string;
  options?: any[];
  fieldNames?: {
    label: string;
    value: string;
    children: string;
  };
}
