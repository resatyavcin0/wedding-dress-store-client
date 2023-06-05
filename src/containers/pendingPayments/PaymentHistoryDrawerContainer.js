import React, { useState } from "react";

//components
import DrawerComponent from "../../components/DrawerComponent";

//utils
import { Timeline } from "antd";

const PaymentHistoryDrawerContainer = ({ payments }) => {
  const [showPaymentHistoryDrawerState, setShowPaymentHistoryDrawerState] =
    useState(false);

  return (
    <DrawerComponent
      showDrawerState={showPaymentHistoryDrawerState}
      closeDrawerHandler={() => setShowPaymentHistoryDrawerState(false)}
      title={"Mehmet Aksu"}
      placement={"right"}
    >
      <Timeline
        items={payments.map((item, key) => ({
          color: item.type === "KAPORA" ? "green" : "blue",
          label: item.date,
          children: `${item.price}₺`,
        }))}
      />
    </DrawerComponent>
  );
};

export default PaymentHistoryDrawerContainer;
