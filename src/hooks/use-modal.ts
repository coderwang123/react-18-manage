import { Modal } from "antd";
import { generateIcon } from "@/utils/comm";
import type { IAModel } from "@/components/ant-comm-cpns/a-modal/type";
import React, { Context, JSXElementConstructor, ReactElement } from "react";

export function useModal(): [
  ReactElement<any, string | JSXElementConstructor<any>>,
  (props?: IAModel) => void
] {
  const [modal, contextModal] = Modal.useModal();

  function handleModal(props?: IAModel) {
    modal[props?.type ?? "confirm"]({
      title: props?.title ?? "标题",
      width: props?.width ?? 520,
      content: props?.content ?? "内容",
      icon: generateIcon(props?.icon ?? "ExclamationCircleFilled"),
      closable: props?.closable ?? false,
      closeIcon: props?.closeIcon ?? undefined,

      okText: props?.okText ?? "确认",
      onOk: (close) => {
        props?.handleModalSure?.();
        close();
      },

      cancelText: props?.cancelText ?? "取消",
      onCancel: (close) => {
        props?.handleModalCancel?.();
        close();
      },
      centered: props?.centered ?? true
    });
  }
  return [contextModal, handleModal];
}
