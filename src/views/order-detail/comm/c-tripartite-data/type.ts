import { IPageButton } from "@/components/page-cpns";

export interface ICTripartiteData {
  handleCheckReport: () => void;
  handleSendSearch: () => void;
  handleSendSearchAccident: () => void;

  orderId: string | number;
  car300Info: {
    che300DealerPrice: any;
    che300QueryTime: any;
    orderNo: string;
    che300Accident: string;
  };
  per300List?: IPageButton[];
}
