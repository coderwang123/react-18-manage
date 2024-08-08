import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IAInputNumber extends Partial<Pick<IFormItem, "prop">> {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: any;
  value?: any;
}
