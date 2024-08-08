import { Dayjs } from "dayjs";
import { RangeTimeProps } from "rc-picker/lib/interface";
import { IFormItem } from "@/components/page-cpns/generate-item";

type Generic = string;
type GenericFn = (value: Dayjs) => string;

export type FormatType =
  | Generic
  | GenericFn
  | Array<Generic | GenericFn>
  | {
      format: string;
      type?: "mask";
    };

export interface IADateRange extends Partial<Pick<IFormItem, "prop">> {
  placeholder?: [string, string];
  format?: FormatType;
  showTime?: boolean | RangeTimeProps<any>;
  onChange?: any;
  value?: any;
  defaultValue?: [start: Dayjs | null | undefined, end: Dayjs | null | undefined];
}
