import React from "react";
import MainCore from "../core/Main";
import TableComponent from "../components/TableComponent";

const EmployeesPage = () => {
  return (
    <MainCore
      title={"Çalışanlar"}
      subTitle={
        "Bu sayfada tüm çalışan kayıtlarına ulaşabilir ve onları yönetebilirsiniz"
      }
    >
      <TableComponent />
    </MainCore>
  );
};

export default EmployeesPage;
