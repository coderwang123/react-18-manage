import type { IFormItem } from "@/components/page-cpns/generate-item";

export interface IPageSearch {
  labelWidth?: string;
  width?: string;
  gridCol?: 1 | 2 | 3 | 4;
  configList?: IFormItem[];
  handleSearch?: (params?: any) => void;
  handleReset?: (params?: any) => void;
  handleChangeExpand?: (params?: any) => void;
}
