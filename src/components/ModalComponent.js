import React from "react";

import { Modal } from "antd";

const ModalComponent = ({
  title,
  openState,
  closeModalHandler,
  children,
  okButtonLabel,
  cancelButtonLabel,
  styleProps,
  width,
}) => {
  return (
    <Modal
      title={title}
      style={{ top: 20, ...styleProps }}
      open={openState}
      onOk={closeModalHandler}
      onCancel={closeModalHandler}
      okText={okButtonLabel}
      cancelText={cancelButtonLabel}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
