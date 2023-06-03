import React from "react";
import MainCore from "../core/Main";
import TableComponent from "../components/TableComponent";

const AppointmentsPage = () => {
  return (
    <MainCore
      title={"Randevular"}
      subTitle={
        "Bu sayfada geçmişteki tüm randevular gözükmektedir. İçlerinde aramalar yapabilir ve onları yönetebilirsiniz."
      }
    >
      <TableComponent />
    </MainCore>
  );
};

export default AppointmentsPage;
