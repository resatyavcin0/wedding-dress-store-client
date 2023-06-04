import React, { useState } from "react";
import MainCore from "../core/Main";

//components
import FilterComponent from "../components/pendingPayments/FilterComponent";
import AllCredistsListComponent from "../components/pendingPayments/AllCreditsListComponent";

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
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <MainCore
      title={"Bekleyen Taksitler"}
      subTitle={
        "Bu sayfada tüm bekleyen taksit kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <FilterComponent onChange={onChange} />

      <AllCredistsListComponent allCredits={ALL_CREDITS} />
    </MainCore>
  );
};

export default PendingPaymentsPage;
