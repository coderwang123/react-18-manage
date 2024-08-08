import { message } from "antd";
import { CSSProperties, ReactNode } from "react";
import { generateIcon } from "@/utils/comm";

interface IMessage {
  // type?: "success" | "error" | "info" | "warning" | "loading";
  // content?: ReactNode; // 提示内容、 默认值: -
  icon?: string | ReactNode; // 自定义图标、 默认值: -
  duration?: number; // 自动关闭的延时，单位秒。设为 0 时不自动关闭、 默认值: 3
  handleClick?: () => void; // 点击 message 时触发的回调函数、 默认值: -
  handleCancel?: () => void; // 	关闭时触发的回调函数、 默认值: -
  key?: string | number; // 当前提示的唯一标志、 默认值: -
  className?: string; // 自定义 CSS class、 默认值: -
  style?: CSSProperties; // 自定义内联样式、 默认值: -
}

function msgConfig(props?: IMessage) {
  return {
    icon: props?.icon && typeof props?.icon == "string" ? generateIcon(props?.icon) : props?.icon,
    duration: props?.duration ?? 3,
    onClick: () => {
      props?.handleClick?.();
    },
    onClose: () => {
      props?.handleCancel?.();
    },
    key: props?.key ?? "",
    className: props?.className ?? "lll",
    style: props?.style ?? {}
  };
}

export class Msg {
  static success(content: string = "操作成功", props?: IMessage) {
    Msg.destroy();
    message?.["success"]({
      content: content ?? "操作成功",
      ...msgConfig(props)
    });
  }

  static error(content: string = "操作成功", props?: IMessage) {
    Msg.destroy();
    message?.["error"]({
      content: content ?? "已取消当前操作",
      ...msgConfig(props)
    });
  }

  static loading(content: string = "操作成功", props?: IMessage) {
    Msg.destroy();
    message?.["error"]({
      content: content ?? "已取消当前操作",
      ...msgConfig(props)
    });
  }
  static destroy() {
    message.destroy();
  }
}
