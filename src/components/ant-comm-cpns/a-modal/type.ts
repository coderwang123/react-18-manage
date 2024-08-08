import type { CSSProperties, FC, ReactNode } from "react";
import type { IAButton } from "@/components/ant-comm-cpns";

export interface IAModel {
  type?: "confirm" | "success" | "warning" | "info" | "error";
  title?: ReactNode; // 标题 、 默认值: -
  width?: string | number; // 宽度 、 默认值: 416
  content?: ReactNode; // 描述: 内容 、 默认值: -
  children?: ReactNode;
  closable?: boolean; // 描述: 是否显示右上角的关闭按钮 、 默认值: false
  closeIcon?: ReactNode; // 描述: 自定义关闭图标 、 默认值: undefined
  icon?: string; // 描述: 自定义图标 、 默认值: <ExclamationCircleFilled />

  handleModalSure?: (close?: any) => void; // 点击确定回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 、 默认值: -
  okText?: string; // 描述: 确认按钮文字 、 默认值: 确定
  okButtonProps?: IAButton; // 描述: ok 按钮 props 、 默认值: -
  okType?: Pick<IAButton, "type">; // 描述: 确认按钮类型 、 默认值: primary

  handleModalCancel?: (close?: any) => void; // 取消回调，参数为关闭函数，返回 promise 时 resolve 后自动关闭 、 默认值: -
  cancelText?: string; // 描述: 设置 Modal.confirm 取消按钮文字 、 默认值: '取消'
  cancelButtonProps?: IAButton; // 描述: cancel 按钮 props 、 默认值: -

  afterClose?: () => void; // 描述: Modal 完全关闭后的回调 、 默认值: -

  autoFocusButton?: null | "ok" | "cancel"; // 描述: 指定自动获得焦点的按钮 、 默认值: ok
  mask?: boolean; // 描述: 是否展示遮罩 、 默认值: true
  maskClosable?: boolean; // 描述: 点击蒙层是否允许关闭 、 默认值: false
  keyboard?: boolean; // 描述: 是否支持键盘 esc 关闭 、 默认值: true
  centered?: boolean; // 描述: 垂直居中展示 Modal 、 默认值: false

  className?: string; // 描述: 容器类名 、 默认值: -
  wrapClassName?: string; // 对话框外层容器的类名 、 默认值: -
  footer?: (params: { originNode: ReactNode; extra: { OkBtn: FC; CancelBtn: FC } }) => ReactNode; // 描述: 底部内容，当不需要默认底部按钮时，可以设为 footer: null 、 默认值: -
  getContainer?: HTMLElement | false | string; // 描述: 指定 Modal 挂载的 HTML 节点，false 为挂载在当前 dom 、 默认值: document.body
  style?: CSSProperties; // 描述: 可用于设置浮层的样式，调整浮层位置等 、 默认值: -
  zIndex?: number; // 设置 Modal 的 z-index 、 默认值: 	1000
}
