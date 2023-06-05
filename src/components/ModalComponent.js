import React from "react";

import { Modal } from "antd";

const ModalComponent = ({
  title,
  openState,
  setOpenState,
  children,
  okButtonLabel,
  cancelButtonLabel,
}) => {
  return (
    <Modal
      title={title}
      style={{ top: 20 }}
      open={openState}
      onOk={() => setOpenState(false)}
      onCancel={() => setOpenState(false)}
      okText={okButtonLabel}
      cancelText={cancelButtonLabel}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
