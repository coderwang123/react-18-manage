import { Dispatch, SetStateAction } from "react";
import { IFormItem } from "@/components/page-cpns/generate-item";

export interface IACascader extends Partial<Pick<IFormItem, "prop">> {
  onChange?: any;
  value?: any;
  placeholder?: string;
  handleLoadData?: (
    currentOptions: any[],
    setCurrentOptions: Dispatch<SetStateAction<any[]>>,
    selectedOptions: any[]
  ) => void;
  options?: any[];
  fieldNames?: {
    label: string;
    value: string;
    children: string;
  };
}
