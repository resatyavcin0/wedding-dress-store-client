import React, { useState } from "react";

import { Button, Card, Tag, Timeline, Typography } from "antd";
import DrawerComponent from "../DrawerComponent";
import { PrinterOutlined, WalletOutlined } from "@ant-design/icons";

const AllCreditsListComponent = ({ allCredits }) => {
  const [showPaymentDrawer, setShowPaymentDrawer] = useState(false);
  const [payments, setPayments] = useState([]);

  const showPaymentDrawerHandler = (person) => {
    setShowPaymentDrawer(true);
    setPayments(person);
  };
  const closePaymentDrawerHandler = () => {
    setShowPaymentDrawer(false);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 370px)",
        justifyContent: "center",
        marginTop: 40,
        gap: 20,
      }}
    >
      {allCredits?.map((item, key) => (
        <Card
          title={item.name}
          bordered={false}
          style={{
            width: "100%",
          }}
          extra={
            item.isFinish ? (
              <Tag color="green"> TAMAMLANDI</Tag>
            ) : (
              <Tag color="red"> TAMAMLANMADI</Tag>
            )
          }
        >
          {!item.isFinish ? (
            <Button
              type="primary"
              icon={<WalletOutlined />}
              onClick={() => showPaymentDrawerHandler(item?.payments)}
            >
              Ödeme Al
            </Button>
          ) : (
            <>
              <Button icon={<PrinterOutlined />}>Ödeme Geçmişini Yazdır</Button>
            </>
          )}
        </Card>
      ))}

      <DrawerComponent
        closeDrawerHandler={closePaymentDrawerHandler}
        showDrawerState={showPaymentDrawer}
        title={"Mehmet Aksu"}
      >
        <Timeline
          items={payments.map((item, key) => ({
            color: item.type === "KAPORA" ? "green" : "blue",
            label: item.date,
            children: `${item.price}₺`,
          }))}
        />
      </DrawerComponent>
    </div>
  );
};

export default AllCreditsListComponent;
