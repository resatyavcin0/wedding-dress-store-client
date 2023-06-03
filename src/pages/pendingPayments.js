import React from "react";
import MainCore from "../core/Main";

const PendingPaymentsPage = () => {
  return (
    <MainCore
      title={"Bekleyen Taksitlerim"}
      subTitle={
        "Bu sayfada tüm bekleyen taksit kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    ></MainCore>
  );
};

export default PendingPaymentsPage;
