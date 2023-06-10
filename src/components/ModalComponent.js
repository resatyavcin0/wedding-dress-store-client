import React from "react";

import { Button, Modal } from "antd";

const ModalComponent = (props) => {
  const {
    title,
    openState,
    closeModalHandler,
    children,
    okButtonLabel,
    cancelButtonLabel,
    styleProps,
    width,
  } = props;
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
      {...props}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
