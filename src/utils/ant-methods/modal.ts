import { IAModel } from "@/components/ant-comm-cpns/a-modal/type";
import { generateIcon } from "@/utils/comm";
import { Modal } from "antd";

export function modal(props?: IAModel) {
  Modal[props?.type ?? "confirm"]({
    title: props?.title ?? "提示",
    width: props?.width ?? 520,
    content: props?.content ?? "内容",
    icon: generateIcon(props?.icon ?? "ExclamationCircleFilled"),
    closable: props?.closable ?? false,
    closeIcon: props?.closeIcon ?? undefined,

    okText: props?.okText ?? "确认",
    onOk: (close) => {
      props?.handleModalSure?.();
      close?.();
    },

    cancelText: props?.cancelText ?? "取消",
    onCancel: (close) => {
      props?.handleModalCancel?.();
      close?.();
    },
    centered: props?.centered ?? true
  });
}
