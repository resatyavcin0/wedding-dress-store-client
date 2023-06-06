import React, { useState } from "react";
import MainCore from "../core/Main";

//components
import AllCredistsListComponent from "../components/pendingPayments/AllCreditsListComponent";

//containers
import PaymentHistoryDrawerContainer from "../containers/pendingPayments/PaymentHistoryDrawerContainer";
import GetPaidModalContainer from "../containers/pendingPayments/GetPaidModalContainer";
import InvoicePaidModalContainer from "../containers/pendingPayments/InvoicePaidModalContainer";

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
  const [showGetPaidModal, setShowGetPaidModal] = useState(false);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  const openGetPaymentModalHandler = () => {
    setShowGetPaidModal(true);
  };

  const openInvoiceModalHandler = () => {
    setShowInvoiceModal(true);
  };

  return (
    <MainCore
      title={"Bekleyen Taksitler"}
      subTitle={
        "Bu sayfada tüm bekleyen taksit kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <AllCredistsListComponent
        openGetPaymentModalHandler={openGetPaymentModalHandler}
        openInvoiceModalHandler={openInvoiceModalHandler}
        allCredits={ALL_CREDITS}
      />
      {/* <PaymentHistoryDrawerContainer /> */}
      <GetPaidModalContainer
        showGetPaidModal={showGetPaidModal}
        setShowGetPaidModal={setShowGetPaidModal}
      />
      <InvoicePaidModalContainer
        showInvoiceModal={showInvoiceModal}
        setShowInvoiceModal={setShowInvoiceModal}
      />
    </MainCore>
  );
};

export default PendingPaymentsPage;
