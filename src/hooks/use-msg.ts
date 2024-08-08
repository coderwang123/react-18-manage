import type { CSSProperties, JSXElementConstructor, ReactElement, ReactNode } from "react";
import { message } from "antd";
import { generateIcon } from "@/utils/comm";

interface IMessage {
  type?: "success" | "error" | "info" | "warning" | "loading";
  content?: ReactNode; // 提示内容、 默认值: -
  icon?: string | ReactNode; // 自定义图标、 默认值: -
  duration?: number; // 自动关闭的延时，单位秒。设为 0 时不自动关闭、 默认值: 3
  handleMsgSure?: () => void; // 点击 message 时触发的回调函数、 默认值: -
  handleMsgCancel?: () => void; // 	关闭时触发的回调函数、 默认值: -
  key?: string | number; // 当前提示的唯一标志、 默认值: -
  className?: string; // 自定义 CSS class、 默认值: -
  style?: CSSProperties; // 自定义内联样式、 默认值: -
}

export function useMsg(): [
  ReactElement<any, string | JSXElementConstructor<any>>,
  (props?: IMessage) => void
] {
  const [messageApi, contextMsg] = message.useMessage();

  function handleMsg(props?: IMessage) {
    messageApi?.[props?.type ?? "success"]({
      content: props?.content ?? "This is a success message",
      icon: props?.icon && typeof props?.icon == "string" ? generateIcon(props.icon) : props?.icon,
      duration: props?.duration ?? 3,
      onClick: () => {
        props?.handleMsgSure?.();
      },
      onClose: () => {
        props?.handleMsgCancel?.();
      },
      key: props?.key ?? "",
      className: props?.className ?? "",
      style: props?.style ?? {}
    });
  }

  return [contextMsg, handleMsg];
}
