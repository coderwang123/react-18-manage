import React from "react";
import { IAButton } from "@/components/ant-comm-cpns";

export interface IPageButton extends IAButton {
  className?: string;
  permission?: string;
  code: string;
  iconColor?: string;
  handleCustomBtn?: (params: TBtnParams) => void;
  renderName?: (row: any) => string;
  renderShow?: (row: any) => boolean;
}

export type TBtnParams = {
  code: string;
  row?: any;
  per?: string;
  event?: React.MouseEvent<HTMLElement, MouseEvent>;
};
