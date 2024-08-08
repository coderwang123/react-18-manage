import React, { memo, useState } from "react";
import { Modal } from "antd";
import { IAModel } from "./type";

const AModal: React.FC<IAModel> = (props) => {
  const modalStyles = {
    header: {
      borderLeft: `4px solid  red`,
      borderRadius: 0,
      paddingInlineStart: 4
    },
    body: {
      // boxShadow: "inset 0 0 5px #999",
      // borderRadius: 5
    },
    mask: {
      backdropFilter: "blur(10px)"
    },
    footer: {
      // borderTop: "1px solid #333"
    },
    content: {
      boxShadow: "0 0 30px #999",

      borderRadius: 8
    }
  };

  return (
    <>
      <Modal
        title={props?.title ?? "标题"}
        width={props.width ?? "50%"}
        open={true}
        maskClosable={false}
        centered={true}
        keyboard={props?.keyboard ?? false}
        okText={props?.okText ?? "确认"}
        onOk={() => props?.handleModalSure?.()}
        cancelText={props?.okText ?? "取消"}
        getContainer={props?.getContainer ?? undefined}
        onCancel={() => props?.handleModalCancel?.()}
        styles={modalStyles}
      >
        {props.children}
      </Modal>
    </>
  );
};

export default memo(AModal);
