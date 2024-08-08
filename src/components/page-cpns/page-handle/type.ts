import type { IPageButton } from "@/components/page-cpns";

import type { IStyledPageHandle } from "./style";
import React from "react";

export interface IPageHandle extends IStyledPageHandle, Pick<IPageButton, "handleCustomBtn"> {
  title?: string | React.ReactNode;
  configList?: IPageButton[];
  isShowPadding?: boolean;
}
