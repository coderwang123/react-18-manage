import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IAInput extends Partial<Pick<IFormItem, "prop">> {
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: any;
  value?: any;
  maxLength?: number; // 最大长度
}
