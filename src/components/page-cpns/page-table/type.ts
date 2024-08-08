import type { ITableItem } from "@/components/page-cpns/generate-item";
import type { IPageHandle, IPageButton, IPagePagination } from "@/components/page-cpns";

// Table配置项
interface ITable {
  rowKey?: string;
  bordered?: boolean; // 描述：是否展示外边框和列边框、默认值：false
  expandable?: {
    childrenColumnName?: string;
  };
  scroll?: {
    x?: string | number | true;
    y?: string | number;
    scrollToFirstRowOnChange?: boolean;
  };
  wrapHeight?: number;
  bodyHeight?: number;
}

export interface IPageTableConfig extends ITable {
  isShowPagination?: boolean;
  pageConfigHandle?: IPageHandle;
  configList?: ITableItem[];
}

export interface IPageTable extends IPageTableConfig, Pick<IPageButton, "handleCustomBtn"> {
  data?: any[];
  pageConfigPagination?: IPagePagination;
}
