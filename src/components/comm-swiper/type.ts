import { IStyledCommSwiper } from "@/components/comm-swiper/style";
import { ReactNode } from "react";

export interface ICommSwiper extends IStyledCommSwiper {
  list?: any[];
  slotContent?: (params: { item: any; index: number }) => ReactNode;
}
