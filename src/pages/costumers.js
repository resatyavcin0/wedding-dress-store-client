import React from "react";
import MainCore from "../core/Main";
import TableComponent from "../components/TableComponent";
import DrawerComponent from "../components/DrawerComponent";

const CostumersPage = () => {
  return (
    <MainCore
      title={"Müşteriler"}
      subTitle={
        "Bu sayfada tüm müşteri kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <TableComponent />
      <DrawerComponent />
    </MainCore>
  );
};

export default CostumersPage;
