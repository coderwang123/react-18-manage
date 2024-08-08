import { IFormItem } from "@/components/page-cpns/generate-item";
import { IAInput } from "@/components/ant-form-cpns";

export interface IATextarea extends Partial<Pick<IFormItem, "prop">>, IAInput {
  autoSize?: boolean | object; // 描述：自适应内容高度，可设置为 true | false 或对象：{ minRows: 2, maxRows: 6 }、默认值：false
  rows?: number;
  className?: string;
}
