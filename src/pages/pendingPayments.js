import React from "react";
import MainCore from "../core/Main";
import { Card, Tag, Timeline } from "antd";

const ALL_CREDITS = [
  {
    name: "Mehmet Aksu",
    isFinish: false,
    payments: [
      {
        price: 2000,
        date: "11/01/2023",
        kim: "Ahmet Kaya",
        type: "KAPORA",
      },
      {
        price: 2000,
        date: "11/02/2023",
        kim: "Ahmet Kaya",
        type: "TAKSIT",
      },
    ],
  },
  {
    name: "Hayati Menge",
    isFinish: true,
    payments: [
      {
        price: 2000,
        date: "11/01/2023",
        kim: "Sakiye Merka",
        type: "KAPORA",
      },
      {
        price: 2000,
        date: "11/02/2023",
        kim: "Sakiye Merka",
        type: "TAKSIT",
      },
      {
        price: 2000,
        date: "11/03/2023",
        kim: "Sakiye Merka",
        type: "TAKSIT",
      },
    ],
  },
];

const PendingPaymentsPage = () => {
  return (
    <MainCore
      title={"Bekleyen Taksitler"}
      subTitle={
        "Bu sayfada tüm bekleyen taksit kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <div style={{ display: "flex", gap: 24 }}>
        {ALL_CREDITS.map((item, key) => (
          <Card
            title={item.name}
            bordered={false}
            style={{ width: 400 }}
            extra={
              item.isFinish ? (
                <Tag color="green">Ödeme Tamamlandı</Tag>
              ) : (
                <a href="#">Ödeme Al</a>
              )
            }
          >
            <Timeline
              items={item.payments.map((item, key) => ({
                color: item.type === "KAPORA" ? "green" : "blue",
                label: item.date,
                children: `${item.price}₺`,
              }))}
            />
          </Card>
        ))}
      </div>
    </MainCore>
  );
};

export default PendingPaymentsPage;
