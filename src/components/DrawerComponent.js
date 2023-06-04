import { Drawer } from "antd";
import React from "react";

const DrawerComponent = ({
  closeDrawerHandler,
  showDrawerState,
  title,
  placement,
  children,
}) => {
  return (
    <>
      <Drawer
        title={title}
        placement={placement}
        onClose={closeDrawerHandler}
        open={showDrawerState}
      >
        {children}
      </Drawer>
    </>
  );
};

export default DrawerComponent;
