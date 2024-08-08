import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IATime extends Partial<Pick<IFormItem, "prop">> {
  placeholder?: string;
  onChange?: any;
  value?: any;
}
