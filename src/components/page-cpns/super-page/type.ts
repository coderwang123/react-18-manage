import {
  type IPageButton,
  IPageHandle,
  IPagePagination,
  IPageSearch,
  IPageTable
} from "@/components/page-cpns";

export interface ISuperPage extends Pick<IPageButton, "handleCustomBtn"> {
  configSearch?: IPageSearch;
  configHandle?: IPageHandle;
  configTable?: IPageTable;
  configPagination?: IPagePagination;
  otherHeight?: number[];
}
