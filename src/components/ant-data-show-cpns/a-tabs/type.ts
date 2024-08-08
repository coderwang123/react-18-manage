import React, { CSSProperties, ReactNode } from "react";
import { RenderTabBar } from "rc-tabs/lib/interface";

export interface IATabs {
  activeKey?: string; // 描述： 当前激活 tab 面板的 key、 默认值：-

  addIcon?: ReactNode; // 描述： 自定义添加按钮，设置 type="editable-card" 时有效、 默认值：	<PlusOutlined />

  animated?: boolean | { inkBar: boolean; tabPane: boolean }; // 描述： 是否使用动画切换 Tabs 、 默认值：{ inkBar: true, tabPane: false }

  centered?: boolean; // 描述： 标签居中展示 、 默认值：false

  defaultActiveKey?: string; // 描述： 	初始化选中面板的 key，如果没有设置 activeKey 、 默认值： 第一个面板的 key

  hideAdd?: boolean; // 描述： 是否隐藏加号图标，在 type="editable-card" 时有效 、 默认值：false

  indicator?: {
    size?: number | ((origin: number) => number);
    align?: "start" | "center" | "end";
  }; // 描述： 自定义指示条的长度和对齐方式 、 默认值：-

  items?: TabItemType[]; // 描述： 配置选项卡内容 、 默认值：	[]

  // more: 	MoreProps; // 描述： 	自定义折叠 、 默认值：{ icon: <EllipsisOutlined /> , trigger: 'hover' }

  removeIcon?: ReactNode; // 描述： 	自定义删除按钮，设置 type="editable-card" 时有效 、 默认值：<CloseOutlined />

  popupClassName?: string; // 描述： 更多菜单的 className 、 默认值：-

  renderTabBar?: RenderTabBar; // 描述： 替换 TabBar，用于二次封装标签头 、 默认值：-

  size?: "large" | "middle" | "small"; // 描述： 	大小，提供 large middle 和 small 三种大小 、 默认值：middle

  tabBarExtraContent?: ReactNode | { left?: ReactNode; right?: ReactNode }; // 描述： tab bar 上额外的元素 、 默认值：-

  tabBarGutter?: number; // 描述： tabs 之间的间隙 、 默认值：-

  tabBarStyle?: CSSProperties; // 描述： tab bar 的样式对象 、 默认值：-

  tabPosition?: "top" | "right" | "bottom" | "left"; // 描述： 页签位置，可选值有 top right bottom left 、 默认值：	top

  destroyInactiveTabPane?: boolean; // 描述： 被隐藏时是否销毁 DOM 结构 、 默认值：	false

  type?: "line" | "card" | "editable-card"; // 描述： 页签的基本样式，可选 line、card editable-card 类型 、 默认值：line

  handleTabChange?: (activeKey: string) => void; // 描述： 切换面板的回调 、 默认值：-

  onEdit?: (e: React.MouseEvent | React.KeyboardEvent | string, action: "add" | "remove") => void; // 描述： 新增和删除页签的回调，在 type="editable-card" 时有效 、 默认值：-

  onTabClick?: (activeKey: string, e: React.KeyboardEvent | React.MouseEvent) => void; // 描述： tab 被点击的回调 、 默认值：-

  onTabScroll?: (params?: { direction: "left" | "right" | "top" | "bottom" }) => void; // 描述： tab 滚动时触发 、 默认值：-
}
export type TabItemType = {
  animated?: boolean;
  id?: string;
  tabKey?: string;
  active?: boolean;
  className?: string;
  prefixCls?: string;
  style?: React.CSSProperties;

  closeIcon?: ReactNode; // 描述：自定义关闭图标，在 type="editable-card" 时有效。5.7.0：设置为 null 或 false 时隐藏关闭按钮、 默认值：-

  destroyInactiveTabPane?: boolean; // 描述：被隐藏时是否销毁 DOM 结构、 默认值：	false

  disabled?: boolean; // 描述：	禁用某一项、 默认值：	false

  forceRender?: boolean; // 描述：被隐藏时是否渲染 DOM 结构、 默认值：	false

  key: string; // 描述：对应 activeKey、 默认值：-

  label: string | ReactNode; // 描述：	选项卡头显示文字、 默认值：-

  icon?: ReactNode; // 描述：选项卡头显示图标、 默认值：-

  children?: string | ReactNode; // 描述：选项卡头显示内容、 默认值：-

  closable?: boolean; // 描述：	是否显示选项卡的关闭按钮，在 type="editable-card" 时有效、 默认值：	true
};
