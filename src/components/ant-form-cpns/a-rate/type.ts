import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IARate extends Partial<Pick<IFormItem, "prop">> {
  onChange?: any;
  value?: any;
}
