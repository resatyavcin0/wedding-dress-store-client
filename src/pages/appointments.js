import React from "react";
import MainCore from "../core/Main";
import { Calendar } from "antd";

const AppointmentsPage = () => {
  return (
    <MainCore
      title={"Randevular"}
      subTitle={
        "Bu sayfada geçmişteki tüm randevular gözükmektedir. İçlerinde aramalar yapabilir ve onları yönetebilirsiniz."
      }
    >
      <Calendar />
    </MainCore>
  );
};

export default AppointmentsPage;
