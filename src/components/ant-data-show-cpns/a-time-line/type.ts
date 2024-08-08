import { ReactNode } from "react";

export interface IATimeLine {
  mode?: "left" | "alternate" | "right"; // 描述：通过设置 mode 可以改变时间轴和内容的相对位置、默认值：-
  pending?: ReactNode; // 描述：指定最后一个幽灵节点是否存在或内容、默认值：false
  pendingDot?: ReactNode; // 描述：当最后一个幽灵节点存在時，指定其时间图点、默认值：<LoadingOutlined />
  reverse?: boolean; // 描述：节点排序、默认值：false
  configList?: ITimeLineItem[]; // 描述：选项配置、默认值：-
  className?: string;
}

export interface ITimeLineItem {
  label?: ReactNode; // 描述: 设置标签、默认值: -
  children: ReactNode; // 描述: 设置内容、默认值: -
  color?: string; // 描述: 指定圆圈颜色 blue、red、green、gray，或自定义的色值、默认值: blue
  dot?: ReactNode; // 描述: 自定义时间轴点、默认值: -
  position?: "left" | "right"; // 描述: 自定义节点位置、默认值: -
}
