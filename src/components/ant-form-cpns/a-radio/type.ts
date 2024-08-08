import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IARadio extends Partial<Pick<IFormItem, "prop">> {
  defaultValue?: any;
  placeholder?: string;
  disabled?: boolean;
  options?: any[];
  fieldNames?: {
    label: string;
    value: string;
    children: string;
  };
  onChange?: any;
  value?: any;
}
