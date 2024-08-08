import type { IFormItem } from "@/components/page-cpns/generate-item";
import type { IAModel } from "@/components/ant-comm-cpns/a-modal/type";
import { ReactNode } from "react";

export interface IModalForm extends Omit<IAModel, "handleModalSure" | "handleModalCancel"> {
  gridCol?: 1 | 2 | 3 | 4;
  labelWidth?: string;
  formPadding?: string;
  configList?: IFormItem[];
  moduleList?: IModuleList[];
  moreConfigList?: IMoreConfigList[];
  initialValues?: any;
  handleModalFormSure?: (params?: any) => void;
  handleModalFormCancel?: (params?: any) => void;
  slotCustom?: (params?: any) => ReactNode;
}

interface IMoreConfigList {
  code?: string | number;
  configList?: IFormItem[];
}

interface IModuleList
  extends Pick<IModalForm, "gridCol" | "labelWidth" | "formPadding" | "initialValues" | "slotCustom"> {
  [index: string]: any;
  title?: string;
  isUseMarginTop?: boolean;
  configList?: IFormItem[];
}
