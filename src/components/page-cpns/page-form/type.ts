import type { IModalForm } from "@/components/page-cpns";

export interface IPageFrom extends Omit<IModalForm, "handleModalFormSure" | "handleModalFormCancel"> {
  title?: string;
  isShowTitle?: boolean;
  handlePageFormSure?: (params?: any) => void;
  handlePageFormCancel?: (params?: any) => void;
  handlePageFormChangeValues?: (params?: any) => void;
}
