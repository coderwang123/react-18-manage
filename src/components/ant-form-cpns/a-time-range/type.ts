import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IATimeRange extends Partial<Pick<IFormItem, "prop">> {
  placeholder?: [string, string];
  onChange?: any;
  value?: any;
}
