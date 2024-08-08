import React, { CSSProperties } from "react";

export interface IAButton {
  type?: "primary" | "dashed" | "link" | "text" | "default"; // 描述：设置按钮类型 、默认：default

  name?: string; // 描述：名称 、默认：按钮

  icon?: string; // 描述：设置按钮的图标组件 、默认：	-

  iconPosition?: "start" | "end"; // 描述：设置按钮图标组件的位置 、默认：start

  autoInsertSpace?: boolean; // 描述：我们默认提供两个汉字之间的空格，可以设置 autoInsertSpace 为 false 关闭、默认：	true

  block?: boolean; // 描述：将按钮宽度调整为其父宽度的选项 、默认：false

  danger?: boolean; // 描述：设置危险按钮 、默认：false

  disabled?: boolean; // 描述：设置按钮失效状态 、默认：false

  ghost?: boolean; // 描述： 幽灵属性，使按钮背景透明 、默认：false

  href?: string; // 描述：点击跳转的地址，指定此属性 button 的行为和 a 链接一致、默认：	-

  htmlType?: "button" | "submit" | "reset" | undefined; // 描述：设置 button 原生的 type 值，可选值请参考 HTML 标准 、默认： button

  loading?: boolean | { delay: number }; // 描述：设置按钮载入状态 、默认：false

  shape?: "default" | "circle" | "round"; // 描述：设置按钮形状 、默认：default

  size?: "large" | "middle" | "small"; // 描述：	设置按钮大小 、默认：middle

  target?: string; // 描述：相当于 a 链接的 target 属性，href 存在时生效 、默认：	-

  style?: CSSProperties;
}
