import type { CSSProperties, ReactNode } from "react";
import type { Breakpoint } from "antd";
import type { IDetailItem } from "@/components/page-cpns/generate-item";

export interface IPageDetail {
  bordered?: boolean; // 描述：是否展示边框 、默认值：false

  colon?: boolean; // 描述：配置 Descriptions.Item 的 colon 的默认值 、默认值：true

  column?: number | Record<Breakpoint, number> | any; // 描述：一行的 DescriptionItems 数量，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24} 、默认值：3
  span?: number;

  contentStyle?: CSSProperties; // 描述：自定义内容样式 、默认值：-

  extra?: ReactNode; // 描述：描述列表的操作区域，显示在右上方 、默认值：-

  // items?: []; // 描述：描述列表项内容 、默认值：-

  labelStyle?: CSSProperties; // 描述：自定义标签样式 、默认值：-

  layout?: "horizontal" | "vertical"; // 描述：描述布局 、默认值：horizontal

  size?: "default" | "middle" | "small"; // 描述：设置列表的大小。可以设置为 middle 、small, 或不填（只有设置 bordered={true} 生效） 、默认值：-

  title?: string; // 描述：描述列表的标题，显示在最顶部 、默认值：-

  configList?: IDetailItem[];

  configModule?: IModuleItem[];

  detailInfo?: any;
  customSlot?: () => ReactNode;
}

export interface IModuleItem extends Omit<IPageDetail, "configList" | "configModule"> {
  [index: string]: any;
  isUseMarginTop?: boolean;
  configList?: IDetailItem[];
}

export interface IDescriptionItem {
  label?: React.ReactNode;
  value?: React.ReactNode;
  children?: React.ReactNode;
  span?: number;
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}
