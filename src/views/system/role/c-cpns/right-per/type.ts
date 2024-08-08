import { ReactNode } from "react";

export interface IRightPer {
  slotHeader?: () => ReactNode;

  isDisabled: boolean;

  curtPerInfo: any;
  handleChangeCurtPerInfo?: (params: any) => void;

  handlePerSure?: (args?: any) => void;
  handlePerCancel?: (args?: any) => void;
}
